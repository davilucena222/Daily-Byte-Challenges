/* 
  Design a class to implement a stack using only a single queue. Your class, QueueStack, should support the following stack methods: push() (adding an item), pop() (removing an item), peek() (returning the top value without removing it), and empty() (whether or not the stack is empty).
*/

//time complexity = O()
//space complexity = O()
class QueueStack {
  constructor(){
    this.stack = [];
  }

  pushStack(item){
    this.stack.push(item);
  }

  popStack(){
    return this.stack.pop();
  }

  peekStack(){
    let element = this.stack.pop();
    this.stack.push(element);

    return element;
  }

  emptyStack(){
    if(this.stack.length === null){
      return null;
    } else {
      return this.stack.length;
    }
  }
}

//input examples
let item = new QueueStack();
// console.log(item.emptyStack());
// console.log(item.peekStack());

item.pushStack(10);
item.pushStack(20);
item.pushStack(30);

console.log(item.peekStack());
console.log(item.popStack());
console.log(item.peekStack());

console.log(item.emptyStack());