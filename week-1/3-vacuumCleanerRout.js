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

console.log(vacuumCleanerRout("LR"));
console.log(vacuumCleanerRout("URURD"));
console.log(vacuumCleanerRout("RUULLDRD"));