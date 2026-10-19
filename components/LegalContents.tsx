import type { ReactNode } from "react";

/**
 * "On this page" jump list shown at the top of a legal document. Rendered as a
 * labelled nav landmark so keyboard and screen reader users can skip directly
 * to a section instead of reading the whole document in order.
 */
export default function LegalContents({
  sections,
}: {
  sections: { id: string; title: string }[];
}): ReactNode {
  return (
    <nav
      aria-labelledby="contents-heading"
      className="mt-10 rounded-[1.5rem] border border-line bg-white p-7"
    >
      <h2
        id="contents-heading"
        className="label text-faint"
      >
        On this page
      </h2>
      <ol className="mt-4 grid gap-2 sm:grid-cols-2">
        {sections.map((section, i) => (
          <li key={section.id} className="text-sm leading-relaxed">
            <a
              href={`#${section.id}`}
              className="text-forest underline underline-offset-2 hover:text-forest-dark"
            >
              <span className="text-faint">{i + 1}.</span> {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
