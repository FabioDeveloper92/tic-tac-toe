<template>
  <div>
    <HeaderComponent />
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
import HeaderComponent from './components/HeaderComponent.vue';

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
