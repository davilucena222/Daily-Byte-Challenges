/* 
  This question is asked by Amazon. Given a string representing your stones and another string representing a list of jewels, return the number of stones that you have that are also jewels.

  Ex: Given the following jewels and stones...

  jewels = "abc", stones = "ac", return 2
  jewels = "Af", stones = "AaaddfFf", return 3
  jewels = "AYOPD", stones = "ayopd", return 0
*/

//time complexity = O(jewels*stones)
//space complexity = O(N)
function jewelsAndStones(jewels, stones) {
  let jewel = "";
  let stone = "";
  let count = 0;

  if(jewels.length === 0){
    return 0;
  }

  if(stones.length === 0){
    return 0;
  }

  for(let i = 0; i < jewels.length; i++){
    jewel = jewels[i];

    for(let j = 0; j < stones.length; j++){
      stone = stones[j];

      if(jewel === stone){
        count += 1; 
      } 
    }
  }

  return count;
}

//input examples
console.log(jewelsAndStones("abc", "ac"));
console.log(jewelsAndStones("Af", "AaaddfFf"));
console.log(jewelsAndStones("AYOPD", "ayopd"));