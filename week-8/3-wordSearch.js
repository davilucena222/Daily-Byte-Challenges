/* 
This question is asked by Amazon. Given a 2D board that represents a word search puzzle and a string word, return whether or the given word can be formed in the puzzle by only connecting cells horizontally and vertically.

Ex: Given the following board and words…

board =
[
  ['C','A','T','F'],
  ['B','G','E','S'],
  ['I','T','A','E']
]
word = "CAT", return true
word = "TEA", return true
word = "SEAT", return true
word = "BAT", return false
*/

//time complexity = O(M * N) + O(L * 4) -> L - string.length
//space complexity = O(L * 4) 
function wordSearch(board, word) {
  const rows = board.length;
  const columns = board[0].length;
  
  function dfs(row, column, index) {
      if(word.length === index) {
        return true;
      }

      if(row >= rows || row < 0 || board[row][column] !== word[index]){
        return false;
      }  
      
      board[row][column] = '#'; 
      
      if (dfs(row + 1, column, index + 1)||
          dfs(row - 1, column, index + 1)||
          dfs(row, column + 1, index + 1)||
          dfs(row, column - 1, index + 1)) {
            return true;
          }
          
      board[row][column] = word[index]; 
  }
  
  for(let i = 0; i < rows; i++) {
      for(let j = 0; j < columns; j++) {
          if(board[i][j] === word[0] && dfs(i, j, 0)) {
            return true;
          } 
      }
  }

  return false;    
}

//input examples
board = [['C','A','T','F'], ['B','G','E','S'],['I','T','A','E']]

console.log(wordSearch(board, "CAT"));
console.log(wordSearch(board, "TEA"));
console.log(wordSearch(board, "SEAT"));
console.log(wordSearch(board, "BAT"));