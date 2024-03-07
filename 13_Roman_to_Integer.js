/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let arr = s
    .split("")
    .reverse()
    .map((el) => {
      return hash[el];
    });

  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1] && arr[i + 1]) {
      res += arr[i] - arr[i + 1];
      i += 1;
    } else {
      res += arr[i];
    }
  }

  return res;
};

console.log(romanToInt("MCMXCIV"));
