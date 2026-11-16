
import React from "react";
import {
  ShieldCheck,
  ChartNoAxesCombined,
  Activity,
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";

import {
  Metric,
  Panel,
  PageHeading,
  DemoNotice,
  HoldingsTable,
} from "../components/dashboard/DashboardUI.jsx";

export default function RiskCenter() {
  return (
    <>
      <PageHeading
        eyebrow="RISK OVERSIGHT"
        title="Risk center"
        description="Monitor portfolio concentration, exposure and illustrative policy checks."
        action={
          <button className="ss-secondary-button">
            <RefreshCw size={14} />
            Recalculate
          </button>
        }
      />

      <DemoNotice />

      <section className="ss-metrics-grid">
        <Metric label="OVERALL RISK SCORE" value="32 / 100" change="Moderate exposure" icon={ShieldCheck} />
        <Metric label="CONCENTRATION" value="24.8%" change="Largest position: NVDA" icon={ChartNoAxesCombined} />
        <Metric label="SECTOR EXPOSURE" value="42.5%" change="Technology" icon={Activity} />
        <Metric label="ACTIVE ALERTS" value="02" change="Illustrative alerts" positive={false} icon={AlertTriangle} />
      </section>

      <section className="ss-primary-grid">
        <Panel eyebrow="RISK PROFILE" title="Portfolio risk assessment">
          <div className="ss-risk-score">
            <div>
              <strong>32</strong>
              <span>/100</span>
            </div>
            <span className="ss-signal neutral">Moderate</span>
          </div>

          <div className="ss-risk-track">
            <span style={{ width: "32%" }} />
          </div>

          <div className="ss-risk-scale">
            <span>Lower risk</span>
            <span>Higher risk</span>
          </div>

          <p className="ss-muted ss-risk-description">
            Illustrative risk score only. This is not a validated risk model
            or investment recommendation.
          </p>
        </Panel>

        <Panel eyebrow="POLICY MONITOR" title="Control checks">
          {[
            ["Position concentration", "Within sample threshold", "Passed"],
            ["Sector exposure", "Review recommended", "Review"],
            ["Portfolio drawdown", "No sample breach", "Passed"],
            ["Liquidity assessment", "Sample check", "Passed"],
          ].map(([name, detail, status]) => (
            <div className="ss-risk-check" key={name}>
              {status === "Passed" ? (
                <CheckCircle2 size={17} />
              ) : (
                <AlertTriangle size={17} />
              )}

              <div>
                <strong>{name}</strong>
                <span>{detail}</span>
              </div>

              <b className={status === "Passed" ? "ss-positive" : "ss-warning"}>
                {status}
              </b>
            </div>
          ))}
        </Panel>
      </section>

      <Panel eyebrow="EXPOSURE BREAKDOWN" title="Largest positions">
        <HoldingsTable />
      </Panel>
    </>
  );
}
