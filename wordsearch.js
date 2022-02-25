const transpose = function(matrix) {
  let resultMatrix = [];
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (!resultMatrix[c]) {
        resultMatrix.push([]);
      }
      resultMatrix[c].push(matrix[r][c]);
    }
  }
  return resultMatrix;
};
  
const wordSearch = (letters, word) => { 
  for (i = 1; i <=2; i++) {
    const horizontalJoin = letters.map(ls => ls.join('')+', '+ls.reverse().join(''))
    for (l of horizontalJoin) {
      if (l.includes(word)) return true
    }
    letters = transpose(letters);
  }
  return false;
}
  
module.exports = wordSearch