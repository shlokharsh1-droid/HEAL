"use client";

import { MotionConfig } from "motion/react";

/**
 * Wraps the site in Motion's config so every animation automatically respects
 * the visitor's operating system "reduce motion" setting.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
