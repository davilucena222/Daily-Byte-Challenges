/* 
This question is asked by Amazon. Given a string s consisting of only letters and digits, where we are allowed to transform any letter to uppercase or lowercase, return a list containing all possible permutations of the string.

Ex: Given the following string…

S = "c7w2", return ["c7w2", "c7W2", "C7w2", "C7W2"]
*/

//time complexity = O(2^N * N) -> in worst case we have each level being multiplied by 2 (2, 4, 8, 16...) and a element being push into the global array
//space complexity = O(2^N * N)
function stringPermutations(string){
  const result = [];

  //parameters depthFirstSearch (iterator for each character, the string, a temporary variable to store and compare the string)
  const depthFirstSearch = (i, s, slate) => {
    //base case - if we're out at the length of the string input then push whatever it is in the slate, but the value of i iterator needs to be equal to the size of the string (it means that this is the final)
    if(i === s.length){
      result.push(slate.join(""));
      return;
    }

    //dfs recursive case
    let char = s[i];

    if(!Number.isInteger(parseInt(char))){
      //uppercase
      slate.push(char.toUpperCase());
      depthFirstSearch(i + 1, s, slate);
      slate.pop();

      //lowercase
      slate.push(char.toLowerCase());
      depthFirstSearch(i + 1, s, slate);
      slate.pop();
    } else {
      slate.push(char);
      depthFirstSearch(i + 1, s, slate);
      slate.pop();
    }
  }

  depthFirstSearch(0, string, []);
  return result;
}

//input examples
console.log(stringPermutations("c7w2"));