/* 
Given a binary search tree that contains unique values and two nodes within the tree, a, and b, return their lowest common ancestor.
Note: the lowest common ancestor of two nodes is the deepest node within the tree such that both nodes are descendants of it.

Ex: Given the following tree...
       7
      / \
    2    9
   / \ 
  1   5 
and a = 1, b = 9, return a reference to the node containing 7.
Ex: Given the following tree...

        8
       / \
      3   9
     / \ 
    2   6
and a = 2, b = 6, return a reference to the node containing 3.
Ex: Given the following tree...

        8
       / \
      6   9
and a = 6, b = 8, return a reference to the node containing 8.*/

//time complexity = O(N)
//space complexity = O(1)
class TreeNode {
  constructor(value) {
    this.left = null;
    this.value = value;
    this.right = null;
  }
}

function lowestCommonAncestor(root, a, b){
  while(root){
    if(root.value < a && root.value < b){
      root = root.right;
    } else if(root.value > a && root.value > b){
      root = root.left;
    } else {
      break;
    }
  }

  return root;
}

//input examples
let tree = new TreeNode(7);
tree.left = new TreeNode(2);
tree.right = new TreeNode(9);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(5);

let tree2 = new TreeNode(8);
tree2.left = new TreeNode(3);
tree2.right = new TreeNode(9);
tree2.left.left = new TreeNode(2);
tree2.left.right = new TreeNode(6);

let tree3 = new TreeNode(8);
tree3.left = new TreeNode(6);
tree3.right = new TreeNode(9);

console.log(lowestCommonAncestor(tree, 1, 9))
console.log(lowestCommonAncestor(tree2, 2, 6))
console.log(lowestCommonAncestor(tree3, 2, 6))