/* 
Given a binary search tree, return its mode (you may assume the answer is unique). If the tree is empty, return -1. Note: the mode is the most frequently occurring value in the tree.

Ex: Given the following tree...

        2
       / \
      1   2
return 2.

Ex: Given the following tree...

         7
        / \
      4     9
     / \   / \
    1   4 8   9
               \
                9  
return 9.
*/
//time complexity = O(N)
//space complexity = O(N)
class BinarySearchTree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findTheMode(root){
  const array = [root];
  const map = {};
  let maximum = -Infinity;

  while(array.length){
    const node = array.shift();//remove the last element of the array
    if(node && (node.left || node.right)){
      //pushing the adjacent elements of the node to the array
      if(node.left){
        array.push(node.left);
      }

      if(node.right){
        array.push(node.right);
      }
    }

    if(node && Number.isInteger(node.value)){
      map[node.value] = map[node.value] + 1 | 1;//if the key in the map object exists then increment the value of the key
      maximum = Math.max(map[node.value], maximum);//store the maximum value of the key in the map object 
    }
  }
  //comparing each key and value in the map object with the maximum result to find the most element that is repeated
  return Object.keys(map).filter(data => map[data] == maximum);
}


//input examples
let t1 = new BinarySearchTree(2);
t1.left = new BinarySearchTree(1);
t1.right = new BinarySearchTree(2);

let t2 = new BinarySearchTree(7);
t2.left = new BinarySearchTree(4);
t2.right = new BinarySearchTree(9);
t2.left.left = new BinarySearchTree(1);
t2.left.right = new BinarySearchTree(4);
t2.right.right = new BinarySearchTree(9);
t2.right.left = new BinarySearchTree(8);
t2.right.right.right = new BinarySearchTree(9);
console.log(findTheMode(t1));
console.log(findTheMode(t2));