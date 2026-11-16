
import React from "react";
import SiteLayout from "../components/SiteLayout.jsx";

const questions = [
  {
    question: "What is StockSentry?",
    answer: "StockSentry is an autonomous equity intelligence platform designed to coordinate research, quantitative analysis, portfolio construction and risk oversight."
  },
  {
    question: "Does StockSentry execute real trades?",
    answer: "The initial experience focuses on research and simulated portfolio execution. Live trading is not implied and would require supported brokerage integrations, explicit authorization and appropriate safeguards."
  },
  {
    question: "How do the agents work together?",
    answer: "Specialist agents handle different research and portfolio tasks. Their outputs are organized into a structured workflow and checked by application logic and risk policies."
  },
  {
    question: "How are decisions verified?",
    answer: "StockSentry is designed to maintain traceable decision records. Supported records can use Base for onchain verification."
  },
  {
    question: "Does StockSentry guarantee investment returns?",
    answer: "No. StockSentry is an intelligence and experimentation platform. It does not guarantee returns or replace independent financial judgment."
  },
  {
    question: "Can I inspect the system architecture?",
    answer: "Yes. Visit the Architecture and Documentation pages for the system overview and available technical references."
  }
];

export default function FAQ() {
  return (
    <SiteLayout>
      <section className="content-page faq-page">
        <span className="section-kicker">QUESTIONS & ANSWERS</span>
        <h1>Frequently <span className="gradient-word">asked.</span></h1>
        <p className="page-lead">
          A straightforward explanation of what StockSentry does
          and what it does not claim to do.
        </p>

        <div className="faq-list">
          {questions.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
