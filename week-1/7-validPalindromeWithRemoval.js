/* 
  This question is asked by Facebook. Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
  Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

  Ex: Given the following strings...

  "abcba", return true
  "foobof", return true (remove the first 'o', the second 'o', or 'b')
  "abccab", return false
*/

//time complexisty = O(N)
//space complexity = O(1)

function validPalindromeWithRemoval(string){
  //generating random numbers to removing a letter from the string
  let randomNumber = Math.floor(Math.random() * string.length);
  let splittingString = string.split('');

  console.log(`The index letter removed: ${randomNumber}`);

  //storing the letter that was removed
  let letterRemoved = splittingString.splice(randomNumber, 1);  
  console.log(`The letter removed: ${letterRemoved}`);

  //joining the string after the removed letter (normal string, not the reverse string)
  let normalStringLetterRemoved = splittingString.join('');

  //reverse the string after the removed letter
  let reverseString = splittingString.reverse();
  let reverseStringJoin = reverseString.join('');
  
  //comparing the nromal string with the reverse string both with the letters removed
  if(normalStringLetterRemoved === reverseStringJoin){
    return true;
  } else {
    return false;
  }
}

//input examples
console.log(validPalindromeWithRemoval('abcba'));
console.log(validPalindromeWithRemoval('foobof'));
console.log(validPalindromeWithRemoval('abccab'));