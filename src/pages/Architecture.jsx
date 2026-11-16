
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SiteLayout from "../components/SiteLayout.jsx";

const layers = [
  ["01", "Research agents", "Gather market information, company data and relevant evidence."],
  ["02", "Quantitative engine", "Processes structured data, evaluates metrics and calculates analytical outputs."],
  ["03", "Portfolio intelligence", "Uses research and quantitative outputs to formulate portfolio proposals."],
  ["04", "Risk guardian", "Checks exposure, limits, constraints and decision policies."],
  ["05", "Decision registry", "Maintains traceable decision records and verification references."],
  ["06", "Base verification layer", "Provides an onchain verification layer for supported decision records."]
];

export default function Architecture() {
  return (
    <SiteLayout>
      <section className="content-page">
        <span className="section-kicker">SYSTEM DESIGN</span>
        <h1>Designed for <span className="gradient-word">accountable autonomy.</span></h1>
        <p className="page-lead">
          StockSentry separates agent reasoning from deterministic calculations,
          risk enforcement and decision verification.
        </p>

        <div className="architecture-stack">
          {layers.map(([number, title, description], index) => (
            <React.Fragment key={number}>
              <article className="architecture-layer">
                <span className="process-number">{number}</span>
                <div>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
              </article>
              {index !== layers.length - 1 && (
                <div className="layer-connector">↓</div>
              )}
            </React.Fragment>
          ))}
        </div>

        <p className="page-note">
          Architecture overview describes the intended system design.
          Individual integrations depend on their implementation and deployment status.
        </p>

        <Link className="primary-button" to="/docs">
          Technical documentation <ArrowRight size={15} />
        </Link>
      </section>
    </SiteLayout>
  );
}
