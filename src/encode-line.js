const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str ) {
  let res = [];
    for(let i = 0; i< str.length; i++){
        if(res[res.length - 1] && res[res.length - 1][1] === str[i]){
            res[res.length - 1][0]++;
        } else {
            res.push([1,str[i]])
        }
    }
    return res.flat().reduce((acc,cur)=>{
      cur !== 1 ? acc += cur : "" ;
      return acc ;
    },"");
}

module.exports = {
  encodeLine
};
