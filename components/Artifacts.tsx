import { Check, Clock, FileText } from "lucide-react";

/*
 * Illustrations of the kind of work each focus area produces. They are drawn
 * in HTML rather than shown as photos, and every one is marked as an example
 * so visitors do not read them as claims about specific HEAL projects.
 */

const shadow = "shadow-[0_28px_50px_-28px_rgba(16,36,26,0.45)]";

export function AppArtifact() {
  const doses = [
    { name: "Morning dose", time: "8:00 AM", state: "taken" },
    { name: "Midday dose", time: "12:30 PM", state: "due" },
    { name: "Evening dose", time: "7:00 PM", state: "later" },
  ] as const;
  return (
    <div
      className={`w-[15.5rem] rounded-[2.2rem] border border-ink/10 bg-ink p-2 ${shadow}`}
    >
      <div className="overflow-hidden rounded-[1.8rem] bg-paper">
        <div className="flex items-center justify-between px-5 pt-3 text-[0.62rem] font-medium text-ink/70">
          <span>9:41</span>
          <span className="h-4 w-16 rounded-full bg-ink" />
          <span>100%</span>
        </div>
        <div className="px-5 pb-5 pt-4">
          <p className="label text-[0.6rem] text-faint">Tuesday</p>
          <p className="mt-1 font-serif text-[1.7rem] leading-none text-ink">
            Today&rsquo;s doses
          </p>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-sage">
            <div className="h-full w-1/3 rounded-full bg-fern" />
          </div>
          <ul className="mt-4 space-y-2">
            {doses.map((dose) => (
              <li
                key={dose.name}
                className="flex items-center justify-between rounded-xl border border-line bg-white px-3 py-2.5"
              >
                <div>
                  <p className="text-[0.78rem] font-medium text-ink">{dose.name}</p>
                  <p className="text-[0.66rem] text-faint">{dose.time}</p>
                </div>
                {dose.state === "taken" && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-fern text-white">
                    <Check size={13} aria-hidden />
                  </span>
                )}
                {dose.state === "due" && (
                  <span className="rounded-full bg-leaf px-2 py-0.5 text-[0.6rem] font-medium text-forest">
                    Due soon
                  </span>
                )}
                {dose.state === "later" && (
                  <Clock size={15} aria-hidden className="text-faint" />
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-full bg-forest py-2.5 text-center text-[0.72rem] font-medium text-white">
            Mark midday dose as taken
          </div>
        </div>
      </div>
    </div>
  );
}

export function PaperArtifact() {
  return (
    <div className={`w-[17rem] rotate-[1.5deg] rounded-md bg-white p-6 ${shadow}`}>
      <div className="flex items-center justify-between">
        <p className="label text-[0.58rem] text-faint">Manuscript · Draft 3</p>
        <FileText size={14} aria-hidden className="text-faint" />
      </div>
      <p className="mt-4 font-serif text-[1.2rem] leading-snug text-ink">
        Sleep duration and perceived stress among high school students: a
        cross-sectional survey
      </p>
      <p className="mt-2 text-[0.66rem] text-faint">Chapter research team</p>
      <p className="label mt-5 text-[0.56rem] text-ink">Abstract</p>
      <div className="mt-2 space-y-1.5" aria-hidden>
        {[100, 96, 99, 88, 94, 62].map((w, i) => (
          <div key={i} className="h-1.5 rounded-full bg-ink/10" style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {["Adolescent health", "Sleep", "Survey"].map((k) => (
          <span key={k} className="rounded-full bg-sage px-2 py-0.5 text-[0.6rem] text-forest">
            {k}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-2 border-t border-line pt-4">
        <span className="h-2 w-2 rounded-full bg-fern" />
        <p className="text-[0.68rem] font-medium text-ink">Submitted for review</p>
      </div>
    </div>
  );
}

export function CompetitionArtifact() {
  const parts = ["Project abstract", "Prototype demonstration", "Judging presentation"];
  return (
    <div className={`w-[17rem] -rotate-[1.5deg] rounded-2xl border border-line bg-white ${shadow}`}>
      <div className="rounded-t-2xl bg-forest px-5 py-4 text-on-night">
        <p className="label text-[0.58rem] text-on-night-faint">Competition entry</p>
        <p className="mt-1.5 font-serif text-[1.2rem] leading-snug">
          Measuring hand tremor with a phone&rsquo;s motion sensor
        </p>
      </div>
      <div className="px-5 py-4">
        <div className="flex justify-between text-[0.66rem]">
          <span className="text-faint">Category</span>
          <span className="font-medium text-ink">Health and medicine</span>
        </div>
        <div className="mt-2 flex justify-between text-[0.66rem]">
          <span className="text-faint">Team</span>
          <span className="font-medium text-ink">3 members</span>
        </div>
        <ul className="mt-4 space-y-2 border-t border-line pt-4">
          {parts.map((part) => (
            <li key={part} className="flex items-center gap-2 text-[0.72rem] text-ink">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-leaf text-forest">
                <Check size={10} aria-hidden />
              </span>
              {part}
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-lg bg-sage px-3 py-2 text-center text-[0.68rem] font-medium text-forest">
          Entry submitted · awaiting judging
        </div>
      </div>
    </div>
  );
}

export function ProgramArtifact() {
  const sessions = [
    { label: "Reading a nutrition label", done: true },
    { label: "Understanding a prescription", done: true },
    { label: "Finding low-cost care nearby", done: true },
    { label: "Questions to ask a doctor", done: false },
  ];
  return (
    <div className={`w-[17rem] rotate-[1deg] rounded-2xl border border-line bg-paper p-5 ${shadow}`}>
      <p className="label text-[0.58rem] text-faint">Community program</p>
      <p className="mt-1.5 font-serif text-[1.25rem] leading-snug text-ink">
        Health literacy workshops
      </p>
      <p className="mt-1 text-[0.66rem] text-faint">With a partner public library</p>
      <ol className="mt-4 space-y-2">
        {sessions.map((s, i) => (
          <li
            key={s.label}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-[0.7rem] ${
              s.done ? "bg-white text-ink" : "border border-dashed border-line-strong text-faint"
            }`}
          >
            <span className="font-mono text-[0.6rem] text-fern">0{i + 1}</span>
            <span className="flex-1">{s.label}</span>
            {s.done && <Check size={12} aria-hidden className="text-fern" />}
          </li>
        ))}
      </ol>
      <p className="mt-4 text-[0.66rem] text-faint">3 of 4 sessions held</p>
    </div>
  );
}

/** The four artifacts in a consistent order, keyed by focus area. */
export const artifacts = {
  technology: AppArtifact,
  research: PaperArtifact,
  competition: CompetitionArtifact,
  community: ProgramArtifact,
};

/** A soft stage the artifact sits on, with a small "Example" tag. */
export function ArtifactStage({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`grain group relative flex items-center justify-center overflow-hidden rounded-[1.75rem] bg-sage px-6 py-12 ${className}`}
    >
      <span className="label absolute left-5 top-5 rounded-full bg-paper/80 px-2.5 py-1 text-[0.6rem] text-faint">
        Example
      </span>
      <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
        {children}
      </div>
    </div>
  );
}

export function LedgerArtifact() {
  const rows = [
    { item: "Sensor kit for a technology team", tag: "Materials", amount: "−$64.20" },
    { item: "State science fair registration", tag: "Competition", amount: "−$45.00" },
    { item: "Micro-grant to a new chapter", tag: "Grant", amount: "−$150.00" },
    { item: "Workshop handouts", tag: "Printing", amount: "−$18.50" },
    { item: "Donation", tag: "Income", amount: "+$250.00" },
  ];
  return (
    <div className={`w-[min(21rem,calc(100vw-6.5rem))] rounded-2xl border border-line bg-white ${shadow}`}>
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <div>
          <p className="label text-[0.58rem] text-faint">Transactions</p>
          <p className="mt-1 font-serif text-[1.3rem] leading-none text-ink">
            Chapter account
          </p>
        </div>
        <span className="rounded-full bg-sage px-2.5 py-1 text-[0.62rem] font-medium text-forest">
          Every entry recorded
        </span>
      </div>
      <ul className="divide-y divide-line">
        {rows.map((r) => (
          <li key={r.item} className="flex items-center justify-between gap-3 px-5 py-3">
            <div className="min-w-0">
              <p className="truncate text-[0.74rem] font-medium text-ink">{r.item}</p>
              <p className="label mt-0.5 text-[0.54rem] text-faint">{r.tag}</p>
            </div>
            <p
              className={`font-mono text-[0.74rem] ${
                r.amount.startsWith("+") ? "text-fern" : "text-ink"
              }`}
            >
              {r.amount}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
