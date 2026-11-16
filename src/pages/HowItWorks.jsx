
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SiteLayout from "../components/SiteLayout.jsx";

const steps = [
  {
    number: "01",
    title: "Research",
    description: "Research agents gather available market information, company fundamentals, relevant events and supporting evidence."
  },
  {
    number: "02",
    title: "Analyze",
    description: "Quantitative analysis evaluates the available data, identifies patterns and examines possible scenarios."
  },
  {
    number: "03",
    title: "Construct",
    description: "Portfolio intelligence translates research findings into proposed allocations and portfolio strategies."
  },
  {
    number: "04",
    title: "Protect",
    description: "The risk guardian evaluates exposure, constraints and policy requirements before a decision can proceed."
  },
  {
    number: "05",
    title: "Verify",
    description: "Decision records preserve the reasoning, supporting evidence and verification references."
  }
];

export default function HowItWorks() {
  return (
    <SiteLayout>
      <section className="content-page">
        <span className="section-kicker">THE PROCESS</span>
        <h1>From market signals to <span className="gradient-word">disciplined decisions.</span></h1>
        <p className="page-lead">
          StockSentry coordinates specialist intelligence agents through a
          structured research, analysis, portfolio and risk workflow.
        </p>

        <div className="process-list">
          {steps.map((step) => (
            <article className="process-row" key={step.number}>
              <span className="process-number">{step.number}</span>
              <div>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
              </div>
              <ArrowRight className="process-arrow" />
            </article>
          ))}
        </div>

        <Link className="primary-button" to="/architecture">
          Explore the architecture <ArrowRight size={15} />
        </Link>
      </section>
    </SiteLayout>
  );
}
