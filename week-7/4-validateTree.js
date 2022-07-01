/* 
Given a binary tree, containing unique values, determine if it is a valid binary search tree.
Note: the invariants of a binary search tree (in our case) are all values to the left of a given node are less than the current node’s value, all values to the right of a given node are greater than the current node’s value, and both the left and right subtrees of a given node must also be binary search trees.

Ex: Given the following binary tree…

   1
 /   \
2     3
return false.
Ex: Given the following tree…

   2
 /   \
1     3
return true.
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

function validateTree(node, minimum, maximum){//(3,1,null)
  if(node === null){
    return true
  }

  if((minimum !== null && node.value <= minimum) || (maximum !== null && node.value >= maximum)){
    return false
  }

  return validateTree(node.right, node.value, maximum) && validateTree(node.left, minimum, node.value)  
}

function validate(root){
  return validateTree(root, null, null)
}

//input examples
let t1 = new BinaryTree(100)
t1.left = new BinaryTree(90)
t1.left.left = new BinaryTree(80)
t1.right = new BinaryTree(200)
t1.right.left = new BinaryTree(190)
t1.right.right = new BinaryTree(300)
console.log(validate(t1))

let t2 = new BinaryTree(1)
t2.left = new BinaryTree(2)
t2.right = new BinaryTree(3)
console.log(validate(t2))

let t3 = new BinaryTree(2)
t3.left = new BinaryTree(1)
t3.right = new BinaryTree(3)
console.log(validate(t3))