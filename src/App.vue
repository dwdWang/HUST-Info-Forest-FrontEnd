<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import TopNavigation from './components/TopNavigation.vue'
</script>

<template>
  <div id="app">
    <TopNavigation />
    <router-view />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
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
  padding-top: 70px; /* 为固定定位的导航栏留出空间 */
  margin-top: 70px;
}
</style>
