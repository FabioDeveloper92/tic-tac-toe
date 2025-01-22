<template>
    <nav class="navbar is-fixed-top">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img alt="Logo" src="@/assets/logo.svg" width="25" height="25" />
        </a>
        <a class="navbar-item" href="/">Home</a>

    </div>
        <div class="navbar-end">
      <div class="navbar-item">
        <div class="select is-rounded is-small">
          <select v-model="currentLocale" @change="changeLanguage">
            <option value="en">English</option>
            <option value="it">Italiano</option>
          </select>
        </div>
      </div>
    </div>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  export default defineComponent({
    setup() {
      const { locale } = useI18n();
  
      // Carica la lingua dal localStorage
      const savedLocale = localStorage.getItem('locale') || 'en';
      locale.value = savedLocale;
  
      // Metodo per cambiare la lingua
      const changeLanguage = (event: Event) => {
        const target = event.target as HTMLSelectElement;
        const newLocale = target.value;
        locale.value = newLocale;
        localStorage.setItem('locale', newLocale); // Memorizza la lingua nel localStorage
      };
  
      return {
        currentLocale: locale, // legato al valore della lingua
        changeLanguage,
      };
    },
  });
  </script>
  
  <style scoped>
  .navbar-item select {
    background: transparent;
  }
  </style>
  