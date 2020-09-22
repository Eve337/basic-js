const CustomError = require("../extensions/custom-error");

const seasons = {
  'Dec': "winter",
  'Jan': "winter",
  'Feb': "winter",
  
  'Mar': "spring",
  'Apr': "spring",
  'May': "spring",

  'Jun': "summer",
  'Jul': "summer",
  'Aug': "summer",

  'Sep': "autumn",
  'Oct': "autumn",
  'Nov': "autumn"
}

module.exports = function getSeason(dateObj) {
  if(!!dateObj === false){
    return "Unable to determine the time of year!";
  } 
  if(Object.prototype.toString.call(dateObj) !== '[object Date]'){
    throw new Error("Invalid");
  }
  
  const dateStr = dateObj.toString().split(" ");
  return seasons[dateStr[1]];
};



