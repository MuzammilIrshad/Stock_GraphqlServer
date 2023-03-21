import { client } from "../database-pg.js";

const resolvers = {
    Query: {

      // ==============> QUERIES <================
      fetchfinancialOverview: async(_, args) =>{
       const data = await client.query(`select * from staging.overview`)
        console.log(data.rows)
        return data.rows
      },
      categories: async(_, args) =>{
        const SECTOR_ID = args.sector_id ? args.sector_id : ''
        console.log(SECTOR_ID)
        const data = await client.query(`select * from staging.category`)
         console.log(data.rows)
         return data.rows
       },
       interval_1d: async(_, args) =>{
        const data = await client.query(`select * from staging.interval_1d`)
         console.log(data.rows)
         return data.rows
       },
       interval_1m: async(_, args) =>{
        const data = await client.query(`select * from staging.interval_1m`)
         console.log(data.rows)
         return data.rows
       },
       interval_5m: async(_, args) =>{
        const data = await client.query(`select * from staging.interval_5m`)
         console.log(data.rows)
         return data.rows
       },
    },
    // ==============> MUTATIONS <================
  
    // Mutation: {
  
    // },
  
    // // ==============> SUBSCRIPTIONS <================
  
    // Subscription: {
   
    // },
  };
  
  export default resolvers;