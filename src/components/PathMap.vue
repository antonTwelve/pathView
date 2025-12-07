<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const props = defineProps({
  filterRange: {
    type: Object, // { start: Number (Unix Sec), end: Number (Unix Sec) } or null
    default: null
  },
  vizMode: {
    type: Number,
    default: 0
  },
  themeColor: {
    type: String,
    default: '#ffffff'
  },
  altitudeRange: {
    type: Array,
    default: () => [-Infinity, Infinity]
  },
  speedLimit: {
    type: Array,
    default: () => [0, Infinity]
  },
  enableZoomRotate: {
    type: Boolean,
    default: true
  }
});
const emit = defineEmits([
  'loaded',       // { count, totalDistance, availableDates }
  'loading',      // boolean (Global loading for file/filter)
  'details-loading', // boolean (Specific for point details)
  'error',        // string
  'status',       // string
  'point-selected', // object (or null)
  'fps'           // number
]);
const container = ref(null);
let scene, camera, renderer, controls;
let worker;
let pointsMesh, highlightMesh;
let storedAccuracies = null;
let storedTimes = null;
let storedAltitudes = null;
let storedSpeeds = null;
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Variables for drag detection
let mouseDownTime = 0;
let mouseDownPosition = { x: 0, y: 0 };
const CLICK_THRESHOLD_PX = 5; // Max pixels moved to still be considered a click

// Zoom-Rotate Sync Variables
let zoomTarget = null;
let zoomTimeout = null;

function onWheel(event) {
  if (!props.enableZoomRotate) return;

  // 1. Manage Zoom Sequence
  if (zoomTimeout) clearTimeout(zoomTimeout);
  zoomTimeout = setTimeout(() => {
    zoomTarget = null;
  }, 150);

  // 2. Identify Target if not locked
  if (!zoomTarget) {
    const rect = renderer.domElement.getBoundingClientRect();
    const mx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const my = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    const wheelRaycaster = new THREE.Raycaster();
    wheelRaycaster.setFromCamera(new THREE.Vector2(mx, my), camera);
    
    // Intersect with mathematical earth sphere (R=100)
    const sphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 100);
    const intersection = new THREE.Vector3();
    if (wheelRaycaster.ray.intersectSphere(sphere, intersection)) {
      zoomTarget = intersection;
    }
  }

  // 3. Rotate Camera towards Target
  if (zoomTarget) {
    const camPos = camera.position;
    const targetPos = zoomTarget;
    
    const vC = camPos.clone().normalize();
    const vT = targetPos.clone().normalize();
    
    const angle = vC.angleTo(vT);
    
    // Only rotate if significant angle remains
    if (angle > 0.001) {
      // Axis perpendicular to C and T
      const axis = new THREE.Vector3().crossVectors(vC, vT).normalize();
      
      // Rotate by a fraction of the remaining angle for "gradual" effect
      const factor = 0.08; 
      const rotAngle = angle * factor;
      
      camPos.applyAxisAngle(axis, rotAngle);
    }
  }
}

// Worker Init
function initWorker() {
  worker = new Worker(new URL('../workers/dbWorker.js', import.meta.url), { type: 'module' });
  worker.onmessage = (e) => {
    const { type, positions, densities, accuracies, times, altitudes, speeds, message, data, count, totalDistance, availableDates } = e.data;
    if (type === 'success') {
      storedAccuracies = accuracies;
      storedTimes = times;
      storedAltitudes = altitudes;
      storedSpeeds = speeds;
      renderPoints(positions, densities, times, altitudes, speeds);
      
      // Force re-check filter if data loaded after date selection
      if (props.filterRange) {
          updateTimeUniform(props.filterRange);
      }
      updateAltSpeedUniforms();

      emit('loading', false);
      emit('status', '');
      emit('loaded', { count, totalDistance, availableDates });
    } else if (type === 'details') {
      emit('point-selected', data);
      emit('details-loading', false); // Details loaded
    } else if (type === 'error') {
      emit('loading', false);
      emit('details-loading', false);
      emit('error', message);
    }
  };
}

