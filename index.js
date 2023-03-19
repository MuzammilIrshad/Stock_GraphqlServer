import { ApolloServer } from 'apollo-server';
import  resolvers from './src/resolvers.js';

const port = process.env.PORT || 9090;

const server = new ApolloServer({ resolvers });

server.listen({ port }, () => console.log(`Server runs at: http://localhost:${port}`));