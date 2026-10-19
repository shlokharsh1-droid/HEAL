"use client";

import { useEffect, useRef } from "react";

/**
 * One heartbeat, modeled as a sum of Gaussian bumps for the P wave, the QRS
 * complex, and the T wave. `u` runs from 0 to 1 across a single beat.
 */
function ecg(u: number) {
  const g = (mu: number, sigma: number, a: number) =>
    a * Math.exp(-((u - mu) ** 2) / (2 * sigma * sigma));
  return (
    g(0.18, 0.025, 0.11) + // P wave
    g(0.355, 0.009, -0.12) + // Q
    g(0.385, 0.01, 1) + // R spike
    g(0.415, 0.011, -0.28) + // S
    g(0.62, 0.045, 0.24) // T wave
  );
}

const R_PHASE = 0.385;
const BEAT_SECONDS = 1.1;
const DOT_SPACING = 26;
const RIPPLE_SPEED = 340;
const RIPPLE_LIFE = 1.8;

type Ripple = { x: number; y: number; born: number };

/**
 * A patient-monitor style trace that sweeps across the canvas. Each R spike
 * sends a ripple through a field of dots behind the trace. The animation stops
 * while the canvas is off screen or the tab is hidden, and visitors who prefer
 * reduced motion see a single still frame.
 */
export default function PulseMonitor({
  className = "",
  centerRatio = 0.58,
  ampRatio = 0.34,
  maxAmp = 150,
}: {
  className?: string;
  /** Vertical position of the baseline, as a fraction of the canvas height. */
  centerRatio?: number;
  /** Height of the R spike, as a fraction of the canvas height. */
  ampRatio?: number;
  /** Upper limit on the spike height in pixels, so tall screens stay calm. */
  maxAmp?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let elapsed = 2.4; // start mid-sweep so the first frame already has a trace
    let last = 0;
    let frame = 0;
    let running = false;
    let onScreen = true;
    let prevPhase = 0;
    const ripples: Ripple[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!running) draw();
    };

    const draw = () => {
      if (!width || !height) return;
      const speed = Math.max(170, width * 0.2);
      const sweep = width / speed;
      const center = height * centerRatio;
      const amp = Math.min(height * ampRatio, maxAmp);
      const head = (elapsed * speed) % width;
      const gap = 46;

      ctx.clearRect(0, 0, width, height);

      // Dot field, brightened where a ripple ring is passing through.
      for (let y = DOT_SPACING / 2; y < height; y += DOT_SPACING) {
        for (let x = DOT_SPACING / 2; x < width; x += DOT_SPACING) {
          let boost = 0;
          for (const r of ripples) {
            const age = elapsed - r.born;
            const radius = age * RIPPLE_SPEED;
            const d = Math.hypot(x - r.x, y - r.y);
            const ring = Math.exp(-((d - radius) ** 2) / (2 * 20 * 20));
            boost = Math.max(boost, ring * (1 - age / RIPPLE_LIFE));
          }
          ctx.fillStyle = `rgba(55, 117, 82, ${0.16 + 0.6 * boost})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.15 + 1.4 * boost, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // The trace. Each column shows the signal recorded when the sweep head
      // last passed it, fading with age, with a blank gap just ahead of the head.
      const value = (x: number) => {
        const age = (((head - x) % width) + width) % width / speed;
        const t = elapsed - age;
        return {
          y: center - amp * ecg((((t / BEAT_SECONDS) % 1) + 1) % 1),
          age,
        };
      };

      const step = 2;
      const chunk = 10;
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      for (let start = 0; start < width; start += chunk) {
        const ahead = (((start - head) % width) + width) % width;
        if (ahead > 0 && ahead < gap) continue;
        const { age } = value(start);
        const alpha = Math.max(0.08, 1 - 0.85 * (age / sweep));
        ctx.strokeStyle = `rgba(31, 77, 58, ${alpha})`;
        ctx.beginPath();
        for (let x = start; x <= Math.min(start + chunk, width); x += step) {
          const aheadX = (((x - head) % width) + width) % width;
          if (aheadX > 0 && aheadX < gap) break;
          const { y } = value(x);
          if (x === start) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Glowing sweep head.
      const headY = value(head).y;
      const glow = ctx.createRadialGradient(head, headY, 0, head, headY, 22);
      glow.addColorStop(0, "rgba(55, 117, 82, 0.45)");
      glow.addColorStop(1, "rgba(55, 117, 82, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(head, headY, 22, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#1f4d3a";
      ctx.beginPath();
      ctx.arc(head, headY, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Emit a ripple whenever the head crosses an R spike.
      if (!reduceMotion) {
        const phase = (elapsed / BEAT_SECONDS) % 1;
        if (prevPhase < R_PHASE && phase >= R_PHASE) {
          ripples.push({ x: head, y: center - amp, born: elapsed });
        }
        prevPhase = phase;
        while (ripples.length && elapsed - ripples[0].born > RIPPLE_LIFE) {
          ripples.shift();
        }
      }
    };

    const tick = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      elapsed += dt;
      draw();
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || reduceMotion || !onScreen || document.hidden) return;
      running = true;
      last = 0;
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) start();
      else stop();
    });
    visibilityObserver.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    resize();
    start();

    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [centerRatio, ampRatio, maxAmp]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`block h-full w-full ${className}`}
    />
  );
}
