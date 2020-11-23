class Node{
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    //  insert(key)：向树中插入一个新的键。
    insert(key){
        if(this.root === null){
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }
    insertNode(node, key){
        if(key < node.key){
            if(node.left === null){
                node.left = new Node(key)
            } else {
                this.insertNode(node.left, key)
            }
        } else {
            if(node.right === null){
                node.right = new Node(key)
            } else {
                this.insertNode(node.right, key)
            }
        }
    }
    //  search(key)：在树中查找一个键。如果节点存在，则返回 true；如果不存在，则返回
    //    false。  inOrderTraverse()：通过中序遍历方式遍历所有节点。
    //  preOrderTraverse()：通过先序遍历方式遍历所有节点。
    //  postOrderTraverse()：通过后序遍历方式遍历所有节点。
    //  min()：返回树中最小的值/键。
    //  max()：返回树中最大的值/键。
    //  remove(key)：从树中移除某个键。

    // 中序遍历
    // 是一种以上行顺序访问BST所有节点的遍历方式，也就是以从最小到最大的顺序遍历所有节点
    inOrderTraverse(node, callback){
        this.inOrderTraverseNode(node,callback)
    }
    inOrderTraverseNode(node, callback){
        if(node !== null){
            console.log('node.left')
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            console.log('node.right')
            this.inOrderTraverseNode(node.right, callback)
        }
    }

    // 先序遍历：是以优先于后代节点的顺序访问每个节点的
    preOrderTraverse(node, callback){
        this.preOrderTraverseNode(node, callback)
    }
    preOrderTraverseNode(node, callback){
        if(node !== null){
            callback(node.key)
            this.preOrderTraverseNode(node.left, callback)
            this.preOrderTraverseNode(node.right, callback)
        }
    }

    // 后序遍历：先访问节点的后代节点，在访问节点本身
    postOrderTraverse(node, callback){
        this.postOrderTraverseNode(node, callback)
    }
    postOrderTraverseNode(node, callback){
        if(node !== null){
            this.postOrderTraverseNode(node.left, callback)
            this.postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }

    // 查找最小值
    min(){
        return this.minNode()
    }
    minNode(){
        let cur = this.root;
        while(cur !== null && cur.left !== null){
            cur = cur.left
        }
        return cur.key
    }

    // 查找最大值
    max(){
        return this.maxNode()
    }
    maxNode(){
        let cur = this.root
        while(cur !== null && cur.right !== null){
            cur = cur.right
        }
        return cur.key
    }

    search(key){
        return this.searchNode(this.root, key)
    }
    searchNode(node, key){
        if(node == null){
            return false
        }
        console.log('node', node)
        if(node.key < key){
            console.log(node.right.key, 'right')
            this.searchNode(node.right, key)
        } else if(node.key > key){
            this.searchNode(node.left, key)
        } else {
            console.log('equal to ' , true)
            return 'testg'

            return 'eeee'
            return true
        }
    }
}

const tree = new BinarySearchTree(); 
tree.insert(11);

tree.insert(7); 
tree.insert(15); 
tree.insert(5); 
tree.insert(3); 
tree.insert(9); 
tree.insert(8); 
tree.insert(10); 
tree.insert(13); 
tree.insert(12); 
tree.insert(14); 
tree.insert(20); 
tree.insert(18); 
tree.insert(25);

let consoleNode = function (val){
    console.log(val)
}
tree.inOrderTraverse(tree.root, consoleNode)
tree.preOrderTraverse(tree.root, consoleNode)
tree.postOrderTraverse(tree.root, consoleNode)

// min
console.log('min')
console.log(tree.min())

console.log('max')
console.log(tree.max())

console.log('tree search 25', tree.search(25), tree.searchNode(tree.root, 25))