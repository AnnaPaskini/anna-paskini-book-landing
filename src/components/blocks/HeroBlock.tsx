import Image from "next/image";

export default function HeroBlock() {
  return (
    <section className="hero" aria-labelledby="hero-h1">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-eyebrow">
            A free PDF for adult-child caregivers
          </div>
          <h1 id="hero-h1">
            What to do during a dementia visit - a free 15-minute guide
          </h1>
          <p className="hero-subhead">
            A small guide for the daughter, the son, the grandchild, or the friend who is about to walk into the room. Questions that work when “how are you?” doesn’t.
          </p>
        </div>

        <div className="hero-right">
          <a
            href="/playbook"
            className="mockup-link"
            aria-label="Read the 15-Minute Visit Guide for free online"
          >
            <div
              className="mockup"
              role="img"
              aria-label="The 15-Minute Visit Guide - book mockup"
            >
              <div className="mockup-label">The Guide</div>
              <div className="mockup-title">
                The 15-Minute<br />Visit
                <em>A short guide for adult-child caregivers</em>
              </div>
              <div className="mockup-foot">Anna Paskini · 2026</div>
            </div>
          </a>

          <div className="hero-buttons">
            <a href="/playbook" className="btn btn-primary">
              Read free online now
            </a>
            <a
              href="/pdfs/The_15_Minute_Visit_Guide.pdf"
              download="The_15_Minute_Visit_Guide.pdf"
              className="btn btn-secondary"
            >
              Download PDF
            </a>
          </div>
        </div>

        <Image
          src="/images/Flower_blue.png"
          alt=""
          aria-hidden="true"
          width={600}
          height={1200}
          className="hero-flower"
          priority
        />
      </div>
    </section>
  );
}

