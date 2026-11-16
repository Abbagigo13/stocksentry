
import React, { useState } from "react";
import {
  Database,
  CheckCircle2,
  ShieldCheck,
  LockKeyhole,
  ChevronDown,
} from "lucide-react";

import {
  Metric,
  Panel,
  PageHeading,
  DemoNotice,
} from "../components/dashboard/DashboardUI.jsx";

const ledgerItems = [
  {
    id: "SS-0004",
    title: "Portfolio exposure reviewed",
    agent: "Risk Guardian",
    asset: "PORTFOLIO",
    time: "16 Nov · 09:42",
    status: "Passed",
    type: "Risk assessment",
  },
  {
    id: "SS-0003",
    title: "NVDA research completed",
    agent: "Research Agent",
    asset: "NVDA",
    time: "16 Nov · 09:18",
    status: "Completed",
    type: "Research",
  },
  {
    id: "SS-0002",
    title: "Allocation scenario generated",
    agent: "Portfolio Agent",
    asset: "PORTFOLIO",
    time: "16 Nov · 08:56",
    status: "Completed",
    type: "Portfolio",
  },
  {
    id: "SS-0001",
    title: "Initial workspace assessment",
    agent: "Quant Agent",
    asset: "MARKET",
    time: "16 Nov · 08:30",
    status: "Completed",
    type: "Quant analysis",
  },
];

export default function DecisionLedger() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filters = [
    "All",
    "Research",
    "Risk assessment",
    "Portfolio",
    "Quant analysis",
  ];

  const filtered = ledgerItems.filter(
    (item) => filter === "All" || item.type === filter
  );

  return (
    <>
      <PageHeading
        eyebrow="AUDIT & VERIFIABILITY"
        title="Decision ledger"
        description="Review the history of analytical decisions, agent activity and evidence records."
        action={
          <button className="ss-secondary-button">
            <Database size={14} />
            Export records
          </button>
        }
      />

      <DemoNotice />

      <section className="ss-metrics-grid">
        <Metric label="TOTAL RECORDS" value="04" change="Sample ledger entries" icon={Database} />
        <Metric label="COMPLETED" value="03" change="Illustrative records" icon={CheckCircle2} />
        <Metric label="RISK CHECKS" value="01" change="Illustrative records" icon={ShieldCheck} />
        <Metric label="VERIFICATION" value="Preview" change="Blockchain not connected" icon={LockKeyhole} />
      </section>

      <Panel
        eyebrow="AUDIT TRAIL"
        title="Recorded decisions"
        action={<span className="ss-muted">{filtered.length} records</span>}
      >
        <div className="ss-ledger-filters">
          {filters.map((item) => (
            <button
              key={item}
              className={filter === item ? "selected" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="ss-ledger-list">
          {filtered.map((item) => (
            <div className="ss-ledger-entry" key={item.id}>
              <button
                className="ss-ledger-entry-main"
                onClick={() =>
                  setSelected(selected === item.id ? null : item.id)
                }
              >
                <div className="ss-ledger-icon">
                  <Database size={17} />
                </div>

                <div className="ss-ledger-info">
                  <strong>{item.title}</strong>
                  <span>
                    {item.id} · {item.agent} · {item.asset}
                  </span>
                </div>

                <span className="ss-ledger-time">{item.time}</span>
                <span className="ss-signal positive">{item.status}</span>
                <ChevronDown size={15} />
              </button>

              {selected === item.id && (
                <div className="ss-ledger-details">
                  <div>
                    <span>Record reference</span>
                    <strong>{item.id}</strong>
                  </div>
                  <div>
                    <span>Record category</span>
                    <strong>{item.type}</strong>
                  </div>
                  <div>
                    <span>Evidence status</span>
                    <strong>Sample record only</strong>
                  </div>
                  <div>
                    <span>On-chain transaction</span>
                    <strong>Not yet submitted</strong>
                  </div>
                  <p>
                    This is a demonstration ledger entry. It does not
                    represent a cryptographically verified or
                    blockchain-published decision.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Panel>

      <div className="ss-info-strip">
        <LockKeyhole size={18} />
        <div>
          <strong>Verification layer</strong>
          <p>
            Blockchain transaction submission, evidence hashing and
            on-chain verification are not connected in this preview.
          </p>
        </div>
      </div>
    </>
  );
}
