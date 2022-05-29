//time complexity = O(N)
function randomNumber(number){
  return Math.floor(Math.random() * number);
}

function generatingRandomCharacter(){
  let allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let randomCharacter = allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));

  let charactersLowerCase = "abcdefghijklmnopqrstuvwxyz";
  let splitting = charactersLowerCase.split("");

  for(let i = 0; i <= splitting.length; i++){
    if(randomCharacter === splitting[i]){
      return randomCharacter;
    }
  }

  return "";
}

function spotTheDifference(string){
  let randomCharacter = generatingRandomCharacter();

  let concatenatedString = string + randomCharacter;
  let arrayString = concatenatedString.split("");
  

  for(let i = 0; i < arrayString.length; i++){
    let randomValue = randomNumber(arrayString.length);

    let temporaryCharacter = arrayString[i];
    arrayString[i] = arrayString[randomValue];
    arrayString[randomValue] = temporaryCharacter;
  }

  let shuffledString = arrayString.join("");
  console.log("Shuffled String: " + shuffledString);

  if(randomCharacter){
    return console.log("Random Character: " + randomCharacter);
  } else {
    return console.log("No Random Character: ' '");
  }

}

spotTheDifference("foobar");
spotTheDifference("ide");
spotTheDifference("coding");