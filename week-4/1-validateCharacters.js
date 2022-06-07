//time complexity = O(N)
//space complexity = O(N)
function validateCharacters(string){
  //object characters to verify if the element is equal an return the opposite to push into the array
  //if characters return false (if the element doesn't exists inside of characters return "undefined")
  let characters = {
    "(" : ")",
    "{" : "}",
    "[" : "]"
  }

  let element = "";
  let stackArray = [];

  for(let i = 0; i < string.length; i++){
    element = string[i];
    if(characters[element]){//if characters return "undefined" go to execute the else
      stackArray.push(characters[element]);
    } else {
      if(element !== stackArray.pop()){//if element equals to last element in the array then remove and go back to the execution, else remove the last element an return false
        return false;
      }
    }
  }

  return true;
}

//input examples
console.log(validateCharacters("(){}[]"));
console.log(validateCharacters("(({[]}))"));
console.log(validateCharacters("{(})"));