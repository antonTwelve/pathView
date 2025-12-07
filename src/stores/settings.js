import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useSettingsStore = defineStore('settings', () => {
  // Load initial state from localStorage if available
  let savedSettings = {};
  try {
    savedSettings = JSON.parse(localStorage.getItem('pathview-settings') || '{}');
  } catch (e) {
    console.error('Failed to parse settings', e);
  }

  // Helper to fix Infinity issues in JSON
  const fixInf = (val, defaultVal) => (val === null || val === undefined) ? defaultVal : val;

  const showSystemInfo = ref(savedSettings.showSystemInfo || false);
  const vizMode = ref(savedSettings.vizMode || 0); // 0: Normal, 1: Heatmap
  const themeColor = ref(savedSettings.themeColor || '#ffffff');
  const syncZoomRotate = ref(savedSettings.syncZoomRotate !== undefined ? savedSettings.syncZoomRotate : true);
  
  // UI States (Do not persist)
  const isSettingsOpen = ref(false);
  const isAboutOpen = ref(false);

  // Filter States
  // Altitude: [min, max]. JSON null -> Infinity/-Infinity
  let savedAlt = savedSettings.altitudeRange;
  if (!Array.isArray(savedAlt)) savedAlt = [null, null];
  const altitudeRange = ref([
    fixInf(savedAlt[0], -Infinity),
    fixInf(savedAlt[1], Infinity)
  ]);

  // Speed: [min, max]. JSON null -> [0, Infinity]
  let savedSpeed = savedSettings.speedLimit;
  // Handle legacy single value speed limit from older settings
  if (typeof savedSpeed === 'number') savedSpeed = [0, savedSpeed];
  if (!Array.isArray(savedSpeed)) savedSpeed = [null, null];
  
  const speedLimit = ref([
    fixInf(savedSpeed[0], 0),
    fixInf(savedSpeed[1], Infinity)
  ]);

  // Watch and Save to LocalStorage
  watch(
    [showSystemInfo, vizMode, themeColor, altitudeRange, speedLimit, syncZoomRotate],
    () => {
      // JSON.stringify converts Infinity to null, which is fine as long as we parse it back correctly above.
      const settingsToSave = {
        showSystemInfo: showSystemInfo.value,
        vizMode: vizMode.value,
        themeColor: themeColor.value,
        altitudeRange: altitudeRange.value,
        speedLimit: speedLimit.value,
        syncZoomRotate: syncZoomRotate.value
      };
      localStorage.setItem('pathview-settings', JSON.stringify(settingsToSave));
    },
    { deep: true }
  );

  function toggleSettingsModal() {
    isSettingsOpen.value = !isSettingsOpen.value;
  }

  function toggleAboutModal() {
    isAboutOpen.value = !isAboutOpen.value;
  }

  function setVizMode(mode) {
    vizMode.value = mode;
  }

  function setAltitudeRange(min, max) {
    altitudeRange.value = [min, max];
  }

  function setSpeedLimit(min, max) {
    speedLimit.value = [min, max];
  }

  return { 
    showSystemInfo, 
    vizMode, 
    themeColor, 
    syncZoomRotate,
    isSettingsOpen, 
    isAboutOpen,
    altitudeRange,
    speedLimit,
    toggleSettingsModal,
    toggleAboutModal,
    setVizMode,
    setAltitudeRange,
    setSpeedLimit
  };
});
