// src/app/contact/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Anna Paskini, author of the Memory Activities for Men with Dementia series.",
  alternates: { canonical: "https://dadmemorybooks.com/contact" },
};

export default function ContactPage() {
  return (
    <main id="main" className="about-page">
      <section className="about-hero">
        <div className="about-container narrow">
          <div>
            <span className="label">Contact</span>
            <h1>Get in touch</h1>
            <p className="about-lede">
              I read every message and reply within two or three days. Usually
              sooner.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container narrow">
          <div className="about-body">
            <p>
              The best way to reach me is by email:{" "}
              <a href="mailto:anna@dadmemorybooks.com">
                anna@dadmemorybooks.com
              </a>
              . Write in English; if it is easier for you to write in another
              language, that is fine too, I will manage.
            </p>

            <p>
              Some things I am especially glad to hear about:
            </p>

            <ul style={{ paddingLeft: "1.25rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                Stories from a visit where the books helped, or where they did
                not, both are useful.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                Ideas for activities, eras, or themes you would like to see in
                the next volumes.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                Typos, factual mistakes, or anything that feels off in a book
                or on this site.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                Questions about reminiscence therapy, dementia visits, or how
                to use the books with a specific person.
              </li>
            </ul>

            <p>
              You can also find me on{" "}
              <a
                href="https://www.amazon.com/stores/Anna-Paskini/author/B0H2BQNLYT"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amazon as an author
              </a>
              , where the books live and where readers leave reviews. Reviews
              help other caregivers find the books, so if a book worked for
              you, that is the kindest place to say so.
            </p>

            <p className="about-coda">
              Thank you for being here.
              <br />
              <span className="about-signature">— Anna</span>
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
