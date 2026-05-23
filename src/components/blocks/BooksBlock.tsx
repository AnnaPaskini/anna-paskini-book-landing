import Image from "next/image";
import { VOL1_URL, VOL2_URL, amazonLink } from "@/lib/amazon";

export default function BooksBlock() {
  return (
    <section className="books" id="books" aria-labelledby="books-h2">
      <header className="section-heading">
        <span className="label">The book series</span>
        <h2 id="books-h2">Ready for activities, not guide?</h2>
        <p className="section-subhead">Memory activity books for fathers with dementia</p>
        <p>These books prompt conversations about things from his life that you can connect over.</p>
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
          <dl className="book-facts">
            <div><dt>Price</dt><dd>$12.99</dd></div>
            <div><dt>Pages</dt><dd>98</dd></div>
            <div><dt>Format</dt><dd>Paperback</dd></div>
            <div><dt>ISBN</dt><dd>979-8258955838</dd></div>
            <div><dt>Published</dt><dd>May 2026</dd></div>
          </dl>
          <a
            href={amazonLink(VOL1_URL, "landing-block-3")}
            className="btn btn-green"
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
          <dl className="book-facts">
            <div><dt>Price</dt><dd>$12.99</dd></div>
            <div><dt>Pages</dt><dd>98</dd></div>
            <div><dt>Format</dt><dd>Paperback</dd></div>
            <div><dt>ISBN</dt><dd>979-8196864506</dd></div>
            <div><dt>Published</dt><dd>May 2026</dd></div>
          </dl>
          <a
            href={amazonLink(VOL2_URL, "landing-block-3")}
            className="btn btn-green"
            target="_blank"
            rel="noopener"
          >
            Check it out on Amazon →
          </a>
        </article>
      </div>

      <p style={{
        textAlign: "center",
        fontSize: "1.0625rem",
        lineHeight: "1.6",
        color: "var(--color-text-strong)",
        fontFamily: "var(--font-sans)",
        maxWidth: "680px",
        margin: "3rem auto 0",
        paddingInline: "var(--space-page-x)",
        paddingBottom: 0
      }}>
        Each book is designed in a warm, retro style, featuring <strong>5 chapters</strong>, each with <strong>18 pages</strong> of memory-evoking activities, including <strong>Trivia</strong>, <strong>Mazes</strong>, <strong>Match the Meaning</strong>, <strong>Word Search</strong>, and <strong>Spot the Difference</strong>, complete with practical <strong>caregiver tips</strong> on every page to help guide the conversation.
      </p>
    </section>
  );
}
