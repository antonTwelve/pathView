<script setup>
import { computed } from 'vue';

const props = defineProps({
  point: Object,
  loading: Boolean
});

const displayInfo = computed(() => {
  if (!props.point) return null;
  const p = props.point;
  const keys = Object.keys(p);
  
  const findKey = (regex) => keys.find(k => regex.test(k));
  
  const latKey = findKey(/^(latitude|lat)$/i);
  const lonKey = findKey(/^(longitude|long|lon|lng)$/i);
  const timeKey = findKey(/^(timestamp|time|date|created_at)$/i);
  const altKey = findKey(/^(altitude|alt|elevation)$/i);
  const speedKey = findKey(/^(speed|velocity)$/i);
  const courseKey = findKey(/^(course|heading|bearing)$/i);
  const accKey = findKey(/^(horizontalAccuracy|accuracy|hAcc)$/i);

  // Time Processing
  let dateStr = '--';
  let timeStr = '--';
  let tzStr = '';
  
  if (timeKey) {
    const val = p[timeKey];
    let dateObj;
    if (typeof val === 'number') {
       if (val < 1000000000) { // Core Data
         dateObj = new Date((val + 978307200) * 1000);
      } else if (val < 100000000000) { // Unix Seconds
        dateObj = new Date(val * 1000);
      } else { // Unix Milliseconds
        dateObj = new Date(val);
      }
    } else {
      dateObj = new Date(val);
    }

    if (!isNaN(dateObj.getTime())) {
      const pad = (n) => n.toString().padStart(2, '0');
      dateStr = `${dateObj.getFullYear()}/${pad(dateObj.getMonth()+1)}/${pad(dateObj.getDate())}`;
      timeStr = `${pad(dateObj.getHours())}:${pad(dateObj.getMinutes())}:${pad(dateObj.getSeconds())}.${dateObj.getMilliseconds().toString().padStart(3, '0')}`;
      
      // Get Timezone offset
      const offset = -dateObj.getTimezoneOffset();
      const sign = offset >= 0 ? '+' : '-';
      const padOff = (n) => n.toString().padStart(2, '0');
      tzStr = `UTC${sign}${padOff(Math.floor(Math.abs(offset)/60))}:${padOff(Math.abs(offset)%60)}`;
    }
  }

  // Accuracy & Type
  const accVal = accKey ? parseFloat(p[accKey]) : null;
  const isGPS = accVal !== null && accVal <= 65;
  const typeLabel = isGPS ? '卫星' : '网络';

  return {
    lat: latKey ? parseFloat(p[latKey]).toFixed(7) : '--',
    lon: lonKey ? parseFloat(p[lonKey]).toFixed(7) : '--',
    alt: altKey ? Math.round(parseFloat(p[altKey])) : '-',
    speed: speedKey ? (parseFloat(p[speedKey]) * 3.6).toFixed(1) : '-', // km/h
    course: courseKey ? Math.round(parseFloat(p[courseKey])) : 0,
    acc: accVal ? Math.round(accVal) : '-',
    date: dateStr,
    time: timeStr,
    tz: tzStr,
    type: isGPS ? 'GPS' : 'Network',
    typeLabel: typeLabel
  };
});
</script>

