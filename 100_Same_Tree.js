/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let res = true;
  const compare = (pn, qn) => {
    if (!pn && !qn) {
      return;
    }
    if (!qn || !pn) {
      res = false;
      return;
    }

    if (pn.val != qn.val) {
      res = false;
    }
    compare(pn.left, qn.left);
    compare(pn.right, qn.right);
  };
  compare(p, q);
  return res;
};
