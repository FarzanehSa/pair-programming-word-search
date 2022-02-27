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

module.exports = { transpose }