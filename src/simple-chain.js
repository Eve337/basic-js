const CustomError = require("../extensions/custom-error");

const chainMaker = {
  
  chain : [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value + "");
    return this;
  },
  removeLink(position) {
    if(typeof position == 'number' && position > 0 && position <= this.chain.length && position){
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw Error;
    }
    
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let strChain = "( " + this.chain.join(" )~~( ") + " )";
    this.chain = [];
    return strChain;
  }
};

module.exports = chainMaker;
