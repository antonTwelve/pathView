<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '../stores/settings';
import PathMap from '../components/PathMap.vue';
import StatsPanel from '../components/StatsPanel.vue';
import SystemStatus from '../components/SystemStatus.vue';
import InfoCard from '../components/InfoCard.vue';
import DateFilter from '../components/DateFilter.vue';
import StyleFilter from '../components/StyleFilter.vue';
import AltitudeFilter from '../components/AltitudeFilter.vue';
import SpeedFilter from '../components/SpeedFilter.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import SettingsModal from '../components/SettingsModal.vue';
import AboutModal from '../components/AboutModal.vue';

const pathMapRef = ref(null);
const settingsStore = useSettingsStore();
const { showSystemInfo, vizMode, themeColor, isSettingsOpen, isAboutOpen, altitudeRange, speedLimit, syncZoomRotate } = storeToRefs(settingsStore);

// State
const loading = ref(false);
const detailsLoading = ref(false);
const errorMsg = ref('');
const statusMsg = ref('');
const selectedPoint = ref(null);
const totalPoints = ref(0);
const totalDistance = ref(0);
const fps = ref(0);
const availableDates = ref([]);
const selectedTimeFilter = ref(null);

// UI State
const showDatePicker = ref(false);
const showStyleMenu = ref(false);
const showAltFilter = ref(false);
const showSpeedFilter = ref(false);

// Computed Active Filters Check (for visual feedback)
const hasAltFilter = computed(() => {
  return altitudeRange.value[0] !== -Infinity || altitudeRange.value[1] !== Infinity;
});

const hasSpeedFilter = computed(() => {
  return speedLimit.value[0] !== 0 || speedLimit.value[1] !== Infinity;
});

const hasTimeFilter = computed(() => {
  return selectedTimeFilter.value !== null;
});

// Event Handlers
function onMapLoaded({ count, totalDistance: dist, availableDates: dates }) {
  totalPoints.value = count;
  totalDistance.value = dist;
  if (dates) availableDates.value = dates;
  selectedTimeFilter.value = null;
}

function onMapLoading(isLoading) {
  loading.value = isLoading;
}

function onDetailsLoading(isLoading) {
  detailsLoading.value = isLoading;
}

let errorTimer = null;

function onMapError(msg) {
  if (!msg) {
    errorMsg.value = '';
    if (errorTimer) clearTimeout(errorTimer);
    return;
  }

  console.error('Map Error:', msg);
  
  let displayMsg = msg;
  if (msg.includes('file is not a database') || msg.includes('unsupported file format')) {
    displayMsg = '无法识别的文件格式：请上传有效的 SQLite 数据库';
  } else if (msg.includes('Point not found')) {
    displayMsg = '未找到指定的数据点';
  } else {
    displayMsg = msg || '发生未知错误';
  }

  errorMsg.value = displayMsg;
  loading.value = false;

  if (errorTimer) clearTimeout(errorTimer);
  errorTimer = setTimeout(() => {
    errorMsg.value = '';
    errorTimer = null;
  }, 3000);
}

function onMapStatus(msg) {
  statusMsg.value = msg;
}

function onPointSelected(point) {
  selectedPoint.value = point;
}

function onFpsUpdate(val) {
  fps.value = val;
}

// UI Actions
function onDrop(e) {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (!file) return;

  errorMsg.value = '';
  
  const reader = new FileReader();
  reader.onload = (event) => {
    const buffer = event.target.result;
    if (pathMapRef.value) {
      pathMapRef.value.loadFile(buffer);
    }
  };
  reader.onerror = () => {
    errorMsg.value = '文件读取失败';
    loading.value = false;
  };
  reader.readAsArrayBuffer(file);
}

function onDragOver(e) {
  e.preventDefault();
}

function onSelectTimeFilter(filter) {
  selectedTimeFilter.value = filter;
  statusMsg.value = filter ? `筛选中: ${filter.label}` : '加载中...';
}

function onChangeMode(mode) {
  settingsStore.setVizMode(mode);
}

function onCanvasClick() {
  showDatePicker.value = false;
  showStyleMenu.value = false;
  showAltFilter.value = false;
  showSpeedFilter.value = false;
}

// Menu Logic (Mutual Exclusion)
function closeAllMenus() {
  showDatePicker.value = false;
  showStyleMenu.value = false;
  if (isSettingsOpen.value) settingsStore.toggleSettingsModal();
  if (isAboutOpen.value) settingsStore.toggleAboutModal();
  showAltFilter.value = false;
  showSpeedFilter.value = false;
}

