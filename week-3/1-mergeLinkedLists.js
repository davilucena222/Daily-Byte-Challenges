/* 
  This question is asked by Apple. Given two sorted linked lists, merge them together in ascending order and return a reference to the merged list

  Ex: Given the following lists...

  list1 = 1->2->3, list2 = 4->5->6->null, return 1->2->3->4->5->6->null
  list1 = 1->3->5, list2 = 2->4->6->null, return 1->2->3->4->5->6->null
  list1 = 4->4->7, list2 = 1->5->6->null, return 1->4->4->5->6->7->null
*/

//time complexity = O(M + N)
//space complexity = O(1)
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLists(list1, list2) {
  let merged = new ListNode(0);
  let current = merged;

  while(list1 != null && list2 != null){
    if(list1.value < list2.value){
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  current.next = list1 || list2;

  return merged;
}

function mergeLinkedLists(list) {
  let firstElement = 0;
  let secondElement = 0;
  let mergedLists = 0;

  if(list.length === 0){
    return null;
  }

  while(list.length > 1){
    firstElement = list.shift(); //removes the first linked list from the array and positions the second linked list in the first index of the array and so on
    secondElement = list.shift(); //remove the next linked list positioned in the first index from the array 
    mergedLists = mergeLists(firstElement, secondElement);
    list.push(mergedLists);
  }

  return list[0];//the linked list merged in the first index of the array list
}

//input examples
mergeLinkedLists([[1, 2, 3], [4, 5, 6]]);
mergeLinkedLists([[1, 3, 5], [2, 4, 6]]);
mergeLinkedLists([[4, 4, 7], [1, 5, 6]]);

