/**
 * @param {number[]} prices
 * @return {number}
 */

/**
 * 最坏当天买，当天卖  0 收益
 * 持有第一天，遇到更低 买入；
 * 比对第二天，遇到更高，考虑卖出；
 *
 * Q: 针对 [1,3,5] 买入1卖出5 和 买入1卖出3，买入3卖出5 收益一样吗？
 * 是一样的
 *
 * 需要证明：逢高卖出是全局最优解
 */

var maxProfit = function (prices) {
  let hand = prices[0];
  result = 0;
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];

    if (price > hand) {
      result += price - hand;
    }
    hand = price;
  }

  return result;
};

maxProfit([7]);
maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([1, 2, 3, 4, 5]);
maxProfit([7, 6, 4, 3, 1]);
