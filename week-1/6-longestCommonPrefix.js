function longestCommonPrefix(stringsArray){
  let result = "";
  if(stringsArray.length == 0){
    return "";
  }

  if(stringsArray.length == 1){
    return stringsArray[0];
  }

  for(let i = 0; i < stringsArray[0].length; i++){
    for(let j = 1; j < stringsArray.length; j++){
      if(stringsArray[j][i] == stringsArray[0][i]){
        continue;
      } else {
        return result;
      }
    }

    result += stringsArray[0][i];
  }
  return result;
}
console.log(longestCommonPrefix(["colorado", "color", "cold", "coll"]));
console.log(longestCommonPrefix(["a", "b", "c"]));
console.log(longestCommonPrefix(["spot", "spotty", "spotted"]));

// ["colorado", "color", "cold"], return "col"
// ["a", "b", "c"], return ""
// ["spot", "spotty", "spotted"], return "spot"