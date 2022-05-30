/* 
  This question is asked by Facebook. Given a string, return whether or not it forms a palindrome ignoring case and non-alphabetical characters.
  Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

  Ex: Given the following strings...

  "level", return true
  "algorithm", return false
  "A man, a plan, a canal: Panama.", return true
*/

//time complexity = O(N)
//space complexity = O(1)
function validPalindrome(stringName){
  // let stringNormal = stringName;
  let re = /[\W_]/g;
  let convertingToLowerCase = stringName.toLowerCase("").replace(re, '');
  let splitting = convertingToLowerCase.split("");
  let reverseString = splitting.reverse();
  let joinReverseString = reverseString.join("");

  if(joinReverseString === convertingToLowerCase){
    return console.log(`${joinReverseString} is a Valid Palindrome`);
  } else {
    return console.log(`${joinReverseString} it is not a Valid Palindrome`);
  }
}

//input examples
validPalindrome("level");
validPalindrome("algorithm");
validPalindrome("A man, a plan, a canal: Panama");