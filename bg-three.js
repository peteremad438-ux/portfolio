
(function () {
  "use strict";

  const canvas = document.getElementById("bgCanvas");
  if (!canvas || typeof THREE === "undefined") return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
  );
  camera.position.z = 12;

  /* ---------- Particle nebula ---------- */
  const isMobile = window.innerWidth < 760;
  const particleCount = isMobile ? 260 : 650;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const radius = 6 + Math.random() * 10;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
    positions[i * 3 + 2] = radius * Math.cos(phi) - 6;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0x60a5fa, // matches the reference site's nebula
    size: isMobile ? 0.035 : 0.045,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  /* ---------- Floating wireframe shapes ---------- */
  const shapesGroup = new THREE.Group();
  const shapeDefs = [
    { geo: new THREE.IcosahedronGeometry(1.4, 0), pos: [-4.2, 1.4, -2], color: 0x3b82f6 },
    { geo: new THREE.TorusGeometry(1, 0.32, 8, 32), pos: [4.4, -1.1, -3], color: 0x60a5fa },
    { geo: new THREE.OctahedronGeometry(1, 0), pos: [2.6, 2.4, -4], color: 0x3b82f6 },
  ];

  shapeDefs.forEach((def) => {
    const mat = new THREE.MeshBasicMaterial({
      color: def.color,
      wireframe: true,
      transparent: true,
      opacity: 0.26,
    });
    const mesh = new THREE.Mesh(def.geo, mat);
    mesh.position.set(...def.pos);
    mesh.userData.rotSpeed = {
      x: (Math.random() - 0.5) * 0.001,
      y: (Math.random() - 0.5) * 0.0015,
    };
    mesh.userData.floatOffset = Math.random() * Math.PI * 2;
    shapesGroup.add(mesh);
  });
  scene.add(shapesGroup);

  /* ---------- Mouse parallax ---------- */
  let mouseX = 0,
    mouseY = 0;
  let targetRotX = 0,
    targetRotY = 0;

  window.addEventListener(
    "mousemove",
    (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    },
    { passive: true },
  );

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  /* ---------- Render loop (pausable) ---------- */
  const clock = new THREE.Clock();
  let animId = null;
  let modalPaused = false;

  function renderFrame() {
    const t = clock.getElapsedTime();

    if (!reduceMotion) {
      particles.rotation.y = t * 0.015;
      particles.rotation.x = t * 0.005;

      shapesGroup.children.forEach((mesh) => {
        mesh.rotation.x += mesh.userData.rotSpeed.x * 16;
        mesh.rotation.y += mesh.userData.rotSpeed.y * 16;
        mesh.position.y +=
          Math.sin(t * 0.5 + mesh.userData.floatOffset) * 0.0015;
      });
    }

    targetRotX += (mouseY * 0.15 - targetRotX) * 0.03;
    targetRotY += (mouseX * 0.15 - targetRotY) * 0.03;
    scene.rotation.x = targetRotX * 0.3;
    scene.rotation.y = targetRotY * 0.3;

    renderer.render(scene, camera);
  }

  function loop() {
    renderFrame();
    animId = requestAnimationFrame(loop);
  }

  function stopLoop() {
    if (animId) cancelAnimationFrame(animId);
    animId = null;
  }
  function startLoop() {
    if (animId || modalPaused || document.hidden) return;
    if (reduceMotion) {
      renderFrame(); // single static frame, no rAF loop
      return;
    }
    animId = requestAnimationFrame(loop);
  }

  startLoop();

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopLoop();
    else startLoop();
  });

  // Pause the WebGL render loop while the "Behind the Project" modal
  // (fullscreen blurred backdrop) is open — same fix bg.js had, since
  // backdrop-filter: blur() has to re-blur every animated frame behind it.
  window.addEventListener("btp:modalopen", () => {
    modalPaused = true;
    stopLoop();
  });
  window.addEventListener("btp:modalclose", () => {
    modalPaused = false;
    startLoop();
  });
})();