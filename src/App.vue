<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import TopNavigation from './components/TopNavigation.vue'
</script>

<template>
  <div class="app">
    <TopNavigation />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<style>
/* 添加全局样式重置 */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
</style>

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
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.main-content {
  margin-top: 60px;  /* 改用 margin-top 代替 padding-top，这样页面高度就和窗口一致了 */
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
</style>
