// all diagonal left to right
const diagonalLeftToRight = function(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  let result = [];
  for (let i = 0; i < col; i++) {
    let r = 0;
    let c = i;
    let temp = [];
    while (r < row  && c < col) {
      temp.push(matrix[r][c]);
      r += 1;
      c += 1;
    }
    result.push(temp);
  }
  return result;
};

// all diagonal right to left
const diagonalRightToLeft = function(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  let result = [];
  for (let i = 0; i < col; i++) {
    let r = 0;
    let c = i;
    let temp = [];
    while (r < row  && c >= 0) {
      temp.push(matrix[r][c]);
      r += 1;
      c -= 1;
    }
    result.push(temp);
  }
  return result;
};

// get and gather all diagonal possible w/ recursive
const getDiagonal = function(matrix,resultArray) {
  if (matrix.length === 1) return resultArray;

  const rL = diagonalRightToLeft(matrix);
  resultArray.push(...rL);
  
  const lR = diagonalLeftToRight(matrix);
  resultArray.push(...lR);

  matrix.shift();
  return getDiagonal(matrix,resultArray);
};

// ------------ Main Function ------------

const diagonal = function(matrix) {
  let result = [];
  const tempMat = [...matrix]
  result = getDiagonal(tempMat,result);
  return result;
};

module.exports = { diagonal };

/*
const m1 = [[1,2,3],
            [4,5,6]];

const m2 = [[1,2,3],
            [4,5,6],
            [7,8,9]];

const m3 = [[11,12,13,14,15],
            [16,17,18,19,20],
            [21,22,23,24,25],
            [26,27,28,29,30],
            [31,32,33,34,35]];

// console.log(diagonalLeftToRight(m1));
// console.log(diagonalLeftToRight(m2));
// console.log(diagonalLeftToRight(m3));
console.log('---------------------------');
// console.log(diagonalRightToLeft(m1));
// console.log(diagonalRightToLeft(m2));
// console.log(diagonalRightToLeft(m3));
console.log('---------------------------');
console.log(diagonal(m1));
console.log(diagonal(m2));
console.log(diagonal(m3));
*/
