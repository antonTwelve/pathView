<script setup>
defineProps({
  visible: Boolean,
  text: String,
  isError: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);
</script>

<template>
  <Transition name="fade">
    <div class="loader-container" v-if="visible" :class="{ 'is-error': isError }" @click="isError && emit('close')">
      <div class="spinner-circle" v-if="!isError"></div>
      <svg v-else class="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <div class="loader-text">{{ text || (isError ? '发生错误' : '加载中...') }}</div>
    </div>
  </Transition>
</template>

<style scoped>
.loader-container {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 12px 24px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 200;
  box-shadow: 0 8px 32px rgba(0,0,0,0.6);
  transition: all 0.3s ease;
}

.loader-container.is-error {
  cursor: pointer;
  border-color: rgba(255, 85, 85, 0.3);
  padding-right: 28px; /* Balance for visual weight */
}

.loader-container.is-error:hover {
  background: rgba(20, 20, 20, 0.9);
  transform: translateX(-50%) scale(1.02);
}

.spinner-circle {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255,255,255,0.2);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.error-icon {
  width: 20px;
  height: 20px;
  color: #ff5555;
}

.loader-text {
  color: #fff;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0.3px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-10px);
}
</style>