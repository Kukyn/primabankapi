const axios = require("axios")
const cheerio = require("cheerio")

const requestURL = (date) => `https://www.primabanka.sk/kurzovy-listok?currency=CZK&date=${date}&interval=1`


const getSellRate = async (roundAt)=>{
    try{
        const round = roundAt || 0
        const request = await (axios.get(requestURL(date())))        
        const $  = cheerio.load(request.data)
        const response = $($("tr[class='selected' ] td")[4]).text().replace(",",".")
        return (parseFloat(response).toFixed(round))
    }catch(err){
        console.log(err)
    }
   
}
const getBuyRate = async (roundAt)=>{
    try{
        const round = roundAt || 0
        const request = await (axios.get(requestURL(date())))        
        const $  = cheerio.load(request.data)
        const response = $($("tr[class='selected' ] td")[3]).text().replace(",",".")
        return parseFloat(response).toFixed(round)
    }catch(err){
        console.log(err)
    }
   
}
const getMiddleRate = async (roundAt)=>{
    try{
        const round = roundAt || 1
        const request = await (axios.get(requestURL(date())))        
        const $  = cheerio.load(request.data)
        const response = $($("tr[class='selected' ] td")[2]).text().replace(",",".")
        return parseFloat(response).toFixed(round)
    }catch(err){
        console.log(err)
    }
   
}

const date = () =>{
    let dateRaw = new Date()
    return `${dateRaw.getDate()}.${dateRaw.getMonth()+1}.${dateRaw.getFullYear()}`
}



module.exports = { getSellRate, getBuyRate, getMiddleRate }   