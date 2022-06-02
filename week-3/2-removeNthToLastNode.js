/* 
  This question is asked by Facebook. Given a linked list and a value n, remove the nth to last node and return the resulting list.

  Ex: Given the following linked lists...

  1->2->3->null, n = 1, return 1->2->null
  1->2->3->null, n = 2, return 1->3->null
  1->2->3->null, n = 3, return 2->3->null
*/

class ListNode {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
//time complexity = O(N)
//space complexity = O(1)
function removeNthToLastNode(list, n){
  //creating the list node and initializing with -1 that is gonna point to the next, the next is the first element of the list
  let dummyHead = new ListNode(-1);
  dummyHead.next = list; //pointing the dummyHead for the first element of the list 
  let currentResult = dummyHead; //storing the current result dummyHead for incrementing 
  let counter = 0; //counter to calculate the index that will be removed
  let tail = list;  //the tail of the list or poiting to the first element

  while(counter < n){ //while counter is smaller than the index that will be removed
    counter += 1;
    tail = tail.next; //incrementing tail
  }

  let removeNode = list; //assigning removeNode to the list
  let previous = dummyHead; //assing previous to the current result of the dummyHead

  while(tail){ //while tail exists
    tail = tail.next; //incrementing tail
    removeNode = removeNode.next; //incrementing removeNode
    previous = previous.next; //incrementing previous
  }

  previous.next = removeNode.next; //assigning previous to the next item (the item that is after the position of the item that was removed)

  return currentResult.next;
}

//input examples
let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
console.log(removeNthToLastNode(l1, 1));

let l2 = new ListNode(1);
l2.next = new ListNode(2);
l2.next.next = new ListNode(3);
console.log(removeNthToLastNode(l2, 2));

let l3 = new ListNode(1);
l3.next = new ListNode(2);
l3.next.next = new ListNode(3);
console.log(removeNthToLastNode(l3, 3));