const {
    // ApolloServer,
    gql,
} = require('apollo-server');

const { ApolloServer, makeExecutableSchema } = require('apollo-server-express') // apollo服务
const voyagerMiddleware = require('graphql-voyager/middleware').express
const express = require('express')  // 服务
const logger = require('morgan')  // 控制台log

const gqlList = require('./schema'); // schema集合
const resolverList = require('./resolver'); // 处理函数

// schema
const typeDefs = gql `${gqlList}`;

// resolver
const resolvers = resolverList;

// voyager
const app = express()
app.use(logger('dev'))
app.use(
  '/voyager',
  voyagerMiddleware({
    endpointUrl: '/graphql',
    displayOptions: {
      skipRelay: false,
    },
  }),
)

// server
const server = new ApolloServer({
    typeDefs,
    resolvers
});
server.applyMiddleware({ app })

// 默认port:4000
app.listen(4040, 'localhost')