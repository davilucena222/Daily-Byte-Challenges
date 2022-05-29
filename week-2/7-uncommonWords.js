function uncommonWord(word1, word2){
  let splittingWord1 = word1.split(" ");
  let splittingWord2 = word2.split(" ");
  let result = [];

  for(let string1 of splittingWord1){
    if(!(splittingWord2.includes(string1))){
      result.push(string1);
    }
  }

  for(let string2 of splittingWord2){
    if(!(splittingWord1.includes(string2))){
      result.push(string2)
    }
  }

  return result;
}

console.log(uncommonWord("the quick", "brown fox"));
console.log(uncommonWord("the tortoise beat the haire", "the tortoise lost to the haire"));
console.log(uncommonWord("copper coffee pot", "hot coffee pot"));