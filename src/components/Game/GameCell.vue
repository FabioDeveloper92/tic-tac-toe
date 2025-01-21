<template>
    <div class="game-cell" @click="makeMove">
      {{ value }}
    </div>
  </template>
  
  <script>
  export default {
    props: ['value', 'index'],
    emits: ['cellClicked'],
    methods: {
      makeMove() {
        this.$emit('cellClicked', this.index);
      }
    }
  };
  </script>
  
  <style scoped>
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
  </style>
  