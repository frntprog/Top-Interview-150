/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);

    if (prices[i] < minPrice) minPrice = prices[i];
  }

  return maxProfit;
};

// console.log(maxProfit([4, 1, 5, 2, 7]));
console.log(maxProfit([2, 4, 1]));
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
