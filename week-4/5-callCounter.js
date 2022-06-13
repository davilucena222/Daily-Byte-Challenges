/* 
  This question is asked by Google. Create a class CallCounter that tracks the number of calls a client has made within the last 3 seconds. Your class should contain one method, ping(int t) that receives the current timestamp (in milliseconds) of a new call being made and returns the number of calls made within the last 3 seconds.
  Note: you may assume that the time associated with each subsequent call to ping is strictly increasing.

  Ex: Given the following calls to ping…

  ping(1), return 1 (1 call within the last 3 seconds)
  ping(300), return 2 (2 calls within the last 3 seconds)
  ping(3000), return 3 (3 calls within the last 3 seconds)
  ping(3002), return 3 (3 calls within the last 3 seconds)
  ping(7000), return 1 (1 call within the last 3 seconds)
*/

class RecentCounter {
  constructor(value) {
    this.requests = [value];
  }
}

//time complexity = O(N)
//space complexity = O(1)
function callCounter(t) {
  let p = new RecentCounter(null);
  p.requests.push(t);  

  while (p.requests[0] < t - 3000) {
    p.requests.shift(); 
  }

  return p.requests.length;
}

//input examples
console.log(callCounter([1, 100, 3001, 3002, 7000])); 