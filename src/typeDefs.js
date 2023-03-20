import { gql } from "apollo-server"


 const typeDefs = gql `
 type Query{
    fetchfinancialOverview:[OverView]!
 }
  type OverView{
    code:String
    market_cap:Float
    revenue:Float
    net_income:Float
    shares_out:Float
    eps:Float
    pe_ratio:Float
    forward_pe:Float
    divided:Float
    exdividend_date:String
    volume:String          
    open:String               
    previous_close:String     
    day_range:String          
    w_range:String
    beta:Float
    analysts:String
    price_target:Float
    earnings_date:String
    employees:Float
    industry:String
    sector:String
    stock_exchange:String
    ceo:String                
  address:String            
  phone:String              
  website:String            
  fiscal_year:String        
  reporting_currency:String 
  cik_code:String           
  cusip_number:String       
  isin_number:String        
  employer_id:String        
  sic_code:String           
  key_executives:String     
  latest_filings:String     
  country:String            
  ipo_date:String           
  }

`;

export default typeDefs;

