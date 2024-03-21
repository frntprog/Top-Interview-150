/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let str = ransomNote.split("");
  for (let i = 0; i < magazine.length; i++) {
    if (!ransomNote.length) return true;
    if (str.includes(magazine[i])) {
      str.splice(
        str.findIndex((el) => el == magazine[i]),
        1,
        "_"
      );
    }
  }

  return str.find((el) => el !== "_") ? false : true;
};

console.log(canConstruct("aab", "baa"));
