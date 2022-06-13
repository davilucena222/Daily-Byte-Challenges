/* 
  This question is asked by Amazon. Given two strings s and t, which represents a sequence of keystrokes, where # denotes a backspace, return whether or not the sequences produce the same result.

  Ex: Given the following strings...

  s = "ABC#", t = "CD##AB", return true
  s = "como#pur#ter", t = "computer", return true
  s = "cof#dim#ng", t = "code", return false
*/

//time complexity = O(M + N)
//space complexity = O(M + N)
function compareKeystrokes(s, t){
  let arrayOne = [];
  let arrayTwo = [];

  for(let i = 0; i < s.length; i++){
    if(s[i] !== '#'){
      arrayOne.push(s[i]);
    } else if(arrayOne.length !== 0){
      arrayOne.pop();
    }
  }

  for(let i = 0; i < t.length; i++){
    if(t[i] !== '#'){
      arrayTwo.push(t[i]);
    } else if(arrayTwo.length !== 0){
      arrayTwo.pop();
    }
  }

  let joinStringOne = arrayOne.join('');
  let joinStringTwo = arrayTwo.join('');

  if(joinStringOne == joinStringTwo){
    return true;
  } else {
    return false;
  }
}

//input examples
console.log(compareKeystrokes("ABC#", "CD##AB"));
console.log(compareKeystrokes("como#pur#ter", "computer"));
console.log(compareKeystrokes("cof#dim#ng", "code"));
