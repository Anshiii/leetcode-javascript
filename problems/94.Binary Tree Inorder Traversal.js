/**
 * Created by Anshi on 2018/8/16.
 */
/*
 * 给定一个二叉树，返回它的中序 遍历。*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function (root) {
  let result = [];

  function traversal(node) {
    if (!node) return;
    traversal(node.left);
    result.push(node.val);
    traversal(node.right);
  }

  traversal(root);
  return result;
};

/*非 递归方法的遍历好像会快一些？ 未完成*/

var inorderTraversal = function (root) {
  let result = [];
  let stack = [];
  let cur = root;
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    result.push(cur);
    cur = cur.right;
  }
  return result;
};
