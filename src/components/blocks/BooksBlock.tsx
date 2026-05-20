import Image from "next/image";
import { VOL1_URL, VOL2_URL, amazonLink } from "@/lib/amazon";

export default function BooksBlock() {
  return (
    <section className="books" id="books" aria-labelledby="books-h2">
      <header className="section-heading">
        <span className="label">The book series</span>
        <h2 id="books-h2">
          The activities the playbook references come from this series.
        </h2>
      </header>

      <div className="books-grid">
        <article className="book-card">
          <div className="book-cover v1 has-image is-3d">
            <Image
              src="/images/vol-1-3d.png"
              alt="Engines & Outdoors - Vol. 1 cover"
              width={1585}
              height={1780}
              sizes="(min-width: 768px) 480px, 90vw"
              className="cover-image"
              loading="eager"
            />
          </div>
          <h3>Vol. 1 - Engines &amp; Outdoors</h3>
          <p className="book-description">
            Cars, tools, fishing, the outdoors. 98 pages of activities, set in
            the 1970s-80s.
          </p>
          <a
            href={amazonLink(VOL1_URL, "landing-block-3")}
            className="btn btn-primary"
            target="_blank"
            rel="noopener"
          >
            See on Amazon →
          </a>
        </article>

        <article className="book-card">
          <div className="book-cover v1 has-image is-3d">
            <Image
              src="/images/vol-2-3d.png"
              alt="Memories & Heritage - Vol. 2 cover"
              width={1549}
              height={2130}
              sizes="(min-width: 768px) 480px, 90vw"
              className="cover-image"
              loading="eager"
            />
          </div>
          <h3>Vol. 2 - Memories &amp; Heritage</h3>
          <p className="book-description">
            Music, family, service, the good old days. 98 pages of activities.
          </p>
          <a
            href={amazonLink(VOL2_URL, "landing-block-3")}
            className="btn btn-primary"
            target="_blank"
            rel="noopener"
          >
            See on Amazon →
          </a>
        </article>
      </div>
    </section>
  );
}
