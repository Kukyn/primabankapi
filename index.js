const axios = require("axios")
const cheerio = require("cheerio")
const currencies = ["USD","CZK","GBP","HUF","PLN","CHF"]
const requestURL = (date,currency) => `https://www.primabanka.sk/kurzovy-listok?currency=${currency}&date=${date}&interval=1`


const getSellRate = async (currency,roundAt)=>{
    this.infoNumber = 4
    this.round = roundAt || 5
    try{
        if(!currencies.includes(currency)){
         throw `Cannot find currency "${currency}"`
        }
         const response = await scrapper(currency,this.infoNumber)
         return response.toFixed(this.round)
     }catch(err){
         console.log(err)
     }
   
}
const getBuyRate = async (currency,roundAt)=>{
    this.infoNumber = 3
    this.round = roundAt || 5
    try{
        if(!currencies.includes(currency)){
         throw `Cannot find currency "${currency}"`
        }
         const response = await scrapper(currency,this.infoNumber)
         return response.toFixed(this.round)
     }catch(err){
         console.log(err)
     }
   
}
const getMiddleRate = async (currency,roundAt)=>{
    this.infoNumber = 2
    this.round = roundAt || 5
    try{
        if(!currencies.includes(currency)){
         throw `Cannot find currency "${currency}"`
        }
         const response = await scrapper(currency,this.infoNumber)
         return response.toFixed(this.round)
     }catch(err){
         console.log(err)
     }
   
}
async function scrapper(currency,infoNumber){
    try{
        const request = await (axios.get(requestURL(date(),currency)))        
        const $  = cheerio.load(request.data)
        const response = $($("tr[class='selected' ] td")[infoNumber]).text().replace(",",".")
        return parseFloat(response)
    }catch(err){
        console.log(err)
    }
}

const date = () =>{
    let dateRaw = new Date()
    return `${dateRaw.getDate()}.${dateRaw.getMonth()+1}.${dateRaw.getFullYear()}`
}



module.exports = { getSellRate, getBuyRate, getMiddleRate }   