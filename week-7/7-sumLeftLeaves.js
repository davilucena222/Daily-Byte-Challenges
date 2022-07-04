/* 
Given a binary tree, return the sum of all left leaves of the tree. Ex: Given the following tree…

    5
   / \
  2   12
     /  \
    3    8
return 5 (i.e. 2 + 3)
Ex: Given the following tree…

       2
      / \
    4    2
   / \ 
  3   9 
return 3
*/

//time complexity = O()
//space complexity = O()
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sumLeftLeaves(tree){
  let leftSide = false;
  let depthFirstSearch = (node, leave) => {
    if(node !== null){
      if(node.left === null && node.right === null && leftSide === true){
        console.log('entrei')
        leave.push(node.value);
      }
      leftSide = true;
      depthFirstSearch(node.left, leave);
      leftSide = false;
      depthFirstSearch(node.right, leave);
    }
  }
  
  let leaves = [];
  depthFirstSearch(tree, leaves);
  const result = leaves.reduce((sum, element) => sum + element, 0);

  return result;
}

//input examples
let t1 = new BinaryTree(5);
t1.left = new BinaryTree(2);
t1.right = new BinaryTree(12);
t1.right.left = new BinaryTree(3);
t1.right.right = new BinaryTree(8);
console.log(sumLeftLeaves(t1));

let t2 = new BinaryTree(2);
t2.left = new BinaryTree(4);
t2.right = new BinaryTree(2);
t2.left.left = new BinaryTree(3);
t2.left.right = new BinaryTree(9);
console.log(sumLeftLeaves(t2));