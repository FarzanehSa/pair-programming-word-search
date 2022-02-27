const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the letters array is empty", function() {
    const result = wordSearch([], 'word')
    assert.isFalse(result);
  });

  it("should return false if the word is not present.", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present, horizontally ➡️ ", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });
  
  it("should return true if the word is present, vertically ⬇️ ", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'a', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'p', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'p', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'l', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'e', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'apple')

    assert.isTrue(result);
  });

  it("should return true if the word is present, horizontally & backward ⬅️ ", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'd', 'e', 'r', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['0', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', '1', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', '2', 'F', 'Q', 'U', 'A', 'L'],
    ], 'red')

    assert.isTrue(result);
  });
  
  it("should return true if the word is present, vertically & backward ⬆️ ", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'd', 'T', 'E', 'V', 'a', 'G'],
      ['W', 'H', 'e', 'S', 'Y', 'E', 'p', 'L'],
      ['B', 'F', 'r', 'E', 'N', 'E', 'p', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'l', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'e', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'red')

    assert.isTrue(result);
  });

  it("should return true if the word is present, diagonally ↘️  Left to Right", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'C', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'l', 'U', 'A', 'L'],
      ['H', 'M', 'd', 'T', 'E', 'a', 'a', 'G'],
      ['W', 'H', 'e', 'S', 'n', 'E', 's', 'L'],
      ['B', 'F', 'r', 'e', 'N', 'E', 'p', 's'],
      ['U', 'B', 'r', 'W', 'A', 'P', 'l', 'I'],
      ['O', 'a', 'C', 'A', 'K', 'U', 'e', 'S'],
      ['P', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'Class')

    assert.isTrue(result);
  });
  
  it("should return true if the word is present, diagonally ↖️  Left to Right & Backward", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['k', 'E', 'I', 'C', 'F', 'E', 'L', 'D'],
      ['Y', 'O', 'C', 'F', 'l', 'U', 'A', 'L'],
      ['H', 'M', 'O', 'T', 'E', 't', 'a', 'G'],
      ['W', 'H', 'e', 'b', 'n', 'E', 'a', 'L'],
      ['B', 'F', 'r', 'e', 'e', 'E', 'p', 's'],
      ['U', 'B', 'r', 'W', 'A', 'c', 'l', 'I'],
      ['O', 'a', 'C', 'A', 'K', 'U', 'a', 'S'],
      ['p', 'Z', 'K', 'F', 'Q', 'U', 'A', 'F'],
    ], 'FacebOOk')

    assert.isTrue(result);
  });

  it("should return true if the word is present, diagonally ↙️  Right to Left", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'S', 'A', 'L'],
      ['S', 'E', 'I', 'C', 'A', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'f', 'l', 'U', 'A', 'L'],
      ['H', 'M', 'a', 'T', 'E', 'l', 'a', 'G'],
      ['W', 'r', 'e', 'S', 'Y', 'E', 'a', 'L'],
      ['i', 'F', 'r', 'E', 'N', 'E', 'p', 's'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'l', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'e', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SAfari')
  
    assert.isTrue(result);
  });

  it("should return true if the word is present, diagonally ↗️  Right to Left & Backward", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'S', 'A', 'L'],
      ['S', 'E', 'I', 'C', 'A', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'f', 'l', 'U', 'A', 'L'],
      ['H', 'M', 'a', 'T', 'E', 'l', 'T', 'G'],
      ['W', 'r', 'e', 'S', 'Y', 'n', 'a', 'L'],
      ['i', 'F', 'r', 'E', 'e', 'E', 'p', 's'],
      ['U', 'B', 'T', 'r', 'A', 'P', 'l', 'I'],
      ['O', 'D', 'a', 'A', 'K', 'U', 'e', 'S'],
      ['E', 'P', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ParenT')
  
    assert.isTrue(result);
  });


});