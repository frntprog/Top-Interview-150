/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, sample) {
  let p = [...new Set(pattern.split("")).values()];
  let s = [...new Set(sample.split(" ")).values()];

  if (pattern.length !== sample.split(" ").length) return false;

  let hash = {};

  for (let i = 0; i < sample.split(" ").length; i++) {
    if (p[i] && s[i]) {
      hash[p[i]] = s[i];
    }
  }

  const swapped = {};
  Object.keys(hash).forEach((key) => {
    swapped[hash[key]] = key;
  });

  s = sample.split(" ");

  let check = "";
  for (let i = 0; i < s.length; i++) {
    check += swapped[s[i]];
  }
  if (check !== pattern) return false;
  return true;
};

console.log(wordPattern("abba", "dog cat cat cat dog"));
