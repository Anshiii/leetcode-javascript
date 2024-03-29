/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  /* 最小的胃口配最小的饼 */
  // 排序孩子和饼， 遍历孩子，选饼
  let cLen = g.length,
    bLen = s.length;
  if (bLen < 1) return 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let j = 0,
    result = 0;
  for (let i = 0; i < cLen; i++) {
    if (j >= bLen) {
      break;
    }
    for (; j < bLen; j++) {
      if (s[j] >= g[i]) {
        result++;
        j++;
        break;
      }
    }
  }
  return result;
};
// @lc code=end

findContentChildren([1, 2], [1, 2, 3]);
