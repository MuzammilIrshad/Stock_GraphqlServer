import { gql } from "apollo-server"
import { readFileSync } from "fs";
import path from "path";

const overviewTypes = readFileSync(path.join("src/typeDefs/overview.graphql"),{
  encoding: "utf-8",
});

const intervalsTypes = readFileSync(path.join("src/typeDefs/intervals.graphql"),{
  encoding: "utf-8",
});

const categoryTypes = readFileSync(path.join("src/typeDefs/category.graphql"),{
  encoding: "utf-8",
});

const typeDefs = gql`
  type Query{
    fetchfinancialOverview(code:String, limit: Int):[OverView]!
    categories(sector_id:String):[category]
    interval_1d:[intervals]
    interval_1m:[intervals]
    interval_5m:[intervals]
  }
  ${overviewTypes}
  ${intervalsTypes}
  ${categoryTypes}`;

export default typeDefs;