function updateTimeUniform(range) {
    if (!pointsMesh || !pointsMesh.material.uniforms) return;

    if (range && range.start && range.end && storedTimes && storedTimes.length > 0) {
          try {
              const epoch2000 = 946684800; // 2000-01-01 00:00:00 UTC in seconds
              
              const startTs = range.start;
              const endTs = range.end;

              const startDay = (startTs - epoch2000) / 86400.0;
              const endDay = (endTs - epoch2000) / 86400.0;

              pointsMesh.material.uniforms.uTimeRange.value.set(startDay, endDay);
          } catch (e) {
              console.error('Date filter error:', e);
              pointsMesh.material.uniforms.uTimeRange.value.set(-99999.0, 99999.0);
          }
    } else {
        pointsMesh.material.uniforms.uTimeRange.value.set(-99999.0, 99999.0);
    }
    pointsMesh.material.needsUpdate = true;
}

function updateAltSpeedUniforms() {
    if (!pointsMesh || !pointsMesh.material.uniforms) return;
    
    // Altitude Range (Infinite handling)
    const minAlt = props.altitudeRange[0] === -Infinity ? -999999.0 : props.altitudeRange[0];
    const maxAlt = props.altitudeRange[1] === Infinity ? 999999.0 : props.altitudeRange[1];
    
    // Speed Range (Infinite handling)
    // props.speedLimit is now [min, max]
    const minSpeed = (props.speedLimit[0] === -Infinity || props.speedLimit[0] === null) ? 0.0 : props.speedLimit[0];
    const maxSpeed = (props.speedLimit[1] === Infinity || props.speedLimit[1] === null) ? 999999.0 : props.speedLimit[1];

    pointsMesh.material.uniforms.uAltRange.value.set(minAlt, maxAlt);
    pointsMesh.material.uniforms.uSpeedRange.value.set(minSpeed, maxSpeed);
    pointsMesh.material.needsUpdate = true;
}

// Watchers
watch(() => props.filterRange, (newRange) => {
  emit('point-selected', null);
  highlightMesh.visible = false;
  updateTimeUniform(newRange);
});

watch(() => props.altitudeRange, () => {
  emit('point-selected', null);
  highlightMesh.visible = false;
  updateAltSpeedUniforms();
}, { deep: true });

watch(() => props.speedLimit, () => {
  emit('point-selected', null);
  highlightMesh.visible = false;
  updateAltSpeedUniforms();
}, { deep: true });

watch(() => props.vizMode, (newMode) => {
  if (pointsMesh && pointsMesh.material.uniforms) {
    pointsMesh.material.uniforms.uMode.value = newMode;
    pointsMesh.material.needsUpdate = true;
  }
});

watch(() => props.themeColor, (newColor) => {
  if (pointsMesh && pointsMesh.material.uniforms) {
    pointsMesh.material.uniforms.uColor.value.set(newColor);
    pointsMesh.material.needsUpdate = true;
  }
  if (highlightMesh && highlightMesh.material.uniforms) {
    highlightMesh.material.uniforms.uColor.value.set(newColor);
    highlightMesh.material.needsUpdate = true;
  }
});

function loadFile(buffer) {
  if (worker) {
    emit('loading', true);
    emit('status', '加载中...');
    emit('error', '');
    emit('point-selected', null);
    worker.postMessage({ type: 'load', fileBuffer: buffer }, [buffer]);
  }
}

