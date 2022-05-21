//time complexity = O(1)
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

validPalindrome("level");
validPalindrome("algorithm");
validPalindrome("A man, a plan, a canal: Panama");