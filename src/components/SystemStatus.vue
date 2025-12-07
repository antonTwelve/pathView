<script setup>
import { onMounted, ref } from 'vue';

defineProps({
  fps: Number
});

const gpuInfo = ref('Unknown GPU');
const cpuInfo = ref('Unknown CPU');

function getGpuInfo() {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl', { powerPreference: 'high-performance' }) || 
               canvas.getContext('experimental-webgl');
    if (!gl) return 'Unknown GPU';
    
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      let renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      if (renderer) {
        // Handle ANGLE: "ANGLE (Vendor, Card, API)"
        const angleMatch = renderer.match(/^ANGLE \((.+)\)$/);
        if (angleMatch && angleMatch[1]) {
          const parts = angleMatch[1].split(', ');
          if (parts.length > 1) {
            renderer = parts[1].trim();
          } else {
            renderer = parts[0];
          }
        }
        
        // Clean up common suffixes
        // e.g. "NVIDIA GeForce RTX 3080/PCIe/SSE2" -> "NVIDIA GeForce RTX 3080"
        renderer = renderer.split('/')[0];
        
        // Remove common garbage patterns but be careful not to kill "Intel(R)" completely if not desired, 
        // but usually removing (R) and (TM) is cleaner.
        // Also remove "OpenGL Engine"
        renderer = renderer.replace(/ OpenGL Engine/gi, '');
        renderer = renderer.replace(/\s*\(.*?\)/g, ''); 
        
        return renderer.trim();
      }
    }
    return 'Generic GPU';
  } catch (e) {
    return 'Unknown GPU';
  }
}

onMounted(() => {
  gpuInfo.value = getGpuInfo();
  
  // CPU Estimation
  const cores = navigator.hardwareConcurrency;
  if (cores) {
    cpuInfo.value = `${cores} Logical Cores`;
  } else {
    cpuInfo.value = 'Unknown Cores';
  }
});
</script>

<template>
  <div class="system-status">
    <div class="sys-row dims">FPS: {{ fps }}</div>
    <div class="sys-row dims">CPU: {{ cpuInfo }}</div>
    <div class="sys-row dims">GPU: {{ gpuInfo }}</div>
  </div>
</template>

<style scoped>
.system-status {
  position: absolute;
  bottom: 24px;
  left: 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  pointer-events: none;
  z-index: 90;
  max-width: 300px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
}

.sys-row {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dims {
  opacity: 0.8;
}
</style>