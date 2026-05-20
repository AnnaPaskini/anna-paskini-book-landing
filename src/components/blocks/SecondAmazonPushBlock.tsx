import { VOL1_URL, VOL2_URL, amazonLink } from "@/lib/amazon";

export default function SecondAmazonPushBlock() {
  return (
    <section className="amazon-push" aria-labelledby="push-h2">
      <div className="amazon-push-container">
        <h2 id="push-h2">Ready for activities, not just structure?</h2>
        <p>
          The Playbook gives you a framework for a visit. The books give you
          200+ ready-to-use activities organized by theme - designed
          specifically for men, set in the 1970s-1980s, dignified and never
          childish.
        </p>
        <div className="amazon-push-ctas">
          <a
            href={amazonLink(VOL1_URL, "landing-block-4")}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener"
          >
            See Vol. 1 on Amazon →
          </a>
          <a
            href={amazonLink(VOL2_URL, "landing-block-4")}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener"
          >
            See Vol. 2 on Amazon →
          </a>
        </div>
      </div>
    </section>
  );
}
