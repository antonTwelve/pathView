<script setup>
import { ref, computed, watch } from 'vue';
const props = defineProps({
  availableDates: Array, // Strings "YYYY-MM-DD"
  selectedFilter: Object, // { label, start, end, type, value }
  show: Boolean,
  hasFilter: Boolean // New prop
});
const emit = defineEmits(['update:show', 'selectFilter']);
const mode = ref('day'); // 'day' | 'week' | 'month' | 'year'
const calendarCursor = ref(new Date());
watch(() => props.availableDates, (newVal) => {
  if (newVal && newVal.length > 0) {
    const lastDateStr = newVal[newVal.length - 1];
    calendarCursor.value = new Date(lastDateStr);
  }
}, { immediate: true });
// --- Helpers ---
function getWeekNumber(d) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return [d.getUTCFullYear(), weekNo];
}
function getDateOfISOWeek(w, y) {
  const simple = new Date(y, 0, 1 + (w - 1) * 7);
  const dow = simple.getDay();
  const ISOweekStart = simple;
  if (dow <= 4)
    ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
  else
    ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
  return ISOweekStart;
}
// --- Computeds for Grids ---
const availableYearsSet = computed(() => {
  const s = new Set();
  if (props.availableDates) {
    props.availableDates.forEach(d => s.add(d.substring(0, 4)));
  }
  return s;
});
const availableMonthsSet = computed(() => {
  const s = new Set();
  if (props.availableDates) {
    props.availableDates.forEach(d => s.add(d.substring(0, 7)));
  }
  return s;
});
// YEAR GRID
const yearGridTitle = computed(() => {
  const y = calendarCursor.value.getFullYear();
  const start = Math.floor(y / 10) * 10;
  const end = start + 9;
  return `${start}-${end}`;
});
const yearGrid = computed(() => {
  const y = calendarCursor.value.getFullYear();
  const start = Math.floor(y / 10) * 10; // e.g. 2020
  const years = [];
  // Show 12 items: start-1 to start+10
  for (let i = -1; i <= 10; i++) {
    const val = start + i;
    const str = String(val);
    years.push({
      val,
      str,
      hasData: availableYearsSet.value.has(str),
      selected: props.selectedFilter && props.selectedFilter.type === 'year' && props.selectedFilter.value === str,
      isDecade: i >= 0 && i <= 9
    });
  }
  return years;
});
// MONTH GRID
const monthGridTitle = computed(() => {
  return `${calendarCursor.value.getFullYear()}年`;
});
const monthGrid = computed(() => {
  const y = calendarCursor.value.getFullYear();
  const months = [];
  for (let i = 0; i < 12; i++) {
    const mStr = String(i + 1).padStart(2, '0');
    const val = `${y}-${mStr}`;
    months.push({
      index: i,
      label: `${i + 1}月`,
      val,
      hasData: availableMonthsSet.value.has(val),
      selected: props.selectedFilter && props.selectedFilter.type === 'month' && props.selectedFilter.value === val
    });
  }
  return months;
});
// DAY & WEEK GRID (Shared)
const calendarTitle = computed(() => {
  const y = calendarCursor.value.getFullYear();
  const m = calendarCursor.value.getMonth() + 1;
  return `${y}年${m}月`;
});
const calendarDays = computed(() => {
  const year = calendarCursor.value.getFullYear();
  const month = calendarCursor.value.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const days = [];
  const startDay = firstDay.getDay(); // 0 is Sunday
  for (let i = 0; i < startDay; i++) {
    days.push({ id: `pad-${i}`, empty: true });
  }
  const totalDays = lastDay.getDate();
  for (let d = 1; d <= totalDays; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const hasData = props.availableDates.includes(dateStr);
    // Check selection
    let isSelected = false;
    if (props.selectedFilter) {
      if (mode.value === 'day' && props.selectedFilter.type === 'day') {
        isSelected = props.selectedFilter.value === dateStr;
      } else if (mode.value === 'week' && props.selectedFilter.type === 'week') {
        // Check if date is in selected week range
        const ts = new Date(dateStr).getTime() / 1000;
        // Use slightly loose check to avoid timezone boundary issues if any
        // Or just strict range
        isSelected = ts >= props.selectedFilter.start && ts <= props.selectedFilter.end;
      }
    }
    // Week Info
    const [wYear, wNum] = getWeekNumber(new Date(year, month, d));
    days.push({
      id: dateStr,
      day: d,
      dateStr: dateStr,
      hasData: hasData,
      selected: isSelected,
      weekId: `${wYear}-W${wNum}`
    });
  }
  return days;
});
function changePage(delta) {
  const newDate = new Date(calendarCursor.value);
  if (mode.value === 'year') {
    newDate.setFullYear(newDate.getFullYear() + (delta * 10));
  } else if (mode.value === 'month') {
    newDate.setFullYear(newDate.getFullYear() + delta);
  } else {
    // Day/Week
    newDate.setMonth(newDate.getMonth() + delta);
  }
  calendarCursor.value = newDate;
}
function toggle() {
  emit('update:show', !props.show);
}
const hoveredWeekId = ref(null);
function select(item, type) {
  if (!item) {
    emit('selectFilter', null);
    return;
  }
  let filter = null;
  if (type === 'year') {
    const y = parseInt(item.val);
    const start = new Date(y, 0, 1);
    const end = new Date(y, 11, 31, 23, 59, 59);
    filter = {
      type: 'year',
      value: item.val,
      label: `${y}年`,
      start: start.getTime() / 1000,
      end: end.getTime() / 1000
    };
  } else if (type === 'month') {
    const [y, m] = item.val.split('-').map(Number);
    const start = new Date(y, m - 1, 1);
    const end = new Date(y, m, 0, 23, 59, 59);
    filter = {
      type: 'month',
      value: item.val,
      label: `${y}年${m}月`,
      start: start.getTime() / 1000,
      end: end.getTime() / 1000
    };
  } else if (type === 'week') {
    // item is day object
    const d = new Date(item.dateStr);
    const [y, w] = getWeekNumber(d);
    const start = getDateOfISOWeek(w, y);
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    end.setHours(23, 59, 59, 999);
    const sM = start.getMonth() + 1;
    const sD = start.getDate();
    const eM = end.getMonth() + 1;
    const eD = end.getDate();
    filter = {
      type: 'week',
      value: `${y}-W${w}`,
      label: `${y} 第${w}周 (${sM}/${sD}-${eM}/${eD})`,
      start: start.getTime() / 1000,
      end: end.getTime() / 1000
    };
  } else { // Day
    const [y, m, d] = item.dateStr.split('-').map(Number);
    const start = new Date(y, m - 1, d, 0, 0, 0);
    const end = new Date(y, m - 1, d, 23, 59, 59);
    filter = {
      type: 'day',
      value: item.dateStr,
      label: item.dateStr,
      start: start.getTime() / 1000,
      end: end.getTime() / 1000
    };
  }
  emit('selectFilter', filter);
}
</script>
<template>
  <div class="fab-container">
    <Transition name="scale">
      <div class="date-picker-panel" v-if="show" @click.stop>
        <!-- Tabs -->
        <div class="filter-tabs">
          <button :class="{ active: mode === 'day' }" @click="mode = 'day'">日</button>
          <button :class="{ active: mode === 'week' }" @click="mode = 'week'">周</button>
          <button :class="{ active: mode === 'month' }" @click="mode = 'month'">月</button>
          <button :class="{ active: mode === 'year' }" @click="mode = 'year'">年</button>
        </div>
        <!-- Header -->
        <div class="panel-header">
          <div class="cal-nav">
            <button @click.stop="changePage(-1)" class="nav-btn">&lt;</button>
            <span class="cal-title" v-if="mode === 'year'">{{ yearGridTitle }}</span>
            <span class="cal-title" v-else-if="mode === 'month'">{{ monthGridTitle }}</span>
            <span class="cal-title" v-else>{{ calendarTitle }}</span>
            <button @click.stop="changePage(1)" class="nav-btn">&gt;</button>
          </div>
          <span v-if="selectedFilter" class="clear-btn" @click.stop="select(null)">显示全部</span>
        </div>
        <div class="panel-content custom-scroll">
          <!-- YEAR GRID -->
          <div class="year-grid" v-if="mode === 'year'">
            <div v-for="y in yearGrid" :key="y.val" class="year-cell"
              :class="{ 'has-data': y.hasData, 'selected': y.selected, 'dim': !y.isDecade }"
              @click="y.hasData ? select(y, 'year') : null">
              {{ y.val }}
            </div>
          </div>
          <!-- MONTH GRID -->
          <div class="month-grid" v-else-if="mode === 'month'">
            <div v-for="m in monthGrid" :key="m.val" class="month-cell"
              :class="{ 'has-data': m.hasData, 'selected': m.selected }" @click="m.hasData ? select(m, 'month') : null">
              {{ m.label }}
            </div>
          </div>
          <!-- DAY/WEEK CALENDAR -->
          <div class="calendar-body" v-else>
            <div class="weekdays">
              <span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span>
            </div>
            <div class="calendar-grid">
              <div v-for="item in calendarDays" :key="item.id" class="day-cell" :class="{
                'empty': item.empty,
                'has-data': item.hasData && !item.empty,
                'selected': item.selected,
                'disabled': !item.empty && !item.hasData,
                'week-hover': mode === 'week' && !item.empty && item.weekId === hoveredWeekId
              }" @mouseenter="mode === 'week' && !item.empty ? hoveredWeekId = item.weekId : null"
                @mouseleave="mode === 'week' ? hoveredWeekId = null : null"
                @click="!item.empty && item.hasData ? select(item, mode) : null">
                {{ item.day }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <button class="fab-btn" @click.stop="toggle" :class="{ active: show, 'has-filter': hasFilter }">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    </button>
  </div>
</template>
<style scoped>
/* ... (Shared Styles Remain) ... */
.fab-container {
  position: absolute;
  bottom: 224px;
  right: 24px;
  display: flex;
  align-items: flex-end;
  gap: 16px;
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
  width: 16px;
  height: 16px;
  stroke-width: 1.5;
}

.fab-btn:hover,
.fab-btn.active,
.fab-btn.has-filter {
  background: rgba(30, 30, 30, 0.8);
  transform: scale(1.05);
  color: #ff9f0a;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2), 0 6px 16px rgba(0, 0, 0, 0.6);
}

.date-picker-panel {
  background: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  width: 280px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  margin-bottom: 12px;
}

.filter-tabs {
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.filter-tabs button {
  flex: 1;
  background: none;
  border: none;
  padding: 10px 0;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
}

.filter-tabs button:hover {
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.03);
}

.filter-tabs button.active {
  color: #ff9f0a;
  background: rgba(255, 159, 10, 0.1);
  font-weight: 600;
}

.panel-header {
  padding: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}

.cal-nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cal-title {
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  min-width: 80px;
  text-align: center;
}

.nav-btn {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  font-size: 16px;
  padding: 0 8px;
}

.nav-btn:hover {
  color: #fff;
}

.clear-btn {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
}

.clear-btn:hover {
  opacity: 0.8;
}

.panel-content {
  overflow-y: auto;
  max-height: 300px;
}

.custom-scroll::-webkit-scrollbar {
  width: 4px;
}

.custom-scroll::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

.custom-scroll::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
}

/* CALENDAR (Day/Week) */
.calendar-body {
  padding: 12px;
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 8px;
  text-align: center;
}

.weekdays span {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 700;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}

.day-cell {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  cursor: default;
  font-family: var(--font-mono);
}

.day-cell.empty {
  pointer-events: none;
}

.day-cell.has-data {
  color: #fff;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.05);
}

.day-cell.has-data:hover {
  background: rgba(255, 255, 255, 0.15);
}

.day-cell.selected {
  background: #0a84ff;
  color: #fff;
  font-weight: 700;
}

/* Week Highlight */
.day-cell.week-hover {
  background: rgba(10, 132, 255, 0.3);
}

/* YEAR & MONTH GRIDS */
.year-grid,
.month-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 12px;
}

.year-cell,
.month-cell {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.3);
  cursor: default;
}

.year-cell.has-data,
.month-cell.has-data {
  color: #fff;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
}

.year-cell.has-data:hover,
.month-cell.has-data:hover {
  background: rgba(255, 255, 255, 0.2);
}

.year-cell.selected,
.month-cell.selected {
  background: #0a84ff;
  color: #fff;
  font-weight: 600;
}

.year-cell.dim {
  opacity: 0.3;
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
</style>