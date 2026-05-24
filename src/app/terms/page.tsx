// src/app/terms/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for dadmemorybooks.com — what this site is, what it is not, and how the content may be used.",
  alternates: { canonical: "https://dadmemorybooks.com/terms" },
};

export default function TermsPage() {
  return (
    <main id="main" className="about-page">
      <section className="about-hero">
        <div className="about-container narrow">
          <div>
            <span className="label">Legal</span>
            <h1>Terms of use</h1>
            <p className="about-lede">
              The plain version: read the site, use the free PDF, share it
              with other caregivers, but do not sell it or republish it as
              your own. Read on for the longer version.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container narrow">
          <div className="about-body">
            <p>
              <strong>Last updated: 24 May 2026</strong>
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
              What this site is
            </h2>
            <p>
              Dadmemorybooks.com is an information site about the Memory
              Activities for Men with Dementia book series, written by Anna
              Paskini. It is operated by an individual based in the European
              Union. The site is free to read.
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
              What this site is not
            </h2>
            <p>
              This site is not a medical resource. The content is written for
              adult family caregivers and is grounded in established
              caregiving methodologies such as reminiscence therapy and
              validation, but none of it replaces a conversation with a
              doctor, neurologist, or care team. Always consult a qualified
              professional about medications, behavioural changes, or
              significant decline.
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
              The free visit guide
            </h2>
            <p>
              The 15-Minute Visit Guide is offered as a free PDF. You are
              welcome to:
            </p>
            <ul style={{ paddingLeft: "1.25rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                Download it, save it, and print it for your own use.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                Share the file or a printed copy with other family members,
                friends, or caregivers who might find it useful.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                Pass it on to a care home, support group, or anyone walking
                the same road, free of charge.
              </li>
            </ul>
            <p>
              You may not sell the PDF, charge for access to it, republish it
              on another website, include it in a paid product, or remove the
              author credit. If you would like to feature the guide on your
              own site, in a newsletter, or in a care organisation's
              materials, write to{" "}
              <a href="mailto:anna@dadmemorybooks.com">
                anna@dadmemorybooks.com
              </a>{" "}
              and we will most likely say yes. Just please ask first.
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
              The books
            </h2>
            <p>
              The Memory Activities for Men with Dementia paperback books are
              sold through Amazon. When you click a buy link on this site,
              you leave dadmemorybooks.com and continue on Amazon, under
              their terms of sale and shipping policy. Returns, refunds, and
              shipping are handled by Amazon.
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
              Copyright
            </h2>
            <p>
              All text, illustrations, photographs, design, and book content
              on this site and inside the books are © Anna Paskini, unless
              another source is credited.
            </p>
            <p>
              For personal use: you may quote a paragraph, share a link,
              photograph a page, or post a picture of a book on social media
              with credit. This is welcome.
            </p>
            <p>
              For anything beyond personal use: you may not reproduce the
              books in whole or in part, scan and redistribute the PDF, sell
              the content, or use it to train AI systems on a commercial
              basis without written permission. If you have a use in mind
              that is not strictly personal, please write and ask.
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
              External links
            </h2>
            <p>
              This site links to external pages, such as the Alzheimer's
              Association, Amazon, and an Amazon author page. Those sites
              have their own terms and policies. This site is not responsible
              for the content of external pages.
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
              Disclaimer of warranty
            </h2>
            <p>
              The site and the free guide are provided "as is," without any
              warranty. Reasonable care has been taken to make the content
              accurate and useful, but no guarantee is made that it will
              apply to every reader, every parent, or every stage of
              dementia. The author is not liable for any outcome of acting on
              the information.
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
              Governing law
            </h2>
            <p>
              These terms are governed by the laws of the European Union
              member state in which the author is resident. Any dispute will
              be resolved under that jurisdiction. Visitors from the EU also
              retain rights granted to them by GDPR and other EU consumer
              protection regulations.
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
              Changes
            </h2>
            <p>
              If these terms change, the date at the top will be updated.
              Continued use of the site after a change means you accept the
              new version.
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
              Contact
            </h2>
            <p>
              Questions about these terms: write to{" "}
              <a href="mailto:anna@dadmemorybooks.com">
                anna@dadmemorybooks.com
              </a>
              .
            </p>

            <p style={{ marginTop: "3rem" }}>
              <Link href="/">← Back to home</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}