
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Overview", path: "/" },
  { label: "How it works", path: "/how-it-works" },
  { label: "Features", path: "/features" },
  { label: "Architecture", path: "/architecture" },
  { label: "Documentation", path: "/docs" },
  { label: "FAQ", path: "/faq" },
];

export default function SiteLayout({ children }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="page-shell">
      <header className="page-topbar">
        <Link className="wordmark" to="/">
          <span className="brand-mark"><span /></span>
          <span>Stock<span className="wordmark-light">Sentry</span></span>
        </Link>

        <nav className="page-nav">
          {links.slice(0, 4).map((link) => (
            <NavLink key={link.path} to={link.path}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/docs">Resources</NavLink>
        </nav>

        <Link className="nav-cta" to="/app">
          Enter Dashboard <ArrowUpRight size={13} />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {menuOpen && (
          <nav className="page-mobile-nav">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/app" onClick={() => setMenuOpen(false)}>
              Launch App
            </Link>
          </nav>
        )}
      </header>

      <main className="page-content">{children}</main>

      <footer className="footer page-footer">
        <div className="footer-top">
          <Link className="wordmark footer-brand" to="/">
            <span className="brand-mark"><span /></span>
            <span>Stock<span className="wordmark-light">Sentry</span></span>
          </Link>
          <span className="footer-tagline">
            Intelligence you can inspect.
          </span>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {links.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.label}
            </Link>
          ))}
          <Link className="footer-launch" to="/app">
            Launch App <ArrowUpRight size={13} />
          </Link>
        </nav>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} StockSentry. All rights reserved.</span>
          <span>Built on Base · Autonomous equity intelligence</span>
        </div>
      </footer>
    </div>
  );
}
