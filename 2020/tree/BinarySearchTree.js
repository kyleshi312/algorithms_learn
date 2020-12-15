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
    // 参考地址：https://www.cnblogs.com/bigsai/p/11393609.html
    // 是一种以上行顺序访问BST所有节点的遍历方式，也就是以从最小到最大的顺序遍历所有节点
    inOrderTraverse(node, callback){
        this.inOrderTraverseNode(node,callback)
    }
    inOrderTraverseNode(node, callback){
        if(node != null){
            // console.log('mmid pre', node.key)
            console.log('inOrderTraverseNode node.left ----------- before')
            this.inOrderTraverseNode(node.right, callback)
            console.log('inOrderTraverseNode node.left ----------- after')
            console.log('mmid', node.key)
            console.log('inOrderTraverseNode node.right ----------- before')
            this.inOrderTraverseNode(node.left, callback)
            console.log('inOrderTraverseNode node.right ----------- after')
            // console.log('mmid after', node.key)

        }
    }

    // 先序遍历：是以优先于后代节点的顺序访问每个节点的
    preOrderTraverse(node, callback){
        this.preOrderTraverseNode(node, callback)
    }
    // 先序遍历: recursive
    // preOrderTraverseNode(node, callback){
    //     if(node != null){
    //         // console.log(callback)
    //         callback(node.key)
    //         this.preOrderTraverseNode(node.left, callback)
    //         this.preOrderTraverseNode(node.right, callback)
    //     }
    // }
    // 先序遍历: stack
    // preOrderTraverseNode(node, callback){
    //     if(node == null)return
    //     const stackArr = []
    //     if(node)stackArr.push(node)
    //     while(stackArr.length){
    //         let outputNode = stackArr.pop()
    //         if(outputNode.right)stackArr.push(outputNode.right)
    //         if(outputNode.left)stackArr.push(outputNode.left)
    //         callback(outputNode.key)
    //     }
    // }
    // 先序遍历: 经典解法
    preOrderTraverseNode(node, callback){
        const stackArr = []
        while(stackArr.length || node){
            if(node){
                callback(node.key)
                stackArr.push(node)
                node = node.left
            } else {
                node = stackArr.pop()
                node = node.right
            }
        }
    }
    // 后序遍历：先访问节点的后代节点，在访问节点本身
    postOrderTraverse(node, callback){
        this.postOrderTraverseNode(node, callback)
    }
    postOrderTraverseNode(node, callback){
        if(node != null){
            console.log('postOrderTraverseNode node.left')
            this.postOrderTraverseNode(node.left, callback)
            console.log('postOrderTraverseNode mid')
            this.postOrderTraverseNode(node.right, callback)
            console.log('postOrderTraverseNode node.right')
            callback(node.key)
        }
    }

    // 查找最小值
    min(){
        return this.minNode(this.root)
    }
    minNode(node){
        let cur = node;
        while(cur !== null && cur.left !== null){
            cur = cur.left
        }
        return cur
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
        // console.log('node', node)
        if(node.key < key){
            // console.log(node.right.key, 'right')
            this.searchNode(node.right, key)
        } else if(node.key > key){
            this.searchNode(node.left, key)
        } else {
            // console.log('equal to ' , true)
            return true
        }
    }
    getNodeHeight(node){
        if(node == null)return -1
        // // console.log('getNodeHeight_____-----_____', 
        //     'this.getNodeHeight(node.left)',
        //     this.getNodeHeight(node.left),
        //     'this.getNodeHeight(node.right)',
        //     this.getNodeHeight(node.right)
        // )
        
        return Math.max(
            this.getNodeHeight(node.left), this.getNodeHeight(node.right)
        ) + 1
    }

    // removeNode
    remove(key){
        this.root = this.removeNode(this.root, key)
    }
    removeNode(node, key){
        if(node == null)return null
        if(key < node.key){
            node.left = this.removeNode(node.left, key)
            return node
        } else if(key > node.key){
            node.right = this.removeNode(node.right, key)
            return node
        } else {
            if(node.left == null && node.right == null){
                node = null
                return null
            }
            if(node.left === null){
                node = node.right
                return node
            } else if(node.right === null){
                node = node.left
                return node
            }
            let aux = this.minNode(node.right)
            node.key = aux.key
            // console.log('aux', aux)
            node.right = this.removeNode(node.right, aux.key)
            // console.log('remove node befor', node)
            return node
        }
    }
    // 第k大的节点
    kthLargest(root, k) {
        const dfs = function(node){
            if(node != null){
                dfs(node.right)
                resArr.push(node.key)
                if(resArr.length >= k)return
                dfs(node.left)
            }
        }
        let resArr = []
        res = dfs(root)
        console.log(resArr)
        return resArr[k-1]
    };
    
}

