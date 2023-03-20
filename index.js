import { ApolloServer } from 'apollo-server';
import typeDefs from './src/typeDefs.js';
import  resolvers from './src/resolvers.js';
import { client } from './database-pg.js';

const port = process.env.PORT || 9090;

const server = new ApolloServer({ resolvers, typeDefs });
client.connect();
server.listen({ port }, () => console.log(`Server runs at: http://localhost:${port}`));