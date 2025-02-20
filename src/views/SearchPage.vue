<template>
  <div class="search-page">
    <!-- Replace existing elements with a centered search box -->
    <div class="search-box">
      <span class="icon">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001l3.85 3.85a1 1 0 001.414-1.414l-3.85-3.85zm-5.242.656a5 5 0 110-10 5 5 0 010 10z"/>
        </svg>
      </span>
      <input type="text" placeholder="搜索..." />
      <button type="button">发送</button>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Update .search-page to occupy the area below the top navigation */
.search-page {
  position: fixed;
  top: 70px; /* height of TopNavigation */
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.search-box {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
}

.search-box .icon {
  margin-right: 5px;
  display: flex;
  align-items: center;
}

.search-box input {
  border: none;
  outline: none;
  padding: 5px;
  flex: 1;
}

.search-box button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
}
  
.page-id {
  color: #666;
  margin-top: 10px;
}
</style>
