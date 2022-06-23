/* 
Given a binary tree, return its level order traversal where the nodes in each level are ordered from left to right.

Ex: Given the following tree...

    4
   / \
  2   7
return [[4], [2, 7]]
Ex: Given the following tree...

    2
   / \
  10  15
        \
         20
return [[2], [10, 15], [20]]
Ex: Given the following tree...

    1
   / \
  9   32
 /      \
3        78
return [[1], [9, 32], [3, 78]]
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

function gatherLevels(root){
  if(root == null){
    return [];
  }

  let queue = [root];
  let result = [];

  while(queue.length > 0){
    let length = queue.length;
    //copying each element of the queue and putting in his own array
    result.push(queue.map(node => node.value));

    while(length--){
      let node = queue.shift();

      if(node.left){
        queue.push(node.left);
      }

      if(node.right){
        queue.push(node.right);
      }
    }
  }

  return result;
}

//input examples
let t1 = new BinaryTree(4);
t1.left = new BinaryTree(2);
t1.right = new BinaryTree(7);
console.log(gatherLevels(t1));

let t2 = new BinaryTree(2);
t2.left = new BinaryTree(10);
t2.right = new BinaryTree(15);
t2.right.right = new BinaryTree(20);
console.log(gatherLevels(t2));

let t3 = new BinaryTree(1);
t3.left = new BinaryTree(9);
t3.right = new BinaryTree(32);
t3.left.left = new BinaryTree(3);
t3.right.right = new BinaryTree(78);
console.log(gatherLevels(t3));
