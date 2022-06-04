/* 
  This question is asked by Amazon. Given a non-empty linked list, return the middle node of the list. If the linked list contains an even number of elements, return the node closer to the end.
  Ex: Given the following linked lists...
  
  1->2->3->null, return 2
  1->2->3->4->null, return 3
  1->null, return 1
*/

//time complexity = O(N)
//space complexity = O(1)
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findMiddleElement(head) {
  let dummyHead = new ListNode(null);
  dummyHead.next = head;

  let currentResult = dummyHead; //to return the final result of the dummyHead

  let goThrough = dummyHead;
  let verifyingOneElement = dummyHead.next;
  let counter = 0;

  if(currentResult.next == null){
      return null;
  }
  
  if(verifyingOneElement.next == null){
      verifyingOneElement.value;
  }
  
  while(goThrough.next != null){
      goThrough = goThrough.next;
      counter++;
  }

  let result = 0;
  if((counter % 2) == 0){
    result = (counter/2) + 1;
  } else {
    result = (counter/2) + 0.5;
  }
  
  while(currentResult.next != null && currentResult.next.value != result){
      currentResult = currentResult.next;
  }
  
  return currentResult.next.value;
}

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
console.log(findMiddleElement(l1));

let l2 = new ListNode(1);
l2.next = new ListNode(2);
l2.next.next = new ListNode(3);
l2.next.next.next = new ListNode(4);
console.log(findMiddleElement(l2));

let l3 = new ListNode(1);
console.log(findMiddleElement(l3));