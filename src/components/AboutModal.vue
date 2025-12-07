<script setup>
import { useSettingsStore } from '../stores/settings';
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';

const settingsStore = useSettingsStore();
const { isAboutOpen } = storeToRefs(settingsStore);

const copiedDDLState = ref(false); // Renamed for clarity

const ddl = `CREATE TABLE locations (
    ID        INTEGER PRIMARY KEY AUTOINCREMENT,
    Longitude DOUBLE,
    Latitude  DOUBLE,
    Altitude  DOUBLE,
    Accuracy  DOUBLE,
    Bearing   DOUBLE,
    Speed     DOUBLE,
    Type      VARCHAR,
    Time      VARCHAR,
    TimeStamp INTEGER
);`;

// Reusable SQL highlighting function
function highlightSql(sqlString) {
  let html = sqlString;

  // Keywords
  const keywords = ['CREATE', 'TABLE', 'PRIMARY', 'KEY', 'AUTOINCREMENT', 'INSERT', 'INTO', 'VALUES'];
  keywords.forEach(kw => {
    const regex = new RegExp(`\\b${kw}\\b`, 'g');
    html = html.replace(regex, `<span class="sql-keyword">${kw}</span>`);
  });

  // Types
  const types = ['INTEGER', 'DOUBLE', 'VARCHAR'];
  types.forEach(type => {
    const regex = new RegExp(`\\b${type}\\b`, 'g');
    html = html.replace(regex, `<span class="sql-type">${type}</span>`);
  });

  // Strings (only for DDL, not for table example data)
  // html = html.replace(/(['"])(.*?)\1/g, '<span class="sql-string">$1$2$1</span>');

  // Numbers (only for DDL, not for table example data)
  // html = html.replace(/(\b\d+(\.\d+)?\b)/g, '<span class="sql-number">$1</span>');

  // Punctuation (simple handling)
  html = html.replace(/([(),;])/g, '<span class="sql-punctuation">$1</span>');

  return html;
}

const highlightedDDL = computed(() => highlightSql(ddl));

const tableExampleData = [
  { field: 'ID', example: '1', comment: 'INTEGER, 主键，自动递增' },
  { field: 'Longitude', example: '116.397128', comment: 'DOUBLE, 经度' },
  { field: 'Latitude', example: '39.916668', comment: 'DOUBLE, 纬度' },
  { field: 'Altitude', example: '50.5', comment: 'DOUBLE, 海拔 (米)' },
  { field: 'Accuracy', example: '5.0', comment: 'DOUBLE, 定位精度 (米)' },
  { field: 'Bearing', example: '90.0', comment: 'DOUBLE, 方向 (0-360度)' },
  { field: 'Speed', example: '10.2', comment: 'DOUBLE, 速度 (米/秒)' },
  { field: 'Type', example: "'gps'", comment: "VARCHAR, 轨迹点类型 ('gps', 'network')" },
  { field: 'Time', example: "'2022-11-25 17:48:48.916 GMT+08:00'", comment: 'VARCHAR, 格式化后时间字符串' },
  { field: 'TimeStamp', example: '1667577630237', comment: 'INTEGER, 时间戳' },
];

function close() {
  settingsStore.toggleAboutModal();
}

