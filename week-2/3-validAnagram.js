//time complexity = O(2 * N LOG N)
function validAnagram(word1, word2) {
  let splittingWord1 = word1.split("");
  let splittingWord2 = word2.split("");//O(N)

  let sortingWord1 = splittingWord1.sort();//O(N LOG N)
  let sortingWord2 = splittingWord2.sort();//O(N LOG N)

  let joiningWord1 = sortingWord1.join(" ");
  let joiningWord2 = sortingWord2.join(" ");

  if(joiningWord1 === joiningWord2) {
    return true;
  } else {
    return false;
  }
}

console.log(validAnagram("cat", "tac"));
console.log(validAnagram("listen", "silent"));
console.log(validAnagram("program", "function"));
console.log(validAnagram("roma", "amor"));
console.log(validAnagram("carro", "moto"));