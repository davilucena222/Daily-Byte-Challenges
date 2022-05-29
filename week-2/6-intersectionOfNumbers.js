//time complexity = O(array.one * array_two) or O(N^2)
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

console.log(intersectionOfNumbers([2, 4, 4, 2], [2, 4]));
console.log(intersectionOfNumbers([1, 2, 3, 3], [3, 3]));
console.log(intersectionOfNumbers([2, 4, 6, 8], [1, 3, 5, 7]));