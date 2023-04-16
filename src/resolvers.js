import { clientQuery } from "../database-pg.js";

const resolvers = {
    Query: {

      // ==============> QUERIES <================
     
      earning: async(_, args) =>{
        console.log(args)
        const {code, limit} = args
        const data = await clientQuery(`select * from us.earnings ${code ? `where "Code" = '${code}'` : ""}${limit > 0 ? ` limit ${args.limit}` : ""}`);
       console.log(data)
        return [...data.rows]
       },
       incomeStatement: async(_, args) =>{
          const {limit, code, quarterly_date, yearly_date} = args;
          console.log(`select "Code", "currency_symbol", "quarterly", "yearly",${quarterly_date ? `quarterly->'${quarterly_date}' AS quarter,` : ""} yearly->'${yearly_date}' AS year from us.income_statement ${quarterly_date ? ` where quarterly->'${quarterly_date}'->>'date' = '${quarterly_date}'` : "" } ${quarterly_date && yearly_date ? ` AND yearly->'${yearly_date}'->>'date' = '${yearly_date}'` : yearly_date ?` where yearly->'${yearly_date}'->>'date' = '${yearly_date}'`: "" } ${code && quarterly_date || code && yearly_date ? ` AND "Code" ='${code}'` : code ? `where "Code" ='${code}'` : ""}${limit ? ` limit ${limit}` : ""}`);
          return (await clientQuery(`select "Code", "currency_symbol", "quarterly", "yearly",${quarterly_date ? `quarterly->'${quarterly_date}' AS quarter,` :""} yearly->'${yearly_date}' AS year from us.income_statement ${quarterly_date ? ` where quarterly->'${quarterly_date}'->>'date' = '${quarterly_date}'` : "" } ${quarterly_date && yearly_date ? ` AND yearly->'${yearly_date}'->>'date' = '${yearly_date}'` : yearly_date ?` where yearly->'${yearly_date}'->>'date' = '${yearly_date}'`: "" } ${code && quarterly_date || code && yearly_date ? ` AND "Code" ='${code}'` : code ? `where "Code" ='${code}'` : ""}${limit ? ` limit ${limit}` : ""}`)).rows;
       },
       upcomingEarning: async(_, args) =>{
        const data = await clientQuery(`select * from us.upcoming_earning ${args.code ? `where code = ${args.code}`:""}limit 2`)
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