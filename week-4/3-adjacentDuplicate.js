/* 
  This question is asked by Facebook. Given a string s containing only lowercase letters, continuously remove adjacent characters that are the same and return the result.

  Ex: Given the following strings...

  s = "abccba", return ""
  s = "foobar", return "fbar"
  s = "abccbefggfe", return "a"
*/

//time complexity = O(N)
//space complexity = O(N)
function adjacentDuplicate(string) {
  let stack = [];

  for(let i = 0; i < string.length; i++){
    //comparing the last element of the array with the next character of the string
    if(stack[stack.length - 1] == string[i]){
      stack.pop();
    } else {
      stack.push(string[i]);
    }
  }

  return stack.join('');
}

//input examples
console.log(adjacentDuplicate("abccba"));
console.log(adjacentDuplicate("foobar"));
console.log(adjacentDuplicate("abccbefggfe"));