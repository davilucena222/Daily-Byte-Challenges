/* 
Given a binary tree, return its column order traversal from top to bottom and left to right. Note: if two nodes are in the same row and column, order them from left to right.

Ex: Given the following tree…

    8
   / \
  2   29
     /  \
    3    9
return [[2], [8, 3], [29], [9]]
Ex: Given the following tree…

     100
    /   \
  53     78
 / \    /  \
32  3  9    20
return [[32], [53], [100, 3, 9], [78], [20]]
*/

//time complexity = O(2N LOG N)
//space complexity = O(N)
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function gatherColumns(root){
  if(root === null){
    return null;
  }

  const map = new Map();
  let queue = [[root, 0]];

  while(queue.length){
    const columns = new Map();
    next = [];

    for(let [node, x] of queue){
      if(!columns.has(x)){
        columns.set(x, [node.value]);
      } else {
        columns.get(x).push(node.value);
      }

      if(node.left){
        next.push([node.left, x - 1]);
      }

      if(node.right){
        next.push([node.right, x + 1]);
      }
    }

    for([x, value] of columns){
      if(!map.has(x)){
        map.set(x, []);
      }
      map.get(x).push(...value);
    }

    queue = next;
  }
  // console.log([...map.entries()])
  return [...[...map.entries()].sort((a, b) => a[0] - b[0]).map(x => x[1])];
}

//input examples
let t1 = new BinaryTree(8);
t1.left = new BinaryTree(2);
t1.right = new BinaryTree(29);
t1.right.left = new BinaryTree(3);
t1.right.right = new BinaryTree(9);
console.log(gatherColumns(t1));

let t2 = new BinaryTree(100);
t2.left = new BinaryTree(53);
t2.right = new BinaryTree(78);
t2.left.left = new BinaryTree(32);
t2.left.right = new BinaryTree(3);
t2.right.left = new BinaryTree(9);
t2.right.right = new BinaryTree(20);
console.log(gatherColumns(t2));