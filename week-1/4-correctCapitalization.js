//time complexity = O(N)
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

console.log(correctCapitalization("USA"));
console.log(correctCapitalization("Calvin"));
console.log(correctCapitalization("compUter"));
console.log(correctCapitalization("coding"));