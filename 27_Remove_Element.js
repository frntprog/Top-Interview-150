/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums[i] = "_";
    }
  }

  nums.sort((a, b) => {
    const isANumber = typeof a === "number";
    const isBNumber = typeof b === "number";

    if (isANumber && isBNumber) {
      return a - b;
    } else if (isANumber) {
      return -1;
    } else if (isBNumber) {
      return 1;
    } else {
      return 0;
    }
  });

  return nums.filter((el) => el !== val && el !== "_").length;
};
