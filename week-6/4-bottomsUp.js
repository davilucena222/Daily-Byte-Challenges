/* 
Given a binary tree, returns of all its levels in a bottom-up fashion (i.e. last level towards the root). Ex: Given the following tree…

        2
       / \
      1   2
return [[1, 2], [2]]
Ex: Given the following tree…

       7
      / \
    6    2
   / \ 
  3   3 
return [[3, 3], [6, 2], [7]]
*/
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function bottomsUp(root) {
  if (root == null) {
    return [];
  }

  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let size = queue.length;
    result.push(queue.map(node => node.value));

    while (size--) {
      let element = queue.shift();

      if(element.left){
        queue.push(element.left);
      }

      if(element.right){
        queue.push(element.right);
      }
    }
  }

  result.reverse();
  return result;
}

//input examples
let t1 = new BinaryTree(2);
t1.left = new BinaryTree(1);
t1.right = new BinaryTree(2);
console.log(bottomsUp(t1));

let t2 = new BinaryTree(7);
t2.left = new BinaryTree(6);
t2.right = new BinaryTree(2);
t2.left.left = new BinaryTree(3);
t2.left.right = new BinaryTree(3);
console.log(bottomsUp(t2));