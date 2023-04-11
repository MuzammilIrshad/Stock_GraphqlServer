import { clientQuery } from "../database-pg.js";

const resolvers = {
    Query: {

      // ==============> QUERIES <================
     
      earning: async(_, args) =>{
        const data = await clientQuery(`select * from us.earnings WHERE "Code" = 'AA' limit 2`)
         return [...data.rows]
       },
       incomeStatement: async(_, args) =>{
          const {quarter, limit, code, year} = args;
          const date = ["",`${year}-01-31`, `${year}-04-30`, `${year}-07-31`, `${year}-10-31`];
          return (await clientQuery(`select "Code", "currency_symbol", "quarterly", "yearly", quarterly->'${date[quarter]}' AS quarter from us.income_statement where quarterly->'${date[quarter]}'->>'date' = '${date[quarter]}'${code ? ` AND "Code" ='${args.code}'` : ""}${limit ? ` limit ${args.limit}` : ""}`)).rows;
       },
       upcomingEarning: async(_, args) =>{
        const data = await clientQuery(`select * from us.upcoming_earning where "code" = 'AA'`)
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