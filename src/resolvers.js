import { clientQuery } from "../database-pg.js";

const resolvers = {
    Query: {

      // ==============> QUERIES <================
      fetchfinancialOverview: async(_, args) =>{
       const data = await clientQuery(`select * from staging.overview`)
        return data.rows
      },
      categories: async(_, args) =>{
        const SECTOR_ID = args.sector_id ? args.sector_id : ''
        const data = await clientQuery(`select * from staging.category`)
         return data.rows
       },
       interval_1d: async(_, args) =>{
        const data = await clientQuery(`select * from staging.interval_1d`)
         return data.rows
       },
       interval_1m: async(_, args) =>{
        const data = await clientQuery(`select * from staging.interval_1m`)
         return data.rows
       },
       interval_5m: async(_, args) =>{
        const data = await clientQuery(`select * from staging.interval_5m`)
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