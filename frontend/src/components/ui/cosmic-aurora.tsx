import React, { useRef, useEffect } from 'react';

const AuroraCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Attach canvas into the hero section so it fills that section
    const hero = document.getElementById('home');
    let appendedToHero = false;
    if (hero && canvas.parentElement !== hero) {
      // Make sure the hero can contain absolutely positioned children
      const prevPos = window.getComputedStyle(hero).position;
      if (!prevPos || prevPos === 'static') hero.style.position = 'relative';
      hero.appendChild(canvas);
      appendedToHero = true;
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.pointerEvents = 'none';
    }

    let width = 0, height = 0;
    let particles: any[] = [];
    let hue = 200;
    let time = 0;
    let animationFrameId = 0;

    const config = {
      particleCount: 800,
      particleSpeed: 0.1,
      particleLifetime: 300,
      trailLength: 0.08,
      hueSpeed: 0.2,
      noiseScale: 0.002,
      noiseSpeed: 0.0005,
      canvasGlow: 15,
    } as const;

    const noise = (() => {
      const p = new Uint8Array(512);
      for (let i = 0; i < 256; i++) p[i] = p[i + 256] = i;
      const perm = new Uint8Array(512);
      for (let i = 0; i < 256; i++) {
        const j = Math.floor(Math.random() * (256 - i)) + i;
        [p[i], p[j]] = [p[j], p[i]];
      }
      for (let i = 0; i < 512; i++) perm[i] = p[i & 255];

      function fade(t: number) {
        return t * t * t * (t * (t * 6 - 15) + 10);
      }
      function lerp(t: number, a: number, b: number) {
        return a + t * (b - a);
      }
      function grad(hash: number, x: number, y: number) {
        const h = hash & 15;
        const u = h < 8 ? x : y;
        const v = h < 4 ? y : h === 12 || h === 14 ? x : 0;
        return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
      }

      return (x: number, y: number, z: number) => {
        const X = Math.floor(x) & 255;
        const Y = Math.floor(y) & 255;
        const Z = Math.floor(z) & 255;
        x -= Math.floor(x);
        y -= Math.floor(y);
        z -= Math.floor(z);
        const u = fade(x);
        const v = fade(y);
        const w = fade(z);
        const A = perm[X] + Y;
        const AA = perm[A] + Z;
        const AB = perm[A + 1] + Z;
        const B = perm[X + 1] + Y;
        const BA = perm[B] + Z;
        const BB = perm[B + 1] + Z;

        return lerp(
          w,
          lerp(
            v,
            lerp(u, grad(perm[AA], x, y), grad(perm[BA], x - 1, y)),
            lerp(u, grad(perm[AB], x, y - 1), grad(perm[BB], x - 1, y - 1))
          ),
          lerp(
            v,
            lerp(u, grad(perm[AA + 1], x, y), grad(perm[BA + 1], x - 1, y)),
            lerp(u, grad(perm[AB + 1], x, y - 1), grad(perm[BB + 1], x - 1, y - 1))
          )
        );
      };
    })();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      lifetime: number;
      age: number;

      constructor() {
        this.x = 0; this.y = 0; this.vx = 0; this.vy = 0; this.lifetime = 0; this.age = 0;
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height / 2 + (Math.random() * height / 4 - height / 8);
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = 0;
        this.lifetime = Math.random() * config.particleLifetime;
        this.age = 0;
      }

      update(timeTick: number) {
        this.age++;
        if (this.age > this.lifetime) this.reset();

        const angle =
          noise(this.x * config.noiseScale, this.y * config.noiseScale, timeTick * config.noiseSpeed) *
          Math.PI *
          4;

        this.vx += Math.cos(angle) * config.particleSpeed;
        this.vy += Math.sin(angle) * config.particleSpeed;

        this.vx *= 0.98;
        this.vy *= 0.98;

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) this.reset();
      }

      draw() {
        const opacity = 1 - this.age / this.lifetime;
        const particleHue = hue + (this.x / width) * 60;

        ctx.beginPath();
        ctx.fillStyle = `hsla(${particleHue}, 100%, 70%, ${opacity * 0.5})`;
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const setup = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      let rect: DOMRect | null = null;
      if (hero) rect = hero.getBoundingClientRect();

      if (rect) {
        width = Math.max(1, Math.round(rect.width));
        height = Math.max(1, Math.round(rect.height));
      } else {
        width = Math.max(1, window.innerWidth);
        height = Math.max(1, window.innerHeight);
      }

      // set canvas pixel size for DPR
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      // CSS size
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      // scale context so drawing uses CSS pixels
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = [];
      for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.fillStyle = `rgba(0, 2, 26, ${config.trailLength})`;
      ctx.fillRect(0, 0, width, height);

      ctx.shadowBlur = config.canvasGlow;
      ctx.shadowColor = `hsla(${hue}, 100%, 50%, 0.5)`;

      particles.forEach((p) => {
        p.update(time);
        p.draw();
      });

      ctx.shadowBlur = 0;

      hue += config.hueSpeed;
      time++;

      animationFrameId = window.requestAnimationFrame(animate);
    };

    setup();
    animate();
    window.addEventListener('resize', setup);

    return () => {
      window.removeEventListener('resize', setup);
      window.cancelAnimationFrame(animationFrameId);
      try {
        if (appendedToHero && hero && hero.contains(canvas)) {
          hero.removeChild(canvas);
        }
      } catch (e) {
        // ignore cleanup errors
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <div className="content sr-only">
        <h1>Cosmic Aurora</h1>
        <p>A serene, generative celestial light show, built with React.</p>
      </div>
      <canvas ref={canvasRef} id="aurora-canvas" className="w-full h-full block" />
    </div>
  );
};

export default AuroraCanvas;
