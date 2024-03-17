/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hash.hasOwnProperty(nums[i])) {
      hash[nums[i]] = 0;
    } else {
      hash[nums[i]] += 1;
    }
  }
  for (const key in hash) {
    if (hash[key] == 0) return +key;
  }
};

console.log(singleNumber([2, 2, 1]));
