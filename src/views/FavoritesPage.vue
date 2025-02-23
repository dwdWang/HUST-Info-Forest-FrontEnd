<template>
  <div class="favorites-page">
    <div class="header">
      <h1>思维导图收藏夹</h1>
      <button @click="toggleEditMode" class="edit-button">
        {{ isEditing ? '保存' : '编辑' }}
      </button>
    </div>
    <div class="content-container">
      <svg ref="svgRef" class="mindmap-container"></svg>
      <textarea 
        v-if="isEditing" 
        v-model="markdownContent" 
        class="markdown-editor"
        placeholder="输入Markdown格式的思维导图内容..."
      ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { Markmap } from 'markmap-view';
import { transformer } from '../utils/markmap';

const initValue = `# 我的收藏夹

## 学习资源
### 计算机基础
- 数据结构
- 算法
- 操作系统
### 编程语言
- JavaScript
- Python
- Java

## 考试准备
### 考研资料
- 数学
- 英语
- 专业课

## 生活技能
### 时间管理
### 健康饮食
### 运动计划`;

const svgRef = ref<SVGElement>();
const markdownContent = ref(initValue);
const isEditing = ref(false);
let mindmap: any;

const updateMindmap = async () => {
  if (!mindmap) return;
  const { root } = transformer.transform(markdownContent.value);
  await mindmap.setData(root);
  mindmap.fit();
};

const toggleEditMode = () => {
  isEditing.value = !isEditing.value;
};

onMounted(() => {
  if (svgRef.value) {
    mindmap = Markmap.create(svgRef.value);
    updateMindmap();
  }
});

watch(markdownContent, () => {
  updateMindmap();
}, { immediate: true });
</script>

<style scoped>
.favorites-page {
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.edit-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.edit-button:hover {
  background-color: #0056b3;
}

.content-container {
  flex: 1;
  position: relative;
  min-height: 0;
  overflow: hidden;
}

.markdown-editor {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: monospace;
  resize: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(0px);
  z-index: 1;
}

.mindmap-container {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.markdown-editor:focus {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(2px);
}
</style>
