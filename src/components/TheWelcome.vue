<template>
  <div style="text-align: center; padding: 50px;">
    <h1 style="font-size: 3em; color: #4CAF50;">{{ $t('welcome') }}</h1>
    <p style="font-size: 1.5em; color: #555;">{{$t('welcomeSubTitle') }}</p>
    <div>
      <TicTacToe />
    </div>
  </div>
</template>

<script setup>
import TicTacToe from './Game/TicTacToe.vue';
</script>