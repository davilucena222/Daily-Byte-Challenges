/* 
  This question is asked by Amazon. Given two strings representing sentences, return the words that are not common to both strings (i.e. the words that only appear in one of the sentences). You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters.

  Ex: given the following strings...

  sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
  sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire", return ["beat", "to", "lost"]
  sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]
 */

//time complexity = O(M + N)
//space complexity = O(M)
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

//input examples
console.log(uncommonWord("the quick", "brown fox"));
console.log(uncommonWord("the tortoise beat the haire", "the tortoise lost to the haire"));
console.log(uncommonWord("copper coffee pot", "hot coffee pot"));