const tree = new BinarySearchTree(); 
// tree.insert(11);

tree.insert(11);
tree.insert(1);
tree.insert(3);
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

console.log('tree 11', tree)

// let consoleNode = function (val){
//     console.log(val)
// }
// var kthLargest = function(root, k) {
//     const dfs = function(node){
//         if(node == null){
//             return
//         }
//         dfs(node.right)
//         console.log('key', node.key)
//         resArr.push(node.key)
//         // if(resArr.length >= k)return
//         dfs(node.left)
//     }
//     let resArr = []
//     console.log('resArr', resArr)
//     res = dfs(root)
//     return resArr[k-1]
// };
// console.log('kth 2', kthLargest(tree.root, 2))
// console.log('tree', tree.root)
// tree.inOrderTraverse(tree.root, consoleNode)
// tree.preOrderTraverse(tree.root, consoleNode)
// tree.postOrderTraverse(tree.root, consoleNode)
// console.log('tree root', tree.root)
// min
// console.log('min')
// console.log(tree.min())

// console.log('max')
// console.log(tree.max())

// console.log('tree search 25', tree.search(25), tree.searchNode(tree.root, 25))
function j(obj){
    if(obj == null)return 'null'
    return JSON.parse(JSON.stringify(obj))
}
// console.log('remove 8', tree.remove(8), j(tree))
// console.log('remove 5', tree.remove(5), j(tree))
// console.log('remove 15', tree.remove(15), j(tree))

// 自平衡树
// Adelson-Velskii-Landi 树
// AVL树
// 一种自平衡的二叉搜索树
// difinition： 任意一个节点的左右两侧子树的高度之差最多为1 

// 平衡因子
const BalanceFactor = { 
    UNBALANCED_RIGHT: 1, 
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3, 
    SLIGHTLY_UNBALANCED_LEFT: 4, 
    UNBALANCED_LEFT: 5 
}
class AVLTree extends BinarySearchTree{
    constructor(){
        super()
        this.root = null
    }
    getNodeHeight(node){
        if(node == null){
            return -1
        }
        // console.log('getNodeHeight', node)
        let obj = {}
        if(obj[node] != null){
            return obj[node]
        }
        return obj[node] = Math.max(
            this.getNodeHeight(node.left),
            this.getNodeHeight(node.right)
        ) + 1
        // return Math.max(
        //     this.getNodeHeight(node.left),
        //     this.getNodeHeight(node.right)
        // ) + 1
    }
    getFactor(node){
        if(!node)return null
        const height = this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
        switch(height){
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
            case 2:
                return BalanceFactor.UNBALANCED_LEFT
            default:
                return BalanceFactor.BALANCED
        }
    }
    rotationLL(node){
        const tmp = node.left
        node.left = tmp.right
        tmp.right = node
        return tmp
    }
    rotationRR(node){
        const tmp = node.right
        node.right = tmp.left
        tmp.left = node
        return tmp
    }
    rotationLR(node){
        node.right = this.rotationLL(node.right)
        return this.rotationRR(node)
    }
    rotationRL(node){
        node.left = this.rotationRR(node.left)
        return this.rotationLL(node)
    }
    insert(key){
        this.root = this.insertNode(this.root, key)
    }
    insertNode(node, key){
        if(node == null){
            return new Node(key)
        }
        if(key > node.key){
            node.right = this.insertNode(node.right, key)
        } else if(key < node.key){
            node.left = this.insertNode(node.left, key)
        } else {
            return node
        }
        const balanceFactor = this.getFactor(node)
        if(balanceFactor === BalanceFactor.UNBALANCED_RIGHT){
            if(key < node.right.key){
                node = this.rotationLR(node)
            } else {
                node = this.rotationRR(node)
            }
        } else if(balanceFactor === BalanceFactor.UNBALANCED_LEFT){
            if(key > node.left.key){
                node = this.rotationRL(node)
            } else {
                node = this.rotationLL(node)
            }
        }
        return node
    }
    remove(key){
        this.root = this.removeNode(this.root, key)
    }
    removeNode(node, key){
        // console.log(super.removeNode)
        node = super.removeNode(node, key)
        // console.log('remove after node', node)
        const balanceFactor = this.getFactor(node)
        if(balanceFactor === BalanceFactor.UNBALANCED_LEFT){
            const balanceFactorLeft = this.getFactor(node.left)
            if(balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT || BalanceFactor.BALANCED){
                node = this.rotationLL(node)
            }else {
                node = this.rotationRL(node)
            }
        } else if(balanceFactor === BalanceFactor.UNBALANCED_RIGHT){
            const balanceFactorRight = this.getFactor(node.right)
            if(balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT || BalanceFactor.BALANCED){
                node = this.rotationRR(node)
            }else{
                node = this.rotationLR(node)
            }
        }
        return node

    }
}

