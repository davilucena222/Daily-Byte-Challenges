/* 
Given an n-ary tree, return its level order traversal.
Note: an n-ary tree is a tree in which each node has no more than N children.

Ex: Give the following n-ary tree…

    8
  / | \
 2  3  29
return [[8], [2, 3, 29]]
Ex: Given the following n-ary tree…

     2
   / | \
  1  6  9
 /   |   \
8    2    2
   / | \
 19 12 90

return [[2], [1, 6, 9], [8, 2, 2], [19, 12, 90]]
*/

//time complexity = O(N)
//space complexity = O(N)
class BinaryTree {
  constructor(value){
    this.value = value;
    this.middle = null;
    this.left = null;
    this.right = null;
  }
}

function gatherNAryTreeLevels(root){
  if(root == null){
    return null;
  }

  let queue = [root];
  let result = [];

  while(queue.length > 0){
    let size = queue.length;
    result.push(queue.map(node => node.value));

    while(size--){
      let element = queue.shift();

      if(element.left){
        queue.push(element.left);
      }

      if(element.middle){
        queue.push(element.middle);
      }

      if(element.right){
        queue.push(element.right);
      }
    }
  }

  return result;
}

//input examples
let t1 = new BinaryTree(8);
t1.left = new BinaryTree(2);
t1.middle = new BinaryTree(3);
t1.right = new BinaryTree(29);
console.log(gatherNAryTreeLevels(t1));

let t2 = new BinaryTree(2);
t2.left = new BinaryTree(1);
t2.middle = new BinaryTree(6);
t2.right = new BinaryTree(9);
t2.left.left = new BinaryTree(8);
t2.middle.middle = new BinaryTree(2);
t2.right.right = new BinaryTree(2);
t2.middle.middle.left = new BinaryTree(19);
t2.middle.middle.middle = new BinaryTree(12);
t2.middle.middle.right = new BinaryTree(90);
console.log(gatherNAryTreeLevels(t2));