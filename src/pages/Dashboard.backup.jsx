
import React, { useState } from "react";
import {
  Activity, ArrowDownRight, ArrowUpRight, Bell, BrainCircuit,
  ChevronDown, Clock3, Database, FileSearch, LayoutDashboard,
  LockKeyhole, Menu, MoreHorizontal, Plus, Search, Settings2,
  ShieldCheck, Wallet, X, TrendingUp, Zap, AlertTriangle,
  CheckCircle2, CircleDot, ExternalLink, Filter, Play,
  RefreshCw, Eye, ChartNoAxesCombined, SlidersHorizontal
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar.jsx";

const navigation = [
  { label: "Overview", icon: LayoutDashboard, path: "/app" },
  { label: "Research", icon: FileSearch, path: "/app/research" },
  { label: "Portfolio", icon: Wallet, path: "/app/portfolio" },
  { label: "Agents", icon: BrainCircuit, path: "/app/agents" },
  { label: "Risk Center", icon: ShieldCheck, path: "/app/risk" },
  { label: "Decision Ledger", icon: Database, path: "/app/ledger" },
];

const holdings = [
  { symbol: "NVDA", name: "NVIDIA Corporation", allocation: "24.8%", value: "$12,480", change: "+3.42%", positive: true },
  { symbol: "AAPL", name: "Apple Inc.", allocation: "18.2%", value: "$9,160", change: "+1.28%", positive: true },
  { symbol: "MSFT", name: "Microsoft Corporation", allocation: "16.5%", value: "$8,300", change: "+0.86%", positive: true },
  { symbol: "GOOGL", name: "Alphabet Inc.", allocation: "12.4%", value: "$6,240", change: "-0.42%", positive: false },
];

const agents = [
  { name: "Research Agent", role: "Equity intelligence", status: "Ready", icon: FileSearch, description: "Collects company information, filings and market research." },
  { name: "Quant Agent", role: "Quantitative analysis", status: "Ready", icon: Activity, description: "Evaluates quantitative signals and statistical models." },
  { name: "Portfolio Agent", role: "Portfolio construction", status: "Idle", icon: Wallet, description: "Evaluates allocation scenarios and portfolio constraints." },
  { name: "Risk Guardian", role: "Policy enforcement", status: "Monitoring", icon: ShieldCheck, description: "Monitors exposure, concentration and risk policies." },
];

const activities = [
  { title: "Portfolio exposure reviewed", detail: "Risk Guardian Â· Demonstration event", time: "09:42", status: "Passed" },
  { title: "NVDA research completed", detail: "Research Agent Â· Demonstration event", time: "09:18", status: "Completed" },
  { title: "Allocation scenario generated", detail: "Portfolio Agent Â· Demonstration event", time: "08:56", status: "Completed" },
];

const researchItems = [
  { symbol: "NVDA", company: "NVIDIA Corporation", sector: "Semiconductors", signal: "Positive", date: "16 Nov 2026", score: "86", summary: "Illustrative analysis of semiconductor demand, competitive position and valuation." },
  { symbol: "AAPL", company: "Apple Inc.", sector: "Technology", signal: "Neutral", date: "15 Nov 2026", score: "71", summary: "Illustrative review of services growth, device demand and business fundamentals." },
  { symbol: "MSFT", company: "Microsoft Corporation", sector: "Software", signal: "Positive", date: "14 Nov 2026", score: "82", summary: "Illustrative review of cloud growth, AI infrastructure and recurring revenue." },
  { symbol: "GOOGL", company: "Alphabet Inc.", sector: "Communication", signal: "Watch", date: "13 Nov 2026", score: "64", summary: "Illustrative review of advertising exposure and AI competition." },
];

const ledgerItems = [
  { id: "SS-0004", title: "Portfolio exposure reviewed", agent: "Risk Guardian", asset: "PORTFOLIO", time: "16 Nov Â· 09:42", status: "Passed", type: "Risk assessment" },
  { id: "SS-0003", title: "NVDA research completed", agent: "Research Agent", asset: "NVDA", time: "16 Nov Â· 09:18", status: "Completed", type: "Research" },
  { id: "SS-0002", title: "Allocation scenario generated", agent: "Portfolio Agent", asset: "PORTFOLIO", time: "16 Nov Â· 08:56", status: "Completed", type: "Portfolio" },
  { id: "SS-0001", title: "Initial workspace assessment", agent: "Quant Agent", asset: "MARKET", time: "16 Nov Â· 08:30", status: "Completed", type: "Quant analysis" },
];

function Metric({ label, value, change, positive = true, icon: Icon }) {
  return (
    <article className="ss-metric">
      <div className="ss-metric-top">
        <span>{label}</span>
        {Icon && <Icon size={17} />}
      </div>
      <strong>{value}</strong>
      {change && (
        <div className={`ss-metric-change ${positive ? "positive" : ""}`}>
          {positive ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
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
      <span>Demonstration environment. All displayed figures, research results and activity are illustrative, not live financial data.</span>
    </div>
  );
}

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
          <span>$55k</span><span>$50k</span><span>$45k</span><span>$40k</span>
        </div>
        <svg viewBox="0 0 720 210" preserveAspectRatio="none" role="img" aria-label="Illustrative portfolio performance chart">
          <defs>
            <linearGradient id="ss-chart-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8375ff" stopOpacity=".24" />
              <stop offset="100%" stopColor="#8375ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 155 C35 145 45 162 80 137 S125 142 160 115 S200 130 235 105 S280 119 315 87 S360 104 395 78 S440 93 475 67 S520 90 555 48 S600 70 635 43 S685 50 720 22 L720 210 L0 210 Z" fill="url(#ss-chart-fill)" />
          <path d="M0 155 C35 145 45 162 80 137 S125 142 160 115 S200 130 235 105 S280 119 315 87 S360 104 395 78 S440 93 475 67 S520 90 555 48 S600 70 635 43 S685 50 720 22" fill="none" stroke="#9487ff" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <circle cx="720" cy="22" r="4" fill="#b5aaff" />
        </svg>
      </div>
      <div className="ss-chart-labels">
        <span>01 NOV</span><span>05 NOV</span><span>09 NOV</span><span>13 NOV</span><span>16 NOV</span>
      </div>
    </div>
  );
}

function OverviewPage({ period, setPeriod }) {
  return (
    <>
      <PageHeading
        eyebrow="MONDAY, NOVEMBER 16, 2026"
        title="Good morning."
        description="Your equity intelligence workspace at a glance."
        action={<button className="ss-new-research" onClick={() => window.location.assign("/app/research")}><Plus size={16} /> New research</button>}
      />
      <DemoNotice />

      <section className="ss-metrics-grid">
        <Metric label="PORTFOLIO VALUE" value="$50,284.20" change="+8.42%" icon={Wallet} />
        <Metric label="TOTAL RETURN" value="+$3,904.20" change="+4.18%" icon={TrendingUp} />
        <Metric label="ACTIVE POSITIONS" value="08" change="Across 5 sectors" icon={Activity} />
        <Metric label="RISK SCORE" value="32 / 100" change="Moderate exposure" icon={ShieldCheck} />
      </section>

      <section className="ss-primary-grid">
        <Panel eyebrow="PORTFOLIO ANALYTICS" title="Performance overview" action={<span className="ss-period-select">USD <ChevronDown size={13} /></span>}>
          <div className="ss-periods">
            {["1W", "1M", "3M", "6M", "1Y", "ALL"].map(item => (
              <button key={item} className={period === item ? "selected" : ""} onClick={() => setPeriod(item)}>{item}</button>
            ))}
          </div>
          <PerformanceChart />
        </Panel>

        <Panel eyebrow="AGENT NETWORK" title="Intelligence agents" action={<BrainCircuit size={19} />}>
          <div className="ss-agent-list">
            {agents.map(agent => {
              const Icon = agent.icon;
              return (
                <div className="ss-agent" key={agent.name}>
                  <div className="ss-agent-icon"><Icon size={17} /></div>
                  <div className="ss-agent-info"><strong>{agent.name}</strong><span>{agent.role}</span></div>
                  <span className={`ss-agent-status ${agent.status.toLowerCase()}`}><i /> {agent.status}</span>
                </div>
              );
            })}
          </div>
          <NavLink className="ss-panel-link" to="/app/agents">View agent network <ArrowUpRight size={14} /></NavLink>
        </Panel>
      </section>

      <section className="ss-primary-grid ss-lower-grid">
        <Panel eyebrow="PORTFOLIO COMPOSITION" title="Top holdings" action={<NavLink className="ss-panel-link" to="/app/portfolio">View portfolio <ArrowUpRight size={14} /></NavLink>}>
          <HoldingsTable />
        </Panel>
        <Panel eyebrow="SYSTEM LOG" title="Recent activity" action={<Clock3 size={18} />}>
          <ActivityList />
          <NavLink className="ss-panel-link" to="/app/ledger">Open decision ledger <ArrowUpRight size={14} /></NavLink>
        </Panel>
      </section>
    </>
  );
}

function HoldingsTable() {
  return (
    <div className="ss-table-scroll">
      <table className="ss-holdings-table">
        <thead><tr><th>ASSET</th><th>ALLOCATION</th><th>VALUE</th><th>CHANGE</th></tr></thead>
        <tbody>
          {holdings.map(item => (
            <tr key={item.symbol}>
              <td><strong>{item.symbol}</strong><span>{item.name}</span></td>
              <td>{item.allocation}</td>
              <td>{item.value}</td>
              <td className={item.positive ? "ss-positive" : "ss-negative"}>{item.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ActivityList() {
  return (
    <div className="ss-activity-list">
      {activities.map(item => (
        <div className="ss-activity" key={item.title}>
          <span className="ss-activity-dot" />
          <div><strong>{item.title}</strong><p>{item.detail}</p><span>{item.time} Â· {item.status}</span></div>
        </div>
      ))}
    </div>
  );
}

/* RESEARCH */

function ResearchPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = researchItems.filter(item =>
    `${item.symbol} ${item.company} ${item.sector}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <PageHeading
        eyebrow="EQUITY INTELLIGENCE"
        title="Research workspace"
        description="Explore companies, review research findings and inspect generated intelligence."
        action={<button className="ss-new-research" onClick={() => document.getElementById("ss-research-search")?.focus()}><Plus size={16} /> Start research</button>}
      />
      <DemoNotice />

      <div className="ss-research-toolbar">
        <div className="ss-search-field">
          <Search size={17} />
          <input id="ss-research-search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search companies, tickers or sectors..." />
        </div>
        <button className="ss-secondary-button"><Filter size={15} /> Filters</button>
      </div>

      <section className="ss-metrics-grid">
        <Metric label="RESEARCH REPORTS" value="24" change="Demo records" icon={FileSearch} />
        <Metric label="POSITIVE SIGNALS" value="12" change="Illustrative" icon={TrendingUp} />
        <Metric label="UNDER REVIEW" value="07" change="Illustrative" icon={Eye} />
        <Metric label="LAST ANALYSIS" value="09:18" change="16 November" icon={Clock3} />
      </section>

      <Panel eyebrow="RESEARCH LIBRARY" title="Company intelligence" action={<span className="ss-muted">{filtered.length} records</span>}>
        <div className="ss-research-list">
          {filtered.map(item => (
            <button className={`ss-research-item ${selected === item.symbol ? "is-selected" : ""}`} key={item.symbol} onClick={() => setSelected(selected === item.symbol ? null : item.symbol)}>
              <div className="ss-research-symbol">{item.symbol.slice(0, 2)}</div>
              <div className="ss-research-main">
                <strong>{item.symbol} <span>{item.company}</span></strong>
                <small>{item.sector} Â· {item.date}</small>
                {selected === item.symbol && <p>{item.summary}</p>}
              </div>
              <div className="ss-research-score"><strong>{item.score}</strong><small>Research score</small></div>
              <span className={`ss-signal ${item.signal.toLowerCase()}`}>{item.signal}</span>
              <ChevronDown size={15} />
            </button>
          ))}
          {filtered.length === 0 && <div className="ss-empty-state">No matching companies found in the demonstration library.</div>}
        </div>
      </Panel>

      <div className="ss-info-strip"><BrainCircuit size={18} /><div><strong>Research engine</strong><p>Research reports shown here are sample records. Live company filings, market feeds and agent-generated reports have not yet been connected.</p></div></div>
    </>
  );
}

/* PORTFOLIO */

function PortfolioPage() {
  return (
    <>
      <PageHeading eyebrow="ASSET MANAGEMENT" title="Portfolio" description="Monitor holdings, allocation and illustrative portfolio performance." action={<button className="ss-new-research"><Plus size={16} /> Add position</button>} />
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
          <div className="ss-allocation-total"><strong>$50,284.20</strong><span>Total illustrative value</span></div>
          <div className="ss-allocation-bar"><span /><span /><span /><span /><span /></div>
          {[
            ["Technology", "42.5%", "#9487ff"],
            ["Semiconductors", "24.8%", "#67c5bd"],
            ["Communication", "12.4%", "#d6ad6c"],
            ["Other", "12.1%", "#6c789b"],
            ["Cash", "8.2%", "#6d7280"],
          ].map(([name, value, color]) => (
            <div className="ss-allocation-row" key={name}><i style={{ background: color }} /><span>{name}</span><strong>{value}</strong></div>
          ))}
        </Panel>
      </section>

      <Panel eyebrow="POSITIONS" title="Holdings and exposure" action={<button className="ss-secondary-button"><SlidersHorizontal size={14} /> Manage view</button>}>
        <HoldingsTable />
      </Panel>
    </>
  );
}

/* AGENTS */

function AgentsPage() {
  const [expanded, setExpanded] = useState("Research Agent");

  return (
    <>
      <PageHeading eyebrow="AUTONOMOUS INTELLIGENCE" title="Agent network" description="Inspect the specialist agents responsible for research, analysis, portfolio construction and oversight." action={<button className="ss-secondary-button"><RefreshCw size={14} /> Refresh status</button>} />
      <DemoNotice />

      <section className="ss-metrics-grid">
        <Metric label="REGISTERED AGENTS" value="04" change="Configured agents" icon={BrainCircuit} />
        <Metric label="READY" value="02" change="Demo status" icon={CheckCircle2} />
        <Metric label="MONITORING" value="01" change="Demo status" icon={Activity} />
        <Metric label="TASKS COMPLETED" value="18" change="Illustrative count" icon={Zap} />
      </section>

      <Panel eyebrow="AGENT DIRECTORY" title="Specialist agents">
        <div className="ss-agent-directory">
          {agents.map(agent => {
            const Icon = agent.icon;
            const isExpanded = expanded === agent.name;
            return (
              <div className={`ss-agent-card ${isExpanded ? "expanded" : ""}`} key={agent.name}>
                <button className="ss-agent-card-main" onClick={() => setExpanded(isExpanded ? null : agent.name)}>
                  <div className="ss-agent-icon"><Icon size={20} /></div>
                  <div className="ss-agent-info"><strong>{agent.name}</strong><span>{agent.role}</span></div>
                  <span className={`ss-agent-status ${agent.status.toLowerCase()}`}><i />{agent.status}</span>
                  <ChevronDown size={16} />
                </button>
                {isExpanded && (
                  <div className="ss-agent-details">
                    <p>{agent.description}</p>
                    <div><span>Execution mode</span><strong>Preview / Demo</strong></div>
                    <div><span>Last activity</span><strong>16 Nov 2026</strong></div>
                    <div><span>Connection</span><strong>Not connected to live agent runtime</strong></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Panel>

      <div className="ss-info-strip"><BrainCircuit size={18} /><div><strong>Agent execution environment</strong><p>This interface currently displays configured agent concepts and sample statuses. No autonomous live execution is being claimed.</p></div></div>
    </>
  );
}

/* RISK CENTER */

function RiskPage() {
  return (
    <>
      <PageHeading eyebrow="RISK OVERSIGHT" title="Risk center" description="Monitor portfolio concentration, exposure and illustrative policy checks." action={<button className="ss-secondary-button"><RefreshCw size={14} /> Recalculate</button>} />
      <DemoNotice />

      <section className="ss-metrics-grid">
        <Metric label="OVERALL RISK SCORE" value="32 / 100" change="Moderate exposure" icon={ShieldCheck} />
        <Metric label="CONCENTRATION" value="24.8%" change="Largest position: NVDA" icon={ChartNoAxesCombined} />
        <Metric label="SECTOR EXPOSURE" value="42.5%" change="Technology" icon={Activity} />
        <Metric label="ACTIVE ALERTS" value="02" change="Illustrative alerts" positive={false} icon={AlertTriangle} />
      </section>

      <section className="ss-primary-grid">
        <Panel eyebrow="RISK PROFILE" title="Portfolio risk assessment">
          <div className="ss-risk-score"><div><strong>32</strong><span>/100</span></div><span className="ss-signal neutral">Moderate</span></div>
          <div className="ss-risk-track"><span style={{ width: "32%" }} /></div>
          <div className="ss-risk-scale"><span>Lower risk</span><span>Higher risk</span></div>
          <p className="ss-muted ss-risk-description">Illustrative risk score only. This is not a validated risk model or investment recommendation.</p>
        </Panel>
        <Panel eyebrow="POLICY MONITOR" title="Control checks">
          {[
            ["Position concentration", "Within sample threshold", "Passed"],
            ["Sector exposure", "Review recommended", "Review"],
            ["Portfolio drawdown", "No sample breach", "Passed"],
            ["Liquidity assessment", "Sample check", "Passed"],
          ].map(([name, detail, status]) => (
            <div className="ss-risk-check" key={name}>
              {status === "Passed" ? <CheckCircle2 size={17} /> : <AlertTriangle size={17} />}
              <div><strong>{name}</strong><span>{detail}</span></div>
              <b className={status === "Passed" ? "ss-positive" : "ss-warning"}>{status}</b>
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

/* DECISION LEDGER */

function LedgerPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const filters = ["All", "Research", "Risk assessment", "Portfolio", "Quant analysis"];
  const filtered = ledgerItems.filter(item => filter === "All" || item.type === filter);

  return (
    <>
      <PageHeading eyebrow="AUDIT & VERIFIABILITY" title="Decision ledger" description="Review the history of analytical decisions, agent activity and evidence records." action={<button className="ss-secondary-button"><Database size={14} /> Export records</button>} />
      <DemoNotice />

      <section className="ss-metrics-grid">
        <Metric label="TOTAL RECORDS" value="04" change="Sample ledger entries" icon={Database} />
        <Metric label="COMPLETED" value="03" change="Illustrative records" icon={CheckCircle2} />
        <Metric label="RISK CHECKS" value="01" change="Illustrative records" icon={ShieldCheck} />
        <Metric label="VERIFICATION" value="Preview" change="Blockchain not connected" icon={LockKeyhole} />
      </section>

      <Panel eyebrow="AUDIT TRAIL" title="Recorded decisions" action={<span className="ss-muted">{filtered.length} records</span>}>
        <div className="ss-ledger-filters">
          {filters.map(item => <button key={item} className={filter === item ? "selected" : ""} onClick={() => setFilter(item)}>{item}</button>)}
        </div>
        <div className="ss-ledger-list">
          {filtered.map(item => (
            <div className="ss-ledger-entry" key={item.id}>
              <button className="ss-ledger-entry-main" onClick={() => setSelected(selected === item.id ? null : item.id)}>
                <div className="ss-ledger-icon"><Database size={17} /></div>
                <div className="ss-ledger-info"><strong>{item.title}</strong><span>{item.id} Â· {item.agent} Â· {item.asset}</span></div>
                <span className="ss-ledger-time">{item.time}</span>
                <span className="ss-signal positive">{item.status}</span>
                <ChevronDown size={15} />
              </button>
              {selected === item.id && (
                <div className="ss-ledger-details">
                  <div><span>Record reference</span><strong>{item.id}</strong></div>
                  <div><span>Record category</span><strong>{item.type}</strong></div>
                  <div><span>Evidence status</span><strong>Sample record only</strong></div>
                  <div><span>On-chain transaction</span><strong>Not yet submitted</strong></div>
                  <p>This is a demonstration ledger entry. It does not represent a cryptographically verified or blockchain-published decision.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Panel>

      <div className="ss-info-strip"><LockKeyhole size={18} /><div><strong>Verification layer</strong><p>Blockchain transaction submission, evidence hashing and on-chain verification are not connected in this preview.</p></div></div>
    </>
  );
}

function DashboardContent({ page, period, setPeriod }) {
  switch (page) {
    case "research": return <ResearchPage />;
    case "portfolio": return <PortfolioPage />;
    case "agents": return <AgentsPage />;
    case "risk": return <RiskPage />;
    case "ledger": return <LedgerPage />;
    default: return <OverviewPage period={period} setPeriod={setPeriod} />;
  }
}

export default function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [period, setPeriod] = useState("1M");
  const location = useLocation();

  const page = location.pathname.split("/")[2] || "overview";
  const current = navigation.find(item => item.path === location.pathname);
  const pageLabel = current?.label || "Overview";

  return (
    <div className="ss-dashboard">
      <Sidebar mobileOpen={mobileOpen} closeMobile={() => setMobileOpen(false)} />

      <main className="ss-main">
        <header className="ss-topbar">
          <div className="ss-topbar-left">
            <button className="ss-mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu size={20} /></button>
            <div className="ss-breadcrumb">Workspace <span>/</span> <strong>{pageLabel}</strong></div>
          </div>
          <div className="ss-topbar-actions">
            <div className="ss-demo-badge"><span /> DEMO DATA</div>
            <button className="ss-icon-button" aria-label="Search"><Search size={17} /></button>
            <button className="ss-icon-button" aria-label="Notifications"><Bell size={17} /></button>
            <button className="ss-icon-button" aria-label="Settings"><Settings2 size={17} /></button>
          </div>
        </header>

        <div className="ss-dashboard-content">
          <DashboardContent page={page} period={period} setPeriod={setPeriod} />
          <footer className="ss-dashboard-footer">
            <span>STOCKSENTRY INTELLIGENCE TERMINAL</span>
            <span><span className="ss-status-dot" /> PREVIEW ENVIRONMENT</span>
          </footer>
        </div>
      </main>
    </div>
  );
}

