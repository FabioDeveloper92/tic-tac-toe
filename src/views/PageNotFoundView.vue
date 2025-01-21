<template>
  <section class="section is-fullheight">
    <div class="container is-flex is-align-items-center is-justify-content-center" style="height: 100%;">
      <div class="has-text-centered">
        <h1 class="title is-1" style="color: #ff6f61;">Oops! Page Not Found</h1>
        <p class="subtitle is-3" style="color: #555;">It looks like nothing was found at this location.</p>
        <button
          class="button is-danger is-large"
          @click="goHome"
        >
          Go Back Home
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>