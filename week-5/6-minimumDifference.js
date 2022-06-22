/* 
Given a binary search tree, return the minimum difference between any two nodes in the tree.

Ex: Given the following tree...
        2
       / \
      3   1
return 1.
Ex: Given the following tree...
        29
       /  \
     17   50
    /     / \
   1    42  59
return 8.
Ex: Given the following tree...
        2
         \
         100
return 98.
*/

//time compelexity = O(N)
//space complexity = O(N)
class BinaryTree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function minimumDifference1(root, firstNode){
  if(root == null){
    return null;
  }

  if(firstNode > root.value){
    return minimumDifference1(root.right, firstNode);
  } else if(firstNode < root.value){
    return minimumDifference1(root.left, firstNode);
  }

  return root.value;
}

function minimumDifference2(root, secondNode){
  if(root == null){
    return null;
  }

  if(secondNode > root.value){
    return minimumDifference2(root.right, secondNode);
  } else if(secondNode < root.value){
    return minimumDifference2(root.left, secondNode);
  }

  return root.value;
}

//input examples 
let t1 = new BinaryTree(2);
t1.left = new BinaryTree(3);
t1.right = new BinaryTree(1);

let t2 = new BinaryTree(29);
t2.left =  new BinaryTree(17);
t2.right = new BinaryTree(50);
t2.left.left = new BinaryTree(1);
t2.right.left = new BinaryTree(42)
t2.right.right = new BinaryTree(59);

let t3 = new BinaryTree(2);
t3.right = new BinaryTree(100);

console.log(minimumDifference1(t1, 3) - minimumDifference2(t1, 2));
console.log(minimumDifference1(t2, 50) - minimumDifference2(t2, 42));
console.log(minimumDifference1(t3, 100) - minimumDifference2(t3, 2));