function binaryStringSum(binaryString1, binaryString2){
  let result = '';
  let sum = 0;
  let i = binaryString1.length - 1;
  let j = binaryString2.length - 1;

  //decrementing i and j
  //if sum equals to 1 even if i and j it is not greater or equals to 0
  //the execution's keep going
  while(i >= 0 || j >= 0 || sum == 1){
    //getting the string position, converting the string to the code and subtracting the values 
    sum = sum + ((i >= 0) ? binaryString1.charAt(i).charCodeAt() - '0'.charCodeAt() : 0);
    sum = sum + ((j >= 0) ? binaryString2.charAt(j).charCodeAt() - '0'.charCodeAt() : 0);

    //getting the string from the code that represents the string
    result = String.fromCharCode(parseInt(sum % 2) + '0'.charCodeAt()) + result;

    //assigning the carry to the sum variable
    sum = parseInt(sum/2);

    //decrementing both counters string position
    i--;
    j--;
  }

  return result;
}

console.log(binaryStringSum('100', '1'));
console.log(binaryStringSum('11', '1'));
console.log(binaryStringSum('1', '0'));