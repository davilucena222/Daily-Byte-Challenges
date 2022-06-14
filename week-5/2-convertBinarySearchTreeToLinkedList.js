/* 
Given a binary search tree, rearrange the tree such that it forms a linked list where all its values are in ascending order.

Ex: Given the following tree...
        5
       / \
      1   6
return...

1
 \
  5
   \
    6
Ex: Given the following tree...

       5
      / \
    2    9
   / \ 
  1   3 
return...

1
 \
  2
   \
    3
     \
      5
       \
        9
Ex: Given the following tree...

5
 \
  6
return...

5
 \
  6
*/

//time complexity = O(N)
//space complexity = O(N)

class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function increasingBST(root) {
  let tree = [];
  
  function verifyingNode(node){
      if(node == null){
          return null;
      }
      //diving into the tree until the node is null
      verifyingNode(node.left);
      //pushing into the array all the left values of the tree
      tree.push(node.val);
      //diving into the right node tree 
      verifyingNode(node.right);
  }
  
  verifyingNode(root);
  
  let newTree = new TreeNode();
  let current = newTree;
  
  for(let i = 0; i < tree.length; i++){
      current.right = new TreeNode(tree[i]);
      current = current.right;
  }
  
  return newTree.right;
}

//input examples
let tree = new TreeNode(5);
tree.left = new TreeNode(2);
tree.right = new TreeNode(6);

let tree2 = new TreeNode(5);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(9)
tree2.left.left = new TreeNode(1);
tree2.left.right = new TreeNode(3);

let tree3 = new TreeNode(5);
tree3.right = new TreeNode(6);

console.log(increasingBST(tree));
console.log(increasingBST(tree2));
console.log(increasingBST(tree3));