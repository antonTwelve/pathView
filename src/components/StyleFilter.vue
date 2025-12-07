<script setup>
import { ref, watch } from 'vue';
import CustomColorPicker from './CustomColorPicker.vue';

const props = defineProps({
  currentMode: {
    type: Number,
    default: 0
  },
  show: Boolean,
  themeColor: {
    type: String,
    default: '#ffffff'
  }
});

const emit = defineEmits(['update:show', 'changeMode', 'update:themeColor']);

const showColorPicker = ref(false);

// Close picker when menu closes
watch(() => props.show, (val) => {
  if (!val) showColorPicker.value = false;
});

function toggle() {
  emit('update:show', !props.show);
}

function handleMonochromeClick() {
  if (props.currentMode !== 0) {
    emit('changeMode', 0); // Switch to monochrome mode
  }
  showColorPicker.value = !showColorPicker.value; // Toggle picker visibility
}

function selectMode(id) {
  emit('changeMode', id);
  if (id !== 0) {
    showColorPicker.value = false; // Hide picker if not in monochrome mode
  }
}
</script>

<template>
  <div class="fab-container-style">
    <Transition name="scale">
      <div class="style-panel-container" v-if="show" @click.stop>
        
        <!-- Color Picker Popup (Left Side) -->
        <Transition name="slide-fade">
          <CustomColorPicker 
            v-if="showColorPicker && currentMode === 0"
            :model-value="themeColor"
            @update:model-value="(val) => emit('update:themeColor', val)"
            @click.stop
            class="picker-popup"
          />
        </Transition>

        <div class="style-menu">
          <!-- Mode 0: Themed (Monochrome Gradient) -->
          <div class="style-option" @click="handleMonochromeClick">
            <div class="circle-btn theme-btn-container" :class="{ active: currentMode === 0 }" :style="{ background: `linear-gradient(135deg, #000000, ${themeColor})` }">
            </div>
            <span class="style-label">单色渐变</span>
          </div>

          <!-- Mode 1: Heatmap -->
          <div class="style-option" @click="selectMode(1)">
            <div class="circle-btn heat-btn" :class="{ active: currentMode === 1 }"></div>
            <span class="style-label">热力图</span>
          </div>
        </div>

      </div>
    </Transition>
    
    <button class="fab-btn" @click.stop="toggle" :class="{ active: show }">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.fab-container-style {
  position: absolute;
  bottom: 274px;
  right: 24px;
  display: flex;
  align-items: flex-end;
  gap: 16px;
  z-index: 101;
}

.style-panel-container {
  position: relative; /* Keep relative for positioning children */
  display: flex;
  flex-direction: row; /* Puts picker on left, style-menu on right */
  align-items: flex-end; /* Align bottom */
  gap: 12px;
}

.picker-popup {
  position: static; /* Remove absolute positioning, let flexbox handle it */
  margin-right: 0; /* Remove specific margin if flex gap handles it */
  /* Specific override for style-panel-container's align-items: flex-end if picker height is different */
  align-self: flex-start; /* Align to top for better visual if it's tall */
}

.fab-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(10, 10, 10, 0.6);
  backdrop-filter: blur(12px);
  border: none;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.5);
}

.fab-btn svg {
  width: 16px;
  height: 16px;
  stroke-width: 1.5;
}

.fab-btn:hover, .fab-btn.active {
  background: rgba(30, 30, 30, 0.8);
  transform: scale(1.05);
  color: #bf5af2; /* Purple for active state */
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2), 0 6px 16px rgba(0, 0, 0, 0.6);
}

.style-menu {
  background: rgba(5, 5, 5, 0.75);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: row; /* Changed to row */
  gap: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  margin-bottom: 0;
}

.style-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.style-option:hover {
  transform: translateY(-2px);
}

.circle-btn {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.2);
}

.style-option:hover .circle-btn {
  box-shadow: 0 4px 12px rgba(0,0,0,0.4), 0 0 0 2px rgba(255,255,255,0.3);
}

.circle-btn.active {
  transform: scale(1.15);
  box-shadow: 0 0 0 2px #fff, 0 0 16px rgba(255,255,255,0.25);
}

.heat-btn {
  background: linear-gradient(135deg, #0000ff, #00ffff, #00ff00, #ffff00, #ff0000);
}

.style-label {
  font-size: 11px;
  color: rgba(255,255,255,0.6);
  font-weight: 500;
}

.style-option:hover .style-label {
  color: #fff;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: bottom right;
}

.scale-enter-from,
.scale-leave-to {
  transform: scale(0.8);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>