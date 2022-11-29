let axios = require("axios")
let cheerio = require("cheerio")
let logger = require("./modules/logger.js")
let currencies = ["USD","CZK","GBP","HUF","PLN","CHF"]
let requestURL = (date,currency) => `https://www.primabanka.sk/kurzovy-listok?currency=${currency}&date=${date}&interval=1`
const MIDLLE_OFFSET = 2
const BUY_OFFSET = 3
const SELL_OFFSET = 4

let getSellRate = async (currency,roundAt)=> getRate(currency,roundAt,SELL_OFFSET)
let getBuyRate = async (currency,roundAt)=> getRate(currency,roundAt,BUY_OFFSET)
let getMiddleRate = async (currency,roundAt)=> getRate(currency,roundAt,MIDLLE_OFFSET)
   
let getRate = async(currency, roundAt, targetOffset)=>{
    roundAt = roundAt || 5
    try{
        if(!currencies.includes(currency)){throw `Cannot find currency: \u001b[1;31m${currency}\u001b[0m`}
        let request = await (axios.get(requestURL(date(),currency)))        
        let $  = cheerio.load(request.data)
        let response = $($("tr[class='selected' ] td")[targetOffset]).text().replace(",",".")
        return parseFloat(response).toFixed(roundAt)
    }catch(err){    
        logger.logError(err)
    }
}
let date = _ =>{
    let dateRaw = new Date()
    return `${dateRaw.getDate()}.${dateRaw.getMonth()+1}.${dateRaw.getFullYear()}`
}

module.exports = { getSellRate, getBuyRate, getMiddleRate }   