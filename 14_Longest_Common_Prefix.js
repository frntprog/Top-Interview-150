/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs[0].length == 0) return "";
  let arr = strs.sort((a, b) => a.length - b.length);
  let base = arr[0][0];
  for (let j = 0; j < arr.length; j++) {
    for (let i = 1; i < arr.length; i++) {
      if (
        arr[i].slice(0, base.length).includes(base) &&
        arr[i + 1].includes(base + arr[i][i])
      ) {
        if (arr[i - 1].includes(base + arr[i][i])) {
          console.log(arr[i]);
          base += arr[i][i];
        }
      }
    }
  }
  return base;
};

console.log(longestCommonPrefix(["abca", "aba", "aaab"]));
