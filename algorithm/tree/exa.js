class Node{
    constructor(key){
        this.left = this.right = null
        this.val = key
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }
    // 为生成如下例子：
    // [1,2,2,3,null,null,3,4,null,null,4]
    insert(key){
        if(this.root == null){
            this.root = new Node(key)
            return
        }
        this.insertNodeLeft(this.root, key)
        this.insertNodeRight(this.root, key)
        
    }
    insertNodeLeft(node, key){
        console.log('node', node)
        if(node.left === null){
            node.left = new Node(key)
        } else {
            this.insertNodeLeft(node.left, key)
        }
    }
    insertNodeRight(node, key){
        if(node.right === null){
            node.right = new Node(key)
        } else {
            this.insertNodeRight(node.right, key)
        }
    }
}

const tree = new BinaryTree()
tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(4)

console.log('tree', tree)

function isBalanced(root) {
    if(root == null)return true
    const depth = function(node){
        if(node == null)return 0
        return Math.max(depth(node.left), depth(node.right)) + 1
    }
    // const judgeF = function(){
    //     const judge = Math.abs(depth(root.left) - depth(root.right)) <= 1 
    //     if(!judge)return 'unbalance'
    //     judgeF(root.left)
    //     judgeF(root.right)
    // }
    // const a = judgeF()
    // if(a === 'unbalance')return false
    // return true
    if(root.left == root.right)return true
     Math.abs(depth(root.left) - depth(root.right)) <= 1?true:false
     isBalanced(root.left) 
     isBalanced(root.right)
};  
console.log('isBalanced', isBalanced(tree.root))