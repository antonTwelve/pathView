import initSqlJs from 'sql.js';

let db = null;
let currentIds = null; // Stores the DB IDs of the currently rendered points

// Column Cache (Global for getDetails)
let timeCol = null;
let accCol = null;
let altCol = null;
let speedCol = null;

self.onmessage = async (e) => {
  const { type, fileBuffer, index, dateStr } = e.data;

  try {
    if (type === 'load') {
      let newDb = null;
      try {
          const SQL = await initSqlJs({
            locateFile: file => `/sql-wasm.wasm`
          });

          newDb = new SQL.Database(new Uint8Array(fileBuffer));
          
          // 1. Find Columns & Verify Table
          const firstRow = newDb.exec("SELECT * FROM locations LIMIT 1");
          if (!firstRow.length || !firstRow[0].columns) {
              throw new Error("Invalid database: 'locations' table not found or empty.");
          }

          const cols = firstRow[0].columns;
          const tCol = cols.find(c => /^(timestamp|time|date|created_at)$/i.test(c));
          const aCol = cols.find(c => /^(horizontalaccuracy|accuracy|acc|h_acc)$/i.test(c));
          const alCol = cols.find(c => /^(altitude|alt|elevation|ele|height)$/i.test(c));
          const sCol = cols.find(c => /^(speed|velocity|spd)$/i.test(c));

          // 2. Process Data (Dry Run)
          const result = await processData(newDb, tCol, aCol, alCol, sCol);

          // 3. Commit Changes (Atomic Swap)
          if (db) db.close();
          db = newDb;
          currentIds = result.currentIds;
          
          // Update Global Column Cache
          timeCol = tCol;
          accCol = aCol;
          altCol = alCol;
          speedCol = sCol;

          // 4. Respond Success
          self.postMessage({ 
            type: 'success', 
            ...result,
            // Remove currentIds from spread if not needed in main thread, but kept for consistency
          }, [
            result.positions.buffer, 
            result.densities.buffer, 
            result.accuracies.buffer, 
            result.times.buffer, 
            result.altitudes.buffer, 
            result.speeds.buffer
          ]);

      } catch (innerErr) {
          if (newDb) newDb.close();
          throw innerErr; // Re-throw to outer catch
      }

    } else if (type === 'getDetails') {
      if (!db) return;
      
      if (currentIds && index < currentIds.length) {
          const dbId = currentIds[index];
          const stmt = db.prepare(`SELECT * FROM locations WHERE ID = ${dbId}`);
          if (stmt.step()) {
              const row = stmt.getAsObject();
              self.postMessage({ type: 'details', data: row });
          } else {
              self.postMessage({ type: 'error', message: 'Point not found' });
          }
          stmt.free();
      } else {
          // Fallback if currentIds not synced (should not happen with new logic)
          self.postMessage({ type: 'error', message: 'Point index out of sync' });
      }
    }

  } catch (err) {
    self.postMessage({ type: 'error', message: err.message });
  }
};

