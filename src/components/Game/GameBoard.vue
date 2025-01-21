<template>
    <div class="game-board">
      <GameCell
        v-for="(cell, index) in board"
        :key="index"
        :value="cell"
        :index="index"
        @cellClicked="handleCellClick"
      />
    </div>
  </template>
  
  <script>
  import GameCell from './GameCell.vue';
  
  export default {
    components: { GameCell },
    props: ['board'],
    emits: ['update:board'],
    methods: {
      handleCellClick(index) {
        this.$emit('cellClicked', index);
      }
    }
  };
  </script>
  
  <style scoped>
  .game-board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 5px;
    margin: 0 auto;
    width: 320px;
  }
  </style>
  