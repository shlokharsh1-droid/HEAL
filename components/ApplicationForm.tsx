"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { applicationForm, contactEmail, orgName } from "@/lib/config";

/*
 * Answer choices. If you connect a Google Form, its options must match these
 * strings exactly, character for character, or Google will drop the answer.
 */
export const GRADES = ["9th grade", "10th grade", "11th grade", "12th grade"];
export const ADVISOR_OPTIONS = [
  "Yes, a teacher has agreed",
  "I have someone in mind but have not asked yet",
  "Not yet",
];
export const AREAS = ["Technology", "Research", "Competition", "Community health"];

type Values = {
  name: string;
  email: string;
  school: string;
  location: string;
  grade: string;
  advisor: string;
  motivation: string;
  areas: string[];
  referral: string;
  website: string; // honeypot, hidden from people
};

type Field = Exclude<keyof Values, "website">;

const empty: Values = {
  name: "",
  email: "",
  school: "",
  location: "",
  grade: "",
  advisor: "",
  motivation: "",
  areas: [],
  referral: "",
  website: "",
};

// Order used to move focus to the first problem after a failed submit.
const fieldOrder: Field[] = [
  "name",
  "email",
  "school",
  "location",
  "grade",
  "advisor",
  "motivation",
];

function validate(v: Values) {
  const errors: Partial<Record<Field, string>> = {};
  if (!v.name.trim()) errors.name = "Please enter your name.";
  if (!v.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!v.school.trim()) errors.school = "Please enter the name of your school.";
  if (!v.location.trim()) errors.location = "Please enter your city and state or country.";
  if (!v.grade) errors.grade = "Please choose your grade.";
  if (!v.advisor) errors.advisor = "Please choose an option.";
  if (!v.motivation.trim())
    errors.motivation = "Please tell us a little about why you want to start a chapter.";
  return errors;
}

const inputClass =
  "mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-[0.98rem] text-ink placeholder:text-faint/70 transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-fern/30";

