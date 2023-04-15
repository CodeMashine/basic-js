const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRING  PLUS 00 PLUS 00 PLUS ** STRING PLUS 00 PLUS 00 PLUS ** STRING PLUS 00 PLUS 00 PLUS'
 *
 */
function repeater(str, options) {
  console.log("string" ,str) ;
  if(typeof str !== "string") str = String(str) ;
  let repeatTimes = options.repeatTimes||1 ;
  let separator = options.separator||"+" ;

  // if (options.addition === false){

    let addition = "" ;
  if (options.hasOwnProperty("addition")){
    addition = String(options.addition) ;
  }
   
  let additionRepeatTimes = options.additionRepeatTimes||1 ;
  
  let additionSeparator = options.additionSeparator||"|" ;

  let item = [] ;
  if(addition){
    for(let i = 0 ; i < additionRepeatTimes ; i++ ){
      item.push(addition) ;
    } ;
  }

  if(item[0]){
    item[0]=str+item[0] ;
  }else{
    item[0] = str 
  }
  console.log("item", item) ;
  item = item.join(additionSeparator) ;


  let res = [] ;

  for(let j = 0 ; j < repeatTimes ; j++){
    res.push(item) ;
  }
return res.join(separator) ;
}

module.exports = {
  repeater
};

// const objWithSpecificCoercion = {
//   [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
// };


// console.log(repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion })) ;
// console.log('STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT'); 
// console.log(repeater(objWithSpecificCoercion, { repeatTimes: 2})) ;
//'la+sla+sla+'
// console.log("test") ;
// console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' })) ;
// console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' })) ;
// la+ s la+ s la