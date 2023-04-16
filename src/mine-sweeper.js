const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];

  for (let i = 0; i < matrix.length; i++) {
    let rowRes = [];

    let rowUp;
    if (i > 0) {
      rowUp = matrix[i - 1];
    }

    let rowCur = matrix[i];

    let rowDown;

    if (i + 1 < matrix.length) {
      rowDown = matrix[i+1];
    }
// идем по ячеикам строки
    for (let j = 0; j < rowCur.length; j++) {
      
      let counter = 0;

      if (rowUp) {
        if (rowUp[j]) counter++;

        if (j > 0) {
          if (rowUp[j - 1]) counter++;
        }

        if (j+1 < rowCur.length) {
          if (rowUp[j + 1]) counter++;
        }

      }

      if (rowDown) {
        if (rowDown[j]) counter++;

        if (j > 0) {
          if( rowDown[j - 1] ) counter++;
        }

        if (j < rowCur.length) {
          if (rowDown[j + 1]) counter++;
        }
      }

      if (j > 0) {
        if (rowCur[j - 1]) counter++;
      }

      if( j+1 < rowCur.length){
        if (rowCur[j + 1]) counter++;
      }

      rowRes.push(counter);
    }
///


    res.push(rowRes);
  }

 return res;
}

module.exports = {
  minesweeper,
};

// let matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ];

// console.log(minesweeper(matrix));
