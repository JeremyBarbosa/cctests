// Tests for the `X` and `O` output
if (!Components.OutputTerminal.hasOutput(/[XO]/g)) {
  return {
    pass: false,
    errors: {
      friendly: "Does your command print example transactions and include the balance in this format: `Account Balance: $500`?",
      component: "PersistentCodeEditor",
    },
  };
}
return { pass: true };

// Starting Workspace

// Final Workspace
class TicTacToeBoard:
  def __init__(self):
    self.board = [[' ' for _ in range(3)] for _ in range(3)]

  def print_board(self):
    print("  0 1 2")
    for i in range(3):
      print(i, end=' ')
      for j in range(3):
        print(self.board[i][j], end=' ')
      print()

  def place_symbol(self, row, col, symbol):
    if 0 <= row < 3 and 0 <= col < 3:
      if self.board[row][col] == ' ':
        self.board[row][col] = symbol
        return True
      else:
        print("Cell already occupied.")
        return False
    else:
      print("Invalid position.")
      return False


# Example usage:
board = TicTacToeBoard()
board.place_symbol(0, 0, 'X')
board.place_symbol(1, 1, 'O')
board.place_symbol(2, 2, 'X')
board.print_board()


