//time complexity = O(jewels*stones)
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

console.log(jewelsAndStones("abc", "ac"));
console.log(jewelsAndStones("Af", "AaaddfFf"));
console.log(jewelsAndStones("AYOPD", "ayopd"));