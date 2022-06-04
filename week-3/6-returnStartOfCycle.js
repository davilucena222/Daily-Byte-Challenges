/* 
  This question is asked by Apple. Given a potentially cyclical linked list where each value is unique, return the node at which the cycle starts. If the list does not contain a cycle, return null.

  Ex: Given the following linked lists...

  1->2->3, return null
  1->2->3->4->5->2 (5 points back to 2), return a reference to the node containing 2
  1->9->3->7->7 (7 points to itself), return a reference to the node containing 7
*/

//time complexity = O(M * N)
//space complexity = O(N)
//First solution
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function returnStartOfCycle(list){
  let head = list;
    let array = [];
    
    while(head != null && head.next != null){
        for(let i = 0; i < array.length; i++){
            if(head.next == array[i]){
                return head.next;
            } else {
                continue;
            }
        }
        array.push(head);
        head = head.next;
    }
    
    return null;
}

//input examples
let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);

let l2 = new ListNode(1);
l2.next = new ListNode(2);
l2.next.next = new ListNode(3);
l2.next.next.next = new ListNode(4);
l2.next.next.next.next = new ListNode(5);
l2.next.next.next.next.next = l2.next;

let l3 = new ListNode(1);
l3.next = new ListNode(2);
l3.next.next = new ListNode(3);
l3.next.next.next = new ListNode(7);
l3.next.next.next.next = l3.next.next.next;

console.log(returnStartOfCycle(l1));
console.log(returnStartOfCycle(l2));
console.log(returnStartOfCycle(l3));

/*******************************************************************************************************/
//time complexity = O()
class ListNode {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
//second example 
//time complexity = O(N)
//space complexity = O(1)
function returnStartOfCycle(list){
  let previous = list;
  let nextNode = list;
  
  while(previous !== null && nextNode !== null && nextNode.next !== null){
      previous = previous.next;
      nextNode = nextNode.next.next;
      
      if(previous === nextNode){
          while(list !== nextNode){
              list = list.next;
              nextNode = nextNode.next;
          }
          return list;
      }
  }
  return null;
}

//input examples
let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);

let l2 = new ListNode(1);
l2.next = new ListNode(2);
l2.next.next = new ListNode(3);
l2.next.next.next = new ListNode(4);
l2.next.next.next.next = new ListNode(5);
l2.next.next.next.next.next = l2.next;

let l3 = new ListNode(1);
l3.next = new ListNode(2);
l3.next.next = new ListNode(3);
l3.next.next.next = new ListNode(7);
l3.next.next.next.next = l3.next.next.next;

console.log(returnStartOfCycle(l1));
console.log(returnStartOfCycle(l2));
console.log(returnStartOfCycle(l3));