
import React, { useState } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  BrainCircuit,
  ChevronDown,
  Clock3,
  Database,
  FileSearch,
  LayoutDashboard,
  LockKeyhole,
  Menu,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  Wallet,
  TrendingUp,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar.jsx";
import Research from "./Research.jsx";
import Portfolio from "./Portfolio.jsx";
import AgentNetwork from "./AgentNetwork.jsx";
import RiskCenter from "./RiskCenter.jsx";
import DecisionLedger from "./DecisionLedger.jsx";

const navigation = [
  { label: "Overview", icon: LayoutDashboard, path: "/app" },
  { label: "Research", icon: FileSearch, path: "/app/research" },
  { label: "Portfolio", icon: Wallet, path: "/app/portfolio" },
  { label: "Agents", icon: BrainCircuit, path: "/app/agents" },
  { label: "Risk Center", icon: ShieldCheck, path: "/app/risk" },
  { label: "Decision Ledger", icon: Database, path: "/app/ledger" },
];

const holdings = [
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    allocation: "24.8%",
    value: "$12,480",
    change: "+3.42%",
    positive: true,
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    allocation: "18.2%",
    value: "$9,160",
    change: "+1.28%",
    positive: true,
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    allocation: "16.5%",
    value: "$8,300",
    change: "+0.86%",
    positive: true,
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    allocation: "12.4%",
    value: "$6,240",
    change: "-0.42%",
    positive: false,
  },
];

const agents = [
  {
    name: "Research Agent",
    role: "Equity intelligence",
    status: "Ready",
    icon: FileSearch,
    description:
      "Collects company information, filings and market research.",
  },
  {
    name: "Quant Agent",
    role: "Quantitative analysis",
    status: "Ready",
    icon: Activity,
    description:
      "Evaluates quantitative signals and statistical models.",
  },
  {
    name: "Portfolio Agent",
    role: "Portfolio construction",
    status: "Idle",
    icon: Wallet,
    description:
      "Evaluates allocation scenarios and portfolio constraints.",
  },
  {
    name: "Risk Guardian",
    role: "Policy enforcement",
    status: "Monitoring",
    icon: ShieldCheck,
    description:
      "Monitors exposure, concentration and risk policies.",
  },
];

const activities = [
  {
    title: "Portfolio exposure reviewed",
    detail: "Risk Guardian · Demonstration event",
    time: "09:42",
    status: "Passed",
  },
  {
    title: "NVDA research completed",
    detail: "Research Agent · Demonstration event",
    time: "09:18",
    status: "Completed",
  },
  {
    title: "Allocation scenario generated",
    detail: "Portfolio Agent · Demonstration event",
    time: "08:56",
    status: "Completed",
  },
];

/* SHARED DASHBOARD COMPONENTS */

function Metric({
  label,
  value,
  change,
  positive = true,
  icon: Icon,
}) {
  return (
    <article className="ss-metric">
      <div className="ss-metric-top">
        <span>{label}</span>
        {Icon && <Icon size={17} />}
      </div>

      <strong>{value}</strong>

      {change && (
        <div className={`ss-metric-change ${positive ? "positive" : ""}`}>
          {positive ? (
            <ArrowUpRight size={13} />
          ) : (
            <ArrowDownRight size={13} />
          )}
          <span>{change}</span>
          <span className="ss-muted">demo data</span>
        </div>
      )}
    </article>
  );
}

