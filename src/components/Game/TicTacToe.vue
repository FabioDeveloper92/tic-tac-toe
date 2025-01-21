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
import { computed } from 'vue'; 
import { useTicTacToeStore } from '../../stores/useTicTacToeStore'
import GameHeader from './GameHeader.vue';
import GameBoard from './GameBoard.vue';
import GameControls from './GameControls.vue';

export default {
  components: { GameHeader, GameBoard, GameControls },
  setup() {
    const ticTacToeStore = useTicTacToeStore();

    const playerX = computed(() => ticTacToeStore.playerX);
    const scoreX = computed(() => ticTacToeStore.scoreX);
    const playerO = computed(() => ticTacToeStore.playerO);
    const scoreO = computed(() => ticTacToeStore.scoreO);
    const board = computed(() => ticTacToeStore.board);
    const currentPlayer = computed(() => ticTacToeStore.currentPlayer);
    const winner = computed(() => ticTacToeStore.winner);
    const isDraw = computed(() => ticTacToeStore.isDraw);
    const isStart = computed(() => ticTacToeStore.isStart);

    function updatePlayerX(value) {
      ticTacToeStore.updatePlayerX(value);
    }

    function updatePlayerO(value) {
      ticTacToeStore.updatePlayerO(value);
    }

    function handleCellClick(value) {
      ticTacToeStore.handleCellClick(value);
    }

    function startNewGame() {
      ticTacToeStore.startNewGame();
    }

    function resetGame() {
      ticTacToeStore.resetGame();
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