/* 
  This question is asked by Microsoft. Design a class, MovingAverage, which contains a method, next that is responsible for returning the moving average from a stream of integers.
  Note: a moving average is the average of a subset of data at a given point in time.

  Ex: Given the following series of events...

  // i.e. the moving average has a capacity of 3.
  MovingAverage movingAverage = new MovingAverage(3);
  m.next(3) returns 3 because (3 / 1) = 3
  m.next(5) returns 4 because (3 + 5) / 2 = 4 
  m.next(7) = returns 5 because (3 + 5 + 7) / 3 = 5
  m.next(6) = returns 6 because (5 + 7 + 6) / 3 = 6
*/

//time complexity = O(N)
//space complexity = O(N)
class MovingAverage {
  constructor(size){
    this.size = size;
    this.stream = [];
  }             

  //a method that calculate the moving average 
  next(value){
    if(this.stream.length < this.size){
      this.stream.push(value); //adding a value if stream.length doesn't have reached the size
    } else { //remove the first value of the stream to receive the new value 
      this.stream.shift();
      this.stream.push(value);
    }

    //calculating the moving average from a stream of integers 
    //the reduce method sum all the items of an array and return the result
    let result = this.stream.reduce((previous, current) => previous + current)/this.stream.length;

    return result;
  }
}

//input examples
let item = new MovingAverage(3);
console.log(item.next(3));
console.log(item.next(5));
console.log(item.next(7));
console.log(item.next(6));