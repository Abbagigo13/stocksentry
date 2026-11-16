
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SiteLayout from "../components/SiteLayout.jsx";

const features = [
  {
    number: "01",
    title: "Multi-agent research",
    description: "Specialist agents examine different aspects of an equity research question and organize their findings into a coherent analysis."
  },
  {
    number: "02",
    title: "Quantitative intelligence",
    description: "Structured calculations and analytical models help evaluate signals, scenarios and portfolio characteristics."
  },
  {
    number: "03",
    title: "Portfolio construction",
    description: "Turn research into proposed portfolio allocations with explicit assumptions and documented reasoning."
  },
  {
    number: "04",
    title: "Risk oversight",
    description: "Risk policies and deterministic checks provide a control layer around proposed portfolio decisions."
  },
  {
    number: "05",
    title: "Decision history",
    description: "Keep a traceable record of analysis, evidence, decisions and subsequent verification."
  },
  {
    number: "06",
    title: "Onchain verification",
    description: "Designed to support verifiable decision records and integrity references on Base."
  }
];

export default function Features() {
  return (
    <SiteLayout>
      <section className="content-page">
        <span className="section-kicker">CAPABILITIES</span>
        <h1>Intelligence with <span className="gradient-word">accountability.</span></h1>
        <p className="page-lead">
          A connected system for researching equities, evaluating portfolios
          and keeping important decisions inspectable.
        </p>

        <div className="feature-list">
          {features.map((feature) => (
            <article className="feature-row" key={feature.number}>
              <span className="process-number">{feature.number}</span>
              <div>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>

        <Link className="docs-link" to="/docs">
          Read the documentation <ArrowUpRight size={15} />
        </Link>
      </section>
    </SiteLayout>
  );
}
