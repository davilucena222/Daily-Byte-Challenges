/* 
Given two binary trees, return whether or not both trees have the same leaf sequence. Two trees have the same leaf sequence if both trees’ leaves read the same from left to right.

Ex: Given the following trees…

   1
 /   \
1     3
and


   7
 /   \
1     2
return false as both the trees' leaves don't read the same from left to right (i.e. [1, 3] and [1, 2]).

Ex: Given the following trees…

    8
   / \
  2   29
    /  \
   3    9
and

    8
   / \
  2  29
 /   /  \
2   3    9
     \
      3
return true as both the trees' leaves read the same from left to right (i.e. [2, 3, 9] and [2, 3, 9]).
*/

//time complexity = O(M + N)
//space complexity = O(M + N)
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sameLeaves(root1, root2){

  function depthFirstSearch(node, leaves){
    if(node !== null){
      if(node.left === null && node.right === null){
        leaves.push(node.value);
      }
      depthFirstSearch(node.left, leaves);
      depthFirstSearch(node.right, leaves);
    }
  }

  let leaves1 = [];
  let leaves2 = [];

  depthFirstSearch(root1, leaves1);
  depthFirstSearch(root2, leaves2);

  return(leaves1.length === leaves2.length && leaves1.every((value, i) => value === leaves2[i]));
}

//input examples
let t1 = new BinaryTree(1);
t1.left = new BinaryTree(1);
t1.right = new BinaryTree(3);
let t2 = new BinaryTree(7);
t2.left = new BinaryTree(1);
t2.right = new BinaryTree(2);
console.log(sameLeaves(t1, t2));

let t3 = new BinaryTree(8);
t3.left = new BinaryTree(2);
t3.right = new BinaryTree(29);
t3.right.left = new BinaryTree(3);
t3.right.right = new BinaryTree(9);
let t4 = new BinaryTree(8);
t4.left = new BinaryTree(2);
t4.right = new BinaryTree(29);
t4.left.left = new BinaryTree(2);
t4.right.left = new BinaryTree(3);
t4.right.right = new BinaryTree(9);
t4.right.left.right = new BinaryTree(3);
console.log(sameLeaves(t3, t4));