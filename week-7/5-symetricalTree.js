/* 
Given a binary tree, return whether or not it forms a reflection across its center (i.e. a line drawn straight down starting from the root).
Note: a reflection is when an image, flipped across a specified line, forms the same image.

Ex: Given the following tree…

   2
 /   \
1     1
return true as when the tree is reflected across its center all the nodes match.
Ex: Given the following tree…

    1
   / \
  5   5
   \   \
    7   7
return false as when the tree is reflected across its center the nodes containing sevens do not match.
*/

//time complexity = O(N)
//space complexity = O(N)
class BinaryTree {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

function symetricalTree(root){
    if(root === null){
        return true
    }

    return depthFirstSearch(root.left, root.right)
}

function depthFirstSearch(leftNode, rightNode){
    if(!leftNode && !rightNode){
        return true
    }

    if((leftNode && !rightNode) || (!leftNode && rightNode) || (leftNode.value !== rightNode.value) || (rightNode.value !== leftNode.value)){
        return false
    }

    return depthFirstSearch(leftNode.left, rightNode.right) && depthFirstSearch(leftNode.right, rightNode.left)
}

//input examples
let t1 = new BinaryTree(2)
t1.left = new BinaryTree(1)
t1.right = new BinaryTree(1)
console.log(symetricalTree(t1))

let t2 = new BinaryTree(1)
t2.left = new BinaryTree(5)
t2.right = new BinaryTree(5)
t2.left.right = new BinaryTree(7)
t2.right.right = new BinaryTree(7)
console.log(symetricalTree(t2))

let t3 = new BinaryTree(1)
t3.left = new BinaryTree(2)
t3.right = new BinaryTree(2)
t3.left.left = new BinaryTree(3)
t3.left.right = new BinaryTree(4)
t3.right.left = new BinaryTree(4)
t3.right.right = new BinaryTree(3)
console.log(symetricalTree(t3))