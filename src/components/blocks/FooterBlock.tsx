import Image from "next/image";
import EmailForm from "../shared/EmailForm";

export default function FooterBlock() {
  return (
    <footer className="site-footer">
      <Image
        src="/images/Flower_blue.png"
        alt=""
        aria-hidden="true"
        width={600}
        height={1200}
        className="footer-flower"
      />
      <div className="footer-container">
        <div className="footer-nudge">
          <p>Still thinking? Get the free playbook anyway.</p>
          <EmailForm
            formId="footer-email"
            label="Your email"
            ctaText="Send →"
            microcopy="One PDF. No newsletters. No subcribtion."
          />
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <nav className="footer-nav" aria-label="Footer">
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
            <a
              href="https://www.amazon.com/author/annapaskini"
              target="_blank"
              rel="noopener"
            >
              Books on Amazon
            </a>
            <a href="#privacy">Privacy</a>
          </nav>
          <p className="footer-copyright">© 2026 Anna Paskini</p>
        </div>
      </div>
    </footer>
  );
}
