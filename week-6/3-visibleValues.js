/* 
Given a binary tree return all the values you’d be able to see if you were standing on the left side of it with values ordered from top to bottom.

Ex: Given the following tree…

-->    4
      / \
-->  2   7
return [4, 2]
Ex: Given the following tree…

-->        7
         /  \
-->     4     9
       / \   / \
-->   1   4 8   9
                 \
-->               9
return [7, 4, 1, 9]
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

function visibleValues(root){
  if(root == null){
    return [];
  }

  let queue = [root];
  let result = [];

  while(queue.length > 0){
    let size = queue.length;
    result.push(queue[0].value);

    while(size-- && size >= 0){
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
t1.right = new BinaryTree(2);
console.log(visibleValues(t1));

let t2 = new BinaryTree(7);
t2.left = new BinaryTree(4);
t2.right = new BinaryTree(9);
t2.left.left = new BinaryTree(1);
t2.left.right = new BinaryTree(4);
t2.right.left = new BinaryTree(8);
t2.right.right = new BinaryTree(9);
t2.right.right.right = new BinaryTree(9);
console.log(visibleValues(t2));