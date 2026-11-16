
import React from "react";
import {
  ArrowDownRight,
  ChevronDown,
  MoreHorizontal,
  X,
  LayoutDashboard,
  FileSearch,
  Wallet,
  BrainCircuit,
  ShieldCheck,
  Database,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigation = [
  { label: "Overview", icon: LayoutDashboard, path: "/app" },
  { label: "Research", icon: FileSearch, path: "/app/research" },
  { label: "Portfolio", icon: Wallet, path: "/app/portfolio" },
  { label: "Agents", icon: BrainCircuit, path: "/app/agents" },
  { label: "Risk Center", icon: ShieldCheck, path: "/app/risk" },
  { label: "Decision Ledger", icon: Database, path: "/app/ledger" },
];

export default function Sidebar({ mobileOpen, closeMobile }) {
  return (
    <>
      {mobileOpen && (
        <button
          className="ss-mobile-backdrop"
          onClick={closeMobile}
          aria-label="Close navigation"
        />
      )}

      <aside className={`ss-sidebar ${mobileOpen ? "ss-sidebar-open" : ""}`}>
        <div className="ss-brand">
          <span className="ss-brand-icon">
            <span />
          </span>

          <span>
            Stock<span>Sentry</span>
          </span>

          <button
            className="ss-mobile-close"
            onClick={closeMobile}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <div className="ss-workspace">
          <div className="ss-workspace-icon">S</div>

          <div>
            <strong>Personal Workspace</strong>
            <span>Research environment</span>
          </div>

          <ChevronDown size={14} />
        </div>

        <div className="ss-nav-label">WORKSPACE</div>

        <nav className="ss-navigation">
          {navigation.map(({ label, icon: Icon, path }) => (
            <NavLink
              key={label}
              to={path}
              end={path === "/app"}
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive ? "ss-nav-link active" : "ss-nav-link"
              }
            >
              <Icon size={17} strokeWidth={1.7} />
              <span>{label}</span>

              {label === "Risk Center" && (
                <span className="ss-nav-indicator" />
              )}
            </NavLink>
          ))}
        </nav>

        <div className="ss-sidebar-bottom">
          <div className="ss-system-status">
            <span className="ss-status-dot" />

            <div>
              <strong>System status</strong>
              <span>Preview environment</span>
            </div>
          </div>

          <NavLink to="/" className="ss-nav-link">
            <ArrowDownRight size={17} />
            <span>Back to website</span>
          </NavLink>

          <div className="ss-user">
            <div className="ss-avatar">SS</div>

            <div>
              <strong>StockSentry User</strong>
              <span>Personal account</span>
            </div>

            <MoreHorizontal size={17} />
          </div>
        </div>
      </aside>
    </>
  );
}
