
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SiteLayout from "../components/SiteLayout.jsx";

const documents = [
  {
    number: "01",
    title: "Project overview",
    description: "Understand StockSentry's purpose, core capabilities and intended workflow.",
    href: "/how-it-works",
    label: "Explore overview"
  },
  {
    number: "02",
    title: "System architecture",
    description: "Explore the agent network, quantitative engine, risk layer and verification design.",
    href: "/architecture",
    label: "View architecture"
  },
  {
    number: "03",
    title: "Platform capabilities",
    description: "Review the research, portfolio intelligence and risk oversight capabilities.",
    href: "/features",
    label: "Explore features"
  },
  {
    number: "04",
    title: "Frequently asked questions",
    description: "Find answers about execution, verification, risk and platform limitations.",
    href: "/faq",
    label: "Read FAQs"
  }
];

export default function Documentation() {
  return (
    <SiteLayout>
      <section className="content-page">
        <span className="section-kicker">STOCKSENTRY RESOURCES</span>
        <h1>Documentation.<br /><span className="gradient-word">Without the black boxes.</span></h1>
        <p className="page-lead">
          Explore how StockSentry works, how its components fit together
          and how its decisions are designed to be inspected.
        </p>

        <div className="document-list">
          {documents.map((doc) => (
            <article className="document-row" key={doc.number}>
              <span className="process-number">{doc.number}</span>
              <div>
                <h2>{doc.title}</h2>
                <p>{doc.description}</p>
                <Link to={doc.href}>
                  {doc.label} <ArrowUpRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="page-note">
          Detailed API references, installation instructions and integration
          guides will be added as those interfaces are implemented.
        </p>
      </section>
    </SiteLayout>
  );
}
