
import React from "react";
import {
  Plus,
  Wallet,
  TrendingUp,
  ChartNoAxesCombined,
  Database,
  SlidersHorizontal,
} from "lucide-react";

import {
  Metric,
  Panel,
  PageHeading,
  DemoNotice,
  PerformanceChart,
  HoldingsTable,
} from "../components/dashboard/DashboardUI.jsx";

export default function Portfolio() {
  return (
    <>
      <PageHeading
        eyebrow="ASSET MANAGEMENT"
        title="Portfolio"
        description="Monitor holdings, allocation and illustrative portfolio performance."
        action={
          <button className="ss-new-research">
            <Plus size={16} />
            Add position
          </button>
        }
      />

      <DemoNotice />

      <section className="ss-metrics-grid">
        <Metric label="TOTAL PORTFOLIO VALUE" value="$50,284.20" change="+8.42%" icon={Wallet} />
        <Metric label="TOTAL RETURN" value="+$3,904.20" change="+4.18%" icon={TrendingUp} />
        <Metric label="POSITIONS" value="08" change="Across 5 sectors" icon={ChartNoAxesCombined} />
        <Metric label="CASH BALANCE" value="$4,104.20" change="8.2% of portfolio" icon={Database} />
      </section>

      <section className="ss-primary-grid">
        <Panel eyebrow="PERFORMANCE" title="Portfolio performance">
          <PerformanceChart />
        </Panel>

        <Panel eyebrow="ALLOCATION" title="Asset distribution">
          <div className="ss-allocation-total">
            <strong>$50,284.20</strong>
            <span>Total illustrative value</span>
          </div>

          <div className="ss-allocation-bar">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          {[
            ["Technology", "42.5%", "#9487ff"],
            ["Semiconductors", "24.8%", "#67c5bd"],
            ["Communication", "12.4%", "#d6ad6c"],
            ["Other", "12.1%", "#6c789b"],
            ["Cash", "8.2%", "#6d7280"],
          ].map(([name, value, color]) => (
            <div className="ss-allocation-row" key={name}>
              <i style={{ background: color }} />
              <span>{name}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </Panel>
      </section>

      <Panel
        eyebrow="POSITIONS"
        title="Holdings and exposure"
        action={
          <button className="ss-secondary-button">
            <SlidersHorizontal size={14} />
            Manage view
          </button>
        }
      >
        <HoldingsTable />
      </Panel>
    </>
  );
}
