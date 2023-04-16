const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {

  let res = matrix[0] ;


  for (let i = 1 ; i < matrix.length ; i++){
    let prev = matrix[i - 1] ; 
    let row = matrix[i] ;

    for(let j = 0 ; j < row.length ; j++){
      if( prev[j] > 0 ) res.push(row[j])
    }

  }


  return res.reduce( (acc ,cur)=>{
    return acc+cur ;
  } ,0 )

}

module.exports = {
  getMatrixElementsSum
};

const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
 ];


getMatrixElementsSum(matrix) ;

