import type { Metadata } from "next";
import Link from "next/link";
import LegalSection from "@/components/LegalSection";
import LegalContents from "@/components/LegalContents";
import {
  orgName,
  contactEmail,
  legalLastUpdated,
  governingState,
} from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing use of the HEAL website and participation in the HEAL chapter program, including our health information disclaimer and accessibility commitment.",
  openGraph: {
    title: `Terms of Service | ${orgName}`,
    description:
      "Terms governing use of the HEAL website and participation in the HEAL chapter program.",
  },
};

const sections = [
  { id: "acceptance", title: "Acceptance of these terms" },
  { id: "who-we-are", title: "Who we are" },
  { id: "who-may-use", title: "Who may use this website" },
  { id: "no-medical-advice", title: "No medical advice" },
  { id: "chapters", title: "Chapter participation" },
  { id: "student-work", title: "Student work and ownership" },
  { id: "donations", title: "Donations" },
  { id: "our-content", title: "Our content and trademarks" },
  { id: "acceptable-use", title: "Acceptable use" },
  { id: "third-party", title: "Links to other websites" },
  { id: "accessibility", title: "Accessibility" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "liability", title: "Limitation of liability" },
  { id: "changes", title: "Changes to these terms" },
  { id: "governing-law", title: "Governing law" },
  { id: "contact", title: "How to contact us" },
];

