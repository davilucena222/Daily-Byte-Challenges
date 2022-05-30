/* 
  Welcome to your first of many daily bytes! We are starting with a strings problem and we strongly recommend you find the time each day to solve these problems. It is important to not just solve them in your head but actually whip out your favorite editor/IDE and write a function and use the test cases supplied in the question to check your work. Getting yourself to actually write down the solutions will go a long way to ensuring you are thinking through all the edge cases as well as any space/time complexities.

  This question is asked by Google. Given a string, reverse all of its characters and return the resulting string.

  Ex: Given the following strings...

  “Cat”, return “taC”
  “The Daily Byte”, return "etyB yliaD ehT”
  “civic”, return “civic”
*/

//time complexity = O(N)
//space complexity = O(N)
function reverseString(string) {
  let keepString = string.split(""); //splitting string ["D", "a", "v", "i", "L", "u", "i", "z"]

  let reverseArrayForString = keepString.reverse(); //inverting the string ["z", "i", "u", "L", "i", "v", "a", "D"]

  let joinString = reverseArrayForString.join(""); //join all the characters [z, i, u, L, i, v, a, D]

  return joinString; //returning [z, i, u, L, i, v, a, D]

}

//input examples
console.log(reverseString("DaviLuiz"));
console.log(reverseString("Cat"));
console.log(reverseString("The Daily Byte"));
console.log(reverseString("civic"));