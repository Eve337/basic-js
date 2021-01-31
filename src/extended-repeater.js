const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let strings = [];
  let additions = [];
  let addition = '';

  if(!options.hasOwnProperty('repeatTimes') || options.repeatTimes === undefined){
    options.repeatTimes = 0;
  }

  if(!options.hasOwnProperty('separator')){
    options.separator = "+";
  }
  
  if(!options.hasOwnProperty('addition')){
    options.addition = "";
  }
  
  if(!options.hasOwnProperty('additionRepeatTimes') || options.additionRepeatTimes === undefined){
    options.additionRepeatTimes = 1;
  }

  if(!options.hasOwnProperty('additionSeparator')){
    options.additionSeparator = "|";
  }

  if(options.repeatTimes == 0){
    strings.push(str.toString());
  }

  while (options.repeatTimes > 0) {
    strings.push(String(str));
    options.repeatTimes -= 1;
  }

  while (options.additionRepeatTimes > 0) {
    additions.push(String(options.addition));
    options.additionRepeatTimes -= 1;
  }
  addition = additions.join(options.additionSeparator);
  return strings.map(item => item + addition).join(options.separator);


}