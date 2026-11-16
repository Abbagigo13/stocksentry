
import React from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  LockKeyhole,
} from "lucide-react";

import { holdings } from "./dashboardData.js";

export function Metric({
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

export function Panel({ eyebrow, title, children, action }) {
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

export function PageHeading({
  eyebrow,
  title,
  description,
  action,
}) {
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

export function DemoNotice() {
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

export function PerformanceChart() {
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

export function HoldingsTable() {
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
