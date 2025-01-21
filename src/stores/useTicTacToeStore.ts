import { defineStore } from 'pinia';

interface TicTacToeState {
  playerX: string;
  scoreX: number;
  playerO: string;
  scoreO: number;
  board: (string | null)[];
  currentPlayer: 'X' | 'O';
  winner: 'X' | 'O' | null;
  isDraw: boolean;
  isStart: boolean;
}

export const useTicTacToeStore = defineStore('tictactoe', {
  state: (): TicTacToeState => ({
    playerX: '',
    scoreX: 0,
    playerO: '',
    scoreO: 0,
    board: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    isDraw: false,
    isStart: false,
  }),
  actions: {
    updatePlayerX(name: string) {
      this.playerX = name;
    },
    updatePlayerO(name: string) {
      this.playerO = name;
    },
    handleCellClick(index: number) {
      if (this.board[index] || this.winner) return;

      this.board[index] = this.currentPlayer;

      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
        if (this.currentPlayer === 'X') {
          this.scoreX++;
        } else {
          this.scoreO++;
        }
      } else if (this.board.every(cell => cell !== null)) {
        this.isDraw = true;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }

      this.isStart = true;
    },
    startNewGame() {
      this.board = Array(9).fill(null);
      this.currentPlayer = 'X';
      this.winner = null;
      this.isDraw = false;
      this.isStart = false;
    },
    resetGame() {
      this.startNewGame();
      this.playerX = '';
      this.playerO = '';
      this.scoreX = 0;
      this.scoreO = 0;
    },
    checkWinner() {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      return lines.some(([a, b, c]) => {
        return this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c];
      });
    }
  }
});
