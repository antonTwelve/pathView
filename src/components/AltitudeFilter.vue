<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  show: Boolean,
  modelValue: {
    type: Array,
    default: () => [-Infinity, Infinity]
  }
});

const emit = defineEmits(['update:show', 'update:modelValue']);

// Internal slider values (0-100)
const minSlider = ref(0);
const maxSlider = ref(100);

// Constants for mapping
// Slider 0 -> -Infinity (不限)
// Slider 1 -> -500m
// Slider 50 -> 1500m
// Slider 99 -> 11000m
// Slider 100 -> Infinity (不限)

// Part 2 Constant: k = (11000 - 1500) / 49^2
const QUAD_K = 9500 / 2401;

function toReal(sliderVal) {
  if (sliderVal <= 0) return -Infinity;
  if (sliderVal >= 100) return Infinity;
  
  if (sliderVal <= 50) {
    // Linear mapping [1, 50] -> [-500, 1500]
    // Range = 2000, Steps = 49
    const pct = (sliderVal - 1) / 49;
    return Math.round(-500 + pct * 2000);
  } else {
    // Quadratic mapping [50, 99] -> [1500, 11000]
    // y = 1500 + k * (x-50)^2
    const x = sliderVal - 50;
    return Math.round(1500 + QUAD_K * x * x);
  }
}

function toSlider(realVal) {
  if (realVal === -Infinity || realVal === -999999) return 0;
  if (realVal === Infinity || realVal === 999999) return 100;
  
  if (realVal <= 1500) {
     // Linear Inverse
     const v = Math.max(-500, realVal);
     const pct = (v + 500) / 2000;
     return Math.max(1, 1 + pct * 49);
  } else {
     // Quadratic Inverse
     const v = Math.min(11000, realVal);
     const x = Math.sqrt((v - 1500) / QUAD_K);
     return Math.min(99, 50 + x);
  }
}

function formatVal(v) {
  if (v === -Infinity) return '不限';
  if (v === Infinity) return '不限';
  return `${v}m`;
}

// Watch external prop changes
watch(() => props.modelValue, (newVal) => {
  if (!newVal) return;
  minSlider.value = toSlider(newVal[0]);
  maxSlider.value = toSlider(newVal[1]);
}, { immediate: true });

// Watch internal slider changes
watch([minSlider, maxSlider], ([newMin, newMax]) => {
  if (newMin > newMax) {
    // Prevent crossover
    if (minSlider.value !== toSlider(props.modelValue[0])) {
       minSlider.value = newMax; 
    } else {
       maxSlider.value = newMin;
    }
    return;
  }
  
  const realMin = toReal(newMin);
  const realMax = toReal(newMax);
  
  // Emit only if different
  if (realMin !== props.modelValue[0] || realMax !== props.modelValue[1]) {
    emit('update:modelValue', [realMin, realMax]);
  }
});

function close() {
  emit('update:show', false);
}
</script>

<template>
  <Transition name="pop">
    <div class="filter-popup" v-if="show" @click.stop>
      <div class="filter-header">
        <span class="filter-title">海拔筛选</span>
      </div>
      <div class="filter-body">
        <div class="filter-row">
          <span class="value-text">{{ formatVal(modelValue[0]) }}</span>
          
          <div class="slider-container">
            <div class="track-bg"></div>
            <div class="track-fill" :style="{ left: minSlider + '%', right: (100 - maxSlider) + '%' }"></div>
            
            <input type="range" v-model.number="minSlider" min="0" max="100" step="0.1" class="thumb thumb-left" />
            <input type="range" v-model.number="maxSlider" min="0" max="100" step="0.1" class="thumb thumb-right" />
          </div>

          <span class="value-text">{{ formatVal(modelValue[1]) }}</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.filter-popup {
  position: absolute;
  bottom: 130px;
  right: 80px;
  width: 300px;
  background: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  z-index: 105;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
}

.filter-header {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
}

.filter-title {
  font-size: 13px;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
}

.filter-body {
  padding: 16px 20px;
}

.filter-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.value-text {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  min-width: 40px;
  text-align: center;
}

/* Dual Slider CSS */
.slider-container {
  position: relative;
  height: 24px;
  flex: 1;
}

.track-bg {
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(255,255,255,0.15);
  border-radius: 2px;
}

.track-fill {
  position: absolute;
  top: 10px;
  height: 4px;
  background: #70ce7e;
  border-radius: 2px;
  z-index: 1;
}

.thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 24px;
  -webkit-appearance: none;
  pointer-events: none; 
  background: none;
  z-index: 2;
  margin: 0;
}

/* Webkit Thumb */
.thumb::-webkit-slider-thumb {
  -webkit-appearance: none;
  pointer-events: auto; 
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.4);
  cursor: pointer;
  margin-top: 5px; 
}

.thumb::-webkit-slider-thumb:hover {
  transform: scale(1.1);
}

/* Firefox Thumb */
.thumb::-moz-range-thumb {
  pointer-events: auto;
  width: 14px;
  height: 14px;
  border: none;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.4);
  cursor: pointer;
}

.pop-enter-active,
.pop-leave-active {
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.95) translateX(10px);
}
</style>