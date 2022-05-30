/* 
  This question is asked by Google. Given a string, return whether or not it uses capitalization correctly. A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.

  Ex: Given the following strings...

  "USA", return true
  "Calvin", return true
  "compUter", return false
  "coding", return true
*/

//time complexity = O(N)
//space complexity = O(1)
function correctCapitalization(string){
  for(let i = 0; i < string.length; i++) {
    let stringPosition = string[i];

    if(string === string.toUpperCase()){
      return true;
    } else if(string === string.toLowerCase()){
      return true;
    } else if(stringPosition === stringPosition.toUpperCase()){
      return true;
    } else {
      return false;
    }
  }
}

//input examples
console.log(correctCapitalization("USA"));
console.log(correctCapitalization("Calvin"));
console.log(correctCapitalization("compUter"));
console.log(correctCapitalization("coding"));