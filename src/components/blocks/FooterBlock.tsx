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
            <a
              href="https://www.amazon.com/author/annapaskini"
              target="_blank"
              rel="noopener"
            >
              Books on Amazon
            </a>
            <a href="#privacy">Privacy</a>
          </nav>

          <p className="footer-love">Made with love for real visits ❤️</p>
        </div>
      </div>
    </footer>
  );
}
