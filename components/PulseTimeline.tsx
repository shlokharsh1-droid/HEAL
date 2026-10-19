"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type Phase = { label: string; title: string; body: string };

// Builds a flat line with one heartbeat spike centered on each phase column.
function tracePath(count: number) {
  const width = 1000;
  const mid = 60;
  let d = `M0 ${mid}`;
  for (let i = 0; i < count; i++) {
    const x = (width / count) * (i + 0.5);
    d += ` L${x - 34} ${mid} L${x - 24} ${mid - 10} L${x - 16} ${mid} L${x - 8} ${mid}`;
    d += ` L${x} ${mid - 48} L${x + 9} ${mid + 30} L${x + 17} ${mid}`;
    d += ` L${x + 30} ${mid} L${x + 42} ${mid - 14} L${x + 56} ${mid}`;
  }
  return `${d} L${width} ${mid}`;
}

/**
 * Phases of the chapter year laid along a heartbeat trace. On wide screens the
 * trace draws itself as the visitor scrolls through the section; on narrow
 * screens the phases stack along a vertical rule.
 */
export default function PulseTimeline({ phases }: { phases: Phase[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 55%"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref}>
      <svg
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
        aria-hidden
        className="hidden h-28 w-full text-fern lg:block"
      >
        <path
          d={tracePath(phases.length)}
          stroke="currentColor"
          strokeOpacity="0.15"
          strokeWidth="2"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <motion.path
          d={tracePath(phases.length)}
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength }}
        />
      </svg>

      <ol
        className="grid gap-10 border-l border-line pl-6 lg:mt-4 lg:grid-cols-[repeat(var(--cols),minmax(0,1fr))] lg:gap-8 lg:border-l-0 lg:pl-0"
        style={{ "--cols": phases.length } as React.CSSProperties}
      >
        {phases.map((phase, i) => (
          <li key={phase.title} className="relative">
            <span
              aria-hidden
              className="absolute -left-[1.83rem] top-1.5 h-3 w-3 rounded-full border-2 border-paper bg-fern lg:hidden"
            />
            <p className="label text-fern">
              {String(i + 1).padStart(2, "0")} · {phase.label}
            </p>
            <h3 className="mt-3 font-serif text-[1.65rem] leading-tight text-ink">
              {phase.title}
            </h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-faint">
              {phase.body}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
