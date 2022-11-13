
# Slovakia’s Prima banka API

  

### Unofficial API for Prima banka’s currency rate sell/buy list

  

v0.0.x - API can only scrape info about Czech crowns (CZK) for now.

  

## Install


	npm install primabankapi


## Usage

```javascript
const api =  require("primabankapi");
```

>All functions returns promise that needs to be resolved

### **.getSellRate(?roundAt)**

Returns sell rate of CZK for today

```javascript
var response = await api.getSellRate(4)
console.log(response) //ex. output 24.9840
```

> Calling function without parameter "roundAt" returns response with zero decimal places

```javascript
var response =  await api.getSellRate()
console.log(response) //ex. output 24
```

### **.getBuyRate(?roundAt)**

Returns buy rate of CZK for today

```javascript
var response = await api.getBuyRate(4)
console.log(response) //ex. output 25.1240
```

> Calling function without parameter "roundAt" returns response with zero decimal places

```javascript
var response =  await api.getBuyRate()
console.log(response) //ex. output 25
```  

### **.getMiddleRate(?roundAt)**

Returns middle rate of CZK for today
```javascript
var response = await api.getMiddleRate(4)
console.log(response) //ex. output 24.3440
```

> Calling function without parameter "roundAt" returns response with zero decimal places

```javascript
var response =  await api.getMiddleRate()
console.log(response) //ex. output 24
```  

## Example usage

Comming soon
