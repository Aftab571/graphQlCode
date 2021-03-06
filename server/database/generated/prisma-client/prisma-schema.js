module.exports = {
        typeDefs: /* GraphQL */ `type AggregateInstitutionClass {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type InstitutionClass {
  id: ID!
  name: String!
}

type InstitutionClassConnection {
  pageInfo: PageInfo!
  edges: [InstitutionClassEdge]!
  aggregate: AggregateInstitutionClass!
}

input InstitutionClassCreateInput {
  name: String!
}

type InstitutionClassEdge {
  node: InstitutionClass!
  cursor: String!
}

enum InstitutionClassOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type InstitutionClassPreviousValues {
  id: ID!
  name: String!
}

type InstitutionClassSubscriptionPayload {
  mutation: MutationType!
  node: InstitutionClass
  updatedFields: [String!]
  previousValues: InstitutionClassPreviousValues
}

input InstitutionClassSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: InstitutionClassWhereInput
  AND: [InstitutionClassSubscriptionWhereInput!]
  OR: [InstitutionClassSubscriptionWhereInput!]
  NOT: [InstitutionClassSubscriptionWhereInput!]
}

input InstitutionClassUpdateInput {
  name: String
}

input InstitutionClassUpdateManyMutationInput {
  name: String
}

input InstitutionClassWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [InstitutionClassWhereInput!]
  OR: [InstitutionClassWhereInput!]
  NOT: [InstitutionClassWhereInput!]
}

input InstitutionClassWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createInstitutionClass(data: InstitutionClassCreateInput!): InstitutionClass!
  updateInstitutionClass(data: InstitutionClassUpdateInput!, where: InstitutionClassWhereUniqueInput!): InstitutionClass
  updateManyInstitutionClasses(data: InstitutionClassUpdateManyMutationInput!, where: InstitutionClassWhereInput): BatchPayload!
  upsertInstitutionClass(where: InstitutionClassWhereUniqueInput!, create: InstitutionClassCreateInput!, update: InstitutionClassUpdateInput!): InstitutionClass!
  deleteInstitutionClass(where: InstitutionClassWhereUniqueInput!): InstitutionClass
  deleteManyInstitutionClasses(where: InstitutionClassWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  institutionClass(where: InstitutionClassWhereUniqueInput!): InstitutionClass
  institutionClasses(where: InstitutionClassWhereInput, orderBy: InstitutionClassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [InstitutionClass]!
  institutionClassesConnection(where: InstitutionClassWhereInput, orderBy: InstitutionClassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InstitutionClassConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Role {
  ADMIN
  USER
  UNKNOWN
}

type Subscription {
  institutionClass(where: InstitutionClassSubscriptionWhereInput): InstitutionClassSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  role: Role!
  username: String!
  password: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  role: Role!
  username: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  role_ASC
  role_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  role: Role!
  username: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  role: Role
  username: String
  password: String
}

input UserUpdateManyMutationInput {
  name: String
  role: Role
  username: String
  password: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
}
`
      }
    