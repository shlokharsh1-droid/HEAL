/**
 * HEAL mark: the same heartbeat trace used in the favicon, set in a round seal
 * beside a serif wordmark. Pass tone="light" on dark backgrounds.
 */
export function PulseMark({
  size = 34,
  tone = "dark",
}: {
  size?: number;
  tone?: "dark" | "light";
}) {
  const fill = tone === "dark" ? "#1f4d3a" : "#e6efe2";
  const stroke = tone === "dark" ? "#faf8f2" : "#10241a";
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
      <circle cx="32" cy="32" r="32" fill={fill} />
      <path
        d="M10 34h10l5-14 8 26 6-18 4 6h11"
        fill="none"
        stroke={stroke}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-center gap-2.5">
      <PulseMark tone={tone} />
      <span
        className={`font-serif text-[1.7rem] leading-none tracking-[0.04em] ${
          tone === "dark" ? "text-ink" : "text-on-night"
        }`}
      >
        HEAL
      </span>
    </span>
  );
}
