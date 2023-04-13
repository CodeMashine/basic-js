const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  
  if(!date ) {
    return 'Unable to determine the time of year!' ;
  }

 

  try{

  // if(date.hasOwnProperty('toString') || Array.isArray(date) ) {
  // if(!date.getMonth()) {
    // throw new Error("Invalid date!") ;
  // }
  date.getMonth() ;
}catch(error){
  error.message = "Invalid date!"
  return error ;
}

      // let month = new Date(Date.parse(date)).getMonth()+1 ;
      let month = date.getMonth()+1 ;
      console.log("month - ", month) ;
      let res ;
      if( month <= 2 || month == 12 ){
        res = "winter" ;
      }else if( month <= 5 ){
        res = "spring" ;
      }else if( month <= 8 ){
        res = "summer" ;
      }else if( month <= 11 ){
        res = "autumn" ;
      }

      return res ;

    }

module.exports = {
  getSeason
};

const fakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: 'Date'
};


const invalidDate = { John: 'Smith' } ;


console.log("fakedate" ,fakeDate.hasOwnProperty('toString')) ;
const date = new Date() ;
console.log("true date" ,date.hasOwnProperty('toString')) ;


// console.log(getSeason(fakeDate)) ;
console.log(getSeason(invalidDate)) ;