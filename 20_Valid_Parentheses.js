/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  const obj = { "(": ")", "[": "]", "{": "}" };
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      stack.push(s[i]);
    } else {
      const expectedClosingBracket = obj[stack.pop()];
      if (s[i] !== expectedClosingBracket) {
        return false;
      }
    }
  }

  return stack.length == 0;
};

console.log(isValid("()"));
