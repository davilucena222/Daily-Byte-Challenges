//time complexity = O(N^2)
function sumOfTwo(array, k){
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

sumOfTwo([1, 3, 8, 2], 10);
sumOfTwo([3, 9, 13, 7], 8);
sumOfTwo([4, 2, 6, 5, 2], 4);