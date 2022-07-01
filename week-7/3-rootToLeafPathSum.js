/* 
Given a binary tree and a target, return whether or not there exists a root to leaf path such that all values along the path sum to the target.

Ex: Given the following tree…

      1
     / \
    5   2
   /   / \
  1  12   29
and a target of 15, return true as the path 1->2->12 sums to 15.
Ex: Given the following tree…

     104
    /   \
  39     31
 / \    /  \
32  1  9    10
and a target of 175, return true as the path 104->39->32 sums to 175.
*/

//time complexity = O(N)
//space complexity = O(N) worst case for unbalanced tree and O(LOG N) for balanced tree
class BinaryTree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function rootToLeafPathSum(root, targetElement){
  if(root === null){
    return false
  }

  let path = false;

  let depthFirstSearch = (node, target) => {
    if(node.left === null && node.right === null){
      if(node.value === target){
        path = true
      }

      return
    }

    if(node.left){
      depthFirstSearch(node.left, target - node.value)
    }

    if(node.right){
      depthFirstSearch(node.right, target - node.value)
    }
  }

  depthFirstSearch(root, targetElement)
  return path
}

//input examples 
let t1 = new BinaryTree(1);
t1.left = new BinaryTree(5);
t1.right = new BinaryTree(2);
t1.left.left = new BinaryTree(1);
t1.right.left = new BinaryTree(12);
t1.right.right = new BinaryTree(29);
console.log(rootToLeafPathSum(t1, 15));

let t2 = new BinaryTree(104);
t2.left = new BinaryTree(39);
t2.right = new BinaryTree(31);
t2.left.left = new BinaryTree(32);
t2.left.right = new BinaryTree(1);
t2.right.left = new BinaryTree(9);
t2.right.right = new BinaryTree(10);
console.log(rootToLeafPathSum(t2, 175));