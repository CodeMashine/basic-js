const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
console.log(arr) ;
let result = []

if(!Array.isArray(arr)){
  throw new Error("'arr' parameter must be an instance of the Array!") ;
}


for(let i = 0 ; i < arr.length ; i++ ) {
  
  
  if(arr[i-1] === '--discard-next'){
    result.splice(i,1) ;
    continue ;
  }
  
  if(arr[i] === '--discard-prev'){
    if(arr[i-1] !== result[result.length-1]) continue ;
    result.pop() ;
  }
  
  if(arr[i] === '--double-next'){
    arr[i+1]?result.push(arr[i+1]):"" ;
  }
  
  if(arr[i] === '--double-prev'){
    if(arr[i-1] !== result[result.length-1]) continue ;
    arr[i-1] ? result.push(arr[i-1]) : "" ;
    
  }
  
  if(typeof arr[i] === 'number'){
    result.push(arr[i])
  }
}

return result ;
}

module.exports = {
  transform
};

// console.log(transform(['--discard-prev', 1, 2, 3])) ;
// console.log(transform(['--double-prev', 1, 2, 3])) ;
// console.log(transform([1, 2, 3, '--double-next'])) ;
// console.log(transform([1, 2, 3, '--discard-next'])) ;
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])) ;
// console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5])) ;
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])) ;