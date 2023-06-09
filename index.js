import { ApolloServer } from "apollo-server";
import typeDefs from "./src/typeDefs.js";
import resolvers from "./src/resolvers.js";

const port = process.env.PORT || 4000;

const server = new ApolloServer({
  resolvers,
  typeDefs,
  cors: {
    origin: 'https://joulukaunistused.ee/',
    credentials: true
  }
});
server.listen({ port }, () =>
  console.log(`Server runs at: http://localhost:${port}/graphql`)
);
