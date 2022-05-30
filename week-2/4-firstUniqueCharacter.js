/* 
  This question is asked by Microsoft. Given a string, return the index of its first unique character. If a unique character does not exist, return -1.

  Ex: Given the following strings...

  "abcabd", return 2
  "thedailybyte", return 1
  "developer", return 0
 */

//time complexity = O(N)
//space complexity = O(N)
function firstUniqueCharacter(string) {
  for(let i = 0; i < string.length; i++) {
    let character = string.charAt(i);
    if(((string.indexOf(character)) == i) && ((string.indexOf(character, i + 1)) == -1)) {
      return string.indexOf(character);
    }
  }
  return undefined;
}

//input examples
console.log(firstUniqueCharacter("abcabd"));
console.log(firstUniqueCharacter("thedailybyte"));
console.log(firstUniqueCharacter("developer"));