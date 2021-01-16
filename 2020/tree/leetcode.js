// 微信二叉树学习总结：
// https://mp.weixin.qq.com/s/-ZJn3jJVdF683ap90yIj4Q

// https://leetcode-cn.com/problems/list-of-depth-lcci/
// 面试题 04.03. 特定深度节点链表

// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
// 剑指 Offer 32 - II. 从上到下打印二叉树 II
// 简单
// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
// 20201208

// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
// 剑指 Offer 54. 二叉搜索树的第k大节点
// 简单
// 给定一棵二叉搜索树，请找出其中第k大的节点。
// 20201209

// https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
// 剑指 Offer 26. 树的子结构
// 中等
// 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
// B是A的子结构， 即 A中有出现和B相同的结构和节点值。
// 20201209 
// 

// https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/
// 剑指 Offer 55 - II. 平衡二叉树
// 简单
// 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
// 20201209  20201215

// https://leetcode-cn.com/problems/legal-binary-search-tree-lcci/
// 面试题 04.05. 合法二叉搜索树

// https://leetcode-cn.com/problems/paths-with-sum-lcci/
// 面试题 04.12. 求和路径

// https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
// 剑指 Offer 28. 对称的二叉树
// 简单
// 解法：
// https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/solution/dui-cheng-er-cha-shu-di-gui-fa-die-dai-fa-xiang-ji/

// https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
// 剑指 Offer 55 - I. 二叉树的深度

// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/
// 剑指 Offer 68 - I. 二叉搜索树的最近公共祖先

// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/
// 剑指 Offer 32 - III. 从上到下打印二叉树 III
// 解决方法： 
// BFS： -------------------
// var levelOrder = function(root) {
//     if(root == null)return []
//     const treeArr = []
//     const res = []
//     treeArr.push(root)
//     while(treeArr.length){
//         let tmp = []
//         const len = treeArr.length
//         for(let i=0;i< len;i++){
//             let node = treeArr.shift()
//             tmp.push(node.val)
//             if(node.left)treeArr.push(node.left)
//             if(node.right)treeArr.push(node.right)
//         }
//         res.push(tmp)
//     }
//     return res
// };
// DFS --------------
// var levelOrder = function(root) {
//     if(root == null)return []
//     const self = {
//         treeArr: [],
//         visited: []
//     }
//     // self.visited = []
//     DFS(self, root, 0)
//     return self.treeArr
// }
// const DFS = (self, root, level) => {
//     if(root === null)return
//     if(self.visited.includes(root.val))return
//     if(self.treeArr.length < level + 1){
//         self.treeArr.push([])
//     }
//     self.treeArr[level].push(root.val)
//     self.visited.push(root.val)
//     DFS(self, root.left, level + 1)
//     DFS(self, root.right, level + 1)
// }

// https://leetcode-cn.com/problems/first-common-ancestor-lcci/
// 面试题 04.08. 首个共同祖先

// https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/
// 剑指 Offer 37. 序列化二叉树
// 困难

// https://leetcode-cn.com/problems/check-subtree-lcci/
// 面试题 04.10. 检查子树

// https://leetcode-cn.com/problems/minimum-height-tree-lcci/
// 面试题 04.02. 最小高度树

// https://leetcode-cn.com/problems/check-balance-lcci/
// 面试题 04.04. 检查平衡性

// https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/
// 剑指 Offer 27. 二叉树的镜像
// 简单

// https://leetcode-cn.com/problems/successor-lcci/
// 面试题 04.06. 后继者

// https://leetcode-cn.com/problems/bst-sequences-lcci/
// 面试题 04.09. 二叉搜索树序列

// https://leetcode-cn.com/problems/binode-lcci/
// 面试题 17.12. BiNode

// https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
// 剑指 Offer 34. 二叉树中和为某一值的路径
// 中等

// https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
// 剑指 Offer 07. 重建二叉树
// 中等

// https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/
// 剑指 Offer 68 - II. 二叉树的最近公共祖先

