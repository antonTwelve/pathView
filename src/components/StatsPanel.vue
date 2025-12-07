<script setup>
defineProps({
  totalPoints: Number,
  totalDistance: Number
});
</script>

<template>
  <div class="stats-panel">
    <div class="stat-item">
      <span class="stat-label">总点数</span>
      <span class="stat-val">{{ totalPoints > 0 ? totalPoints.toLocaleString() : '-' }}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">总距离</span>
      <span class="stat-val">{{ totalPoints > 0 ? (totalDistance).toFixed(2) + ' KM' : '-' }}</span>
    </div>
  </div>
</template>

<style scoped>
.stats-panel {
  position: absolute;
  top: 24px;
  left: 24px;
  width: auto;
  min-width: 140px;
  background: rgba(5, 5, 5, 0.75);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  color: #f0f0f0;
  padding: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
}

.stat-label {
  font-size: 12px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 1px;
}

.stat-val {
  font-family: var(--font-mono);
  font-size: 16px;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
}
</style>