import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';
import RocketAPI from './datasources/rocket';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    rocketAPI: new RocketAPI(),
  }),
});

const app = express();
server.applyMiddleware({ app });

const PORT = 4444;
app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`,
  ),
);