let avlTree = new AVLTree()
avlTree.insert(50)
avlTree.insert(70)
avlTree.insert(30)
avlTree.insert(10)
avlTree.insert(40)
avlTree.insert(35)

avlTree.insert(50)
avlTree.insert(30)
avlTree.insert(70)
avlTree.insert(60)
avlTree.insert(80)
avlTree.insert(65)

console.log('avlTree', avlTree)

const Colors = {
    BLACK: 'black',
    RED: 'red',
}
class RedBlackNode extends Node { 
    constructor(key) { 
        super(key); 
        this.key = key; 
        this.color = Colors.RED; // {6} 
        this.parent = null; // {7} 
    } 
    isRed() { 
        return this.color === Colors.RED; 
    } 
}
class RedBlackTree extends BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(key){
        if(this.root == null){
            this.root = new RedBlackNode(key)
            this.root.color = Colors.BLACK
        } else {
            const newNode = this.insertNode(this.root, key)
            this.fixTreeProperties(newNode)
        }
    }
    insertNode(node, key){
        if(key < node.key){
            if(node.left == null){
                node.left = new RedBlackNode(key)
                node.left.parent = node
                return node.left
            } else {
                return this.insertNode(node.left, key)
            }
        } else {
            if(node.right == null){
                node.right = new RedBlackNode(key)
                node.right.parent = node
                return node.right
            } else {
                return this.insertNode(node.right, key)
            }
        }
    }
    rotationLL(node){
        const tmp = node.left
        node.left = tmp.right
        if(tmp.right && tmp.right.key){
            tmp.right.parent = node
        }
        tmp.parent = node.parent
        if(node.parent === null){
            this.root = tmp
        } else {
            if(node === node.parent.left){
                node.parent.left = tmp
            } else {
                node.parent.right = tmp
            }
        }
        tmp.right = node
        node.parent = tmp
    }
    rotationRR(node){
        const tmp = node.right
        node.right =tmp.left
        if(tmp.left && tmp.left.key){
            tmp.left.parent = node
        }
        // tmp的父节点，判断node是否是根节点
        tmp.parent = node.parent
        if(tmp.parent == null){
            this.root = tmp
        }else{
            if(node === node.parent.left){
                node.parent.left = tmp
            } else{
                node.parent.right = tmp
            }
        }
        // tmp 左节点，及左节点的父节点
        tmp.left = node
        node.parent = tmp
    }
    fixTreeProperties(node){
        while(node && node.parent && node.parent.isRed()
                && node.isRed()
        ){
            const parent = node.parent
            const grandParent = node.parent.parent
            if(grandParent && grandParent.left === parent){
                const uncle = grandParent.right
                if(uncle && uncle.isRed()){
                    grandParent.color = Colors.RED
                    parent.color = Colors.BLACK
                    parent.color = Colors.BLACK
                    ndoe = grandParent
                }else{
                    if(node === parent.right){
                        this.rotationRR(parent)
                        node = parent
                        parent = node.parent
                    }
                    this.rotationLL(parent)
                    parent.color = Colors.BLACK
                    grandParent.color = Colors.RED
                    node = parent
                }
            } else {
                const uncle = grandParent.left
                if(uncle && uncle.isRed()){
                    grandParent.color = Colors.RED
                    parent.color = Colors.BLACK
                    parent.color = Colors.BLACK
                    ndoe = grandParent
                }else{
                    if(node === parent.left){
                        this.rotationLL(parent)
                        node = parent
                        parent = node.parent
                    }
                    this.rotationRR(parent)
                    grandParent.color = Colors.RED
                    parent.color = Colors.BLACK
                    node = parent
                }
            }
        }
        this.root.color = Colors.BLACK
    }
}