export default function ApplicationForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "emailed" | "failed">(
    "idle"
  );

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key as Field]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const toggleArea = (area: string) =>
    set(
      "areas",
      values.areas.includes(area)
        ? values.areas.filter((a) => a !== area)
        : [...values.areas, area]
    );

  const describedBy = (field: Field, hint?: boolean) =>
    [hint ? `${field}-hint` : "", errors[field] ? `${field}-error` : ""]
      .filter(Boolean)
      .join(" ") || undefined;

  const border = (field: Field) =>
    errors[field] ? "border-alert" : "border-line-strong";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = fieldOrder.find((f) => found[f]);
    if (first) {
      document.getElementById(first)?.focus();
      return;
    }

    // Bots fill every field, including this hidden one. Pretend it worked.
    if (values.website) {
      setStatus("sent");
      return;
    }

    const { googleFormAction, entries } = applicationForm;

    if (!googleFormAction) {
      // No Google Form connected yet: hand the answers to the email app.
      const body = [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `School: ${values.school}`,
        `Location: ${values.location}`,
        `Grade: ${values.grade}`,
        `Faculty advisor: ${values.advisor}`,
        `Focus areas of interest: ${values.areas.join(", ") || "Not specified"}`,
        `How they heard about ${orgName}: ${values.referral || "Not specified"}`,
        "",
        "Why they want to start a chapter:",
        values.motivation,
      ].join("\n");
      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
        `Chapter application: ${values.school}`
      )}&body=${encodeURIComponent(body)}`;
      setStatus("emailed");
      return;
    }

    setStatus("sending");
    const data = new URLSearchParams();
    const add = (entry: string, value: string) => entry && value && data.append(entry, value);
    add(entries.name, values.name.trim());
    add(entries.email, values.email.trim());
    add(entries.school, values.school.trim());
    add(entries.location, values.location.trim());
    add(entries.grade, values.grade);
    add(entries.advisor, values.advisor);
    add(entries.motivation, values.motivation.trim());
    values.areas.forEach((area) => add(entries.areas, area));
    add(entries.referral, values.referral.trim());

    try {
      // Google Forms does not allow cross-site reads, so the response is
      // opaque. A request that completes without a network error is treated
      // as delivered.
      await fetch(googleFormAction, { method: "POST", mode: "no-cors", body: data });
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent" || status === "emailed") {
    const firstName = values.name.trim().split(/\s+/)[0];
    return (
      <div role="status" className="rounded-[1.75rem] bg-sage p-8 sm:p-12">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white">
          <Check size={22} aria-hidden />
        </span>
        <h2 className="display mt-6 text-[2.2rem] text-ink sm:text-[2.8rem]">
          {status === "sent" ? "Application received" : "Almost done"}
        </h2>
        <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-ink/80">
          {status === "sent" ? (
            <>
              Thank you{firstName ? `, ${firstName}` : ""}. We read every
              application ourselves and will reply to{" "}
              <span className="font-medium text-ink">{values.email.trim()}</span>{" "}
              with next steps.
            </>
          ) : (
            <>
              Your email app should have opened with your application filled in.
              Press send to submit it. If nothing opened, email your answers to{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="break-all font-medium text-forest underline underline-offset-4"
              >
                {contactEmail}
              </a>
              .
            </>
          )}
        </p>
        <Link
          href="/start-a-chapter"
          className="group mt-8 inline-flex items-center gap-2 font-medium text-forest"
        >
          Back to Start a Chapter
          <ArrowRight
            size={18}
            aria-hidden
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <p className="text-sm text-faint">
        Fields marked <span aria-hidden>*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Full name <span aria-hidden>*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={describedBy("name")}
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            className={`${inputClass} ${border("name")}`}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-alert">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email <span aria-hidden>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={describedBy("email", true)}
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            className={`${inputClass} ${border("email")}`}
          />
          <p id="email-hint" className="mt-2 text-sm text-faint">
            We will reply to this address.
          </p>
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-alert">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="school" className="text-sm font-medium text-ink">
            School <span aria-hidden>*</span>
          </label>
          <input
            id="school"
            name="school"
            autoComplete="organization"
            required
            aria-invalid={!!errors.school}
            aria-describedby={describedBy("school")}
            value={values.school}
            onChange={(e) => set("school", e.target.value)}
            className={`${inputClass} ${border("school")}`}
          />
          {errors.school && (
            <p id="school-error" className="mt-2 text-sm text-alert">{errors.school}</p>
          )}
        </div>
        <div>
          <label htmlFor="location" className="text-sm font-medium text-ink">
            City and state or country <span aria-hidden>*</span>
          </label>
          <input
            id="location"
            name="location"
            autoComplete="address-level2"
            placeholder="San Jose, California"
            required
            aria-invalid={!!errors.location}
            aria-describedby={describedBy("location")}
            value={values.location}
            onChange={(e) => set("location", e.target.value)}
            className={`${inputClass} ${border("location")}`}
          />
          {errors.location && (
            <p id="location-error" className="mt-2 text-sm text-alert">{errors.location}</p>
          )}
        </div>
      </div>

      <div className="sm:max-w-[calc(50%-0.75rem)]">
        <label htmlFor="grade" className="text-sm font-medium text-ink">
          Grade <span aria-hidden>*</span>
        </label>
        <select
          id="grade"
          name="grade"
          required
          aria-invalid={!!errors.grade}
          aria-describedby={describedBy("grade")}
          value={values.grade}
          onChange={(e) => set("grade", e.target.value)}
          className={`${inputClass} ${border("grade")} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none' stroke='%23565f58' stroke-width='1.6'%3E%3Cpath d='M1 1.5l5 5 5-5'/%3E%3C/svg%3E")] bg-[length:12px] bg-[position:right_1rem_center] bg-no-repeat pr-10`}
        >
          <option value="">Choose your grade</option>
          {GRADES.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        {errors.grade && (
          <p id="grade-error" className="mt-2 text-sm text-alert">{errors.grade}</p>
        )}
      </div>

      <fieldset aria-describedby={errors.advisor ? "advisor-error" : undefined}>
        <legend className="text-sm font-medium text-ink">
          Do you have a faculty advisor? <span aria-hidden>*</span>
        </legend>
        <p className="mt-1 text-sm text-faint">
          Most schools require one. It is fine if you have not found one yet.
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {ADVISOR_OPTIONS.map((option, i) => (
            <label
              key={option}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border bg-white p-4 text-[0.95rem] leading-snug text-ink transition-colors hover:border-forest has-[:checked]:border-forest has-[:checked]:bg-sage has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-fern/40 ${
                errors.advisor ? "border-alert" : "border-line-strong"
              }`}
            >
              <input
                type="radio"
                name="advisor"
                id={i === 0 ? "advisor" : undefined}
                value={option}
                checked={values.advisor === option}
                onChange={() => set("advisor", option)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-forest"
              />
              {option}
            </label>
          ))}
        </div>
        {errors.advisor && (
          <p id="advisor-error" className="mt-2 text-sm text-alert">{errors.advisor}</p>
        )}
      </fieldset>

      <div>
        <label htmlFor="motivation" className="text-sm font-medium text-ink">
          Why do you want to start a {orgName} chapter at your school?{" "}
          <span aria-hidden>*</span>
        </label>
        <p id="motivation-hint" className="mt-1 text-sm text-faint">
          A few sentences is plenty. Tell us what interests you about health and
          what you would like your chapter to work on.
        </p>
        <textarea
          id="motivation"
          name="motivation"
          rows={6}
          required
          aria-invalid={!!errors.motivation}
          aria-describedby={describedBy("motivation", true)}
          value={values.motivation}
          onChange={(e) => set("motivation", e.target.value)}
          className={`${inputClass} ${border("motivation")} resize-y leading-relaxed`}
        />
        {errors.motivation && (
          <p id="motivation-error" className="mt-2 text-sm text-alert">
            {errors.motivation}
          </p>
        )}
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-ink">
          Which focus areas interest you most?
        </legend>
        <p className="mt-1 text-sm text-faint">Optional. Choose any that apply.</p>
        <div className="mt-3 flex flex-wrap gap-2.5">
          {AREAS.map((area) => (
            <label
              key={area}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-line-strong bg-white px-4 py-2.5 text-[0.95rem] text-ink transition-colors hover:border-forest has-[:checked]:border-forest has-[:checked]:bg-sage has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-fern/40"
            >
              <input
                type="checkbox"
                name="areas"
                value={area}
                checked={values.areas.includes(area)}
                onChange={() => toggleArea(area)}
                className="h-4 w-4 accent-forest"
              />
              {area}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="referral" className="text-sm font-medium text-ink">
          How did you hear about {orgName}?
        </label>
        <p className="mt-1 text-sm text-faint">Optional.</p>
        <input
          id="referral"
          name="referral"
          value={values.referral}
          onChange={(e) => set("referral", e.target.value)}
          className={`${inputClass} border-line-strong`}
        />
      </div>

      {/* Hidden from people and assistive technology; bots tend to fill it in. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => set("website", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-sm leading-relaxed text-faint">
          By submitting, you agree that we may contact you by email about your
          application, as described in our{" "}
          <Link href="/privacy" className="text-forest underline underline-offset-4">
            privacy policy
          </Link>
          .
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 font-medium text-white transition-colors hover:bg-forest-dark disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Submitting" : "Submit application"}
          <ArrowUpRight
            size={18}
            aria-hidden
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </button>
      </div>

      <p aria-live="polite" className="text-sm text-alert">
        {status === "failed" &&
          `Your application could not be sent. Please check your connection and try again, or email us at ${contactEmail}.`}
      </p>
    </form>
  );
}
