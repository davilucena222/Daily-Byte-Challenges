//time complexity = o(1)
function reverseString(string) {
  let keepString = string.split(""); //splitting string ["D", "a", "v", "i", "L", "u", "i", "z"]

  let reverseArrayForString = keepString.reverse(); //inverting the string ["z", "i", "u", "L", "i", "v", "a", "D"]

  let joinString = reverseArrayForString.join(""); //join all the characters [z, i, u, L, i, v, a, D]

  return joinString; //returning [z, i, u, L, i, v, a, D]

}

console.log(reverseString("DaviLuiz"));