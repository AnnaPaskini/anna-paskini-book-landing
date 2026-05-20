import Image from "next/image";
import EmailForm from "../shared/EmailForm";

export default function HeroBlock() {
  return (
    <section className="hero" aria-labelledby="hero-h1">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-eyebrow">
            A free PDF for adult-child caregivers
          </div>
          <h1 id="hero-h1">
            What to do during a dementia visit - a free 15-minute playbook
          </h1>
          <p className="hero-subhead">
            For adult children caring for a parent with dementia from a distance.
          </p>

          <EmailForm
            formId="hero-email"
            label="Get the free 15-Minute Visit Playbook"
            ctaText="Send me the playbook →"
            microcopy="One PDF, delivered in 60 seconds. No spam. No regular newsletter - just the playbook."
          />
        </div>

        <div className="hero-right">
          <Image
            src="/images/Flower_blue.png"
            alt=""
            aria-hidden="true"
            width={600}
            height={1200}
            className="hero-flower"
            priority
          />
          <div
            className="mockup"
            role="img"
            aria-label="The 15-Minute Visit Playbook - book mockup"
          >
            <div className="mockup-label">The Playbook</div>
            <div className="mockup-title">
              The 15-Minute<br />Visit Playbook
              <em>A short guide for adult-child caregivers</em>
            </div>
            <div className="mockup-foot">Anna Paskini · 2026</div>
          </div>

          <EmailForm
            formId="hero-email-m"
            label="Get the free 15-Minute Visit Playbook"
            ctaText="Send me the playbook →"
            microcopy="One PDF, delivered in 60 seconds. No spam. No regular newsletter - just the playbook."
          />
        </div>
      </div>
    </section>
  );
}
