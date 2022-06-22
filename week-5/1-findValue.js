/* 
  This question is asked by Google. Given the reference to the root of a binary search tree and a search value, return the reference to the node that contains the value if it exists and null otherwise.
  Note: all values in the binary search tree will be unique.

  Ex: Given the tree...

          3
        / \
        1   4
  and the search value 1 return a reference to the node containing 1.
  Ex: Given the following tree...

          7
        / \
        5   9
          / \ 
          8   10
  and the search value 9 return a reference to the node containing 9.
  Ex: Given the following tree...

          8
        / \
        6   9
  and the search value 7 return null.
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

function returningTheReferenceNode(root, value){
  if(root == null){
    return null;
  }

  if(value > root.value){
    return returningTheReferenceNode(root.right, value);
  } else if(value < root.value){
    return returningTheReferenceNode(root.left, value);
  }

  return root.value;
}

//input examples
let tree = new BinarySearchTree(3);
tree.left = new BinarySearchTree(1);
tree.right = new BinarySearchTree(4);

let tree2 = new BinarySearchTree(7);
tree2.left = new BinarySearchTree(5);
tree2.right = new BinarySearchTree(9);
tree2.right.left = new BinarySearchTree(8);
tree2.right.right = new BinarySearchTree(10);

let tree3 = new BinarySearchTree(8);
tree3.left = new BinarySearchTree(6);
tree3.right = new BinarySearchTree(9);

console.log(returningTheReferenceNode(tree, 1));
console.log(returningTheReferenceNode(tree2, 9));
console.log(returningTheReferenceNode(tree3, 7));