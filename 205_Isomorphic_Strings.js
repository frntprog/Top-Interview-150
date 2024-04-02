/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let str = s.split("");
  let ttr = t.split("");
  let sMap = new Map();
  let tMap = new Map();

  for (let i = 0; i < str.length; i++) {
    if (sMap.has(str[i]) && sMap.get(str[i]) !== ttr[i]) return false;
    sMap.set(str[i], ttr[i]);
  }

  for (let i = 0; i < ttr.length; i++) {
    if (tMap.has(ttr[i]) && tMap.get(ttr[i]) !== str[i]) return false;
    tMap.set(ttr[i], str[i]);
  }

  return true;
};

console.log(isIsomorphic("egg", "add"));