function initThree() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.00001, 1000);
  camera.position.z = 250;
  renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.value.appendChild(renderer.domElement);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enablePan = false;
  controls.minDistance = 100.0001;
  controls.maxDistance = 500;
  controls.rotateSpeed = 0.5;
  controls.zoomSpeed = 0.5;
  
  function createEarthGrid(radius, widthSegments, heightSegments, color) {
    const vertices = [];
    for (let y = 1; y < heightSegments; y++) {
      const lat = (y / heightSegments) * Math.PI - Math.PI / 2;
      const r = Math.cos(lat) * radius;
      const posY = Math.sin(lat) * radius;
      for (let x = 0; x < widthSegments; x++) {
        const lon1 = (x / widthSegments) * Math.PI * 2;
        const lon2 = ((x + 1) / widthSegments) * Math.PI * 2;
        vertices.push(r * Math.cos(lon1), posY, r * Math.sin(lon1));
        vertices.push(r * Math.cos(lon2), posY, r * Math.sin(lon2));
      }
    }
    for (let x = 0; x < widthSegments; x++) {
      const lon = (x / widthSegments) * Math.PI * 2;
      const sinLon = Math.sin(lon);
      const cosLon = Math.cos(lon);
      for (let y = 0; y < heightSegments; y++) {
        const lat1 = (y / heightSegments) * Math.PI - Math.PI / 2;
        const lat2 = ((y + 1) / heightSegments) * Math.PI - Math.PI / 2;
        vertices.push(radius * Math.cos(lat1) * cosLon, radius * Math.sin(lat1), radius * Math.cos(lat1) * sinLon);
        vertices.push(radius * Math.cos(lat2) * cosLon, radius * Math.sin(lat2), radius * Math.cos(lat2) * sinLon);
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const material = new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: 0.3 });
    const mesh = new THREE.LineSegments(geometry, material);
    mesh.frustumCulled = false;
    return mesh;
  }
  const gridColor = 0x888888;
  const earthLow = createEarthGrid(100, 72, 36, gridColor);
  scene.add(earthLow);
  const earthMed = createEarthGrid(100, 144, 72, gridColor);
  earthMed.visible = false;
  scene.add(earthMed);
  const earthHigh = createEarthGrid(100, 360, 180, gridColor);
  earthHigh.visible = false;
  scene.add(earthHigh);
  controls.addEventListener('change', () => {
    const dist = camera.position.distanceTo(controls.target);
    
    // Dynamic control speed based on altitude
    const altitude = dist - 100;
    const scale = Math.min(Math.max(altitude / 100, 0.000001), 1.0);
    controls.rotateSpeed = scale * 0.35;
    controls.zoomSpeed = scale * 0.8;

    if (dist > 130) {
      earthLow.visible = true;
      earthMed.visible = false;
      earthHigh.visible = false;
    } else if (dist > 105) {
      earthLow.visible = false;
      earthMed.visible = true;
      earthHigh.visible = false;
    } else {
      earthLow.visible = false;
      earthMed.visible = false;
      earthHigh.visible = true;
    }
  });

  const coreGeo = new THREE.SphereGeometry(99.9, 64, 64);
  const coreMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
  scene.add(new THREE.Mesh(coreGeo, coreMat));
  const highlightMat = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(props.themeColor) }
    },
    extensions: { derivatives: true },
    vertexShader: `
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
    fragmentShader: `
            uniform vec3 uColor;
            varying vec2 vUv;
            void main() {
              float dist = length(vUv - vec2(0.5)) * 2.0;
              vec2 grad = vec2(dFdx(dist), dFdy(dist));
              float pxSize = length(grad);
              float w = pxSize * 1.5;
              float alpha = 1.0 - smoothstep(1.0 - w, 1.0, dist);
              if (alpha < 0.01) discard;
              float thickness = pxSize * 2.0; 
              float innerRadius = max(0.0, 1.0 - thickness);
              float borderMask = smoothstep(innerRadius - w, innerRadius, dist);
              vec3 borderColor = mix(uColor, vec3(1.0), 0.5);
              vec3 finalColor = mix(uColor, borderColor, borderMask);
              float finalOpacity = mix(0.15, 0.8, borderMask);
              gl_FragColor = vec4(finalColor, finalOpacity * alpha);
            }
          `,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    side: THREE.DoubleSide
  });
  const highlightGeo = new THREE.PlaneGeometry(1, 1);
  highlightMesh = new THREE.Mesh(highlightGeo, highlightMat);
  highlightMesh.visible = false;
  scene.add(highlightMesh);
  
  // Attach Zoom-Rotate listener
  renderer.domElement.addEventListener('wheel', onWheel, { passive: false });
  
  animate();
}

function renderPoints(positions, densities, times, altitudes, speeds) {
  if (pointsMesh) {
    scene.remove(pointsMesh);
    pointsMesh.geometry.dispose();
    pointsMesh.material.dispose();
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  const count = positions.length / 3;

  if (densities) geometry.setAttribute('aDensity', new THREE.BufferAttribute(densities, 1));
  else geometry.setAttribute('aDensity', new THREE.BufferAttribute(new Float32Array(count).fill(1.0), 1));

  if (times) geometry.setAttribute('aTime', new THREE.BufferAttribute(times, 1));
  else geometry.setAttribute('aTime', new THREE.BufferAttribute(new Float32Array(count).fill(-1.0), 1));

  if (altitudes) geometry.setAttribute('aAlt', new THREE.BufferAttribute(altitudes, 1));
  else geometry.setAttribute('aAlt', new THREE.BufferAttribute(new Float32Array(count).fill(0.0), 1));
  
  if (speeds) geometry.setAttribute('aSpeed', new THREE.BufferAttribute(speeds, 1));
  else geometry.setAttribute('aSpeed', new THREE.BufferAttribute(new Float32Array(count).fill(0.0), 1));

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uMode: { value: props.vizMode }, 
      uColor: { value: new THREE.Color(props.themeColor) },
      uOpacity: { value: 0.8 },
      uSize: { value: 3.0 },     
      uTimeRange: { value: new THREE.Vector2(-99999.0, 99999.0) },
      uAltRange: { value: new THREE.Vector2(-999999.0, 999999.0) },
      uSpeedRange: { value: new THREE.Vector2(0.0, 999999.0) }
    },
    vertexShader: `
      #include <common>
      #include <logdepthbuf_pars_vertex>
      attribute float aDensity;
      attribute float aTime;
      attribute float aAlt;
      attribute float aSpeed;
      varying float vDensity;
      varying float vTime;
      varying float vAlt;
      varying float vSpeed;
      uniform float uSize;
      void main() {
        vDensity = aDensity;
        vTime = aTime;
        vAlt = aAlt;
        vSpeed = aSpeed;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <logdepthbuf_vertex>
        gl_PointSize = uSize; 
      }
    `,
    fragmentShader: `
      #include <common>
      #include <logdepthbuf_pars_fragment>
      uniform int uMode;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform vec2 uTimeRange;
      uniform vec2 uAltRange;
      uniform vec2 uSpeedRange;
      varying float vDensity;
      varying float vTime;
      varying float vAlt;
      varying float vSpeed;
      
      vec3 getHeatColor(float t) {
        vec3 col0 = vec3(0.25, 0.45, 0.95); 
        vec3 col1 = vec3(0.25, 0.75, 0.85); 
        vec3 col2 = vec3(0.45, 0.85, 0.45); 
        vec3 col3 = vec3(0.95, 0.85, 0.35); 
        vec3 col4 = vec3(0.95, 0.45, 0.35); 
        if (t < 0.25) return mix(col0, col1, smoothstep(0.0, 0.25, t));
        if (t < 0.50) return mix(col1, col2, smoothstep(0.25, 0.50, t));
        if (t < 0.75) return mix(col2, col3, smoothstep(0.50, 0.75, t));
        return mix(col3, col4, smoothstep(0.75, 1.0, t));
      }
      void main() {
        #include <logdepthbuf_fragment>

        // Filters
        if (vTime < uTimeRange.x || vTime > uTimeRange.y) discard;
        if (vAlt < uAltRange.x || vAlt > uAltRange.y) discard;
        if (vSpeed < uSpeedRange.x || vSpeed > uSpeedRange.y) discard;

        vec2 coord = gl_PointCoord - vec2(0.5);
        if (length(coord) > 0.5) discard;
        vec3 color = vec3(1.0);
        float alpha = uOpacity;
        if (uMode == 0) {
            color = uColor; 
            alpha = 0.1 + 0.9 * smoothstep(0.0, 1.0, vDensity);
        } else if (uMode == 1) {
            color = getHeatColor(vDensity);
            alpha = 0.5; 
        }
        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
  });
  pointsMesh = new THREE.Points(geometry, material);
  scene.add(pointsMesh);
}

