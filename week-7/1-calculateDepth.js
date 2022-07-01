/* 
Given a binary tree, return its maximum depth.
Note: the maximum depth is defined as the number of nodes along the longest path from root node to leaf node.

Ex: Given the following tree…

    9
   / \
  1   2
return 2
Ex: Given the following tree…

    5
   / \
  1  29
    /  \
   4   13
return 3
*/

//time complexity = O(N)
//space complexity = O(N)
class BinaryTree{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function calculateDepth(root){
  if(root === null){
    return null;
  } 

  let queue = [root];
  let counter = 0;

  while(queue.length){
    let size = queue.length;
    if(queue.length > 0){
      counter = counter + 1;
    }

    while(size--){
      let node = queue.shift();

      if(node.left){
        queue.push(node.left);
      }

      if(node.right){
        queue.push(node.right);
      }
    }
  }
  
  return counter;
}

//input examples
let t1 = new BinaryTree(9);
t1.left = new BinaryTree(1);
t1.right = new BinaryTree(2);
console.log(calculateDepth(t1));

let t2 = new BinaryTree(5);
t2.left = new BinaryTree(1);
t2.right = new BinaryTree(29);
t2.right.left = new BinaryTree(4);
t2.right.right = new BinaryTree(13);
console.log(calculateDepth(t2));