const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
let max = 0 ;
let string = String(n)
    array = string.split("") ;
for( let i = 0 ; i < string.length ; i++){
  array.splice(i , 1);
  let num = +array.join("") ;
  if(num > max ){
    max = num ;
  }
  array = string.split("") ;
}
return max ;
}

module.exports = {
  deleteDigit
};
