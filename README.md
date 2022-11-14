
# Slovakia’s Prima banka API

  

### Unofficial API for Prima banka’s currency rate sell/buy list

  
v0.0.x - API can only scrape info about Czech Koruna (CZK) for now.

#### NPM package: https://www.npmjs.com/package/primabankapi

  

## Install


	npm install primabankapi


## Usage

```javascript
const api =  require("primabankapi");
```

>All functions returns promise that needs to be resolved

### Commands

> Calling function without parameter `roundAt` returns response with five decimal places

>Maximum decial places that site is providing is 5

### **.getSellRate(?roundAt)**

Returns sell rate of CZK for today

```javascript
var response = await api.getSellRate()
console.log(response) //ex. output 24.98400
```

### **.getBuyRate(?roundAt)**

Returns buy rate of CZK for today

```javascript
var response = await api.getBuyRate()
console.log(response) //ex. output 25.12400
```  

### **.getMiddleRate(?roundAt)**

Returns middle rate of CZK for today
```javascript
var response = await api.getMiddleRate()
console.log(response) //ex. output 24.34400
```

## Future plans
v1.0.0 is going to be able to scrape `currency/EUR` rate of all of six curencies from website:

 - USD - US Dollar
 - CZK - Czech Koruna
 - GBP - British Pound
 - HUF - Hungarian Forint
 - PLN - Polish Zloty
 - CHF - Swiss Franc