async function processData(targetDb, tCol, aCol, alCol, sCol) {
    // Select ID, Lat, Lon, ...
    let query = `SELECT ID, Latitude, Longitude`;
    if (tCol) query += `, ${tCol}`;
    if (aCol) query += `, ${aCol}`;
    if (alCol) query += `, ${alCol}`;
    if (sCol) query += `, ${sCol}`;
    
    query += ` FROM locations ORDER BY ID ASC`;

    const stmt = targetDb.prepare(query);
    
    const R = 100;
    let prevLat = null;
    let prevLon = null;
    let totalDistance = 0;
    
    const tempPoints = []; 
    const availableDatesSet = new Set();

    // Density Calculation Prep
    const GRID_RES = 200; 
    const densityMap = new Map();

    // Column indices calculation
    // 0:ID, 1:Lat, 2:Lon
    let nextIdx = 3;
    let tIdx = -1;
    let aIdx = -1;
    let altIdx = -1;
    let spdIdx = -1;

    if (tCol) tIdx = nextIdx++;
    if (aCol) aIdx = nextIdx++;
    if (alCol) altIdx = nextIdx++;
    if (sCol) spdIdx = nextIdx++;

    while (stmt.step()) {
        const row = stmt.get();
        const id = row[0];
        const lat = row[1];
        const lon = row[2];
        
        // Time Normalization (Days since 2000-01-01)
        let normalizedTime = -1.0;

        if (tIdx !== -1) {
            const tVal = row[tIdx];
            let dateObj;
            let ts = 0; // seconds

            if (typeof tVal === 'number') {
                if (tVal < 1000000000) { // Core Data (seconds since 2001)
                    ts = tVal + 978307200; 
                    dateObj = new Date(ts * 1000);
                }
                else if (tVal < 100000000000) { // Unix Seconds
                    ts = tVal;
                    dateObj = new Date(ts * 1000);
                }
                else { // Unix Milliseconds
                    ts = tVal / 1000;
                    dateObj = new Date(tVal);
                }
            } else {
                dateObj = new Date(tVal);
                ts = dateObj.getTime() / 1000;
            }

            if (!isNaN(dateObj.getTime())) {
                const y = dateObj.getFullYear();
                const m = String(dateObj.getMonth()+1).padStart(2,'0');
                const d = String(dateObj.getDate()).padStart(2,'0');
                const pointDateStr = `${y}-${m}-${d}`;
                availableDatesSet.add(pointDateStr);
                
                // 946684800 is 2000-01-01 00:00:00 UTC
                normalizedTime = (ts - 946684800) / 86400.0;
            }
        }

        // Accuracy
        let acc = 5.0; // Default 5m
        if (aIdx !== -1 && row[aIdx] != null) {
            acc = parseFloat(row[aIdx]);
            if (isNaN(acc) || acc < 0) acc = 5.0;
        }

        // Altitude
        let alt = 0.0;
        if (altIdx !== -1 && row[altIdx] != null) {
             const val = parseFloat(row[altIdx]);
             if (!isNaN(val)) alt = val;
        }

        // Speed
        let spd = 0.0;
        if (spdIdx !== -1 && row[spdIdx] != null) {
             const val = parseFloat(row[spdIdx]);
             if (!isNaN(val) && val >= 0) spd = val;
        }

        // Add point
        if (prevLat !== null && prevLon !== null) {
             totalDistance += getDistanceFromLatLonInKm(prevLat, prevLon, lat, lon);
        }
        prevLat = lat;
        prevLon = lon;

        // Density Grid Key
        const gridKey = `${Math.floor(lat * GRID_RES)},${Math.floor(lon * GRID_RES)}`;
        const currentCount = densityMap.get(gridKey) || 0;
        densityMap.set(gridKey, currentCount + 1);

        tempPoints.push({ lat, lon, id, gridKey, acc, time: normalizedTime, alt, spd });
    }

    stmt.free();

    // Find max density for normalization
    // Apply 3x3 Smoothing
    const smoothedMap = new Map();
    let maxSmoothedDensity = 1;
    
    const parseKey = (k) => {
        const parts = k.split(',');
        return { x: parseInt(parts[0]), y: parseInt(parts[1]) };
    };
    const makeKey = (x, y) => `${x},${y}`;

    for (const key of densityMap.keys()) {
        const { x, y } = parseKey(key);
        let sum = 0;
        let countNeighbors = 0;
        
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                const nKey = makeKey(x + dx, y + dy);
                const val = densityMap.get(nKey) || 0;
                let weight = 1;
                if (dx === 0 && dy === 0) weight = 4;
                else if (dx === 0 || dy === 0) weight = 2;
                else weight = 1;

                sum += val * weight;
                countNeighbors += weight;
            }
        }
        const avg = sum / countNeighbors;
        smoothedMap.set(key, avg);
        if (avg > maxSmoothedDensity) maxSmoothedDensity = avg;
    }

    // Build final arrays
    const count = tempPoints.length;
    const positions = new Float32Array(count * 3);
    const densities = new Float32Array(count);
    const accuracies = new Float32Array(count);
    const times = new Float32Array(count);
    const altitudes = new Float32Array(count);
    const speeds = new Float32Array(count);
    const newCurrentIds = new Int32Array(count);

    for (let i = 0; i < count; i++) {
        const p = tempPoints[i];
        const latRad = p.lat * (Math.PI / 180);
        const lonRad = p.lon * (Math.PI / 180);

        const x = R * Math.cos(latRad) * Math.sin(lonRad);
        const y = R * Math.sin(latRad);
        const z = R * Math.cos(latRad) * Math.cos(lonRad);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        newCurrentIds[i] = p.id;
        accuracies[i] = p.acc;
        times[i] = p.time;
        altitudes[i] = p.alt;
        speeds[i] = p.spd;

        // Normalized density 0.0 - 1.0
        const cellCount = smoothedMap.get(p.gridKey) || 0;
        if (maxSmoothedDensity > 1) {
             const val = cellCount < 1 ? 1 : cellCount;
             densities[i] = Math.log(val) / Math.log(maxSmoothedDensity);
        } else {
             densities[i] = 1.0;
        }
    }

    const availableDates = Array.from(availableDatesSet).sort();

    return { 
        positions, 
        densities,
        accuracies,
        times,
        altitudes,
        speeds,
        count, 
        totalDistance,
        availableDates,
        currentIds: newCurrentIds
    };
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}