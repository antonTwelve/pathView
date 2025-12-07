<script setup>
import { useSettingsStore } from '../stores/settings';
import { storeToRefs } from 'pinia';

const settingsStore = useSettingsStore();
const { showSystemInfo, syncZoomRotate, isSettingsOpen } = storeToRefs(settingsStore);

function close() {
  settingsStore.toggleSettingsModal();
}
</script>

<template>
  <Transition name="fade">
    <div class="settings-overlay" v-if="isSettingsOpen" @click="close">
      <div class="settings-card" @click.stop>
        <div class="card-header">
          <h3>设置</h3>
        </div>
        
        <div class="card-content">
          <div class="setting-item">
            <span class="setting-label">显示debug信息</span>
            <label class="switch">
              <input type="checkbox" v-model="showSystemInfo">
              <span class="slider round"></span>
            </label>
          </div>

          <div class="setting-item" style="margin-top: 16px;">
            <span class="setting-label">缩放跟随鼠标位置</span>
            <label class="switch">
              <input type="checkbox" v-model="syncZoomRotate">
              <span class="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.settings-overlay {
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

.settings-card {
  background: rgba(5, 5, 5, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  width: 80%;
  max-width: 900px; /* To prevent it from becoming too wide on very large screens */
  height: 80vh;
  max-height: 700px; /* To prevent it from becoming too tall */
  padding: 32px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.8);
  color: #fff;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex; /* Added for better content layout inside the card */
  flex-direction: column; /* Added for better content layout inside the card */
  user-select: none;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none;    /* Firefox */
  -ms-user-select: none;     /* Internet Explorer/Edge */
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
  flex: 1; /* Allows content to grow and shrink */
  overflow-y: auto; /* Adds scrollbar if content overflows vertically */
  padding-right: 10px; /* To prevent scrollbar from overlapping content */
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.setting-label {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
}

/* Toggle Switch */
.switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.2);
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

input:checked + .slider {
  background-color: #34c759;
}

input:focus + .slider {
  box-shadow: 0 0 1px #34c759;
}

input:checked + .slider:before {
  transform: translateX(20px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
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