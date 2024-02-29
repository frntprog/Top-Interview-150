/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]] += 1;
      continue;
    }

    hash[nums[i]] = 1;
  }

  // compare value by pairs this way
  return Object.keys(hash).reduce((a, b) => (hash[a] > hash[b] ? a : b));
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3]));
