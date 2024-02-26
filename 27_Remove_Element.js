/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  return nums.filter((el) => el == val).length;
};

console.log(removeElement([3, 2, 2, 3], 3));
