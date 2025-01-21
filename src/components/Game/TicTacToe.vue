<template>
  <div class="tic-tac-toe">
    <GameHeader
      :playerX="playerX"
      :playerO="playerO"
      :scoreX="scoreX"
      :scoreO="scoreO"
      @update:playerX="updatePlayerX"
      @update:playerO="updatePlayerO"
    />
    <div v-if=" playerO && playerX " class="notification is-centered">
    <div v-if="winner" class="has-text-success">
      Ha vinto {{ winner === 'X' ? playerX : playerO }}!
    </div>
    <div v-else-if="isDraw" class="has-text-warning">
      Pareggio!
    </div>
    <div v-else-if="isStart" class="has-text-info">
      E' il turno di {{ currentPlayer === 'X' ? playerX : playerO }}
    </div>
    <div v-else class="has-text-info">
      Fai la prima mossa {{currentPlayer === 'X' ? playerX : playerO }}
    </div>
  </div>
    <GameBoard v-if=" playerO && playerX " :board="board" @cellClicked="handleCellClick" />
    <GameControls
     v-if=" playerO && playerX "
      @startNewGame="startNewGame"
      @resetGame="resetGame"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import GameHeader from './GameHeader.vue';
import GameBoard from './GameBoard.vue';
import GameControls from './GameControls.vue';

export default {
  components: { GameHeader, GameBoard, GameControls },
  setup() {
    const playerX = ref('');
    const playerO = ref('');
    const scoreX = ref(0);
    const scoreO = ref(0);
    const board = ref(Array(9).fill(null));
    const currentPlayer = ref('X');
    const winner = ref(null);
    const isDraw = ref(false);
    const isStart = ref(false);

    function updatePlayerX(value) {
      playerX.value = value;
    }

    function updatePlayerO(value) {
      playerO.value = value;
    }

    function handleCellClick(index) {
      if (board.value[index] || winner.value) return;
      board.value[index] = currentPlayer.value;
      if (checkWinner()) {
        winner.value = currentPlayer.value;
        if (currentPlayer.value === 'X') {
          scoreX.value++;
        } else {
          scoreO.value++;
        }
      } else if (board.value.every(cell => cell !== null)) {
        isDraw.value = true;
      } else {
        currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X';
      }

      isStart.value = true;
    }

    function checkWinner() {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      return lines.some(([a, b, c]) => {
        return board.value[a] && board.value[a] === board.value[b] && board.value[a] === board.value[c];
      });
    }

    function startNewGame() {
      board.value = Array(9).fill(null);
      currentPlayer.value = 'X';
      winner.value = null;
      isDraw.value = false;
      isStart.value = false;
    }

    function resetGame() {
      startNewGame();
      playerX.value = '';
      playerO.value = '';
      scoreX.value = 0;
      scoreO.value = 0;
    }

    return {
      playerX,
      playerO,
      scoreX,
      scoreO,
      board,
      currentPlayer,
      winner,
      isDraw,
      isStart,
      updatePlayerX,
      updatePlayerO,
      handleCellClick,
      startNewGame,
      resetGame
    };
  }
};
</script>

<style scoped>
.tic-tac-toe {
  text-align: center;
  margin: 20px auto;
  max-width: 400px;
}

.game-header {
  margin-bottom: 20px;
}

input {
  margin: 5px;
  padding: 5px;
  font-size: 1em;
}

p {
  font-size: 1.2em;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 5px;
  margin: 0 auto;
  width: 320px;
}

.game-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: #f0f0f0;
  font-size: 2em;
  cursor: pointer;
  border: 1px solid #ccc;
}

.game-cell:hover {
  background-color: #e0e0e0;
}

.game-controls {
  text-align: center;
  margin-top: 20px;
}

button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
}
</style>