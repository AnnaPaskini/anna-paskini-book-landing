// src/app/privacy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for dadmemorybooks.com — what data is collected, how it is used, and your rights.",
  alternates: { canonical: "https://dadmemorybooks.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <main id="main" className="about-page">
      <section className="about-hero">
        <div className="about-container narrow">
          <div>
            <span className="label">Legal</span>
            <h1>Privacy policy</h1>
            <p className="about-lede">
              The short version: this site does not collect, sell, store, or trade your
              personal data. Read on for the long version.
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
              Who runs this site
            </h2>
            <p>
              This website (dadmemorybooks.com) is operated by Anna Paskini, an
              independent author based in the EU. The site exists
              to share information about the Memory Activities for Men with
              Dementia book series and a free visit guide for caregivers.
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
              What data is collected
            </h2>
            <p>
              This is a small, mostly static website. It does not sell anything
              directly. The data collected is limited to:
            </p>
            <ul style={{ paddingLeft: "1.25rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Analytics:</strong> anonymous visit statistics through
                Google Analytics and Cloudflare Analytics, including approximate
                country, device type, pages viewed, and time spent. These tools
                do not identify you personally.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Email correspondence:</strong> if you write to
                anna@dadmemorybooks.com, your email address and message are
                kept in the mailbox of the author. They are used only to reply
                to you and are not added to any mailing list.
              </li>
            </ul>
            <p>
              The site does not use tracking pixels for advertising. It does
              not run remarketing. It does not sell any data to third parties.
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
              Cookies
            </h2>
            <p>
              Google Analytics may set cookies to count returning visitors.
              These cookies do not identify you. You can disable them in your
              browser settings or with a browser extension at any time.
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
              When you buy a book
            </h2>
            <p>
              The books in this series are sold through Amazon, not through
              this site. When you click a buy link, you leave dadmemorybooks.com
              and continue on Amazon under their privacy policy and terms. This
              site has no access to your purchase, your payment information, or
              your Amazon account.
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
              Your rights under GDPR
            </h2>
            <p>
              Because this site is operated from the EU and may be
              read by visitors from the European Union, GDPR applies. You have
              the right to ask what data is held about you, to request
              correction or deletion, and to lodge a complaint with the data
              protection authority in your country of residence.
              In practice the only personal data this site may hold about you is
              an email you sent voluntarily, and you can ask for it to be deleted
              at any time.
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
              Children
            </h2>
            <p>
              The content of this site is written for adult caregivers and is
              not directed at children. The site does not knowingly collect
              data from anyone under 16.
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
              Changes to this policy
            </h2>
            <p>
              If this policy changes, the date at the top will be updated.
              Significant changes will be announced on the homepage.
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
              Contact
            </h2>
            <p>
              Questions about privacy: write to{" "}
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
