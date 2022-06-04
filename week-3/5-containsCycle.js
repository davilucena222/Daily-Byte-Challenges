/* 
  This question is asked by Microsoft. Given a linked list, containing unique numbers, return whether or not it has a cycle.
  Note: a cycle is a circular arrangement (i.e. one node points back to a previous node)

  Ex: Given the following linked lists...

  1->2->3->1 -> true (3 points back to 1)
  1->2->3 -> false
  1->1 true (1 points to itself)
*/

//time complexity = O(N)
//space complexity = O(1)
class ListNode {
  constructor(value){
    this.value = value;
    this.next = null;                                          
  }
}

function containsCycle(list){
  let linkedList = new ListNode(0);
  linkedList.next = list;
  let oneElement = linkedList.next;
  let loopList = oneElement;

  if(linkedList.next.value == null){
    return null;
  }

  while(loopList != null && loopList.next != null){
    oneElement = oneElement.next; //incrementing through each element of the list
    loopList = loopList.next.next; //incrementing jumping two elements of the list to force an encouner between the oneElement and loopList

    if(oneElement.value == loopList.value){
      return true;
    } else {
      continue;
    }
  }

  return false;
}

//input examples
let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = l1;

let l2 = new ListNode(1);
l2.next = new ListNode(2);
l2.next.next = new ListNode(3);

let l3 = new ListNode(1);
l3.next = l3;

console.log(containsCycle(l1));
console.log(containsCycle(l2));
console.log(containsCycle(l3));