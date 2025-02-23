<template>
  <div class="info-stream-page">
    <div class="stream-container">
      <div class="stream-list">
        <div v-for="item in infoStream" 
             :key="item.id" 
             class="result-card">
          <div class="result-header">
            <h3>{{ item.title }}</h3>
            <span class="result-date">{{ item.date }}</span>
          </div>
          <p class="result-content">{{ item.content }}</p>
          <div class="result-footer">
            <div class="interaction-stats">
              <span class="stat-item">👍 {{ item.likes }}</span>
              <span class="stat-item">⭐ {{ item.favorites }}</span>
              <span class="stat-item">💭 {{ item.comments }}</span>
              <span class="stat-item">❓ {{ item.questions }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface InfoItem {
  id: number;
  title: string;
  content: string;
  date: string;
  likes: number;
  favorites: number;
  comments: number;
  questions: number;
  views: number;
  tags: string[];
}

const infoStream: InfoItem[] = [
  {
    id: 1,
    title: "如何提高学习效率？",
    content: "1. 制定合理的学习计划 2. 找到适合自己的学习方法 3. 保持规律的作息时间 4. 做好笔记和复习...",
    date: new Date().toLocaleDateString(),
    likes: 156,
    favorites: 89,
    comments: 45,
    questions: 12,
    views: 1234,
    tags: ["学习方法", "时间管理", "效率提升"]
  },
  {
    id: 2,
    title: "大学生活适应指南",
    content: "刚入学的新生可能会面临各种适应问题，本文为大家整理了一些实用的建议和经验分享...",
    date: "2023-12-20",
    likes: 234,
    favorites: 167,
    comments: 89,
    questions: 23,
    views: 2156,
    tags: ["大学生活", "新生指南", "经验分享"]
  },
  {
    id: 3,
    title: "考研备考经验分享",
    content: "考研需要提前做好充分的准备，包括专业课复习、英语学习、数学练习等多个方面...",
    date: "2023-12-19",
    likes: 345,
    favorites: 289,
    comments: 120,
    questions: 45,
    views: 3789,
    tags: ["考研", "备考经验", "学习规划"]
  }
];
</script>

<style scoped>
.info-stream-page {
  padding: 30px 20px 20px;
  max-width: 800px;
  margin: 0 auto;  /* 只保留左右边距的自动居中 */
}

.stream-title {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.stream-list {
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
  .info-stream-page {
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
