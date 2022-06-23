/* 
Given a binary tree, return the largest value in each of its levels. Ex: Given the following tree…

    2
   / \
  10  15
        \
         20
return [2, 15, 20]
Ex: Given the following tree…

          1
         / \
        5   6
       / \   \  
      5   3   7 
return [1, 6, 7]
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

function maxValueInEachLevel(root){
  if(root == null){
    return [];
  }

  let queue = [root];//adding the root tree
  let resultTree = [];

  while(queue.length){
    let queueSize = queue.length;
    let result = Math.max(queue[0].value, queue[queue.length - 1].value);
    resultTree.push(result);

    while(queueSize--){
      let currentNode = queue.shift();

      if(currentNode.left){
        queue.push(currentNode.left);
      }

      if(currentNode.right){
        queue.push(currentNode.right);
      }
    }
  }

  return resultTree;
}

//input examples
let t1 = new BinaryTree(2);
t1.left = new BinaryTree(10);
t1.right = new BinaryTree(15);
t1.right.right = new BinaryTree(20);
console.log(maxValueInEachLevel(t1));

let t2 = new BinaryTree(1);
t2.left = new BinaryTree(5);
t2.right = new BinaryTree(6);
t2.left.left = new BinaryTree(5);
t2.left.right = new BinaryTree(3);
t2.right.right = new BinaryTree(7);
console.log(maxValueInEachLevel(t2));