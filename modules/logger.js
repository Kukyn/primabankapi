const RESET = 0

const BLACK = 30
const RED = 31
const GREEN = 32
const YELLOW = 33
const BLUE = 34
const MAGENTA = 35
const CYAN = 36
const WHITE = 37

const BG_BLACK = 40
const BG_RED = 41
const BG_GREEN = 42
const BG_YELLOW = 43
const BG_BLUE = 44
const BG_MAGENTA = 45
const BG_CYAN = 46
const BG_WHITE = 47

const BRIGHT = 1 
const DIM = 2
const UNDERSCORE = 4
const BLINK = 5
const REVERSE = 7
const HIDDEN = 8




let logError = (message,prefix) =>{ log(message,ERROR,prefix) }
let logWarn = (message,prefix) =>{ log(message,WARN,prefix) } 
let logInfo = (message,prefix) =>{ log(message,INFO,prefix) } 





let color = (parameters) => {
    clr = parameters.cl || 0
    bgColor = parameters.bg || 0
    modifier = parameters.mf || 0 

    return `\x1b[${bgColor}m\x1b[${clr}m\x1b[${modifier}m`
}
const ERROR =  `${color({cl: RED,mf:BRIGHT})}[ERROR]${color({cl: RESET})}`
const WARN = `${color({cl: YELLOW,mf:BRIGHT})}[WARN]${color({cl: RESET})}`
const INFO = `${color({cl: CYAN,mf:BRIGHT})}[INFO]${color({cl: RESET})}`


//TODO  Enable user to customise text after flag (color, bg, modifier)


let log = (message,flag,prefix) => {
    prefix = prefix || ""
    console.log(`[${prefix}]${flag} ${message}\x1b[0m`)
}




module.exports = {logError, logInfo, logWarn}