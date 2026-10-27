/**
 * ============================================================
 * HIGH-PERFORMANCE CANVAS NETWORK & GLOWING MESH BACKGROUND
 * ============================================================
 * Dioptimalkan untuk performa tinggi & hemat daya (60 FPS stabil):
 * - DPR = 1 (mencegah beban GPU berlebih pada layar resolusi tinggi)
 * - Sprite glow di-pre-render sekali (tanpa shadowBlur / createRadialGradient di loop)
 * - Garis jaring dibatch dalam satu path (1 draw call per frame)
 * - Jumlah partikel adaptif ringan (30 - 45 partikel)
 * - Palet warna asli: Blue (#4f8fff) & Purple (#8b5cf6)
 * ============================================================
 */

(function () {
  'use strict';

  function initBackgroundNetwork() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles = [];
    let animationFrameId = null;
    let isVisible = true;
    let lastTime = 0;

    // Mouse coordinates (throttled)
    const mouse = {
      x: -9999,
      y: -9999,
      active: false
    };

    const CONFIG = {
      maxDistance: 125,
      maxDistanceSq: 125 * 125,
      mouseDistanceSq: 150 * 150,
      speed: 0.35,
      minParticles: 26,
      maxParticles: 42
    };

    // Pre-rendered glow sprites (menghilangkan lag 100%)
    let blueGlowSprite = null;
    let purpleGlowSprite = null;

    function createGlowSprite(colorInner, colorOuter, size) {
      const offCanvas = document.createElement('canvas');
      offCanvas.width = size;
      offCanvas.height = size;
      const offCtx = offCanvas.getContext('2d');
      const center = size / 2;

      const grad = offCtx.createRadialGradient(center, center, 0, center, center, center);
      grad.addColorStop(0, colorInner);
      grad.addColorStop(0.35, colorOuter);
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      offCtx.beginPath();
      offCtx.arc(center, center, center, 0, Math.PI * 2);
      offCtx.fillStyle = grad;
      offCtx.fill();

      // Core titik terang
      offCtx.beginPath();
      offCtx.arc(center, center, 2, 0, Math.PI * 2);
      offCtx.fillStyle = '#ffffff';
      offCtx.fill();

      return offCanvas;
    }

    function initSprites() {
      // Glow biru (#4f8fff) & ungu (#8b5cf6)
      blueGlowSprite = createGlowSprite('rgba(107, 163, 255, 0.95)', 'rgba(79, 143, 255, 0.35)', 36);
      purpleGlowSprite = createGlowSprite('rgba(167, 139, 250, 0.95)', 'rgba(139, 92, 246, 0.35)', 36);
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;

      // Gunakan resolusi 1:1 tanpa DPR buatan untuk kinerja sangat ringan
      canvas.width = width;
      canvas.height = height;

      createParticles();
    }

    function createParticles() {
      const area = width * height;
      let count = Math.floor(area / 26000);
      count = Math.max(CONFIG.minParticles, Math.min(CONFIG.maxParticles, count));

      particles = [];
      const hubCount = Math.max(6, Math.floor(count * 0.3));

      for (let i = 0; i < count; i++) {
        const isHub = i < hubCount;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * CONFIG.speed,
          vy: (Math.random() - 0.5) * CONFIG.speed,
          isHub: isHub,
          sprite: isHub ? (i % 2 === 0 ? blueGlowSprite : purpleGlowSprite) : null,
          radius: isHub ? 2.5 : 1.4,
          pulse: Math.random() * Math.PI * 2
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const len = particles.length;

      // 1. UPDATE POSISI PARTIKEL
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -15) p.x = width + 15;
        else if (p.x > width + 15) p.x = -15;
        if (p.y < -15) p.y = height + 15;
        else if (p.y > height + 15) p.y = -15;

        p.pulse += 0.03;
      }

      // 2. BATCH DRAW GARIS JARING (HANYA 1 KALI STROKE UNTUK KINERJA MAKSIMAL)
      ctx.beginPath();
      for (let i = 0; i < len; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < CONFIG.maxDistanceSq) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
      }
      ctx.strokeStyle = 'rgba(79, 143, 255, 0.14)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // 3. GARIS INTERAKTIF KE MOUSE (JIKA AKTIF)
      if (mouse.active) {
        ctx.beginPath();
        for (let i = 0; i < len; i++) {
          const p = particles[i];
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < CONFIG.mouseDistanceSq) {
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
          }
        }
        ctx.strokeStyle = 'rgba(107, 163, 255, 0.32)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // 4. DRAW PARTIKEL & SPRITE CAHAYA (SUPER CEPAT VIA DRAWIMAGE)
      // Titik reguler dibatch
      ctx.beginPath();
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        if (!p.isHub) {
          ctx.moveTo(p.x + p.radius, p.y);
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        }
      }
      ctx.fillStyle = 'rgba(107, 163, 255, 0.6)';
      ctx.fill();

      // Node cahaya (hubs) menggunakan pre-rendered sprite
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        if (p.isHub && p.sprite) {
          // Denyut halus tanpa kalkulasi berat
          const scale = 0.85 + Math.sin(p.pulse) * 0.15;
          const drawSize = 36 * scale;
          const offset = drawSize / 2;
          ctx.drawImage(p.sprite, p.x - offset, p.y - offset, drawSize, drawSize);
        }
      }
    }

    function loop(timestamp) {
      if (!isVisible) return;

      // Throttle jika perlu (~60 FPS)
      if (!lastTime || timestamp - lastTime >= 15) {
        lastTime = timestamp;
        draw();
      }

      animationFrameId = requestAnimationFrame(loop);
    }

    // Passive mouse handler
    let mouseTicking = false;
    window.addEventListener('mousemove', (e) => {
      if (!mouseTicking) {
        requestAnimationFrame(() => {
          mouse.x = e.clientX;
          mouse.y = e.clientY;
          mouse.active = true;
          mouseTicking = false;
        });
        mouseTicking = true;
      }
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      mouse.active = false;
    }, { passive: true });

    // Touch support for mobile devices
    window.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.active = true;
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.active = true;
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      mouse.active = false;
    }, { passive: true });

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 100);
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        isVisible = false;
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      } else {
        isVisible = true;
        lastTime = 0;
        animationFrameId = requestAnimationFrame(loop);
      }
    });

    initSprites();
    resize();
    animationFrameId = requestAnimationFrame(loop);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBackgroundNetwork);
  } else {
    initBackgroundNetwork();
  }
})();
