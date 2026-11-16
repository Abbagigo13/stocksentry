
import React, { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  FileSearch,
  TrendingUp,
  Eye,
  Clock3,
  ChevronDown,
  BrainCircuit,
} from "lucide-react";

import {
  Metric,
  Panel,
  PageHeading,
  DemoNotice,
} from "../components/dashboard/DashboardUI.jsx";

import {
  researchItems,
} from "../components/dashboard/dashboardData.js";

export default function Research() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = researchItems.filter((item) =>
    `${item.symbol} ${item.company} ${item.sector}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <>
      <PageHeading
        eyebrow="EQUITY INTELLIGENCE"
        title="Research workspace"
        description="Explore companies, review research findings and inspect generated intelligence."
        action={
          <button
            className="ss-new-research"
            onClick={() =>
              document.getElementById("ss-research-search")?.focus()
            }
          >
            <Plus size={16} />
            Start research
          </button>
        }
      />

      <DemoNotice />

      <div className="ss-research-toolbar">
        <div className="ss-search-field">
          <Search size={17} />
          <input
            id="ss-research-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search companies, tickers or sectors..."
          />
        </div>

        <button className="ss-secondary-button">
          <Filter size={15} />
          Filters
        </button>
      </div>

      <section className="ss-metrics-grid">
        <Metric
          label="RESEARCH REPORTS"
          value="24"
          change="Demo records"
          icon={FileSearch}
        />
        <Metric
          label="POSITIVE SIGNALS"
          value="12"
          change="Illustrative"
          icon={TrendingUp}
        />
        <Metric
          label="UNDER REVIEW"
          value="07"
          change="Illustrative"
          icon={Eye}
        />
        <Metric
          label="LAST ANALYSIS"
          value="09:18"
          change="16 November"
          icon={Clock3}
        />
      </section>

      <Panel
        eyebrow="RESEARCH LIBRARY"
        title="Company intelligence"
        action={<span className="ss-muted">{filtered.length} records</span>}
      >
        <div className="ss-research-list">
          {filtered.map((item) => (
            <button
              className={`ss-research-item ${
                selected === item.symbol ? "is-selected" : ""
              }`}
              key={item.symbol}
              onClick={() =>
                setSelected(
                  selected === item.symbol ? null : item.symbol
                )
              }
            >
              <div className="ss-research-symbol">
                {item.symbol.slice(0, 2)}
              </div>

              <div className="ss-research-main">
                <strong>
                  {item.symbol} <span>{item.company}</span>
                </strong>

                <small>
                  {item.sector} · {item.date}
                </small>

                {selected === item.symbol && <p>{item.summary}</p>}
              </div>

              <div className="ss-research-score">
                <strong>{item.score}</strong>
                <small>Research score</small>
              </div>

              <span className={`ss-signal ${item.signal.toLowerCase()}`}>
                {item.signal}
              </span>

              <ChevronDown size={15} />
            </button>
          ))}

          {filtered.length === 0 && (
            <div className="ss-empty-state">
              No matching companies found in the demonstration library.
            </div>
          )}
        </div>
      </Panel>

      <div className="ss-info-strip">
        <BrainCircuit size={18} />
        <div>
          <strong>Research engine</strong>
          <p>
            Research reports shown here are sample records. Live company
            filings, market feeds and agent-generated reports have not yet
            been connected.
          </p>
        </div>
      </div>
    </>
  );
}
