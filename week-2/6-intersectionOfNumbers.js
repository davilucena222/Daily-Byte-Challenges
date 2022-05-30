/* 
  This question is asked by Google. Given two integer arrays, return their intersection.
  Note: the intersection is the set of elements that are common to both arrays.

  Ex: Given the following arrays...

  nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
  nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
  nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []
*/

//time complexity = O(M * N) 
//space complexity = O(M)
function intersectionOfNumbers(arrayOne, arrayTwo) {
  let result = [];

  for(let i = 0; i < arrayOne.length; i++) {
    let element = arrayOne[i];
    for(let j = 0; j < arrayTwo.length; j++) {
      if((element === arrayTwo[j]) && (!result.includes(element))) {
        result.push(element);
      }
    }
  }
  return result;
}

//input examples
console.log(intersectionOfNumbers([2, 4, 4, 2], [2, 4]));
console.log(intersectionOfNumbers([1, 2, 3, 3], [3, 3]));
console.log(intersectionOfNumbers([2, 4, 6, 8], [1, 3, 5, 7]));