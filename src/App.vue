<template>
  <div>
    <nav class="navbar is-fixed-top">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img alt="Logo" src="@/assets/logo.svg" width="25" height="25" />
        </a>
        <a class="navbar-item" href="/">Home</a>
      </div>
    </nav>
    <main class="main-content">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column">
          <RouterView />
        </div>
      </div>
    </div>
  </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Gestione del menu per dispositivi mobili
  const menu = document.querySelector('.navbar-menu');
  const items = document.querySelectorAll('.navbar-item');

  items.forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        menu.classList.remove('is-active');
      }
    });
  });
});
</script>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
}

.navbar {
  background-color: lightblue;
}

.main-content {
  padding-top: 60px; /* Spazio per l'intestazione fissa */
}
</style>
