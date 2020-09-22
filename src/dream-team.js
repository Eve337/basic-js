const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(namesArr) {
  let teamName = "";
    if (!Array.isArray(namesArr)){
      return false;
    }
  for (let i = 0; i < namesArr.length; i++){
    if (typeof namesArr[i] == "string"){
      teamName += namesArr[i].trim().charAt(0).toUpperCase();
    }
  }
  return teamName.split("").sort().join("");
};
