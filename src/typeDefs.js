import { gql } from "apollo-server"
import { readFileSync } from "fs";
import path from "path";

const overviewTypes = readFileSync(path.join("src/typeDefs/overview.graphql"),{
  encoding: "utf-8",
});

const earningsTypes = readFileSync(path.join("src/typeDefs/earnings.graphql"),{
  encoding: "utf-8",
});

const incomeStatementTypes = readFileSync(path.join("src/typeDefs/incomeStatement.graphql"),{
  encoding: "utf-8",
});
const typeDefs = gql`
  type Query{
    earning(date:String):[earnings]
   
  }
  ${overviewTypes}
  ${incomeStatementTypes}
  ${earningsTypes}`;

export default typeDefs;
