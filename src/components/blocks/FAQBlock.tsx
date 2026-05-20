"use client";

import { useRef } from "react";

type FAQ = { q: string; a: React.ReactNode; aText: string };

const faqs: FAQ[] = [
  {
    q: "Is the PDF really free, with no upsell trick?",
    a: (
      <p>
        <strong>Yes - one PDF, delivered to your email in 60 seconds.</strong>{" "}
        No credit card, no auto-enrolled paid newsletter, no upsell sequence.
        You can unsubscribe from the email list with one click after receiving
        the playbook.
      </p>
    ),
    aText:
      "Yes - one PDF, delivered to your email in 60 seconds. No credit card, no auto-enrolled paid newsletter, no upsell sequence. You can unsubscribe from the email list with one click after receiving the playbook.",
  },
  {
    q: "Who is this for?",
    a: (
      <p>
        <strong>
          Adult children, usually 35-55, caring for a parent with early-to-mid
          stage dementia - most often from a distance.
        </strong>{" "}
        The playbook works for any adult-child caregiver, but it’s written for
        the person who flies in on weekends or holidays and doesn’t quite know
        how to fill the time.
      </p>
    ),
    aText:
      "Adult children, usually 35-55, caring for a parent with early-to-mid stage dementia - most often from a distance. The playbook works for any adult-child caregiver, but it’s written for the person who flies in on weekends or holidays and doesn’t quite know how to fill the time.",
  },
  {
    q: "Is this medical advice?",
    a: (
      <p>
        <strong>
          No. This is practical, non-clinical guidance grounded in established
          caregiving methodology.
        </strong>{" "}
        It references Validation Therapy and Positive Approach to Care, but it
        doesn’t replace a conversation with your parent’s physician or care
        team. Always consult them about medications, behavioural changes, or
        significant decline.
      </p>
    ),
    aText:
      "No. This is practical, non-clinical guidance grounded in established caregiving methodology. It references Validation Therapy and Positive Approach to Care, but it doesn’t replace a conversation with your parent’s physician or care team. Always consult them about medications, behavioural changes, or significant decline.",
  },
  {
    q: "Will the books work for my mother, or only fathers?",
    a: (
      <p>
        <strong>
          The series is written specifically for men - the activities,
          references, and imagery are calibrated to a man’s life experience in
          the 1970s-80s.
        </strong>{" "}
        Many caregivers tell us the methodology adapts well to women too, but
        if you’re caring for a mother and want activities calibrated to her
        life, this isn’t the right book yet. A women’s series is in progress.
      </p>
    ),
    aText:
      "The series is written specifically for men - the activities, references, and imagery are calibrated to a man’s life experience in the 1970s-80s. Many caregivers tell us the methodology adapts well to women too, but if you’re caring for a mother and want activities calibrated to her life, this isn’t the right book yet. A women’s series is in progress.",
  },
  {
    q: "Where can I buy the books?",
    a: (
      <p>
        <strong>
          Both volumes are on Amazon as paperbacks, $12.99 each.
        </strong>{" "}
        Amazon ships to most countries through their international fulfilment
        network. If Amazon doesn’t ship to your country, write to us and we’ll
        arrange a direct PDF copy.
      </p>
    ),
    aText:
      "Both volumes are on Amazon as paperbacks, $12.99 each. Amazon ships to most countries through their international fulfilment network. If Amazon doesn’t ship to your country, write to us and we’ll arrange a direct PDF copy.",
  },
  {
    q: "I subscribed but never got the PDF. What now?",
    a: (
      <p>
        <strong>
          Check your spam or promotions folder first - the email comes from
          hello@annapaskini.com.
        </strong>{" "}
        If it’s not there within 5 minutes, you may need to confirm your
        subscription via the double opt-in email we send first. If you still
        can’t find it, email us directly and we’ll send the PDF manually.
      </p>
    ),
    aText:
      "Check your spam or promotions folder first - the email comes from hello@annapaskini.com. If it’s not there within 5 minutes, you may need to confirm your subscription via the double opt-in email we send first. If you still can’t find it, email us directly and we’ll send the PDF manually.",
  },
];

export default function FAQBlock() {
  const listRef = useRef<HTMLDivElement>(null);

  function handleToggle(e: React.SyntheticEvent<HTMLDetailsElement>) {
    const opened = e.currentTarget;
    if (!opened.open) return;
    const items =
      listRef.current?.querySelectorAll<HTMLDetailsElement>("details.faq-item");
    items?.forEach((d) => {
      if (d !== opened) d.open = false;
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.aText },
    })),
  };

  return (
    <section className="faq" aria-labelledby="faq-h2">
      <header className="section-heading">
        <span className="label">Common questions</span>
        <h2 id="faq-h2">Answers, honestly</h2>
      </header>

      <div className="faq-list" ref={listRef}>
        {faqs.map((f, i) => (
          <details key={i} className="faq-item" onToggle={handleToggle}>
            <summary>
              {f.q}
              <span className="faq-icon" aria-hidden="true" />
            </summary>
            <div className="faq-answer">{f.a}</div>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