function openSettings() {
  if (!isSettingsOpen.value) closeAllMenus();
  settingsStore.toggleSettingsModal();
}

function openAbout() {
  if (!isAboutOpen.value) closeAllMenus();
  settingsStore.toggleAboutModal();
}

function onShowStyleMenu(val) {
  if (val) closeAllMenus();
  showStyleMenu.value = val;
}

function onShowDatePicker(val) {
  if (val) closeAllMenus();
  showDatePicker.value = val;
}

function onShowAltFilter(val) {
  if (val) closeAllMenus();
  showAltFilter.value = val;
}

function onShowSpeedFilter(val) {
  if (val) closeAllMenus();
  showSpeedFilter.value = val;
}
</script>

<template>
  <div class="app-container" @drop="onDrop" @dragover="onDragOver" @click="onCanvasClick">

    <!-- 3D Map Component -->
    <PathMap ref="pathMapRef" 
      :filter-range="selectedTimeFilter" 
      :viz-mode="vizMode" 
      :theme-color="themeColor"
      :altitude-range="altitudeRange"
      :speed-limit="speedLimit"
      :enable-zoom-rotate="syncZoomRotate"
      @loaded="onMapLoaded" @loading="onMapLoading" @details-loading="onDetailsLoading" @error="onMapError"
      @status="onMapStatus" @point-selected="onPointSelected" @fps="onFpsUpdate" />

    <!-- Overlays -->
    <div class="ui-overlay" v-if="!loading && statusMsg && !errorMsg">
      <p v-if="statusMsg">{{ statusMsg }}</p>
    </div>

    <LoadingSpinner 
      :visible="loading || !!errorMsg" 
      :text="errorMsg || statusMsg" 
      :is-error="!!errorMsg"
      @close="errorMsg = ''"
    />

    <StatsPanel :total-points="totalPoints" :total-distance="totalDistance" />

    <SystemStatus :fps="fps" v-if="showSystemInfo" />

    <InfoCard :point="selectedPoint" :loading="detailsLoading" />

    <SettingsModal />
    <AboutModal />

    <!-- Settings Button -->
    <div class="settings-btn-container">
      <button class="fab-btn" :class="{ active: isSettingsOpen }" @click.stop="openSettings">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </button>
    </div>

    <!-- About Button -->
    <div class="about-btn-container">
      <button class="fab-btn about-btn" :class="{ active: isAboutOpen }" @click.stop="openAbout">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </button>
    </div>

    <!-- Filters: Date (Bottom), Speed, Altitude, Style (Top) -->
    <StyleFilter v-if="totalPoints > 0" :show="showStyleMenu" @update:show="onShowStyleMenu" :current-mode="vizMode"
      v-model:theme-color="themeColor" @change-mode="onChangeMode" />

    <!-- Altitude Button -->
    <div class="alt-btn-container" v-if="totalPoints > 0">
      <button class="fab-btn" :class="{ active: showAltFilter, 'has-filter': hasAltFilter }" @click.stop="onShowAltFilter(!showAltFilter)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 20 L5 15 L7 18 L12 5 L17 18 L19 12 L21 20"></path>
        </svg>
      </button>
    </div>
    <AltitudeFilter :show="showAltFilter" @update:show="onShowAltFilter" v-model="altitudeRange" />

    <!-- Speed Button -->
    <div class="speed-btn-container" v-if="totalPoints > 0">
      <button class="fab-btn" :class="{ active: showSpeedFilter, 'has-filter': hasSpeedFilter }" @click.stop="onShowSpeedFilter(!showSpeedFilter)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 12 A10 10 0 0 0 12 2 A10 10 0 0 0 2 12"></path>
          <path d="M16.24 7.76l-2.12 2.12"></path>
          <line x1="12" y1="16" x2="12" y2="12"></line>
        </svg>
      </button>
    </div>
    <SpeedFilter :show="showSpeedFilter" @update:show="onShowSpeedFilter" v-model="speedLimit" />

    <DateFilter v-if="totalPoints > 0 || availableDates.length > 0" :available-dates="availableDates"
      :selected-filter="selectedTimeFilter" :show="showDatePicker" @update:show="onShowDatePicker"
      @select-filter="onSelectTimeFilter" :has-filter="hasTimeFilter" />
  </div>
</template>

<style scoped>
/* ... (keep existing styles) ... */
.app-container {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #000;
}

.ui-overlay {
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 8px;
  pointer-events: none;
  font-family: sans-serif;
  z-index: 90;
}