function selectPointAtMousePos(event) {
  if (!pointsMesh) return;
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const distanceToCenter = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));
  const distanceToSurface = Math.max(distanceToCenter - 100, 1.0);
  const fovRad = camera.fov * (Math.PI / 180);
  const worldSizePerPixel = (2 * distanceToSurface * Math.tan(fovRad / 2)) / window.innerHeight;
  raycaster.params.Points.threshold = worldSizePerPixel * 15;
  const intersects = raycaster.intersectObject(pointsMesh, false);
  if (intersects.length > 0) {
    let bestPoint = null;
    let minScreenDist = Infinity;
    const vector = new THREE.Vector3();
    const canvasRect = renderer.domElement.getBoundingClientRect();
    
    const range = pointsMesh.material.uniforms.uTimeRange.value;
    const altRange = pointsMesh.material.uniforms.uAltRange.value;
    const spdRange = pointsMesh.material.uniforms.uSpeedRange.value;

    for (let i = 0; i < intersects.length; i++) {
      const p = intersects[i];
      const index = p.index;

      // Check Filters manually
      if (storedTimes) {
         const t = storedTimes[index];
         if (t > -0.9e20) {
             if (t < range.x || t > range.y) continue;
         }
      }
      if (storedAltitudes) {
         const a = storedAltitudes[index];
         if (a > -0.9e20) {
             if (a < altRange.x || a > altRange.y) continue;
         }
      }
      if (storedSpeeds) {
         const s = storedSpeeds[index];
         if (s > -0.9e20) {
             // Modified check for speed range
             if (s < spdRange.x || s > spdRange.y) continue;
         }
      }

      const posAttr = pointsMesh.geometry.attributes.position;
      vector.set(posAttr.getX(index), posAttr.getY(index), posAttr.getZ(index));
      vector.project(camera);
      const screenX = (vector.x * 0.5 + 0.5) * canvasRect.width;
      const screenY = (-(vector.y * 0.5) + 0.5) * canvasRect.height;
      const mousePixelX = event.clientX - canvasRect.left;
      const mousePixelY = event.clientY - canvasRect.top;
      const dx = screenX - mousePixelX;
      const dy = screenY - mousePixelY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < minScreenDist && dist < 15) {
        minScreenDist = dist;
        bestPoint = { index: index, position: vector.clone() }; 
        const wx = posAttr.getX(index);
        const wy = posAttr.getY(index);
        const wz = posAttr.getZ(index);
        bestPoint.worldPos = new THREE.Vector3(wx, wy, wz);
      }
    }
    if (bestPoint) {
      highlightMesh.position.copy(bestPoint.worldPos);
      const accuracyMeters = (storedAccuracies && storedAccuracies[bestPoint.index]) || 10.0;
      const unitsPerMeter = 100.0 / 6371000.0;
      const worldDiameter = accuracyMeters * 2.0 * unitsPerMeter;
      const distToCam = camera.position.distanceTo(bestPoint.worldPos);
      const minWorldSize = (3.0 / window.innerHeight) * 2 * distToCam * Math.tan(fovRad / 2);
      const finalScale = Math.max(worldDiameter, minWorldSize);
      highlightMesh.scale.set(finalScale, finalScale, 1);
      highlightMesh.visible = true;
      emit('details-loading', true);
      worker.postMessage({ type: 'getDetails', index: bestPoint.index });
    } else {
      highlightMesh.visible = false;
      emit('point-selected', null);
    }
  } else {
    highlightMesh.visible = false;
    emit('point-selected', null);
  }
}

