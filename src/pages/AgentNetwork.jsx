
import React, { useState } from "react";
import {
  BrainCircuit,
  FileSearch,
  Wallet,
  ShieldCheck,
  Activity,
  CheckCircle2,
  ChevronDown,
  RefreshCw,
  Zap,
} from "lucide-react";

import {
  Metric,
  Panel,
  PageHeading,
  DemoNotice,
} from "../components/dashboard/DashboardUI.jsx";

const agents = [
  {
    name: "Research Agent",
    role: "Equity intelligence",
    status: "Ready",
    icon: FileSearch,
    description: "Collects company information, filings and market research.",
  },
  {
    name: "Quant Agent",
    role: "Quantitative analysis",
    status: "Ready",
    icon: Activity,
    description: "Evaluates quantitative signals and statistical models.",
  },
  {
    name: "Portfolio Agent",
    role: "Portfolio construction",
    status: "Idle",
    icon: Wallet,
    description: "Evaluates allocation scenarios and portfolio constraints.",
  },
  {
    name: "Risk Guardian",
    role: "Policy enforcement",
    status: "Monitoring",
    icon: ShieldCheck,
    description: "Monitors exposure, concentration and risk policies.",
  },
];

export default function AgentNetwork() {
  const [expanded, setExpanded] = useState("Research Agent");

  return (
    <>
      <PageHeading
        eyebrow="AUTONOMOUS INTELLIGENCE"
        title="Agent network"
        description="Inspect the specialist agents responsible for research, analysis, portfolio construction and oversight."
        action={
          <button className="ss-secondary-button">
            <RefreshCw size={14} />
            Refresh status
          </button>
        }
      />

      <DemoNotice />

      <section className="ss-metrics-grid">
        <Metric label="REGISTERED AGENTS" value="04" change="Configured agents" icon={BrainCircuit} />
        <Metric label="READY" value="02" change="Demo status" icon={CheckCircle2} />
        <Metric label="MONITORING" value="01" change="Demo status" icon={Activity} />
        <Metric label="TASKS COMPLETED" value="18" change="Illustrative count" icon={Zap} />
      </section>

      <Panel eyebrow="AGENT DIRECTORY" title="Specialist agents">
        <div className="ss-agent-directory">
          {agents.map((agent) => {
            const Icon = agent.icon;
            const isExpanded = expanded === agent.name;

            return (
              <div
                className={`ss-agent-card ${isExpanded ? "expanded" : ""}`}
                key={agent.name}
              >
                <button
                  className="ss-agent-card-main"
                  onClick={() =>
                    setExpanded(isExpanded ? null : agent.name)
                  }
                >
                  <div className="ss-agent-icon">
                    <Icon size={20} />
                  </div>

                  <div className="ss-agent-info">
                    <strong>{agent.name}</strong>
                    <span>{agent.role}</span>
                  </div>

                  <span className={`ss-agent-status ${agent.status.toLowerCase()}`}>
                    <i />
                    {agent.status}
                  </span>

                  <ChevronDown size={16} />
                </button>

                {isExpanded && (
                  <div className="ss-agent-details">
                    <p>{agent.description}</p>
                    <div>
                      <span>Execution mode</span>
                      <strong>Preview / Demo</strong>
                    </div>
                    <div>
                      <span>Last activity</span>
                      <strong>16 Nov 2026</strong>
                    </div>
                    <div>
                      <span>Connection</span>
                      <strong>Not connected to live agent runtime</strong>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Panel>

      <div className="ss-info-strip">
        <BrainCircuit size={18} />
        <div>
          <strong>Agent execution environment</strong>
          <p>
            This interface currently displays configured agent concepts and
            sample statuses. No autonomous live execution is being claimed.
          </p>
        </div>
      </div>
    </>
  );
}
