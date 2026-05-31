"use client";

import { useEffect, useRef } from "react";

/** Subtle purple network background — matches samy_features_v2.html */
export function FeaturesBgCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const g = canvas.getContext("2d");
    if (!g) return;
    const gfx = g as CanvasRenderingContext2D;
    const el = canvas;

    let W = 0;
    let H = 0;
    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < 14; i++) {
      nodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      });
    }

    function resize() {
      W = el.width = window.innerWidth;
      H = el.height = window.innerHeight;
    }
    resize();

    let raf = 0;
    function draw() {
      gfx.clearRect(0, 0, W, H);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 200) {
            gfx.strokeStyle = `rgba(127,119,221,${0.1 * (1 - d / 200)})`;
            gfx.lineWidth = 0.5;
            gfx.beginPath();
            gfx.moveTo(nodes[i].x, nodes[i].y);
            gfx.lineTo(nodes[j].x, nodes[j].y);
            gfx.stroke();
          }
        }
        gfx.beginPath();
        gfx.arc(nodes[i].x, nodes[i].y, 1.5, 0, Math.PI * 2);
        gfx.fillStyle = "rgba(127,119,221,0.3)";
        gfx.fill();
        nodes[i].x += nodes[i].vx;
        nodes[i].y += nodes[i].vy;
        if (nodes[i].x < 0 || nodes[i].x > W) nodes[i].vx *= -1;
        if (nodes[i].y < 0 || nodes[i].y > H) nodes[i].vy *= -1;
      }
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

  return <canvas id="feat-bg-canvas" ref={ref} aria-hidden />;
}
