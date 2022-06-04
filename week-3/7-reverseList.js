/* 
  This question is asked by Facebook. Given a linked list, containing unique values, reverse it, and return the result.

  Ex: Given the following linked lists...

  1->2->3->null, return a reference to the node that contains 3 which points to a list that looks like the following: 3->2->1->null
  7->15->9->2->null, return a reference to the node that contains 2 which points to a list that looks like the following: 2->9->15->7->null
  1->null, return a reference to the node that contains 1 which points to a list that looks like the following: 1->null
*/

//time complexity = O(N)
//space complexity = O(1)
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseList(head){
  let start = head;
  let saved = null;
  let headed = head;
  
  while(start){
      headed = start;
      start = start.next;
      headed.next = saved;
      saved = headed;
  }
  
  return headed;
}

//input examples
let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);

let l2 = new ListNode(7);
l2.next = new ListNode(15);
l2.next.next = new ListNode(9);
l2.next.next.next = new ListNode(2);

let l3 = new ListNode(1);

console.log(reverseList(l1));
console.log(reverseList(l2));
console.log(reverseList(l3));