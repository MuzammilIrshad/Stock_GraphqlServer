import { clientQuery } from "../database-pg.js";

const resolvers = {
    Query: {

      // ==============> QUERIES <================
      fetchfinancialOverview: async(_, args) =>{
        const {limit, code} = args;
        return (await clientQuery(`select * from staging.overview${code ? ` where code ='${args.code}'` : ""}${limit ? ` limit ${args.limit}` : ""}`)).rows;
      },
      categories: async(_, args) =>{
        const data = await clientQuery(`select * from staging.category`)
         return data.rows
       },
       interval_1d: async(_, args) =>{
        const data = await clientQuery(`select * from staging.interval_1d where datetime > '2023-02-24' AND code = 'WAVE' limit 10`)

         return data.rows
       },
       interval_1m: async(_, args) =>{
        const data = await clientQuery(`select * from staging.interval_1m limit 10`)
         return data.rows
       },
       interval_5m: async(_, args) =>{
        const data = await clientQuery(`select * from staging.interval_5m limit 10`)
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