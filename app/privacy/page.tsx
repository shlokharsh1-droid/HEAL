import type { Metadata } from "next";
import Link from "next/link";
import LegalSection from "@/components/LegalSection";
import LegalContents from "@/components/LegalContents";
import { orgName, contactEmail, legalLastUpdated } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How HEAL handles personal information. This website sets no cookies, runs no analytics, and collects nothing from visitors automatically.",
  openGraph: {
    title: `Privacy Policy | ${orgName}`,
    description:
      "How HEAL handles personal information, including what this website does and does not collect.",
  },
};

const sections = [
  { id: "who-we-are", title: "Who we are" },
  { id: "what-we-collect", title: "What this website collects" },
  { id: "server-logs", title: "Information recorded by our host" },
  { id: "email", title: "Information you send us by email" },
  { id: "donations", title: "Donations" },
  { id: "providers", title: "Service providers we rely on" },
  { id: "students", title: "Students, minors, and children under 13" },
  { id: "retention", title: "How long we keep information" },
  { id: "your-choices", title: "Your choices and requests" },
  { id: "security", title: "How we protect information" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "How to contact us" },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Introduction */}
      <section className="mx-auto max-w-3xl px-5 pb-12 pt-16 sm:px-8 sm:pt-24">
        <p className="label text-fern">
          Legal
        </p>
        <h1 className="display mt-5 text-[3rem] text-ink sm:text-[4.4rem]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-faint">
          Last updated {legalLastUpdated}
        </p>

        <div className="mt-8 rounded-[1.5rem] bg-sage p-7 sm:p-9">
          <h2 className="font-serif text-[1.7rem] leading-tight text-ink">
            The short version
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/85">
            This website does not use cookies, does not run analytics, and does
            not ask you for any information. There are no forms and no
            accounts. The only personal information {orgName} holds is what you
            choose to send us in an email, and we use it solely to reply to you
            and to operate our chapter program.
          </p>
        </div>

        <LegalContents sections={sections} />
      </section>

      {/* Body */}
      <section className="mx-auto max-w-3xl space-y-12 px-5 pb-20 sm:px-8">
        <LegalSection id="who-we-are" title="Who we are">
          <p>
            {orgName} is a student-led health innovation nonprofit that supports
            high school chapters. We operate as a fiscally sponsored project of
            The Hack Foundation, doing business as Hack Club, a 501(c)(3)
            nonprofit organization. This policy describes how we handle
            personal information in connection with this website and our
            chapter program.
          </p>
          <p>
            This policy applies to this website only. It does not apply to
            other organizations whose websites we link to, including our
            donation platform, each of which operates under its own privacy
            policy.
          </p>
        </LegalSection>

        <LegalSection id="what-we-collect" title="What this website collects">
          <p>
            Nothing is collected from you automatically when you browse this
            site. Specifically, and as of the date above:
          </p>
          <ul className="space-y-3">
            {[
              "We set no cookies of any kind, including no advertising or tracking cookies.",
              "We run no analytics or measurement software, so your visits are not counted, profiled, or attributed to you.",
              "We store nothing in your browser, including no local storage, session storage, or similar technology.",
              "There are no contact forms, no sign-up fields, and no accounts, so there is nothing for you to submit.",
              "Our fonts are served from this website itself rather than from a third-party font service, so viewing a page sends no request to an outside company.",
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
          <p>
            Because we collect no identifiers, we cannot build a profile of you,
            and we have no information to sell. {orgName} does not sell, rent,
            or trade personal information, and never has.
          </p>
        </LegalSection>

        <LegalSection
          id="server-logs"
          title="Information recorded by our host"
        >
          <p>
            This website is hosted by Vercel. Like nearly every web host, Vercel
            records standard technical information when a page is requested,
            which may include your Internet Protocol address, the page
            requested, the time of the request, and your browser type. These
            records exist so that the service can be operated securely and
            reliably, for example to identify attacks and diagnose outages.
          </p>
          <p>
            We do not use these records to identify individual visitors, and we
            do not combine them with any other information. Their retention is
            governed by Vercel&rsquo;s own privacy policy.
          </p>
        </LegalSection>

        <LegalSection id="email" title="Information you send us by email">
          <p>
            Every contact point on this site is an email link. When you write to
            us, we receive whatever you choose to include, which is typically
            your name, your email address, your school, and the content of your
            message.
          </p>
          <p>We use that information only to:</p>
          <ul className="space-y-3">
            {[
              "Reply to your question and continue the conversation with you.",
              "Evaluate and support a chapter application at your school.",
              "Administer an existing chapter, including contact with a faculty advisor.",
              "Arrange and acknowledge a donation or sponsorship.",
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
          <p>
            Our email is hosted by Google, so messages you send are stored on
            Google&rsquo;s systems and handled under its privacy policy in
            addition to ours. We do not add you to a mailing list without asking
            you first, and we do not share your message with anyone outside{" "}
            {orgName} except where this policy says otherwise or where the law
            requires it.
          </p>
        </LegalSection>

        <LegalSection id="donations" title="Donations">
          <p>
            Donations are not processed on this website. Our donation button
            sends you to HCB, the nonprofit financial platform operated by Hack
            Club, where the transaction is handled by The Hack Foundation and
            its payment processor.
          </p>
          <p>
            We never see or store your card number, bank details, or any other
            payment credentials. {orgName} receives only the information the
            platform shares with a sponsored project, which is typically the
            donor name, the amount, and the date, and which we use to
            acknowledge the gift and keep our financial records.
          </p>
        </LegalSection>

        <LegalSection id="providers" title="Service providers we rely on">
          <p>
            We keep our list of outside services deliberately short. As of the
            date above it consists of the following.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">
                Third-party services used by {orgName} and their purpose
              </caption>
              <thead>
                <tr className="border-b border-line-strong text-left">
                  <th scope="col" className="py-3 pr-4 font-semibold text-ink">
                    Service
                  </th>
                  <th scope="col" className="py-3 font-semibold text-ink">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Vercel", "Hosts this website and records standard server logs."],
                  ["Google", "Hosts our email account and stores messages you send us."],
                  [
                    "The Hack Foundation (Hack Club) and HCB",
                    "Our fiscal sponsor, which receives and administers donations.",
                  ],
                ].map(([name, purpose]) => (
                  <tr key={name} className="border-b border-line align-top">
                    <th
                      scope="row"
                      className="py-3 pr-4 text-left font-medium text-ink"
                    >
                      {name}
                    </th>
                    <td className="py-3 text-ink/85">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </LegalSection>

        <LegalSection
          id="students"
          title="Students, minors, and children under 13"
        >
          <p>
            {orgName} works with high school students, so we expect that many of
            the people who contact us are under the age of 18. We ask for no
            more information than is necessary to answer a question or to
            operate a chapter, and we do not ask students for sensitive personal
            information, including health information about themselves.
          </p>
          <p>
            This website is not directed to children under 13, and we do not
            knowingly collect personal information from anyone under 13. If you
            believe a child under 13 has sent us personal information, write to
            us at the address below and we will delete it promptly.
          </p>
          <p>
            A parent or guardian may contact us at any time to ask what
            information we hold about their child and to request that it be
            deleted. We will honor such a request unless we are required to
            keep the information by law.
          </p>
        </LegalSection>

        <LegalSection id="retention" title="How long we keep information">
          <p>
            We keep email correspondence for as long as it is useful to the
            relationship it concerns. Enquiries that do not lead anywhere are
            deleted when they are no longer relevant. Records connected to an
            active chapter are kept while that chapter operates, and donation
            records are kept for as long as our fiscal sponsor requires for
            financial and tax reporting.
          </p>
        </LegalSection>

        <LegalSection id="your-choices" title="Your choices and requests">
          <p>
            You may ask us at any time to tell you what personal information we
            hold about you, to correct it, or to delete it. Write to{" "}
            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                "Privacy request"
              )}`}
              className="font-semibold text-forest underline underline-offset-2 hover:text-forest-dark"
            >
              {contactEmail}
            </a>{" "}
            and we will respond within 30 days.
          </p>
          <p>
            We extend these choices to everyone who contacts us, regardless of
            where you live and regardless of whether a particular privacy law
            applies to an organization of our size. If you are unsatisfied with
            our response, you may raise the matter with the data protection
            authority in your country.
          </p>
        </LegalSection>

        <LegalSection id="security" title="How we protect information">
          <p>
            This website is served over an encrypted connection. Our email and
            documents are held in accounts protected by strong, unique
            passwords and two-factor authentication, and access is limited to
            the {orgName} directors who need it to do their work.
          </p>
          <p>
            No method of transmitting or storing information is completely
            secure, and we cannot guarantee absolute security. We ask that you
            not send us sensitive personal information, including health
            information or government identification numbers, by email.
          </p>
        </LegalSection>

        <LegalSection id="changes" title="Changes to this policy">
          <p>
            We will update this policy when our practices change, for example if
            we add a feature that collects information. When we do, we will
            revise the date at the top of this page. Material changes will be
            noted on this page so that returning visitors can see what changed.
          </p>
        </LegalSection>

        <LegalSection id="contact" title="How to contact us">
          <p>
            Questions about this policy, or about how we handle your
            information, can be sent to{" "}
            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                "Privacy policy question"
              )}`}
              className="font-semibold text-forest underline underline-offset-2 hover:text-forest-dark"
            >
              {contactEmail}
            </a>
            . Our{" "}
            <Link
              href="/terms"
              className="font-semibold text-forest underline underline-offset-2 hover:text-forest-dark"
            >
              terms of service
            </Link>{" "}
            govern your use of this website.
          </p>
        </LegalSection>
      </section>
    </>
  );
}
