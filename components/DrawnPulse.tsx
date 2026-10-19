"use client";

import { motion } from "motion/react";

/**
 * A single heartbeat line that draws itself in when the page loads. Used as
 * the quiet signature above inner page headings. The stroke scales with the
 * SVG on purpose: Motion's line drawing measures length in the SVG's own
 * units, so a non-scaling stroke would collapse the animation to a dot.
 */
export default function DrawnPulse({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 80"
      fill="none"
      aria-hidden
      className={className}
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0 46 H150 L166 46 L176 36 L186 46 L198 46 L210 8 L224 72 L236 46 L262 46 L280 32 L300 46 H400"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
      />
    </svg>
  );
}
