/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const counts = { "(": 0, "[": 0, "{": 0 };
  for (const char of s) {
    if (char in counts) {
      counts[char]++;
    }
  }
  return counts;
};

console.log(isValid("([]{}"));