/* Settings Button */
.settings-btn-container {
  position: absolute;
  bottom: 24px;
  right: 24px;
  z-index: 101;
}

/* About Button */
.about-btn-container {
  position: absolute;
  bottom: 74px;
  right: 24px;
  z-index: 101;
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
  width: 18px;
  height: 18px;
  stroke-width: 1.5;
}

/* FAB Button Colors & States */

/* Default base hover (can be overridden) */
.fab-btn:hover {
  background: rgba(30, 30, 30, 0.8);
  transform: scale(1.05);
  color: #fff; /* Default fallback */
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2), 0 6px 16px rgba(0, 0, 0, 0.6);
}

/* 1. Settings (Bottom) - Soft Blue */
.settings-btn-container .fab-btn:hover,
.settings-btn-container .fab-btn.active {
  color: #409cff;
}

/* 2. About (2nd) - Soft Teal */
.about-btn-container .fab-btn:hover,
.about-btn-container .fab-btn.active {
  color: #4fd2c2;
}

/* 3. Speed (3rd) - Soft Red */
.speed-btn-container .fab-btn:hover,
.speed-btn-container .fab-btn.active,
.speed-btn-container .fab-btn.has-filter {
  color: #ff5c5c;
}

/* 4. Altitude (4th) - Cyan */
.alt-btn-container .fab-btn:hover,
.alt-btn-container .fab-btn.active,
.alt-btn-container .fab-btn.has-filter {
  color: #32d74b;
}

/* 5. Date (5th) - Orange (Handled in component, usually matches #ff9f0a) */
/* 6. Style (Top) - Purple (Handled in component, usually matches #bf5af2) */

/* Remove background change for has-filter, only colorize icon */
.fab-btn.has-filter:not(.active) {
  background: rgba(10, 10, 10, 0.6); /* Reset to default */
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.5); /* Reset to default */
}

/* Ensure hover background is consistent even if has-filter */
.fab-btn.has-filter:not(.active):hover {
  background: rgba(30, 30, 30, 0.8);
  /* Color is already handled by specific selectors above */
}

/* Filter Buttons positioning */
/* Date is typically around bottom: 120px (handled by DateFilter internal, but wait, DateFilter is just the menu?) */
/* Wait, DateFilter component includes the button. Let's position new buttons above or below it. */
/* DateFilter.vue has .date-btn-container bottom: 24px; right: 80px. */

/* Let's stack them vertically on the right side, to the left of settings/about */

.alt-btn-container {
  position: absolute;
  bottom: 174px;
  right: 24px;
  z-index: 101;
}

.speed-btn-container {
  position: absolute;
  bottom: 124px;
  right: 24px;
  z-index: 101;
}

/* Adjusting positions to match user request "below time filter" */
/* Wait, user said "Below time filter button". */
/* Standard DateFilter is usually bottom right. */
/* Let's look at DateFilter.vue position. It is NOT in HomeView styles. It's inside DateFilter component. */
/* I should probably move the buttons to HomeView to control layout better, but for now I'll guess the positions relative to where DateFilter usually sits. */
/* DateFilter is likely at bottom right or similar. */
/* If DateFilter button is at right: 80px, bottom: 24px. */
/* Then Altitude below it is not possible if it's at bottom. User probably meant visually in a stack. */
/* "Below time filter button" -> If time filter is at top, fine. If at bottom, maybe they mean "Above"? */
/* Assuming standard "right side stack". */
/* If Date is at bottom: 24px right: 80px. */
/* Then "Below" is impossible. */
/* Let's assume the user perceives the list order from Top to Bottom. */
/* Date -> Altitude -> Speed. */
/* Or maybe Date is high up? */
/* Let's check DateFilter.vue content if possible. I don't have it in memory now. */
/* But based on typical UI, let's stack them vertically at `right: 80px`. */

/* Re-reading: "Add Altitude and Speed buttons below the Time filter button." */
/* If Time is at bottom: 24px, right: 80px. */
/* I will place Altitude at bottom: 80px, right: 80px. (Visually above) */
/* And Speed at bottom: 136px, right: 80px. (Visually above) */
/* Wait, "Below" might mean physically lower Y coordinate? */
/* If Time is at top, then lower Y. */
/* Let's Check previous HomeView. `DateFilter` was used. */
/* Let's assume DateFilter button is at bottom-right area (left of settings). */
/* Let's place them in a column: Speed (Top), Altitude (Middle), Time (Bottom). */
/* Or Time (Top), Altitude, Speed (Bottom). */
/* Let's inspect `DateFilter.vue` quickly to see where its button is. */
</style>