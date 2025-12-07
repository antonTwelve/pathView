<script setup>
import { ref, watch, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '#ffffff'
  }
});

const emit = defineEmits(['update:modelValue', 'close']);

// HSV State
const hue = ref(0);
const saturation = ref(0);
const value = ref(100);

// DOM Refs
const svPanel = ref(null);
const hueSlider = ref(null);
const isDraggingSV = ref(false);
const isDraggingHue = ref(false);

// Helper: Hex <-> HSV
function hexToHsv(hex) {
  let r = 0, g = 0, b = 0;
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }
  r /= 255; g /= 255; b /= 255;
  
  let cmin = Math.min(r,g,b), cmax = Math.max(r,g,b), delta = cmax - cmin;
  let h = 0, s = 0, v = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);
  if (h < 0) h += 360;

  v = cmax;
  s = cmax == 0 ? 0 : delta / cmax;

  return { h, s: s * 100, v: v * 100 };
}

function hsvToHex(h, s, v) {
  s /= 100; v /= 100;
  let c = v * s;
  let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  let m = v - c;
  let r = 0, g = 0, b = 0;

  if (0 <= h && h < 60) { r = c; g = x; b = 0; }
  else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
  else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
  else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
  else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
  else if (300 <= h && h < 360) { r = c; g = 0; b = x; }

  r = Math.round((r + m) * 255).toString(16).padStart(2, '0');
  g = Math.round((g + m) * 255).toString(16).padStart(2, '0');
  b = Math.round((b + m) * 255).toString(16).padStart(2, '0');

  return `#${r}${g}${b}`;
}

// Init
watch(() => props.modelValue, (newHex) => {
  const { h, s, v } = hexToHsv(newHex);
  // Only update if significantly different to prevent fighting with drag
  // For simplicity in this interaction, we update if not dragging
  if (!isDraggingSV.value && !isDraggingHue.value) {
    hue.value = h;
    saturation.value = s;
    value.value = v;
  }
}, { immediate: true });

function updateColor() {
  const hex = hsvToHex(hue.value, saturation.value, value.value);
  emit('update:modelValue', hex);
}

// Mouse Interactions
function handleSV(e) {
  if (!svPanel.value) return;
  const rect = svPanel.value.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  
  x = Math.max(0, Math.min(x, rect.width));
  y = Math.max(0, Math.min(y, rect.height));

  saturation.value = (x / rect.width) * 100;
  value.value = 100 - (y / rect.height) * 100;
  updateColor();
}

function onSVMouseDown(e) {
  isDraggingSV.value = true;
  handleSV(e);
  window.addEventListener('mousemove', onSVMouseMove);
  window.addEventListener('mouseup', onSVMouseUp);
}

function onSVMouseMove(e) {
  if (isDraggingSV.value) handleSV(e);
}

function onDragEnd() {
  // Capture and stop the next click event to prevent parent from closing
  const stopClick = (e) => {
    e.stopPropagation();
  };
  window.addEventListener('click', stopClick, { capture: true, once: true });
  // Safety cleanup
  setTimeout(() => {
    window.removeEventListener('click', stopClick, { capture: true });
  }, 50);
}

function onSVMouseUp() {
  isDraggingSV.value = false;
  window.removeEventListener('mousemove', onSVMouseMove);
  window.removeEventListener('mouseup', onSVMouseUp);
  onDragEnd();
}

function handleHue(e) {
  if (!hueSlider.value) return;
  const rect = hueSlider.value.getBoundingClientRect();
  let x = e.clientX - rect.left;
  x = Math.max(0, Math.min(x, rect.width));
  
  hue.value = (x / rect.width) * 360;
  updateColor();
}

function onHueMouseDown(e) {
  isDraggingHue.value = true;
  handleHue(e);
  window.addEventListener('mousemove', onHueMouseMove);
  window.addEventListener('mouseup', onHueMouseUp);
}

function onHueMouseMove(e) {
  if (isDraggingHue.value) handleHue(e);
}

function onHueMouseUp() {
  isDraggingHue.value = false;
  window.removeEventListener('mousemove', onHueMouseMove);
  window.removeEventListener('mouseup', onHueMouseUp);
  onDragEnd();
}

// Styles
const bgColor = computed(() => hsvToHex(hue.value, 100, 100));
const pointerStyle = computed(() => ({
  left: `${saturation.value}%`,
  top: `${100 - value.value}%`
}));
const huePointerStyle = computed(() => ({
  left: `${(hue.value / 360) * 100}%`
}));

</script>

<template>
  <div class="custom-picker" @click.stop>
    <!-- Saturation / Value Area -->
    <div class="sv-panel" ref="svPanel" :style="{ backgroundColor: bgColor }" @mousedown="onSVMouseDown">
      <div class="sv-white"></div>
      <div class="sv-black"></div>
      <div class="sv-pointer" :style="pointerStyle"></div>
    </div>

    <!-- Hue Slider -->
    <div class="hue-slider-track" ref="hueSlider" @mousedown="onHueMouseDown">
      <div class="hue-pointer" :style="huePointerStyle"></div>
    </div>

    <!-- Hex Input -->
    <div class="hex-input-row">
      <span class="hash">#</span>
      <input 
        type="text" 
        :value="modelValue.replace('#', '')" 
        @input="(e) => emit('update:modelValue', '#' + e.target.value)"
        class="hex-field"
        maxlength="6"
      />
      <div class="preview-color" :style="{ backgroundColor: modelValue }"></div>
    </div>
  </div>
</template>

<style scoped>
.custom-picker {
  width: 220px;
  background: rgba(5, 5, 5, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 12px;
  user-select: none;
}

.sv-panel {
  width: 100%;
  height: 140px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: crosshair;
  touch-action: none;
}

.sv-white {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(to right, #fff, rgba(255,255,255,0));
}

.sv-black {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(to top, #000, rgba(0,0,0,0));
}

.sv-pointer {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 4px rgba(0,0,0,0.5);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.hue-slider-track {
  width: 100%;
  height: 14px;
  border-radius: 7px;
  background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
  position: relative;
  cursor: pointer;
  touch-action: none;
}

.hue-pointer {
  position: absolute;
  top: 50%;
  width: 14px;
  height: 14px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 4px rgba(0,0,0,0.5);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.hex-input-row {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.1);
}

.hash {
  color: rgba(255,255,255,0.4);
  font-family: var(--font-mono);
  font-size: 14px;
}

.hex-field {
  background: transparent;
  border: none;
  color: #fff;
  font-family: var(--font-mono);
  font-size: 14px;
  width: 100%;
  outline: none;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.preview-color {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  border: 1px solid rgba(255,255,255,0.2);
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
}
</style>