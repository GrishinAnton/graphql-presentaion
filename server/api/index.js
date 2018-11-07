const api = require("express")();
const graphqlMiddleware = require('express-graphql')

const schema = require('./schema')
const resolvers = require('./resolvers')

api.all(
  "/graphql",
  graphqlMiddleware({
    graphiql: true,
    schema,
    rootValue: resolvers
  })
);

module.exports = api
