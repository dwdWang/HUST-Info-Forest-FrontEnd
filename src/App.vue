<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import TopNavigation from './components/TopNavigation.vue'
</script>

<template>
  <div id="app">
    <TopNavigation />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.app {
  min-height: 100vh;
}

.main-content {
  padding-top: 60px; /* Reduced from 70px */
  margin-top: 0px;  /* Removed redundant margin */
}
</style>
