/* 
Given a binary tree, return a list of strings containing all root to leaf paths.

Ex: Given the following tree…

   1
 /   \
2     3
return ["1->2", "1->3"]
Ex: Given the following tree…

    8
   / \
  2  29
    /  \
   3    9
return ["8->2", "8->29->3", "8->29->9"]
*/

//time complexity = O(N)
//space complexity = O(N)
class BinaryTree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function rootToLeafPath(root){
  if(root == null){
    return [];
  }

  if(root.left == null && root.right == null){
    return [`${root.value}`];
  } else if(root.left || root.right){
    let leftNode = rootToLeafPath(root.left).map(node => root.value + '->' + node);
    let rightNode = rootToLeafPath(root.right).map(node => root.value + '->' + node);
    
    //destructuring the array elements of left Node and right Node to store in an unique array
    return [...leftNode, ...rightNode];
  }
}

//input examples
let t1 = new BinaryTree(1);
t1.left = new BinaryTree(2);
t1.right = new BinaryTree(3);
console.log(rootToLeafPath(t1));

let t2 = new BinaryTree(8);
t2.left = new BinaryTree(2);
t2.right = new BinaryTree(29);
t2.left.right = new BinaryTree(3);
t2.right.right = new BinaryTree(9);
console.log(rootToLeafPath(t2));