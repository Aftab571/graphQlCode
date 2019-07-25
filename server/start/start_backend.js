const {
    ApolloServer,
    gql
} = require("apollo-server-express");
const express = require("express");
const {Prisma} = require("../database/generated/prisma-client");
const {resolve} = require("path");
const {importSchema} = require("graphql-import")
const resolvers = require("./resolvers")
const schemaDirectives = require("./directives");
const cookieParser = require("cookie-parser")
const csurf = require("csurf")
const util = require("util")
class StartServer {
    constructor() { }
    async startServer() {
        const server = new ApolloServer({
            typeDefs: gql(importSchema(resolve(__dirname,"../components/auth/auth.graphql"))),
            resolvers,
            schemaDirectives:schemaDirectives,
            context: req => ({
                ...req,
                prisma: new Prisma({
                    endpoint: "http://159.65.151.169:4466/gql/dev",
                    debug: true,
                }),
            }),
            playground: true,
        });
    let cSurfProtection = csurf({cookie: true});

    const app = express();
    app.use(cookieParser());
    // app.use((req,res,next)=>
    // {
    //   console.log(req.headers)
    //   console.log(req.cookies)
    //   //next();
    // })
    app.use(cSurfProtection)
    app.get('/csurf',cSurfProtection,function (req,res) {
      let csrfToken = req.csrfToken();
      res.setHeader('Access-Control-Allow-Origin','*')
      res.cookie("csrf-token",csrfToken);
      res.send({csurf:csrfToken})
      console.log(req.cookies)
    })

    server.applyMiddleware({app});
    const port = 4000;
    app.listen({port}, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
    )
}
}
module.exports = StartServer;