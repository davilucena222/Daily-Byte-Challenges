/* 
  This question is asked by Google. Given an array of integers, return whether or not two numbers sum to a given target, k.
  Note: you may not sum a number with itself.

  Ex: Given the following...

  [1, 3, 8, 2], k = 10, return true (8 + 2)
  [3, 9, 13, 7], k = 8, return false
  [4, 2, 6, 5, 2], k = 4, return true (2 + 2)
*/

//time complexity = O(N^2)
//space complexity = O(1)
function twoSum(array, k){
  let value1 = 0;
  let value2 = 0;
  let result = 0;

  for(let i = 0; i < array.length; i++){
    for(let j = 1; j < array.length; j++){
      value1 = array[i];
      value2 = array[j];
      result = value1 + value2;

      if(k === result){
        return console.log(`k = ${k}, true (${value1} + ${value2})`);
      } 
    }
  }
  return console.log('false');
}


//input examples
twoSum([1, 3, 8, 2], 10);
twoSum([3, 9, 13, 7], 8);
twoSum([4, 2, 6, 5, 2], 4);