async function copyToClipboard(text, copiedStateRef) {
  try {
    await navigator.clipboard.writeText(text);
    copiedStateRef.value = true;
    setTimeout(() => {
      copiedStateRef.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

function copyDDL() {
  copyToClipboard(ddl, copiedDDLState);
}
</script>

<template>
  <Transition name="fade">
    <div class="about-overlay" v-if="isAboutOpen" @click="close">
      <div class="about-card" @click.stop>
        <div class="card-header">
          <h3>关于</h3>
        </div>

        <div class="card-content">

          <!-- About Section -->
          <div class="section-group">
            <div class="app-info">
              <div class="app-logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48">
                  <circle cx="32" cy="32" r="30" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
                  <path d="M32 2 A 30 30 0 0 1 32 62" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" />
                  <path d="M2 32 A 30 30 0 0 1 62 32" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" />
                  <ellipse cx="32" cy="32" rx="30" ry="12" fill="none" stroke="rgba(255,255,255,0.1)"
                    stroke-width="1.5" />
                  <path d="M 14 48 C 20 55, 30 50, 40 32 S 54 12, 52 14" fill="none" stroke="#0a84ff" stroke-width="3"
                    stroke-linecap="round" />
                  <circle cx="52" cy="14" r="3" fill="#fff" />
                </svg>
              </div>
              <div class="app-meta">
                <h4>PathView <span class="version-tag">v0.0.1</span></h4>
                <p>轨迹可视化工具</p>
              </div>
            </div>

            <div class="desc-block">
              <p>支持拖拽 SQLite 数据库文件直接查看轨迹数据。内置平滑渲染、密度热力图及多维度筛选功能。</p>
            </div>
          </div>

          <hr class="divider" />

          <!-- Database Spec Section -->
          <div class="section-group">
            <h4>数据库表结构 (DDL)</h4>
            <p class="sub-text">请确保您的 SQLite 数据库包含名为 <code>locations</code> 的表，且结构兼容如下定义：</p>

            <div class="code-container">
              <button class="copy-btn" @click="copyDDL" :class="{ 'copied': copied }" :title="copied ? '已复制' : '点击复制'">
                <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </button>
              <pre v-html="highlightedDDL"></pre>
            </div>
          </div>

          <hr class="divider" />

          <!-- Example Data Section (Table) -->
          <div class="section-group">
            <h4>数据示例</h4>
            <p class="sub-text">一个标准的数据行结构可能如下所示：</p>
            <div class="data-table-container">
              <table>
                <thead>
                  <tr>
                    <th>字段名称</th>
                    <th>示例</th>
                    <th>注释</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, index) in tableExampleData" :key="index">
                    <td>{{ row.field }}</td>
                    <td>{{ row.example }}</td>
                    <td>{{ row.comment }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="card-footer">
            <p>更多功能开发中...</p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.about-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
}

.about-card {
  background: rgba(5, 5, 5, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  width: 80%;
  max-width: 700px;
  /* Reduced width for better reading */
  height: auto;
  max-height: 85vh;
  padding: 32px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.8);
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.card-header h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.card-content {
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;
  /* Reduced padding */
}

/* App Info Header */
.app-info {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.app-logo svg {
  display: block;
}

.app-meta h4 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}

.version-tag {
  font-size: 12px;
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
}

.app-meta p {
  margin: 4px 0 0 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
}

.desc-block p {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.divider {
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 24px 0;
}

/* Section Styling */
.section-group h4 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #fff;
}

.sub-text {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 0 12px 0;
}

.sub-text code {
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 4px;
  border-radius: 3px;
  font-family: var(--font-mono);
  color: #e5c07b;
}

.card-footer {
  margin-top: 24px;
  text-align: center;
}

.card-footer p {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
  margin: 0;
}

/* Scrollbar styling */
.card-content::-webkit-scrollbar {
  width: 6px;
}

.card-content::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

.card-content::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  transition: background 0.2s;
}

.card-content::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.35);
}

.code-container {
  position: relative;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.code-container:hover .copy-btn {
  opacity: 1;
  transform: translateY(0);
}

.code-container pre {
  margin: 0;
  white-space: pre;
  /* Changed to pre to prevent line wrapping */
  overflow-x: auto;
  /* Added for horizontal scrolling */
  font-family: var(--font-mono);
  font-feature-settings: "calt";
  font-size: 13px;
  /* Slightly smaller code font */
  font-style: normal;
  font-variant-ligatures: contextual;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  line-height: 1.4;
  /* Adjusted line height */
  color: #e6e6e6;
  text-align: left;
}

/* Syntax Highlighting Classes */
:deep(.sql-keyword) {
  color: #c678dd;
}

:deep(.sql-type) {
  color: #e5c07b;
}

:deep(.sql-punctuation) {
  color: #abb2bf;
}

/* Data Table Container */
.data-table-container {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  /* Ensures rounded corners */
}

.data-table-container table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
}

.data-table-container th,
.data-table-container td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.data-table-container th {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
}

.data-table-container tr:last-child td {
  border-bottom: none;
}

.data-table-container tbody tr:hover {
  background: rgba(255, 255, 255, 0.03);
}

.copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0;
  transform: translateY(5px);
}

.copy-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.copy-btn.copied {
  background: rgba(46, 204, 113, 0.2);
  border-color: rgba(46, 204, 113, 0.5);
  color: #2ecc71;
  opacity: 1;
  transform: translateY(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>