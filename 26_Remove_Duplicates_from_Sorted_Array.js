/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  nums.splice(0, nums.length, ...new Set(nums));
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
