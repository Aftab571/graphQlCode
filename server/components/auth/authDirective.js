/* eslint-disable node/no-unsupported-features/es-syntax */
const { getUserId } = require('./utils');
const { SchemaDirectiveVisitor, AuthenticationError } = require('apollo-server-express');
const ErrorCodes = require('./errors');

class AuthDirective extends SchemaDirectiveVisitor {
  visitObject(type) {
    this.ensureFieldsWrapped(type);
    type._requiredAuthRole = this.args.requires;
  }
  // Visitor methods for nested types like fields and arguments
  // also receive a details object that provides information about
  // the parent and grandparent types.
  visitFieldDefinition(field, details) {
    this.ensureFieldsWrapped(details.objectType);
    field._requiredAuthRole = this.args.requires;
  }

  ensureFieldsWrapped(objectType) {
    // Mark the GraphQLObjectType object to avoid re-wrapping:
    if (objectType._authFieldsWrapped) return;
    objectType._authFieldsWrapped = true;

    const fields = objectType.getFields();

    Object.keys(fields).forEach(fieldName => {
      const field = fields[fieldName];
      const { resolve = defaultFieldResolver } = field;
      field.resolve = async function(...args) {
        // Get the required Role from the field first, falling back
        // to the objectType if no Role is required by the field:
        const requiredRole = field._requiredAuthRole || objectType._requiredAuthRole;

        if (!requiredRole) {
          return resolve.apply(this, args);
        }

        const context = args[2];
        const userId = getUserId(context);
        if (!userId) {
          throw new AuthenticationError(ErrorCodes.AUTHENTICATION_ERROR);
        }
        const user = await context.prisma.user({ id: userId });
        if (user.role !== requiredRole) {
          throw new AuthenticationError(ErrorCodes.NOT_AUTHORIZED);
        }

        return resolve.apply(this, args);
      };
    });
  }
}

module.exports = { auth: AuthDirective }; //auth=> the name by which this is referenced in schema
