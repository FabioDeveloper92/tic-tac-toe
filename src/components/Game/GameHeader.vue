<template>
  <div class="game-header">
    <input :value="playerX" @input="updatePlayerX" placeholder="Nome Giocatore X" />
    <input :value="playerO" @input="updatePlayerO" placeholder="Nome Giocatore O" />

    <p v-show="playerX && playerO ">{{ playerX }} (X): {{ scoreX }} - {{ playerO }} (O): {{ scoreO }}</p>

  </div>
</template>

<script>
export default {
  props: ['playerX', 'playerO', 'scoreX', 'scoreO'],
  emits: ['update:playerX', 'update:playerO'],
  methods: {
    updatePlayerX(event) {
      this.$emit('update:playerX', event.target.value);
    },
    updatePlayerO(event) {
      this.$emit('update:playerO', event.target.value);
    }
  }
};
</script>

<style scoped>
.game-header {
  text-align: center;
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
</style>
