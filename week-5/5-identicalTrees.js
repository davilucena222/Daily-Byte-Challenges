/* 
Given two binary trees, return whether or not the two trees are identical. Note: identical meaning they exhibit the same structure and the same values at each node. Ex: Given the following trees...

        2
       / \
      1   3
    2
   / \
  1   3

return true.

Ex: Given the following trees...

        1
         \
          9
           \
           18
    1
   /
  9
   \
    18

return false.

Ex: Given the following trees...

        2
       / \
      3   1
    2
   / \
  1   3

return false.   
*/

//time complexity = O(N)
//space complexity = O(log N) for completely balanced tree and O(N) for unbalanced tree
class TreeNode {
  constructor(value) {
    this.left = null;
    this.value = value;
    this.right = null;
  }
}

function identicalTree(tree1, tree2){
  //even if the two nodes are null that means both are equal
  if(tree1 === null && tree2 === null){
    return true;
  }

  //checking if one of the values in both trees are null
  if(tree1 == null || tree2 == null){
    return false;
  } 

  //checking if the both trees are different
  if(tree1.value !== tree2.value){
    return false;
  } 
  
  //if none of the if statements above return nothing then the recursion continue until find that all nodes are null and will return true
  return identicalTree(tree1.left, tree2.left) && identicalTree(tree1.right, tree2.right);
}

//input examples
let treeA = new TreeNode(2);
treeA.left = new TreeNode(1);
treeA.right = new TreeNode(3);

let treeAA = new TreeNode(2);
treeAA.left = new TreeNode(1);
treeAA.right = new TreeNode(3);

let treeB = new TreeNode(1);
treeB.right = new TreeNode(9);
treeB.right.right = new TreeNode(18);

let treeBB = new TreeNode(1);
treeBB.left = new TreeNode(9);
treeBB.left.right = new TreeNode(18);

let treeC = new TreeNode(2);
treeC.left = new TreeNode(3);
treeC.right = new TreeNode(1);

let treeCC = new TreeNode(2);
treeCC.left = new TreeNode(1);
treeCC.right = new TreeNode(3);

console.log(identicalTree(treeA, treeAA));
console.log(identicalTree(treeB, treeBB));
console.log(identicalTree(treeC, treeCC));