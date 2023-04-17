import { ApolloServer } from 'apollo-server';
import typeDefs from './src/typeDefs.js';
import resolvers from './src/resolvers.js';

const port = process.env.PORT || 3001;

const server = new ApolloServer({
    resolvers, typeDefs, cors: {
        origin: ['https://joulukaunistused.ee/', 'https://jade-moonbeam-0d3391.netlify.app/'],
        credentials: true
    }
});
server.listen({ port }, () => console.log(`Server runs at: http://localhost:${port}/graphql`));
