/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .trim()
    .split(" ")
    .filter((el) => el !== "")
    .reverse()
    .join(" ");
};

console.log(reverseWords("a good   example"));
