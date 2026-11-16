
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  ["Overview", "/"],
  ["How it works", "/how-it-works"],
  ["Features", "/features"],
  ["Architecture", "/architecture"],
  ["Documentation", "/docs"],
  ["FAQ", "/faq"],
];

function Home() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <main>
      <section className="hero-shell" id="overview">
        <div className="ambient ambient-cyan" />
        <div className="ambient ambient-blue" />

        <div className="site-frame">
          <header className="topbar">
            <Link className="wordmark" to="/" aria-label="StockSentry home">
              <span className="brand-mark"><span /></span>
              <span>Stock<span className="wordmark-light">Sentry</span></span>
            </Link>

            <nav className="desktop-nav" aria-label="Main navigation">
              {navItems.slice(0, 4).map(([label, path]) => (
                <Link key={label} to={path}>{label}</Link>
              ))}
              <Link to="/docs">
                Resources <span className="tiny-chevron">⌄</span>
              </Link>
            </nav>

            <Link className="nav-cta" to="/app">
              Enter Dashboard <ArrowUpRight size={13} strokeWidth={1.8} />
            </Link>

            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </header>

          {menuOpen && (
            <nav className="mobile-nav">
              {navItems.map(([label, path]) => (
                <Link key={label} to={path} onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              ))}
              <Link to="/app" onClick={() => setMenuOpen(false)}>
                Enter Dashboard ↗
              </Link>
            </nav>
          )}

          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              AUTONOMOUS EQUITY INTELLIGENCE
            </div>

            <h1>
              Financial clarity,<br />
              built for <span className="gradient-word">what's next.</span>
            </h1>

            <p className="hero-copy">
              Intelligent research. Disciplined portfolios. Verifiable decisions.
              <br className="desktop-break" />
              One autonomous financial intelligence system.
            </p>

            <div className="hero-actions">
              <Link className="primary-button" to="/app">
                Enter the Dashboard <ArrowUpRight size={15} />
              </Link>
              <Link className="text-button" to="/how-it-works">
                Explore the platform <span>↗</span>
              </Link>
            </div>

            <div className="trust-line">
              <div className="trust-orbit"><i /><i /><i /><i /></div>
              <span>Research with evidence. Decisions with accountability.</span>
            </div>
          </div>

          <div className="orb-scene" aria-hidden="true">
            <div className="orb-halo" />
            <div className="orb">
              <div className="orb-inner-glow" />
              <div className="orb-grid" />
            </div>
            <div className="orb-ring ring-one" />
            <div className="orb-ring ring-two" />
            <div className="orb-ring ring-three" />
            <div className="light-point light-one" />
            <div className="light-point light-two" />
            <div className="light-point light-three" />
            <div className="light-point light-four" />
            <div className="horizon-line" />
          </div>

          <div className="signal-strip">
            <span>RESEARCH</span><b />
            <span>QUANTITATIVE ANALYSIS</span><b />
            <span>PORTFOLIO INTELLIGENCE</span><b />
            <span>ONCHAIN VERIFICATION</span>
          </div>

          <div className="metrics-band">
            <div className="metric">
              <span className="metric-label">AGENT NETWORK</span>
              <strong>Multi-agent</strong>
              <small>Specialized intelligence</small>
            </div>
            <div className="metric">
              <span className="metric-label">DECISION PROCESS</span>
              <strong>Evidence-led</strong>
              <small>Structured, traceable outputs</small>
            </div>
            <div className="metric">
              <span className="metric-label">RISK OVERSIGHT</span>
              <strong>Policy-first</strong>
              <small>Human approval where required</small>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section" id="how-it-works">
        <div className="section-kicker">A MORE DISCIPLINED WAY TO BUILD</div>
        <h2>
          From market signals<br />
          to <span className="gradient-word">verifiable decisions.</span>
        </h2>
        <p>
          StockSentry coordinates specialist agents across research,
          quantitative analysis, portfolio construction and risk oversight —
          with a clear record of every decision.
        </p>
        <div className="workflow">
          {["Research", "Analyze", "Allocate", "Protect", "Verify"].map((step, index) => (
            <div className="workflow-step" key={step}>
              <span className="step-number">0{index + 1}</span>
              <span>{step}</span>
              {index !== 4 && <span className="step-arrow">→</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="quiet-section" id="features">
        <div>
          <span className="section-kicker">CAPABILITIES</span>
          <h2>Intelligence with<br />a clear chain of reasoning.</h2>
        </div>
        <p>
          Specialized agents work together. Deterministic systems calculate
          the numbers. Risk policies constrain actions. Audit records make
          decisions inspectable.
        </p>
      </section>

      <section className="architecture-section" id="architecture">
        <span className="section-kicker">UNDER THE SURFACE</span>
        <h2>Designed for accountable autonomy.</h2>
        <div className="architecture-flow">
          <span>Research Agent</span><i>+</i>
          <span>Quant Agent</span><i>+</i>
          <span>Portfolio Agent</span><i>→</i>
          <span className="risk-node">Risk Guardian</span><i>→</i>
          <span>Decision Registry</span>
        </div>
      </section>

      <section className="docs-section" id="documentation">
        <span className="section-kicker">BUILD WITH STOCKSENTRY</span>
        <h2>
          Clear documentation.<br />
          <span className="gradient-word">No black boxes.</span>
        </h2>
        <p>
          Explore setup instructions, architecture notes, API guides
          and integration references.
        </p>
        <Link className="docs-link" to="/docs">
          Explore documentation <ArrowUpRight size={15} />
        </Link>
      </section>

      <section className="faq-section" id="faq">
        <span className="section-kicker">QUESTIONS</span>
        <h2>Frequently asked.</h2>
        <details>
          <summary>Does StockSentry execute real trades?</summary>
          <p>
            The initial experience focuses on research and simulated portfolio
            execution. Any future live execution requires supported integrations,
            explicit authorization and applicable eligibility checks.
          </p>
        </details>
        <details>
          <summary>How are agent decisions checked?</summary>
          <p>
            Structured agent outputs are validated by deterministic application
            logic and risk policies. Decision fingerprints can be recorded
            and verified on Base.
          </p>
        </details>
        <details>
          <summary>Does StockSentry guarantee investment returns?</summary>
          <p>
            No. StockSentry is an intelligence and experimentation platform,
            not a guarantee of performance or financial advice.
          </p>
        </details>
      </section>

      <footer className="footer" id="footer">
        <div className="footer-top">
          <Link className="wordmark footer-brand" to="/">
            <span className="brand-mark"><span /></span>
            <span>Stock<span className="wordmark-light">Sentry</span></span>
          </Link>
          <span className="footer-tagline">Intelligence you can inspect.</span>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {navItems.map(([label, path]) => (
            <Link key={label} to={path}>{label}</Link>
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
    </main>
  );
}

export default Home;
