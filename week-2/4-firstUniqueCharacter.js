//time complexity = O(N)
function firstUniqueCharacter(string) {
  for(let i = 0; i < string.length; i++) {
    let character = string.charAt(i);
    if(((string.indexOf(character)) == i) && ((string.indexOf(character, i + 1)) == -1)) {
      return string.indexOf(character);
    }
  }
  return undefined;
}

console.log(firstUniqueCharacter("abcabd"));
console.log(firstUniqueCharacter("thedailybyte"));
console.log(firstUniqueCharacter("developer"));