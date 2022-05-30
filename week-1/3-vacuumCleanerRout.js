/* 
  This question is asked by Amazon. Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.

  Ex: Given the following strings...

  "LR", return true
  "URURD", return false
  "RUULLDRD", return true
*/

//time complexity = O(N)
//space complexity = O(N)
function vacuumCleanerRout(stringRobotMove){
  let sum = 0;
  
  for(let i = 0; i < stringRobotMove.length; i++){
    let position = stringRobotMove[i];

    if(position === "U"){
      sum += 1;
    }
    if(position === "D"){
      sum -= 1;
    }
    if(position === "R"){
      sum += 1;
    }
    if(position === "L"){
      sum -= 1;
    }
  }

  if(sum == 0){
    return true;
  } else {
    return false;
  }
}

//input examples
console.log(vacuumCleanerRout("LR"));
console.log(vacuumCleanerRout("URURD"));
console.log(vacuumCleanerRout("RUULLDRD"));