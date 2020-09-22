const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(OLD_ACTIVITY) {
  const old = parseFloat(OLD_ACTIVITY);
  if (typeof OLD_ACTIVITY !== "string"){
    return false;
  } else if (old > 0 && old < MODERN_ACTIVITY){
    const k = 0.693 / HALF_LIFE_PERIOD;
    return Math.ceil((Math.log(MODERN_ACTIVITY / old)) / (k));
  } else {
    return false;
  }
};
