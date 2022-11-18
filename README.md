
  

# Slovakia’s Prima banka API

  

  

### Unofficial API for Prima banka’s [currency rate sell/buy list ]("https://www.primabanka.sk/kurzovy-listok")


#### NPM package: https://www.npmjs.com/package/primabankapi

  

  

## Install

  
  

```
npm install primabankapi
```

  
  

## Usage

  

```javascript

const api =  require("primabankapi");

```

  

>All functions returns promise that needs to be resolved

  

### Commands

  

> Calling function without parameter `roundAt` returns response with five decimal places

  

>Maximum decial places that site is providing is 5

>For parameter `currency` choose one from [list of supported currencies](#supported-currencies)


  

### **.getSellRate(currency: string, ?roundAt: int)**

  

Returns sell rate of given currency for today

  

```javascript

var response =  await api.getSellRate("CZK")

console.log(response) //ex. output 24.98400

```

  

### **.getBuyRate(currency: string, ?roundAt: int)**

  

Returns buy rate of given currency for today

  

```javascript

var response =  await api.getBuyRate("CZK")

console.log(response) //ex. output 25.12400

```

  

### **.getMiddleRate(currency: string, ?roundAt: int)**

  

Returns middle rate of given currency for today

```javascript

var response =  await api.getMiddleRate("CZK")

console.log(response) //ex. output 24.34400

```

## Supported currencies
-   USD - US Dollar
-   CZK - Czech Koruna
-   GBP - British Pound
-   HUF - Hungarian Forint
-   PLN - Polish Zloty
-   CHF - Swiss Franc

## Future plans

 - [x] Option to scrape `currency/EUR` rate of all of six curencies from website [v1.0.0]
 - [ ] Adding option to get rate for given day in past [v2.0.0]
 
