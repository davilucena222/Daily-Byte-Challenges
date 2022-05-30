/* 
  This question is asked by Facebook. Given two strings s and t return whether or not s is an anagram of t.
  Note: An anagram is a word formed by reordering the letters of another word.

  Ex: Given the following strings...

  s = "cat", t = "tac", return true
  s = "listen", t = "silent", return true
  s = "program", t = "function", return false
*/

//time complexity = O(2 * N LOG N)
//space complexity = O(N)
function validAnagram(word1, word2) {
  let splittingWord1 = word1.split("");
  let splittingWord2 = word2.split("");

  let sortingWord1 = splittingWord1.sort();
  let sortingWord2 = splittingWord2.sort();

  let joiningWord1 = sortingWord1.join(" ");
  let joiningWord2 = sortingWord2.join(" ");

  if(joiningWord1 === joiningWord2) {
    return true;
  } else {
    return false;
  }
}

//input examples
console.log(validAnagram("cat", "tac"));
console.log(validAnagram("listen", "silent"));
console.log(validAnagram("program", "function"));
console.log(validAnagram("roma", "amor"));
console.log(validAnagram("carro", "moto"));