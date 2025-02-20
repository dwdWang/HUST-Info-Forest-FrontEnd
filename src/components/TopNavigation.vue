<template>
  <nav class="top-navigation">
    <RouterLink 
      v-for="route in routes" 
      :key="route.path" 
      :to="route.path"
      class="nav-link"
      active-class="active"
    >
      {{ route.name }}
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
const routes = [
  { path: '/search', name: '细致搜索' },
  { path: '/communication', name: '信息交流' },
  { path: '/favorites', name: '超级收藏夹' },
  { path: '/chat', name: '聊天对谈' },
  { path: '/settings', name: '我的设置' }
];
</script>

<style scoped>
.top-navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 15px;
  background-color:rgb(255, 255, 255);
  z-index: 100;
}

.nav-link {
  text-decoration: none;
  color: #333;
  padding: 8px 16px;
  border-radius: 4px;
}

.nav-link.active {
  background-color: #007bff;
  color: white;
}

.nav-link:hover {
  background-color: #e9ecef;
}

.nav-link.active:hover {
  background-color: #0056b3;
}
</style>
