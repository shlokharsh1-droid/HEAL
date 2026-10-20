/**
 * A titled section of a legal document. The heading is linked to its section
 * with aria-labelledby so screen readers announce the section by name, and the
 * id gives the on-page contents list a target to jump to.
 */
export default function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="scroll-mt-24">
      <h2
        id={id}
        className="font-display font-medium text-[1.61rem] leading-tight text-ink"
      >
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/85">
        {children}
      </div>
    </section>
  );
}
