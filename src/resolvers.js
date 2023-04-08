import { clientQuery } from "../database-pg.js";

const resolvers = {
    Query: {

      // ==============> QUERIES <================
     
      earning: async(_, args) =>{
        const data = await clientQuery(`select * from us.earnings limit 2`)
         console.log(data);
         return [...data.rows]
       },
       incomeStatement: async(_, args) =>{
        const data = await clientQuery(`select * from us.income_statement`)
         console.log(data);
         return [...data.rows]
       },
       upcomingEarning: async(_, args) =>{
        const data = await clientQuery(`select * from us.upcoming_earning`)
         console.log(data);
         return [...data.rows]
       },
      //  interval_1d: async(_, args) =>{
      //   const data = await clientQuery(`select * from staging.interval_1d where datetime > '2023-02-24' AND code = 'WAVE' limit 10`)

      //    return data.rows
      //  },
      //  interval_1m: async(_, args) =>{
      //   const data = await clientQuery(`select * from staging.interval_1m limit 10`)
      //    return data.rows
      //  },
      //  interval_5m: async(_, args) =>{
      //   const data = await clientQuery(`select * from staging.interval_5m limit 10`)
      //    return data.rows
      //  },
    },
    // ==============> MUTATIONS <================

    // Mutation: {

    // },

    // // ==============> SUBSCRIPTIONS <================

    // Subscription: {

    // },
  };
  export default resolvers;