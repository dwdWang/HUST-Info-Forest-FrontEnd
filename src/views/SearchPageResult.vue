<template>
  <div class="result-page">
    <div class="search-results">
      <h2 class="result-count">找到 {{ results.length }} 条相关结果</h2>
      <div class="result-list">
        <div v-for="result in results" 
             :key="result.id" 
             class="result-card">
          <div class="result-header">
            <h3>{{ result.title }}</h3>
            <span class="result-date">{{ result.date }}</span>
          </div>
          <p class="result-content">{{ result.content }}</p>
          <div class="result-footer">
            <div class="interaction-stats">
              <span class="stat-item">👍 {{ result.likes }}</span>
              <span class="stat-item">⭐ {{ result.favorites }}</span>
              <span class="stat-item">💭 {{ result.comments }}</span>
              <span class="stat-item">❓ {{ result.questions }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

interface SearchResult {
  id: number;
  title: string;
  content: string;
  date: string;
  likes: number;
  favorites: number;
  comments: number;
  questions: number;
  views: number;     // Added views count
  tags: string[];    // Added tags array
}

const route = useRoute();
const searchQuery = route.query.q as string;

// 更新模拟数据，使用查询参数
const results: SearchResult[] = [
  {
    id: 1,
    title: searchQuery,
    content: "对于这个问题，我们为您找到以下解答：1. 先理解基本概念 2. 多做习题 3. 合理规划时间...",
    date: new Date().toLocaleDateString(),
    likes: 42,
    favorites: 28,
    comments: 15,
    questions: 3,
    views: 238,    // Added views data
    tags: ["学习方法", "模拟电路", "时间管理"]  // Added tags data
  },
  {
    id: 2,
    title: "转专业经验分享",
    content: "转专业考试主要包含：高等数学。建议提前3个月开始准备，考前...",
    date: "2023-12-19",
    likes: 38,
    favorites: 45,
    comments: 23,
    questions: 5,
    views: 456,    // Added views data
    tags: ["转专业", "经验分享", "考试准备"]  // Added tags data
  }
];
</script>

<style scoped>
.result-page {
  padding: 20px;
  max-width: 800px;
  margin: 0px auto 0;
}

.result-count {
  color: #666;
  font-size: 16px;
  margin-bottom: 20px;
}

.result-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.result-card {
  background: white;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}

.result-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.result-header h3 {
  margin: 0;
  color: #333;
  font-size: 18px;
}

.result-date {
  color: #999;
  font-size: 14px;
}

.result-content {
  color: #666;
  line-height: 1.6;
  margin: 10px 0;
}

.result-footer {
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.interaction-stats {
  display: flex;
  gap: 20px;
  color: #666;
  font-size: 14px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: color 0.2s;
}

.stat-item:hover {
  color: #007bff;
}

@media (max-width: 768px) {
  .result-page {
    padding: 15px;
  }
  
  .result-card {
    padding: 15px;
  }
  
  .result-header h3 {
    font-size: 16px;
  }
  
  .result-content {
    font-size: 14px;
  }

  .interaction-stats {
    gap: 15px;
    font-size: 13px;
  }
}
</style>