<template>
  <Transition name="slide">
    <div class="popup" v-if="point || loading">
      <div v-if="loading && !point" class="loading-small">加载数据中...</div>
      
      <div v-else-if="displayInfo" class="info-card" :class="{ 'content-updating': loading }">
        
        <!-- Header: Time & Type -->
        <div class="card-header">
          <div class="time-group">
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <div class="time-text">
              <div class="date-row">{{ displayInfo.date }}</div>
              <div class="time-row">
                <span class="timestamp">{{ displayInfo.time }}</span>
                <span class="timezone">{{ displayInfo.tz }}</span>
              </div>
            </div>
          </div>
          <div class="badge" :class="displayInfo.type === 'GPS' ? 'badge-gps' : 'badge-net'">
            <!-- Satellite Icon -->
            <svg v-if="displayInfo.type === 'GPS'" class="icon-type" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 7 9 3 5 7l4 4"></path>
              <path d="m17 11 4 4-4 4-4-4"></path>
              <path d="m8 12 4 4 6-6-4-4Z"></path>
              <path d="m16 8 3-3"></path>
              <path d="M9 15 6 18"></path>
            </svg>
            <!-- Signal Tower Icon -->
            <svg v-else class="icon-type" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
               <path d="M12 2c-4 0-8 3-8 7 0 5 4 8 8 8s8-3 8-8c0-4-4-7-8-7Z"></path>
               <path d="M12 9v13"></path>
               <path d="M8 22h8"></path>
               <circle cx="12" cy="6" r="1" fill="currentColor"></circle>
               <path d="M8.5 5.5c-1 1-1.5 2.5-1.5 4 0 2.5 2 4.5 5 4.5s5-2 5-4.5c0-1.5-.5-3-1.5-4"></path>
            </svg>
            {{ displayInfo.typeLabel }}
          </div>
        </div>

        <!-- Coordinates -->
        <div class="coord-section">
          <div class="coord-row-combined">
            <div class="coord-group">
              <span class="coord-label">纬度</span>
              <span class="coord-val">{{ displayInfo.lat }}</span>
            </div>
            <div class="divider"></div>
            <div class="coord-group">
              <span class="coord-label">经度</span>
              <span class="coord-val">{{ displayInfo.lon }}</span>
            </div>
          </div>
        </div>

        <!-- Grid Stats -->
        <div class="grid-stats">
          <!-- Altitude -->
          <div class="stat-box">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 20 L5 15 L7 18 L12 5 L17 18 L19 12 L21 20"></path>
              </svg>
            </div>
            <div class="stat-content">
              <span class="s-label">海拔</span>
              <span class="s-val">{{ displayInfo.alt }}<small>m</small></span>
            </div>
          </div>

          <!-- Speed -->
          <div class="stat-box">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <path d="M22 12 A10 10 0 0 0 12 2 A10 10 0 0 0 2 12"></path>
                 <path d="M16.24 7.76l-2.12 2.12"></path> 
                 <line x1="12" y1="16" x2="12" y2="12"></line>
              </svg>
            </div>
            <div class="stat-content">
              <span class="s-label">速度</span>
              <span class="s-val">{{ displayInfo.speed }}<small>km/h</small></span>
            </div>
          </div>

          <!-- Heading -->
          <div class="stat-box">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" :style="{ transform: `rotate(${displayInfo.course}deg)` }">
                <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
              </svg>
            </div>
            <div class="stat-content">
              <span class="s-label">航向</span>
              <span class="s-val">{{ displayInfo.course }}<small>°</small></span>
            </div>
          </div>

           <!-- Accuracy -->
          <div class="stat-box">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="3"></circle>
                <line x1="12" y1="2" x2="12" y2="4"></line>
                <line x1="12" y1="20" x2="12" y2="22"></line>
                <line x1="2" y1="12" x2="4" y2="12"></line>
                <line x1="20" y1="12" x2="22" y2="12"></line>
              </svg>
            </div>
            <div class="stat-content">
              <span class="s-label">精度</span>
              <span class="s-val">±{{ displayInfo.acc }}<small>m</small></span>
            </div>
          </div>

        </div>

      </div>
    </div>
  </Transition>
</template>

<style scoped>
.popup {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 260px; /* Compact width */
  background: rgba(5, 5, 5, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px; /* Slightly smaller radius */
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
  color: #f0f0f0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  z-index: 100;
  overflow: hidden;
}

.loading-small {
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  text-align: center;
  padding: 16px;
}

.info-card {
  padding: 12px; /* Reduced padding */
  display: flex;
  flex-direction: column;
  gap: 10px; /* Reduced gap */
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 8px; /* Reduced padding */
}

.time-group {
  display: flex;
  gap: 8px; /* Reduced gap */
  align-items: flex-start;
}

.time-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.date-row {
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  line-height: 1.2;
}

.time-row {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.timestamp {
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 600;
  color: #a1a1a1;
  line-height: 1.2;
}

.timezone {
  font-size: 10px;
  color: rgba(255,255,255,0.5);
  font-weight: 500;
}

.badge {
  font-size: 10px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 3px;
  text-transform: uppercase;
}

.badge-gps {
  background: rgba(52, 199, 89, 0.2);
  color: #34c759;
  border: 1px solid rgba(52, 199, 89, 0.3);
}

.badge-net {
  background: rgba(10, 132, 255, 0.2);
  color: #0a84ff;
  border: 1px solid rgba(10, 132, 255, 0.3);
}

.coord-section {
  background: rgba(255,255,255,0.03);
  padding: 8px 10px; /* Compact padding */
  border-radius: 6px;
}

.coord-row-combined {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.coord-group {
  display: flex;
  flex-direction: column;
  gap: 0px;
}

.divider {
  width: 1px;
  height: 20px;
  background: rgba(255,255,255,0.1);
  margin: 0 8px;
}

.coord-label {
  font-size: 10px;
  font-weight: 500;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.5px;
}

.coord-val {
  font-family: var(--font-mono);
  font-size: 14px;
  color: rgba(255,255,255,0.95);
  white-space: nowrap;
}

.grid-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px; /* Reduced gap */
}

.stat-box {
  background: rgba(255,255,255,0.03);
  border-radius: 6px;
  padding: 6px 8px; /* Compact padding */
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s;
}

.stat-box:hover {
  background: rgba(255,255,255,0.06);
}

.stat-icon {
  color: rgba(255,255,255,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon svg {
  width: 16px; /* Slightly smaller icons */
  height: 16px;
}

.stat-content {
  display: flex;
  flex-direction: column;
}

.s-label {
  font-size: 10px;
  font-weight: 500;
  color: rgba(255,255,255,0.5);
}

.s-val {
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  line-height: 1.1;
}

.s-val small {
  font-size: 10px;
  font-weight: normal;
  color: rgba(255,255,255,0.5);
  margin-left: 1px;
}

.icon-sm {
  width: 18px;
  height: 18px;
  color: rgba(255,255,255,0.6);
}

.icon-xs {
  width: 12px;
  height: 12px;
}

.icon-type {
  width: 10px;
  height: 10px;
}

.content-updating {
  opacity: 0.5;
  transition: opacity 0.2s;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>