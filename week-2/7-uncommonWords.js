//time complexity = O(N^2)
function uncommonWord(word1, word2){
  let splittingWord1 = word1.split(" ");
  let splittingWord2 = word2.split(" ");
  let result = [];
  let string1 = " ";
  let string2 = " ";

  for(string1 of splittingWord1){
    if(!splittingWord2.includes(string1)){
      result.push(string1);
    }
  }

  for(string2 of splittingWord2){
    if(!splittingWord1.includes(string2)){
      result.push(string2);
    }
  }

  return result;
}

console.log(uncommonWord("the quick", "brown fox"));
console.log(uncommonWord("the tortoise beat the haire", "the tortoise lost to the haire"));
console.log(uncommonWord("copper coffee pot", "hot coffee pot"));