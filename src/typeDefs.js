import { gql } from "apollo-server"
import { readFileSync } from "fs";
import path from "path";

const upcomingEarningsTypes = readFileSync(path.join("src/typeDefs/upcomingEarnings.graphql"),{
  encoding: "utf-8",
});

const earningsTypes = readFileSync(path.join("src/typeDefs/earnings.graphql"),{
  encoding: "utf-8",
});

const incomeStatementTypes = readFileSync(path.join("src/typeDefs/incomeStatement.graphql"),{
  encoding: "utf-8",
});
const typeDefs = gql`
  scalar JSON
  type Query{
    earning(code:String, limit:Int):[earnings]
    incomeStatement(yearly_date: String, quarterly_date:String, code: String, limit: Int):[incomeStatement]
    upcomingEarning(code: String):[upcomingEarnings]
  }
  ${upcomingEarningsTypes}
  ${incomeStatementTypes}
  ${earningsTypes}`;

export default typeDefs; 
