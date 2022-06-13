/* 
  This question is asked by Amazon. Given two arrays of numbers, where the first array is a subset of the second array, return an array containing all the next greater elements for each element in the first array, in the second array. If there is no greater element for any element, output -1 for that number.

  Ex: Given the following arrays…

  nums1 = [4,1,2], nums2 = [1,3,4,2], return [-1, 3, -1] because no element in nums2 is greater than 4, 3 is the first number in nums2 greater than 1, and no element in nums2 is greater than 2.
  nums1 = [2,4], nums2 = [1,2,3,4], return [3, -1] because 3 is the first greater element that occurs in nums2 after 2 and no element is greater than 4.
*/

//time complexity = O(M * N)
//space complexity = O(M)
function greaterElements(num1, num2){
  let number = 0;
  let value = 0;
  let array = [];

  for(let i = 0; i < num1.length; i++){
    number = num1[i];
    value = -1;
    let index = num2.indexOf(number) + 1;
    
    while(num2[index] != null){
      if(num2[index] > number){
        value = num2[index];
        break;
      } else {
        index++; 
      }
    }

    if(value > -1){
       array.push(value);
    } else {
      array.push(-1);
    }
  }

  return array;
}

//input examples
console.log(greaterElements([4, 1, 2], [1, 3, 4, 2]));
console.log(greaterElements([2, 4], [1, 2, 3, 4]));
console.log(greaterElements([1,3,5,2,4], [6,5,4,3,2,1,7]));