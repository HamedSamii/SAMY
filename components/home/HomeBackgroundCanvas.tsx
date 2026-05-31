"use client";

import { useEffect, useRef } from "react";

/** Particle + node background from samy_home.html */
export function HomeBackgroundCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const canvasCtx = canvas.getContext("2d");
    if (!canvasCtx) return;
    const gfx = canvasCtx as CanvasRenderingContext2D;
    const el = canvas;

    let W = 0;
    let H = 0;
    const COLORS = [
      "rgba(127,119,221,",
      "rgba(216,90,48,",
      "rgba(29,158,117,",
      "rgba(239,159,39,",
    ];

    function resize() {
      W = el.width = window.innerWidth;
      H = el.height = window.innerHeight;
    }
    resize();

    type Particle = {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      color: string;
      opacity: number;
      life: number;
      age: number;
    };

    function mkParticle(): Particle {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: Math.random() * 0.5 + 0.1,
        life: Math.random() * 200 + 100,
        age: 0,
      };
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 80; i++) particles.push(mkParticle());

    const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    for (let i = 0; i < 18; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: 2,
      });
    }

    let raf = 0;
    function draw() {
      gfx.clearRect(0, 0, W, H);

      gfx.lineWidth = 0.3;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 180) {
            gfx.strokeStyle = `rgba(127,119,221,${0.15 * (1 - d / 180)})`;
            gfx.beginPath();
            gfx.moveTo(nodes[i].x, nodes[i].y);
            gfx.lineTo(nodes[j].x, nodes[j].y);
            gfx.stroke();
          }
        }
        const n = nodes[i];
        gfx.beginPath();
        gfx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        gfx.fillStyle = "rgba(127,119,221,0.4)";
        gfx.fill();
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }

      particles.forEach((p, i) => {
        p.age++;
        p.x += p.vx;
        p.y += p.vy;
        const fade = p.age > p.life * 0.7 ? 1 - (p.age - p.life * 0.7) / (p.life * 0.3) : 1;
        gfx.beginPath();
        gfx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        gfx.fillStyle = p.color + p.opacity * fade + ")";
        gfx.fill();
        if (p.age >= p.life || p.x < 0 || p.x > W || p.y < 0 || p.y > H) {
          particles[i] = mkParticle();
        }
      });

      raf = requestAnimationFrame(draw);
    }
    draw();

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} className="hp-bg-canvas" aria-hidden />;
}
