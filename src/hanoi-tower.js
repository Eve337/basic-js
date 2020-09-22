const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disks, speedInHour) {
  let turnsSolution = (Math.pow(2, disks)) - 1;
  let solutionTime = parseInt(turnsSolution / (speedInHour / 3600));

  return {
    seconds: solutionTime,
    turns: turnsSolution
  };
  
};