export default function TermsPage() {
  return (
    <>
      {/* Introduction */}
      <section className="mx-auto max-w-3xl px-5 pb-12 pt-16 sm:px-8 sm:pt-24">
        <p className="label text-fern">
          Legal
        </p>
        <h1 className="display mt-5 text-[2.55rem] text-ink sm:text-[3.74rem]">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-faint">
          Last updated {legalLastUpdated}
        </p>

        <div className="mt-8 rounded-[1.5rem] bg-sage p-7 sm:p-9">
          <h2 className="font-display font-medium text-[1.44rem] leading-tight text-ink">
            The short version
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/85">
            This website is informational. Nothing on it, and nothing produced
            by a student project, is medical advice. Chapters are run by
            students at their own schools under their own supervision, and
            joining the program requires our approval. Use the site honestly
            and we will do the same.
          </p>
        </div>

        <LegalContents sections={sections} />
      </section>

      {/* Body */}
      <section className="mx-auto max-w-3xl space-y-12 px-5 pb-20 sm:px-8">
        <LegalSection id="acceptance" title="Acceptance of these terms">
          <p>
            By using this website you agree to these terms. If you do not agree
            with them, please do not use the site. If you participate in the{" "}
            {orgName} chapter program, these terms apply to that
            participation in addition to any separate chapter agreement you
            sign with us.
          </p>
        </LegalSection>

        <LegalSection id="who-we-are" title="Who we are">
          <p>
            {orgName} is a student-led health innovation nonprofit operating as
            a fiscally sponsored project of The Hack Foundation, doing business
            as Hack Club, a 501(c)(3) nonprofit organization, EIN 81-2908499.
            References to &ldquo;we&rdquo; and &ldquo;us&rdquo; in these terms
            mean {orgName} acting through that sponsorship.
          </p>
        </LegalSection>

        <LegalSection id="who-may-use" title="Who may use this website">
          <p>
            Anyone may read this website. We expect that many of our readers are
            high school students under the age of 18, and the site is written
            with that audience in mind.
          </p>
          <p>
            If you are under 18 and wish to found a chapter, your school will
            ordinarily require a faculty advisor, and we will ask you to involve
            a parent or guardian in the arrangement before a chapter opens. We
            do not enter into agreements directly with students who cannot form
            a binding agreement under the law of their state.
          </p>
        </LegalSection>

        <LegalSection id="no-medical-advice" title="No medical advice">
          <p>
            This is the most important section on this page. Read it carefully.
          </p>
          <div className="rounded-[1.5rem] bg-sage p-6 sm:p-7">
            <p className="font-medium text-ink">
              Nothing on this website, in any {orgName} program, or in any
              project produced by a {orgName} chapter is medical advice,
              diagnosis, or treatment. Our members are students, not licensed
              healthcare professionals.
            </p>
          </div>
          <p>
            Never disregard professional medical advice, or delay seeking it,
            because of something you read here or encountered through one of our
            programs. Always consult a qualified healthcare provider about a
            medical condition or a decision regarding your health. If you think
            you may have a medical emergency, contact your local emergency
            services immediately.
          </p>
          <p>
            Applications, devices, research findings, educational materials, and
            community programs produced by student teams are learning projects
            and are provided for educational purposes only. They are not
            clinically validated, they are not regulated medical devices, and
            they must not be relied on for any health decision.
          </p>
        </LegalSection>

        <LegalSection id="chapters" title="Chapter participation">
          <p>
            Chapters are approved individually and operate at the discretion of{" "}
            {orgName}. We may decline an application, and we may suspend or end
            a chapter&rsquo;s participation if it stops meeting our expectations
            or acts in a way that harms its members, its school, or the wider
            organization.
          </p>
          <p>
            A chapter operates within its own school, subject to that
            school&rsquo;s rules and supervision. Chapter leads, members, and
            faculty advisors are not employees, agents, or legal representatives
            of {orgName}, and they may not enter into agreements, make financial
            commitments, or make public statements on our behalf without our
            written permission.
          </p>
          <p>
            Each school remains responsible for supervising its own students and
            for the safety of activities held on its premises or under its
            name.
          </p>
        </LegalSection>

        <LegalSection id="student-work" title="Student work and ownership">
          <p>
            Students own the work they create. {orgName} claims no ownership of
            a project produced by a chapter member, including software,
            research, written work, and designs.
          </p>
          <p>
            By participating in our program you grant {orgName} permission to
            display, describe, and publicize your project and your name in our
            materials, including our website, our showcases, our reports to
            funders, and our communications with prospective chapters. You may
            withdraw that permission for future use by writing to us, although
            we cannot recall materials already printed or distributed.
          </p>
          <p>
            Where a project is produced with a mentor, a partner organization,
            or a school&rsquo;s equipment, ownership may also be affected by
            that party&rsquo;s own policies, and we encourage teams to settle
            ownership questions in writing before beginning work.
          </p>
        </LegalSection>

        <LegalSection id="donations" title="Donations">
          <p>
            Donations are received by The Hack Foundation for the benefit of{" "}
            {orgName} and are administered under its policies. Donations are
            tax-deductible to the extent allowed by law. We will provide
            documentation of our fiscal sponsorship on request.
          </p>
          <p>
            Donations are generally not refundable. If you believe a donation
            was made in error, write to us promptly and we will work with our
            fiscal sponsor to review it. We direct funds to the purposes
            described on our support page, and we reserve reasonable discretion
            to allocate them among chapters and programs according to need.
          </p>
        </LegalSection>

        <LegalSection id="our-content" title="Our content and trademarks">
          <p>
            The text, design, and materials on this website belong to {orgName}{" "}
            unless stated otherwise. You may read, quote, and share this site
            for non-commercial purposes with attribution, and prospective
            chapters may reproduce our materials as needed to present the
            program to their school and to their advisors.
          </p>
          <p>
            You may not present yourself as a {orgName} chapter, use our name or
            logo to imply our endorsement, or solicit donations in our name
            without written authorization from us.
          </p>
        </LegalSection>

        <LegalSection id="acceptable-use" title="Acceptable use">
          <p>When using this website or contacting us, you agree not to:</p>
          <ul className="space-y-3">
            {[
              "Misrepresent who you are, what school you attend, or your authority to act for a school or organization.",
              "Attempt to gain unauthorized access to this site, our accounts, or any system connected to them.",
              "Interfere with the operation of the site, including by overwhelming it with automated requests.",
              "Use our contact addresses to send unsolicited commercial messages.",
              "Use the site or our programs for any unlawful purpose, or in a way that harms a student.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fern"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </LegalSection>

        <LegalSection id="third-party" title="Links to other websites">
          <p>
            This site links to organizations we work with, including our
            donation platform and the competitions our members enter. We do not
            control those websites and are not responsible for their content,
            their practices, or their privacy policies. Visiting them is at your
            own discretion and subject to their own terms.
          </p>
        </LegalSection>

        <LegalSection id="accessibility" title="Accessibility">
          <p>
            We intend this website to be usable by everyone, including people
            who browse with a screen reader, navigate by keyboard, or rely on
            magnification. We build against the Web Content Accessibility
            Guidelines version 2.1 at Level AA, which is the standard commonly
            applied to websites in the United States.
          </p>
          <p>
            Accessibility is an ongoing obligation rather than a finished task.
            If any part of this site presents a barrier to you, write to{" "}
            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                "Website accessibility"
              )}`}
              className="font-semibold text-forest underline underline-offset-2 hover:text-forest-dark"
            >
              {contactEmail}
            </a>{" "}
            and tell us what happened and what you were trying to do. We will
            acknowledge your message within five working days, and we will
            provide the information you were seeking in another format while we
            correct the problem.
          </p>
        </LegalSection>

        <LegalSection id="disclaimers" title="Disclaimers">
          <p>
            This website and our programs are provided on an
            &ldquo;as is&rdquo; basis. We work to keep the information here
            accurate and current, but we do not warrant that it is complete,
            accurate, or free of error, and we do not warrant that the site will
            be available without interruption.
          </p>
          <p>
            Descriptions of what a chapter receives, including funding,
            materials, and mentorship, reflect our intent and our capacity at
            the time of writing. They are not guarantees, and support available
            to a given chapter depends on our resources.
          </p>
        </LegalSection>

        <LegalSection id="liability" title="Limitation of liability">
          <p>
            To the fullest extent permitted by law, {orgName}, The Hack
            Foundation, and our directors, volunteers, and mentors are not
            liable for indirect, incidental, or consequential damages arising
            from your use of this website or your participation in our
            programs.
          </p>
          <p>
            Nothing in these terms excludes any liability that cannot lawfully
            be excluded. Some jurisdictions do not allow certain limitations, so
            parts of this section may not apply to you.
          </p>
        </LegalSection>

        <LegalSection id="changes" title="Changes to these terms">
          <p>
            We may revise these terms as the organization grows. When we do, we
            will update the date at the top of this page. Continuing to use the
            site after a change means you accept the revised terms. If a change
            materially affects an operating chapter, we will notify its chapter
            lead directly rather than relying on this page alone.
          </p>
        </LegalSection>

        <LegalSection id="governing-law" title="Governing law">
          <p>
            These terms are governed by the laws of the State of{" "}
            {governingState}, without regard to its conflict of law rules. Any
            dispute arising from them will be brought in the state or federal
            courts located in {governingState}.
          </p>
          <p>
            If any provision of these terms is found unenforceable, the
            remaining provisions stay in effect.
          </p>
        </LegalSection>

        <LegalSection id="contact" title="How to contact us">
          <p>
            Questions about these terms can be sent to{" "}
            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                "Terms of service question"
              )}`}
              className="font-semibold text-forest underline underline-offset-2 hover:text-forest-dark"
            >
              {contactEmail}
            </a>
            . Our{" "}
            <Link
              href="/privacy"
              className="font-semibold text-forest underline underline-offset-2 hover:text-forest-dark"
            >
              privacy policy
            </Link>{" "}
            explains how we handle personal information.
          </p>
        </LegalSection>
      </section>
    </>
  );
}
