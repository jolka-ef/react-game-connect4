export const calculateWinner = (board, boardSize) => {

  for (let x = 0; x < boardSize; x++) {
    for (let y = 0; y < boardSize - 3; y++) {
      const is4InTheRow = board[x][y] && board[x][y] === board[x][y + 1] &&
                          board[x][y + 1] === board[x][y + 2] && board[x][y + 2] === board[x][y + 3];
      if (is4InTheRow) {
        return {
          keys: [`${x}_${y}`, `${x}_${y + 1}`, `${x}_${y + 2}`, `${x}_${y + 3}`],
          symbol: board[x][y]
        }
      }
    }
  }

  for (let x = 0; x < boardSize - 3; x++) {
    for (let y = 0; y < boardSize; y++) {
      const is4inTheCol = board[x][y] && board[x][y] === board[x + 1][y] &&
                          board[x][y] === board[x + 2][y] && board[x][y] === board[x + 3][y];
      if (is4inTheCol) {
        return {
          keys: [`${x}_${y}`, `${x + 1}_${y}`, `${x + 2}_${y}`, `${x + 3}_${y}`],
          symbol: board[x][y]
        }
      }
    }
  }

  for (let x = 0; x < boardSize - 3; x++) {
    for (let y = 0; y < boardSize - 3; y++) {
      const is4inFallingDiag = board[x][y] && board[x][y] === board[x + 1][y + 1] &&
                               board[x][y] === board[x + 2][y + 2] && board[x][y] === board[x + 3][y + 3];
      if (is4inFallingDiag) {
        return {
          keys: [`${x}_${y}`, `${x + 1}_${y + 1}`, `${x + 2}_${y + 2}`, `${x + 3}_${y + 3}`],
          symbol: board[x][y]
        }
      }
    }
  }


  for (let x = 0; x < boardSize - 3; x++) {
    for (let y = 3; y < boardSize; y++) {
      const is4inRisingDiag = board[x][y] && board[x][y] === board[x + 1][y - 1] &&
                              board[x][y] === board[x + 2][y - 2] && board[x][y] === board[x + 3][y - 3];
      if (is4inRisingDiag) {
        return {
          keys: [`${x}_${y}`, `${x + 1}_${y - 1}`, `${x + 2}_${y - 2}`, `${x + 3}_${y - 3}`],
          symbol: board[x][y]
        }
      }
    }
  }

  return false;
};
