<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  show: Boolean,
  modelValue: {
    type: Array,
    default: () => [0, Infinity]
  }
});

const emit = defineEmits(['update:show', 'update:modelValue']);

// Internal slider values (0-100)
const minSlider = ref(0);
const maxSlider = ref(100);

// Constants for mapping
// 0-5 slider -> 0-0.1 m/s
// 5-20 slider -> 0.1-10 m/s
// 20-50 slider -> 10-33 m/s
// 50-75 slider -> 33-55 m/s
// 75-99 slider -> 55-550 m/s (Quadratic)
// 100 slider -> Infinity
const SPLINE_K = 495 / 576; // (550-55)/(24^2)

function toReal(sliderVal, isMax) {
  // Special handling for max slider at 100 -> Infinity
  if (isMax && sliderVal >= 100) return Infinity;
  if (sliderVal >= 100) return Infinity; // Safety

  let val;
  if (sliderVal <= 5) {
    // 0-5 -> 0-0.1
    val = sliderVal / 50;
  } else if (sliderVal <= 20) {
    // 5-20 -> 0.1-10
    // (sliderVal - 5) / 15 = (val - 0.1) / 9.9
    val = 0.1 + (sliderVal - 5) * 9.9 / 15;
  } else if (sliderVal <= 50) {
    // 20-50 -> 10-33
    // (sliderVal - 20) / 30 = (val - 10) / 23
    val = 10 + (sliderVal - 20) * 23 / 30;
  } else if (sliderVal <= 75) {
    // 50-75 -> 33-55
    // (sliderVal - 50) / 25 = (val - 33) / 22
    val = 33 + (sliderVal - 50) * 22 / 25;
  } else {
    // 75-99 -> 55-550
    const x = sliderVal - 75;
    val = 55 + SPLINE_K * x * x;
  }

  if (val <= 10) {
    return Math.round(val * 10) / 10;
  }
  return Math.round(val);
}

function toSlider(realVal) {
  if (realVal === Infinity) return 100;
  
  // Clamp to 0
  const v = Math.max(0, realVal);

  if (v <= 0.1) {
    // 0-0.1 -> 0-5
    return v * 50;
  } else if (v <= 10) {
    // 0.1-10 -> 5-20
    // (v - 0.1) / 9.9 = (s - 5) / 15
    return 5 + (v - 0.1) * 15 / 9.9;
  } else if (v <= 33) {
    // 10-33 -> 20-50
    // (v - 10) / 23 = (s - 20) / 30
    return 20 + (v - 10) * 30 / 23;
  } else if (v <= 55) {
    // 33-55 -> 50-75
    // (v - 33) / 22 = (s - 50) / 25
    return 50 + (v - 33) * 25 / 22;
  } else {
    // 55-550 -> 75-99
    // v = 55 + K * (s - 75)^2
    // s = 75 + sqrt((v - 55) / K)
    const x = Math.sqrt((v - 55) / SPLINE_K);
    return Math.min(99, 75 + x);
  }
}

function formatVal(v) {
  if (v === Infinity) return '不限';
  return `${v} m/s`;
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
    // Prevent crossover logic
    if (minSlider.value !== toSlider(props.modelValue[0])) {
       // Min moved past max -> push max
       maxSlider.value = newMin;
    } else {
       // Max moved past min -> push min
       minSlider.value = newMax;
    }
    return;
  }
  
  const realMin = toReal(newMin, false);
  const realMax = toReal(newMax, true);
  
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
        <span class="filter-title">速度筛选</span>
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
  bottom: 80px;
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
  font-size: 12px;
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
  background: #c96767;
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