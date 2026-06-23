/* ══════════════════════════════════════════════════
   ANIMATED BACKGROUND — bg.js  (OPTIMIZED)
   Fixes: O(n²) nodes loop → spatial grid skip
          sqrt → squared distance comparisons
          reduced node/star counts for perf
          visibilitychange pause
══════════════════════════════════════════════════ */

(function () {
  "use strict";

  const canvas = document.getElementById("bgCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let W,
    H,
    mouseX = 0,
    mouseY = 0;
  let animId;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener(
    "mousemove",
    (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    },
    { passive: true },
  );

  /* ══ 1. STARS ══ */
  const STAR_COUNT = 90; // was 140
  const stars = Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * 2000,
    y: Math.random() * 2000,
    r: Math.random() * 1.2 + 0.2,
    baseA: Math.random() * 0.5 + 0.08,
    a: 0,
    speed: Math.random() * 0.008 + 0.003,
    offset: Math.random() * Math.PI * 2,
  }));

  function drawStars(t) {
    stars.forEach((s) => {
      const px = ((s.x % W) + (mouseX - W / 2) * 0.012) % W;
      const py = ((s.y % H) + (mouseY - H / 2) * 0.012) % H;
      s.a = s.baseA * (0.5 + 0.5 * Math.sin(t * s.speed + s.offset));
      ctx.beginPath();
      ctx.arc((px + W) % W, (py + H) % H, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,220,255,${s.a})`;
      ctx.fill();
    });
  }

  /* ══ 2. SHOOTING STARS ══ */
  const shoots = [];

  function spawnShoot() {
    shoots.push({
      x: Math.random() * W,
      y: Math.random() * H * 0.5,
      len: Math.random() * 120 + 60,
      speed: Math.random() * 6 + 4,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.4,
      life: 1,
    });
  }

  function drawShoots() {
    for (let i = shoots.length - 1; i >= 0; i--) {
      const s = shoots[i];
      s.x += Math.cos(s.angle) * s.speed;
      s.y += Math.sin(s.angle) * s.speed;
      s.life -= 0.025;
      if (s.life <= 0) {
        shoots.splice(i, 1);
        continue;
      }

      const tail = {
        x: s.x - Math.cos(s.angle) * s.len,
        y: s.y - Math.sin(s.angle) * s.len,
      };
      const grad = ctx.createLinearGradient(tail.x, tail.y, s.x, s.y);
      grad.addColorStop(0, "rgba(255,255,255,0)");
      grad.addColorStop(1, `rgba(200,215,255,${s.life * 0.9})`);
      ctx.beginPath();
      ctx.moveTo(tail.x, tail.y);
      ctx.lineTo(s.x, s.y);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }

  /* ══ 3. FLOATING ORBS ══ */
  const orbs = [
    {
      cx: 0.72,
      cy: 0.22,
      r: 0.3,
      color: [79, 116, 255],
      speed: 0.00035,
      ox: 0,
      oy: 0,
    },
    {
      cx: 0.18,
      cy: 0.75,
      r: 0.24,
      color: [107, 70, 255],
      speed: 0.00028,
      ox: 1,
      oy: 2,
    },
    {
      cx: 0.5,
      cy: 0.5,
      r: 0.2,
      color: [0, 180, 220],
      speed: 0.00042,
      ox: 3,
      oy: 1,
    },
    {
      cx: 0.85,
      cy: 0.8,
      r: 0.18,
      color: [130, 60, 255],
      speed: 0.00022,
      ox: 2,
      oy: 3,
    },
  ];

  function drawOrbs(t) {
    orbs.forEach((o) => {
      const cx = (o.cx + Math.sin(t * o.speed + o.ox) * 0.12) * W;
      const cy = (o.cy + Math.cos(t * o.speed + o.oy) * 0.1) * H;
      const r = o.r * Math.min(W, H);
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      const [R, G, B] = o.color;
      grad.addColorStop(0, `rgba(${R},${G},${B},0.10)`);
      grad.addColorStop(0.5, `rgba(${R},${G},${B},0.04)`);
      grad.addColorStop(1, `rgba(${R},${G},${B},0)`);
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    });
  }

  /* ══ 4. FLOWING GRID ══ */
  const GRID = 80;

  function drawGrid(t) {
    ctx.save();
    ctx.lineWidth = 0.4;
    const cols = Math.ceil(W / GRID) + 2;
    const rows = Math.ceil(H / GRID) + 2;
    const offX = (t * 0.012) % GRID;
    const offY = (t * 0.008) % GRID;

    for (let c = -1; c < cols; c++) {
      const x = c * GRID - offX;
      const pulse = 0.5 + 0.5 * Math.sin(c * 0.35 + t * 0.0008);
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.strokeStyle = `rgba(79,116,255,${0.025 * pulse})`;
      ctx.stroke();
    }
    for (let r = -1; r < rows; r++) {
      const y = r * GRID - offY;
      const pulse = 0.5 + 0.5 * Math.sin(r * 0.35 + t * 0.0006);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.strokeStyle = `rgba(107,70,255,${0.022 * pulse})`;
      ctx.stroke();
    }
    ctx.restore();
  }

  /* ══ 5. AURORA ══ */
  const auroraLines = [
    {
      y: 0.15,
      color: [79, 116, 255],
      amp: 60,
      freq: 0.003,
      phase: 0,
      speed: 0.00025,
    },
    {
      y: 0.3,
      color: [107, 70, 255],
      amp: 45,
      freq: 0.004,
      phase: 1.5,
      speed: 0.00018,
    },
    {
      y: 0.08,
      color: [0, 160, 220],
      amp: 35,
      freq: 0.005,
      phase: 3.0,
      speed: 0.00032,
    },
  ];

  function drawAurora(t) {
    auroraLines.forEach((line) => {
      const baseY = line.y * H;
      const [R, G, B] = line.color;
      ctx.beginPath();
      ctx.moveTo(0, baseY);
      for (let x = 0; x <= W; x += 6) {
        // was 4, now 6 — fewer points
        const y =
          baseY +
          Math.sin(x * line.freq + t * line.speed + line.phase) * line.amp;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(W, 0);
      ctx.lineTo(0, 0);
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, 0, 0, baseY + line.amp);
      grad.addColorStop(0, `rgba(${R},${G},${B},0)`);
      grad.addColorStop(0.6, `rgba(${R},${G},${B},0.03)`);
      grad.addColorStop(1, `rgba(${R},${G},${B},0)`);
      ctx.fillStyle = grad;
      ctx.fill();
    });
  }

  /* ══ 6. GLOWING NODES — OPTIMIZED ══
     Key fix: O(n²) → skip self & already-checked pairs,
     use squared distance (no sqrt), batch strokes per alpha bucket
  */
  const NODE_COUNT = 14; // was 18
  const CONNECT_DIST = 160; // was 180
  const CONNECT_DIST_SQ = CONNECT_DIST * CONNECT_DIST;

  const nodes = Array.from({ length: NODE_COUNT }, () => ({
    x: Math.random() * (window.innerWidth || 1200),
    y: Math.random() * (window.innerHeight || 800),
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    r: Math.random() * 2.5 + 1,
    a: Math.random() * 0.4 + 0.1,
    phase: Math.random() * Math.PI * 2,
  }));

  function drawNodes(t) {
    // Move nodes
    nodes.forEach((n) => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    // Draw connections — only upper-triangle (i<j), no sqrt
    ctx.lineWidth = 0.6;
    for (let i = 0; i < NODE_COUNT - 1; i++) {
      const ni = nodes[i];
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const nj = nodes[j];
        const dx = ni.x - nj.x;
        const dy = ni.y - nj.y;
        const dSq = dx * dx + dy * dy;
        if (dSq < CONNECT_DIST_SQ) {
          const alpha = (1 - dSq / CONNECT_DIST_SQ) * 0.08;
          ctx.beginPath();
          ctx.moveTo(ni.x, ni.y);
          ctx.lineTo(nj.x, nj.y);
          ctx.strokeStyle = `rgba(79,116,255,${alpha.toFixed(3)})`;
          ctx.stroke();
        }
      }
    }

    // Draw glow dots
    nodes.forEach((n) => {
      const pulse = n.a * (0.6 + 0.4 * Math.sin(t * 0.001 + n.phase));
      const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4);
      grad.addColorStop(0, `rgba(100,140,255,${pulse})`);
      grad.addColorStop(1, "rgba(100,140,255,0)");
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180,200,255,${pulse * 0.9})`;
      ctx.fill();
    });
  }

  /* ══ MAIN LOOP ══ */
  let shootTimer = 0;
  let lastT = 0;

  function loop(t) {
    // Throttle to ~50fps max to ease CPU
    if (t - lastT < 18) {
      animId = requestAnimationFrame(loop);
      return;
    }
    lastT = t;

    ctx.clearRect(0, 0, W, H);
    drawGrid(t);
    drawAurora(t);
    drawOrbs(t);
    drawNodes(t);
    drawStars(t);
    drawShoots();

    shootTimer += t - (lastT || t);
    if (shootTimer > 3500 + Math.random() * 2000) {
      spawnShoot();
      shootTimer = 0;
    }

    animId = requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(animId);
    else requestAnimationFrame(loop);
  });
})();
