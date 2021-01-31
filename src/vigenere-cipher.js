const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  direct = true
  constructor(type) {
    if (type === false) {
      this.direct = false
    }
  }
  encrypt(str, keyword) {
    if(str == undefined || keyword == undefined) throw new Error('lack of arguments')
    str = str.toUpperCase()
    keyword = keyword.toUpperCase()
    let encryptArr = []
    for (let i = 0, j = 0; i < str.length; i++) {
      if (j == keyword.length) j = 0
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        let c = (str.charCodeAt(i) - 65 + keyword.charCodeAt(j) - 65) % 26
        encryptArr.push(String.fromCharCode(c + 65))
        j++
      }
      else {
        encryptArr.push(str[i])
      }
    }
    if (!this.direct) encryptArr.reverse()
    return encryptArr.join('')
  }
  decrypt(encryptedstr, keyword) {
    if (encryptedstr == undefined || keyword == undefined) throw new Error('lack of arguments')
    let str = encryptedstr.toUpperCase()
    keyword = keyword.toUpperCase()
    //decrypting
    let decryptArr = []
    for (let i = 0, j = 0; i < str.length; i++) {
      if (j == keyword.length) j = 0
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        let m = ((str.charCodeAt(i) - 65) - (keyword.charCodeAt(j) - 65) + 26) % 26
        decryptArr.push(String.fromCharCode(m + 65))
        j++
      }
      else {
        decryptArr.push(str[i])
      }
    }
    if (!this.direct) decryptArr.reverse()
    return decryptArr.join('')
  }
}

module.exports = VigenereCipheringMachine;