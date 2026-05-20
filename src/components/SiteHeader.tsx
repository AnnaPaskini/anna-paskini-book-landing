"use client";

import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}`}
      id="site-header"
    >
      <div className="container">
        <a className="brand" href="#top">
          Anna Paskini <span>· books</span>
        </a>
        <nav className="site-nav" aria-label="Primary">
          <a href="#books">Books</a>
          <a href="#blog" className="nav-secondary">Blog</a>
          <a href="#about" className="nav-secondary">About</a>
          <a
            href="#hero-email"
            className="btn btn-secondary"
            style={{ padding: "0.5rem 1rem", fontSize: "var(--text-small)" }}
          >
            Get the playbook
          </a>
        </nav>
      </div>
    </header>
  );
}
