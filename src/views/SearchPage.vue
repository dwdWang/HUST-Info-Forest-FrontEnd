<template>
  <div class="search-page">
    <div class="logo-container">
      <img src="/src/assets/hustxiaohui.jpg" alt="社团Logo" class="logo"/>
    </div>
    <div class="search-box">
      <span class="icon">
        <!-- 这个放大镜图标是一笔笔画出来的 -->
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </span>
      <input type="text" placeholder="试着描述一下你的问题..." />
      <button type="button">搜索</button>
    </div>
    <div class="search-suggestions">
      <p class="suggestion-title">你可以试试这样搜索:</p>
      <div class="suggestion-list">
        <div class="suggestion-item" 
             v-for="(suggestion, index) in suggestions" 
             :key="index"
             @click="handleSuggestionClick(suggestion)">
          "{{ suggestion }}"
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const suggestions = [
  "模拟电路的内容太多了，我要学不完了，怎么办？",
  "转专业考试涉及哪些内容？",
  "光谷步行街有哪些好吃的？我不吃辣。",
  "我觉得我天赋很差，总是跟不上进度，怎么办？",
  "我现在在期末周，10天能复习三门课么？"
];

const handleSuggestionClick = (query: string) => {
  router.push({
    path: '/search/result',
    query: { q: query }
  });
};
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
  flex-direction: column; /* Added to stack items vertically */
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-top: -50px; /* Added to move search box up from center */
}

.search-box {
  display: flex;
  align-items: center;
  border: 2px solid #000000;
  border-radius: 20px; /* modified for more rounded corners */
  padding: 15px;
  min-width: 600px; /* default for large screens */
}

.search-box .icon {
  margin-right: 1px;
  display: flex;
  align-items: center;
}

.search-box input {
  border: none;
  outline: none;
  padding: 5px 10px;
  flex: 1;/* 这告诉input占用父容器中所有剩余空间 */
  font-size: 20px;  /* added to increase text size */
}

.search-box button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px; /* 15px for top/bottom, 10px for left/right */
  font-size: 18px;  /* added to match input text size */
}
  
.page-id {
  color: #666;
  margin-top: 10px;
}

.logo-container {
  text-align: center;
  margin-bottom: 40px; /* Increased space between logo and search box */
}

.logo {
  height: 150px;  /* 调整这个值来改变logo大小 */
  width: auto;    /* 保持图片比例 */
}

.search-suggestions {
  margin-top: 20px;
  text-align: center;
  max-width: 600px;
}

.suggestion-title {
  color: #666;
  margin-bottom: 15px;
  font-size: 16px;
}

.suggestion-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.suggestion-item {
  color: #666;
  font-size: 14px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.suggestion-item:hover {
  color: #007bff;
  transform: translateX(5px);
}

/* Add media query for smaller screens */
@media (max-width: 768px) {
  .search-box {
    min-width: 50vh;
  }

  .logo {
    height: 100px;  /* 在小屏幕上稍微缩小logo */
  }

  .search-suggestions {
    max-width: 90vw;
    margin-top: 30px;
  }
  
  .suggestion-item {
    font-size: 13px;
    padding: 6px;
  }
}
</style>
