import Image from "next/image";

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
        <div className="footer-clean-content">
          <p className="footer-copyright">© 2026 Anna Paskini</p>
          
          <nav className="footer-nav" aria-label="Footer">
            <a href="/about">About</a>
            <a href="https://www.amazon.com/author/annapaskini" target="_blank" rel="noopener noreferrer">Books on Amazon</a>
            <a href="#privacy">Privacy</a>
          </nav>

          <div className="footer-contact">
            <p>
              Questions? Write to{" "}
              <a href="mailto:anna.paskini@outlook.com" className="footer-email">
                anna.paskini@outlook.com
              </a>
            </p>
            <p className="footer-returns">
              Returns and shipping are handled by Amazon under their standard policy.
            </p>
          </div>

          <p className="footer-love">Made with love for real visits ❤️</p>
        </div>
      </div>
    </footer>
  );
}
