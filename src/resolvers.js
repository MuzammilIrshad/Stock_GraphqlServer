import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


const resolvers = {
    Query: {
      // ==============> QUERIES <================
    },
    // ==============> MUTATIONS <================
  
    Mutation: {
  
    },
  
    // ==============> SUBSCRIPTIONS <================
  
    Subscription: {
   
    },
  };
  
  export default resolvers;