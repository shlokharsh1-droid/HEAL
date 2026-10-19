"use client";

import { motion } from "motion/react";

const tags = {
  div: motion.div,
  li: motion.li,
};

/**
 * Fades and lifts its children into place the first time they scroll into
 * view. Visitors who prefer reduced motion get the fade without the movement.
 * Pass as="li" when the wrapper sits directly inside a list.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof typeof tags;
}) {
  const Tag = tags[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Tag>
  );
}
