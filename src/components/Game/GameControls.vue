<template>
    <div class="game-controls">
      <button @click="startNewGame">Nuova Partita</button>
      <button @click="resetGame">Resetta</button>
    </div>
  </template>
  
  <script>
  export default {
    emits: ['startNewGame', 'resetGame'],
    methods: {
      startNewGame() {
        this.$emit('startNewGame');
      },
      resetGame() {
        this.$emit('resetGame');
      }
    }
  };
  </script>
  
  <style scoped>
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
  