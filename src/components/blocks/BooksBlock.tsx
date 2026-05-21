import Image from "next/image";
import { VOL1_URL, VOL2_URL, amazonLink } from "@/lib/amazon";

export default function BooksBlock() {
  return (
    <section className="books" id="books" aria-labelledby="books-h2">
      <header className="section-heading">
        <span className="label">The book series</span>
        <h2 id="books-h2">
          Ready for activities, not just structure?
        </h2>
        <p
          id="books-h3">
          These books prompt conversations about things from his life that you can connect over.
        </p>
      </header>

      <div className="books-grid">
        <article className="book-card">

          <h3>Vol. 1 - Engines &amp; Outdoors</h3>
          <p className="book-description">
            Cars, tools, fishing, the outdoors. 98 pages of activities, set in
            the 1970s-80s.
          </p>
          <div className="book-interior-wrapper" style={{ marginBottom: "2rem", width: "100%", maxWidth: "360px", alignSelf: "center" }}>
            <a
              href={amazonLink(VOL1_URL, "landing-block-3-image")}
              target="_blank"
              rel="noopener"
              className="book-image-anchor"
              style={{ display: "block", width: "100%", height: "100%" }}
            >
              <Image
                src="/images/vol-1-3d-2.png"
                alt="Memory Activities for Men with Dementia book - Volume 1 Engines & Outdoors by Anna Paskini on Amazon"
                width={1278}
                height={1336}
                sizes="(min-width: 768px) 360px, 90vw"
                className="interior-image"
                style={{ width: "100%", height: "auto", aspectRatio: "1278 / 1336", objectFit: "contain", display: "block", transform: "scale(1.1) rotate(5deg)" }}
              />
            </a>
          </div>
          <a
            href={amazonLink(VOL1_URL, "landing-block-3")}
            className="btn btn-primary"
            target="_blank"
            rel="noopener"
          >
            Check it out on Amazon →
          </a>
        </article>

        <article className="book-card">

          <h3>Vol. 2 - Memories &amp; Heritage</h3>
          <p className="book-description">
            Music, family, service, the good old days. 98 pages of activities, set in
            the 1970s-80s.
          </p>
          <div className="book-interior-wrapper" style={{ marginBottom: "2rem", width: "100%", maxWidth: "360px", alignSelf: "center" }}>
            <a
              href={amazonLink(VOL2_URL, "landing-block-3-image")}
              target="_blank"
              rel="noopener"
              className="book-image-anchor"
              style={{ display: "block", width: "100%", height: "100%" }}
            >
              <Image
                src="/images/vol-2-3d-2.png"
                alt="Dementia Activity Book for Elderly Men - Volume 2 Memories & Heritage by Anna Paskini on Amazon"
                width={1278}
                height={1336}
                sizes="(min-width: 768px) 360px, 90vw"
                className="interior-image"
                style={{ width: "100%", height: "auto", aspectRatio: "1278 / 1336", objectFit: "contain", display: "block" }}
              />
            </a>
          </div>
          <a
            href={amazonLink(VOL2_URL, "landing-block-3")}
            className="btn btn-primary"
            target="_blank"
            rel="noopener"
          >
            Check it out on Amazon →
          </a>
        </article>
      </div>
    </section>
  );
}