function Panel({ eyebrow, title, children, action }) {
  return (
    <section className="ss-panel ss-section-panel">
      <div className="ss-panel-heading">
        <div>
          {eyebrow && <span className="ss-kicker">{eyebrow}</span>}
          <h2>{title}</h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

function PageHeading({ eyebrow, title, description, action }) {
  return (
    <div className="ss-page-heading">
      <div>
        <div className="ss-kicker">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {action}
    </div>
  );
}

function DemoNotice() {
  return (
    <div className="ss-demo-notice">
      <LockKeyhole size={15} />
      <span>
        Demonstration environment. All displayed figures, research results
        and activity are illustrative, not live financial data.
      </span>
    </div>
  );
}

/* OVERVIEW PERFORMANCE CHART */

function PerformanceChart() {
  return (
    <div className="ss-chart-wrap">
      <div className="ss-chart-summary">
        <div>
          <span className="ss-muted">Portfolio value</span>
          <strong>$50,284.20</strong>
        </div>
        <span className="ss-chart-gain">+8.42%</span>
      </div>

      <div className="ss-chart">
        <div className="ss-chart-grid">
          <span>$55k</span>
          <span>$50k</span>
          <span>$45k</span>
          <span>$40k</span>
        </div>

        <svg
          viewBox="0 0 720 210"
          preserveAspectRatio="none"
          role="img"
          aria-label="Illustrative portfolio performance chart"
        >
          <defs>
            <linearGradient
              id="ss-chart-fill"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#8375ff"
                stopOpacity=".24"
              />
              <stop
                offset="100%"
                stopColor="#8375ff"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          <path
            d="M0 155 C35 145 45 162 80 137 S125 142 160 115 S200 130 235 105 S280 119 315 87 S360 104 395 78 S440 93 475 67 S520 90 555 48 S600 70 635 43 S685 50 720 22 L720 210 L0 210 Z"
            fill="url(#ss-chart-fill)"
          />

          <path
            d="M0 155 C35 145 45 162 80 137 S125 142 160 115 S200 130 235 105 S280 119 315 87 S360 104 395 78 S440 93 475 67 S520 90 555 48 S600 70 635 43 S685 50 720 22"
            fill="none"
            stroke="#9487ff"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />

          <circle cx="720" cy="22" r="4" fill="#b5aaff" />
        </svg>
      </div>

      <div className="ss-chart-labels">
        <span>01 NOV</span>
        <span>05 NOV</span>
        <span>09 NOV</span>
        <span>13 NOV</span>
        <span>16 NOV</span>
      </div>
    </div>
  );
}

/* OVERVIEW PAGE */

function OverviewPage({ period, setPeriod }) {
  return (
    <>
      <PageHeading
        eyebrow="MONDAY, NOVEMBER 16, 2026"
        title="Good morning."
        description="Your equity intelligence workspace at a glance."
        action={
          <button
            className="ss-new-research"
            onClick={() => window.location.assign("/app/research")}
          >
            <Plus size={16} />
            New research
          </button>
        }
      />

      <DemoNotice />

      <section className="ss-metrics-grid">
        <Metric
          label="PORTFOLIO VALUE"
          value="$50,284.20"
          change="+8.42%"
          icon={Wallet}
        />
        <Metric
          label="TOTAL RETURN"
          value="+$3,904.20"
          change="+4.18%"
          icon={TrendingUp}
        />
        <Metric
          label="ACTIVE POSITIONS"
          value="08"
          change="Across 5 sectors"
          icon={Activity}
        />
        <Metric
          label="RISK SCORE"
          value="32 / 100"
          change="Moderate exposure"
          icon={ShieldCheck}
        />
      </section>

      <section className="ss-primary-grid">
        <Panel
          eyebrow="PORTFOLIO ANALYTICS"
          title="Performance overview"
          action={
            <span className="ss-period-select">
              USD <ChevronDown size={13} />
            </span>
          }
        >
          <div className="ss-periods">
            {["1W", "1M", "3M", "6M", "1Y", "ALL"].map((item) => (
              <button
                key={item}
                className={period === item ? "selected" : ""}
                onClick={() => setPeriod(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <PerformanceChart />
        </Panel>

        <Panel
          eyebrow="AGENT NETWORK"
          title="Intelligence agents"
          action={<BrainCircuit size={19} />}
        >
          <div className="ss-agent-list">
            {agents.map((agent) => {
              const Icon = agent.icon;

              return (
                <div className="ss-agent" key={agent.name}>
                  <div className="ss-agent-icon">
                    <Icon size={17} />
                  </div>

                  <div className="ss-agent-info">
                    <strong>{agent.name}</strong>
                    <span>{agent.role}</span>
                  </div>

                  <span
                    className={`ss-agent-status ${agent.status.toLowerCase()}`}
                  >
                    <i /> {agent.status}
                  </span>
                </div>
              );
            })}
          </div>

          <NavLink className="ss-panel-link" to="/app/agents">
            View agent network <ArrowUpRight size={14} />
          </NavLink>
        </Panel>
      </section>

      <section className="ss-primary-grid ss-lower-grid">
        <Panel
          eyebrow="PORTFOLIO COMPOSITION"
          title="Top holdings"
          action={
            <NavLink className="ss-panel-link" to="/app/portfolio">
              View portfolio <ArrowUpRight size={14} />
            </NavLink>
          }
        >
          <HoldingsTable />
        </Panel>

        <Panel
          eyebrow="SYSTEM LOG"
          title="Recent activity"
          action={<Clock3 size={18} />}
        >
          <ActivityList />

          <NavLink className="ss-panel-link" to="/app/ledger">
            Open decision ledger <ArrowUpRight size={14} />
          </NavLink>
        </Panel>
      </section>
    </>
  );
}

/* OVERVIEW HOLDINGS TABLE */

function HoldingsTable() {
  return (
    <div className="ss-table-scroll">
      <table className="ss-holdings-table">
        <thead>
          <tr>
            <th>ASSET</th>
            <th>ALLOCATION</th>
            <th>VALUE</th>
            <th>CHANGE</th>
          </tr>
        </thead>

        <tbody>
          {holdings.map((item) => (
            <tr key={item.symbol}>
              <td>
                <strong>{item.symbol}</strong>
                <span>{item.name}</span>
              </td>
              <td>{item.allocation}</td>
              <td>{item.value}</td>
              <td
                className={
                  item.positive ? "ss-positive" : "ss-negative"
                }
              >
                {item.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* OVERVIEW ACTIVITY LIST */

function ActivityList() {
  return (
    <div className="ss-activity-list">
      {activities.map((item) => (
        <div className="ss-activity" key={item.title}>
          <span className="ss-activity-dot" />
          <div>
            <strong>{item.title}</strong>
            <p>{item.detail}</p>
            <span>
              {item.time} · {item.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* PAGE ROUTER */

function DashboardContent({ page, period, setPeriod }) {
  switch (page) {
    case "research":
      return <Research />;

    case "portfolio":
      return <Portfolio />;

    case "agents":
      return <AgentNetwork />;

    case "risk":
      return <RiskCenter />;

    case "ledger":
      return <DecisionLedger />;

    default:
      return <OverviewPage period={period} setPeriod={setPeriod} />;
  }
}

/* DASHBOARD SHELL */

export default function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [period, setPeriod] = useState("1M");
  const location = useLocation();

  const page = location.pathname.split("/")[2] || "overview";
  const current = navigation.find(
    (item) => item.path === location.pathname
  );
  const pageLabel = current?.label || "Overview";

  return (
    <div className="ss-dashboard">
      <Sidebar
        mobileOpen={mobileOpen}
        closeMobile={() => setMobileOpen(false)}
      />

      <main className="ss-main">
        <header className="ss-topbar">
          <div className="ss-topbar-left">
            <button
              className="ss-mobile-menu"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
            >
              <Menu size={20} />
            </button>

            <div className="ss-breadcrumb">
              Workspace <span>/</span> <strong>{pageLabel}</strong>
            </div>
          </div>

          <div className="ss-topbar-actions">
            <div className="ss-demo-badge">
              <span /> DEMO DATA
            </div>

            <button className="ss-icon-button" aria-label="Search">
              <Search size={17} />
            </button>

            <button className="ss-icon-button" aria-label="Notifications">
              <Bell size={17} />
            </button>

            <button className="ss-icon-button" aria-label="Settings">
              <Settings2 size={17} />
            </button>
          </div>
        </header>

        <div className="ss-dashboard-content">
          <DashboardContent
            page={page}
            period={period}
            setPeriod={setPeriod}
          />

          <footer className="ss-dashboard-footer">
            <span>STOCKSENTRY INTELLIGENCE TERMINAL</span>
            <span>
              <span className="ss-status-dot" /> PREVIEW ENVIRONMENT
            </span>
          </footer>
        </div>
      </main>
    </div>
  );
}
