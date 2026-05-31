"use client";

import { useEffect, useRef } from "react";

const COLS = ["#7F77DD", "#EF9F27", "#1D9E75", "#D85A30"];
const NAMES = [
  "WhatsApp",
  "n8n",
  "Make.com",
  "CRM",
  "Sheets",
  "GPT-4",
  "Shopify",
  "Slack",
  "Zapier",
  "ElevenLabs",
  "Supabase",
  "HubSpot",
  "API",
  "Notion",
];

const N = 16;

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  col: string;
  lbl: string;
  ph: number;
  ps: number;
};

type Edge = { a: number; b: number; col: string };

type Packet = {
  a: Node;
  b: Node;
  t: number;
  spd: number;
  col: string;
};

function hex2rgba(h: string, a: number) {
  const r = parseInt(h.slice(1, 3), 16);
  const g = parseInt(h.slice(3, 5), 16);
  const b = parseInt(h.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

function createNodes(width: number, height: number): Node[] {
  return Array.from({ length: N }, (_, i) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    r: 3.5 + Math.random() * 3.5,
    col: COLS[i % COLS.length],
    lbl: NAMES[i % NAMES.length],
    ph: Math.random() * Math.PI * 2,
    ps: 0.016 + Math.random() * 0.016,
  }));
}

function buildEdges(): Edge[] {
  const edges: Edge[] = [];
  for (let i = 0; i < N; i++) {
    edges.push({ a: i, b: (i + 1) % N, col: COLS[i % COLS.length] });
    if (i % 3 === 0) edges.push({ a: i, b: (i + 5) % N, col: COLS[(i + 2) % COLS.length] });
    if (i % 5 === 0) edges.push({ a: i, b: (i + 9) % N, col: COLS[(i + 1) % COLS.length] });
  }
  return edges;
}

export function AutomationHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let raf = 0;
    let nodes: Node[] = [];
    let edges = buildEdges();
    const packets: Packet[] = [];

    const resize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (w === 0 || h === 0) return;
      canvas.width = w;
      canvas.height = h;
      nodes = createNodes(w, h);
      edges = buildEdges();
    };

    const spawnPacket = () => {
      const e = edges[Math.floor(Math.random() * edges.length)];
      if (!e) return;
      const a = nodes[e.a];
      const b = nodes[e.b];
      if (!a || !b) return;
      if (Math.hypot(a.x - b.x, a.y - b.y) < 360) {
        packets.push({ a, b, t: 0, spd: 0.005 + Math.random() * 0.005, col: e.col });
      }
    };

    const draw = () => {
      if (!canvas.width || !canvas.height) {
        raf = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        n.ph += n.ps;
      });

      edges.forEach((e) => {
        const a = nodes[e.a];
        const b = nodes[e.b];
        if (!a || !b) return;
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d > 340) return;
        const al = Math.max(0, (1 - d / 340) * 0.16);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = hex2rgba(e.col, al);
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      if (frame % 48 === 0) spawnPacket();

      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.t += p.spd;
        if (p.t >= 1) {
          packets.splice(i, 1);
          continue;
        }
        const px = p.a.x + (p.b.x - p.a.x) * p.t;
        const py = p.a.y + (p.b.y - p.a.y) * p.t;
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = hex2rgba(p.col, 0.18);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.col;
        ctx.fill();
      }

      nodes.forEach((n) => {
        const pulse = 1 + Math.sin(n.ph) * 0.28;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * pulse * 3, 0, Math.PI * 2);
        ctx.fillStyle = hex2rgba(n.col, 0.05);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.col;
        ctx.fill();
        ctx.font = '9px var(--font-body)';
        ctx.fillStyle = hex2rgba("#9896B0", 0.48);
        ctx.textAlign = "center";
        ctx.fillText(n.lbl, n.x, n.y + n.r * 2.4 + 7);
      });

      frame++;
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden />;
}