function onMouseDown(event) {
  mouseDownTime = performance.now();
  mouseDownPosition = { x: event.clientX, y: event.clientY };
}

function onMouseUp(event) {
  const mouseUpTime = performance.now();
  const mouseUpPosition = { x: event.clientX, y: event.clientY };
  const dx = mouseUpPosition.x - mouseDownPosition.x;
  const dy = mouseUpPosition.y - mouseDownPosition.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance < CLICK_THRESHOLD_PX) {
    selectPointAtMousePos(event);
  }
}

function onWindowResize() {
  if (camera && renderer) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (pointsMesh && pointsMesh.material.uniforms.uHeight) {
      pointsMesh.material.uniforms.uHeight.value = window.innerHeight;
    }
  }
}
let lastTime = performance.now();
let frameCount = 0;
let animationId;
function animate() {
  animationId = requestAnimationFrame(animate);
  const now = performance.now();
  frameCount++;
  if (now - lastTime >= 1000) {
    emit('fps', frameCount);
    frameCount = 0;
    lastTime = now;
  }
  controls.update();
  if (highlightMesh && highlightMesh.visible) {
    highlightMesh.quaternion.copy(camera.quaternion);
  }
  renderer.render(scene, camera);
}
onMounted(() => {
  initThree();
  initWorker();
  window.addEventListener('resize', onWindowResize);
  renderer.domElement.addEventListener('mousedown', onMouseDown);
  renderer.domElement.addEventListener('mouseup', onMouseUp);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize);
  if (renderer && renderer.domElement) {
    renderer.domElement.removeEventListener('mousedown', onMouseDown);
    renderer.domElement.removeEventListener('mouseup', onMouseUp);
    renderer.domElement.removeEventListener('wheel', onWheel);
  }
  if (worker) worker.terminate();
  if (renderer) renderer.dispose();
  if (animationId) cancelAnimationFrame(animationId);
});
defineExpose({ loadFile });
</script>
<template>
  <div ref="container" class="canvas-container"></div>
</template>
<style scoped>
.canvas-container {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
</style>