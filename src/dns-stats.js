const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let matrix = domains.map(el=>el.split(".").reverse());
let obj = {} ;

matrix.forEach( el => {
el.reduce( ( acc , cur )=>{
  if(!acc) {
    acc = "." + cur ;
  }else{
    acc+="." + cur ;
  }

  if(!obj[`${acc}`]){
    obj[`${acc}`] = 1 ;
  }else if (obj[`${acc}`]){
    obj[`${acc}`] +=1 ;
  }
  return acc ;
},"")
})

return obj ;
}

module.exports = {
  getDNSStats
};