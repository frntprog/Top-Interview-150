/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let res =
//     Math.max(
//       ...prices.slice(
//         prices.findIndex(
//           (el) => el !== prices[prices.length - 1] && el == Math.min(...prices)
//         )
//       )
//     ) - Math.min(...prices);
//   return res > 0 ? res : 0;
// };

var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > profit) {
        if (i < j) {
          profit = prices[j] - prices[i];
        }
      }
    }
  }
  return profit;
};

// console.log(maxProfit([4, 1, 5, 2, 7]));
console.log(maxProfit([2, 4, 1]));
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
