function longestCommonPrefix(stringsArray){
  let stringOne = stringsArray[0];
  let stringTwo = 0;
  let result = "";
  let stopCondition = 0;

  if(stringsArray.length == 0){
    return "";
  }

  if(stringsArray.length == 1){
    return stringsArray[0];
  }

  //getting the second index of the array to compare with the first index
  for(let x = 1; x < stringsArray.length; x++) {
    stringTwo = stringsArray[x];

    //comparing both strings length to get the lowest and use as the stop condition
    if(stringOne.length < stringTwo.length) {
      stopCondition = stringOne;
    } else {
      stopCondition = stringTwo;
    }

    //assigning an empty string to the result variable to prevent concatenation with the previous string
    result = "";
    for(let k = 0; k < stopCondition.length; k++) {
      //comparing each character between the first and second string
      if(stringOne[k] === stringTwo[k]){
        //storing the prefix value 
        result += stopCondition[k];
      } else {
        //if the stop condition is broken then break
        break;
      }
    }
    //storing the prefix value in stringOne to comparing with the other string in the array
    stringOne = result;
  }
  return result;
}

console.log(longestCommonPrefix(["colorado", "color", "cold"]));
console.log(longestCommonPrefix(["a", "b", "c"]));
console.log(longestCommonPrefix(["spot", "spotty", "spotted"]));