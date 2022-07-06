/* 
This question is asked by Google. Given a string of digits, return all possible text messages those digits could send. Note: The mapping of digits to letters is as follows…

0 -> null
1 -> null
2 -> "abc"
3 -> "def"
4 -> "ghi"
5 -> "jkl"
6 -> "mno"
7 -> "pqrs"
8 -> "tuv"
9 -> "wxyz"
Ex: digits = "23" return ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
*/

//time complexity = O(4^N * N) -> In the worst case where the maximum letter length is 4
//space complexity = O(4^N * N)
function generateTextMessages(digits){
  if(digits.length === 0){
    return []
  }
  let result = []

  let alphabet = {
    "0": "null",
    "1": "null",
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  }

  function depthFirstSearch(i, digits, slate){
    if(i === digits.length){
      result.push(slate.join(""))
      return
    }

    let chars = alphabet[digits[i]]
    for(let char of chars){
      slate.push(char)
      depthFirstSearch(i + 1, digits, slate)
      slate.pop()
    }
  }
 
  depthFirstSearch(0, digits, [])
  return result
}

//input examples
console.log(generateTextMessages("23"))