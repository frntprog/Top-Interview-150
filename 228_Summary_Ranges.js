/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let res = [];
  let first = nums[0];
  let last = nums[0];

  for (let i = 1; i <= nums.length; i++) {
    if (last + 1 == nums[i]) {
      last = nums[i];
    } else {
      first == last ? res.push(`${first}`) : res.push(`${first}->${last}`);
      first = nums[i];
      last = nums[i];
    }
  }

  return res;
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
