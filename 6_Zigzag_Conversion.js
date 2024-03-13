/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let str = s.split("");
  let arr = [];

  for (let i = 0; i < numRows; i++) {
    arr[i] = [];
    for (let j = 0; j < s.length; j++) {
      arr[i][j] = str[j];
    }
  }

  console.log(arr);
};

console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"

// P   A   H   N
// A P L S I I G
// Y   I   R
