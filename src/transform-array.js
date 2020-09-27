const CustomError = require("../extensions/custom-error");


module.exports = function transform(arr) {
  if(!Array.isArray(arr)){
    throw Error;
  }

  let deletedIndexEl;
  let resultArr = [];
  
  for (let i = 0; i < arr.length; i++){
    switch(arr[i]){
      case "--discard-next" :
        deletedIndexEl = i + 1; 
        i++;
        break;

      case "--discard-prev" :
        if(resultArr.length && deletedIndexEl !== i - 1){
          resultArr.pop();
        }
      break;

      case "--double-next" :
        if(i < arr.length - 1){
          resultArr.push(arr[i+1]);
        }
      break;

      case "--double-prev" :
        if(resultArr.length && deletedIndexEl !== i - 1){
          resultArr.push(arr[i-1]);
        }
        break;

      default:
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
};

