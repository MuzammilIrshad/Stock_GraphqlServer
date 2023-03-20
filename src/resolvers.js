import { client } from "../database-pg.js";

const resolvers = {
    Query: {

      // ==============> QUERIES <================
      fetchfinancialOverview: async(_, args) =>{
       const data = await client.query(`select * from staging.overview`)
        console.log(data.rows)
        return data.rows
      }
    },
    // ==============> MUTATIONS <================
  
    // Mutation: {
  
    // },
  
    // // ==============> SUBSCRIPTIONS <================
  
    // Subscription: {
   
    // },
  };
  
  export default resolvers;