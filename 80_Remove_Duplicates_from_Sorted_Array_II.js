/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length == 1) {
    return;
  }

  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash) {
      hash[nums[i]] += 1;
      if (hash[nums[i]] > 2) hash[nums[i]] = 2;
      continue;
    }
    hash[nums[i]] = 1;
  }

  const resultArray = [];
  Object.entries(hash).forEach(([key, value]) => {
    const numKey = Number(key);
    for (let i = 0; i < value; i++) {
      resultArray.push(numKey);
    }
  });

  nums.splice(0, nums.length, ...resultArray);
  nums.sort((a, b) => a - b);
};

console.log(removeDuplicates([0, 0, 0, 0, 3, 3, 3, 3]));

if (0) console.log("me");
