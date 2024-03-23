/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let set = new Set();
  const calc = (cl) => {
    if (cl == 1) {
      return true;
    }

    let num = cl + "";
    let r = num.split("").reduce((acc, curr) => {
      acc += (+curr) ** 2;
      return acc;
    }, 0);
    if (set.has(r)) {
      return false;
    }
    set.add(r);

    return calc(r);
  };

  return calc(n);
};

console.log(isHappy(19999999));
