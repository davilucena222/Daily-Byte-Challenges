/* 
Given a binary tree, return its zig-zag level order traversal (i.e. its level order traversal from left to right the first level, right to left the level the second, etc.).

Ex: Given the following tree…

    1
   / \
  2   3
return [[1], [3, 2]]
Ex: Given the following tree…

    8
   / \
  2  29
    /  \
   3    9
return [[8], [29, 2], [3, 9]]
*/

//time complexity = O(N)
//space complexity = O(N)
class BinaryTree {
  constructor(value){
    this.value = value;
    this.left = null;;
    this.right = null;
  }
}

function zigzagTransversal(root){
  if(root == null){
    return null;
  }
  
  let boolean = true;
  let queue = [root];
  let finalResult = [];

  while(queue.length > 0){
    let length = queue.length;

    if(boolean == false){
      boolean = true;
      queue.reverse();
      finalResult.push(queue.map(node => node.value));
    } else {
      boolean = false;
      finalResult.push(queue.map(node => node.value));
    }

    while(length--){
      let item = queue.shift();

      if(item.left){
        queue.push(item.left);
      }

      if(item.right){
        queue.push(item.right);
      }
    }
  }

  return finalResult;
}

//input examples
let t1 = new BinaryTree(1);
t1.left = new BinaryTree(2);
t1.right = new BinaryTree(3);
console.log(zigzagTransversal(t1));

let t2 = new BinaryTree(8);
t2.left = new BinaryTree(2);
t2.right = new BinaryTree(29);
t2.right.left = new BinaryTree(3);
t2.right.right = new BinaryTree(9);
console.log(zigzagTransversal(t2));