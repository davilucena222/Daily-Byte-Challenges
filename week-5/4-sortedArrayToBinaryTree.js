/* Given an array of numbers sorted in ascending order, return a height-balanced binary search tree using every number from the array.
Note: height-balanced meaning that the level of any node’s two subtrees should not differ by more than one.

Ex: Given the following nums...

nums = [1, 2, 3] return a reference to the following tree...
       2
      /  \
     1    3
Ex: Given the following nums...

nums = [1, 2, 3, 4, 5, 6] return a reference to the following tree...
        3
       / \
      2   5
     /   / \
    1   4   6
*/

//time complexity = O(N) or O(h)
//space complexity = O(N)
class BalancedTree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sortedArrayToBinaryTree(array){
  if(!array.length){ //if array.length is false
    return null;  
  }

  //calculating the middle of the array 
  let result = Math.floor(array.length/2);

  //getting the current result of node.left or node.right and creating a new node and storing in the binary tree
  const node = new BalancedTree(array[result]);
  node.left = sortedArrayToBinaryTree(array.slice(0, result));
  node.right = sortedArrayToBinaryTree(array.slice(result + 1, array.length));

  return node;

}

//input examples
console.log(sortedArrayToBinaryTree([1,2,3]));
console.log(sortedArrayToBinaryTree([-10,-3,0,5,9]));