/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const hash = {};
  let str = s.split("");
  let match = t.split("");

  for (let i = 0; i < str.length; i++) {
    if (hash.hasOwnProperty(str[i])) {
      hash[str[i]] += 1;
    } else {
      hash[str[i]] = 1;
    }
  }

  for (let i = 0; i < match.length; i++) {
    if (hash.hasOwnProperty(match[i])) {
      hash[match[i]] -= 1;
    } else {
      return false;
    }
  }

  for (const key in hash) {
    if (hash[key] !== 0) return false;
  }
  return true;
};

console.log(isAnagram("aacc", "ccac"));
