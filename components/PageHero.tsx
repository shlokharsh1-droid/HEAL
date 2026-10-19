import DrawnPulse from "@/components/DrawnPulse";

/**
 * Opening block for inner pages: a heartbeat line that draws itself in, a
 * plain serif title, an introduction, and optional actions.
 */
export default function PageHero({
  title,
  intro,
  children,
}: {
  title: string;
  intro: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20">
        <DrawnPulse className="h-8 w-40 text-fern/70" />
        <h1 className="display mt-6 max-w-5xl text-[3.2rem] text-ink sm:text-[4.6rem] lg:text-[5.6rem]">
          {title}
        </h1>
        <div className="mt-8 max-w-2xl text-lg leading-relaxed text-faint sm:text-[1.2rem]">
          {intro}
        </div>
        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}
