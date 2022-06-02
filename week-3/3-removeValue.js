/* 
  This question is asked by Google. Given a linked list and a value, remove all nodes containing the provided value, and return the resulting list.

  Ex: Given the following linked lists and values...

  1,2,3,null, value = 3, return 1,2,null
  8,1,1,4,12,null, value = 1, return 8,4,12,null
  7,12,2,9,null, value = 7, return 12,2,9,null
*/

//time complexity = O(N)
//space complexity = O(1)
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeValueFromList(list, value) {
  let dummy = new ListNode(-1);
  dummy.next = list;
  let tail = dummy;
  let currentResult = dummy;
  let removeValue = currentResult.next;

  if(tail.next === null){
    return null;
  }
  
  while(tail.next != null){
      if(removeValue.val == value){
          tail.next = removeValue.next
          removeValue = tail.next;
      } else {
          removeValue = removeValue.next;
          tail = tail.next;
      }
  }
  return currentResult.next;
}

//input examples
let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
console.log(removeValueFromList(l1, 3));

let l2 = new ListNode(8);
l2.next = new ListNode(1);
l2.next.next = new ListNode(1);
l2.next.next.next = new ListNode(4);
l2.next.next.next.next = new ListNode(12);
console.log(removeValueFromList(l2, 1));

let l3 = new ListNode(7);
l3.next = new ListNode(12);
l3.next.next = new ListNode(2);
l3.next.next.next = new ListNode(9);
console.log(removeValueFromList(l2, 7));