const { diagonal } = require('./diagonal');
const { transpose } = require('./transpose');
  
const checkExistance = function(matrix,word) {
  const joinedRows = matrix.map(r => r.join('') + (', ') + r.reverse().join(''));
  for (const x of joinedRows) {
    if (x.includes(word)) return true;
  }
  return false;
}

const wordSearch = (letters, word) => { 

  if (letters.length === 0) return false; // empty matrix

  if (checkExistance(letters,word)) return true; // horizantal or it's backward

  const transposedArray = transpose(letters);   // vertical or it's backward
  if (checkExistance(transposedArray,word)) return true; 

  const diagonalArray = diagonal(letters);    // diagonal and it's backward
  if (checkExistance(diagonalArray,word)) return true;  
  return false;
}
  
module.exports = wordSearch
