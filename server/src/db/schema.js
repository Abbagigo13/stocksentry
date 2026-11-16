
import {
  pgTable,
  pgEnum,
  uuid,
  varchar,
  text,
  numeric,
  integer,
  boolean,
  jsonb,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";

/* ENUMS */

export const portfolioStatusEnum = pgEnum("portfolio_status", [
  "active",
  "archived",
]);

export const researchStatusEnum = pgEnum("research_status", [
  "pending",
  "processing",
  "completed",
  "failed",
]);

export const agentStatusEnum = pgEnum("agent_status", [
  "idle",
  "running",
  "completed",
  "failed",
]);

export const riskLevelEnum = pgEnum("risk_level", [
  "low",
  "moderate",
  "high",
  "critical",
]);

export const decisionTypeEnum = pgEnum("decision_type", [
  "research",
  "risk_assessment",
  "portfolio",
  "quant_analysis",
  "agent_action",
]);

/* PORTFOLIOS */

export const portfolios = pgTable(
  "portfolios",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: varchar("name", { length: 120 }).notNull(),
    description: text("description"),
    currency: varchar("currency", { length: 3 }).notNull().default("USD"),
    status: portfolioStatusEnum("status").notNull().default("active"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("portfolios_status_idx").on(table.status),
  ]
);

/* HOLDINGS */

export const holdings = pgTable(
  "holdings",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    portfolioId: uuid("portfolio_id")
      .notNull()
      .references(() => portfolios.id, { onDelete: "cascade" }),
    symbol: varchar("symbol", { length: 20 }).notNull(),
    companyName: varchar("company_name", { length: 200 }),
    quantity: numeric("quantity", { precision: 24, scale: 8 })
      .notNull()
      .default("0"),
    averageCost: numeric("average_cost", { precision: 20, scale: 6 })
      .notNull()
      .default("0"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("holdings_portfolio_idx").on(table.portfolioId),
    uniqueIndex("holdings_portfolio_symbol_unique").on(
      table.portfolioId,
      table.symbol
    ),
  ]
);

/* RESEARCH REPORTS */

export const researchReports = pgTable(
  "research_reports",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    symbol: varchar("symbol", { length: 20 }).notNull(),
    companyName: varchar("company_name", { length: 200 }),
    status: researchStatusEnum("status").notNull().default("pending"),
    summary: text("summary"),
    thesis: text("thesis"),
    analysis: jsonb("analysis"),
    sources: jsonb("sources"),
    overallScore: numeric("overall_score", { precision: 6, scale: 2 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    completedAt: timestamp("completed_at", { withTimezone: true }),
  },
  (table) => [
    index("research_symbol_idx").on(table.symbol),
    index("research_status_idx").on(table.status),
    index("research_created_at_idx").on(table.createdAt),
  ]
);

/* AGENT RUNS */

export const agentRuns = pgTable(
  "agent_runs",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    agentName: varchar("agent_name", { length: 100 }).notNull(),
    task: text("task").notNull(),
    status: agentStatusEnum("status").notNull().default("idle"),
    input: jsonb("input"),
    output: jsonb("output"),
    error: text("error"),
    startedAt: timestamp("started_at", { withTimezone: true }),
    completedAt: timestamp("completed_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("agent_runs_name_idx").on(table.agentName),
    index("agent_runs_status_idx").on(table.status),
    index("agent_runs_created_at_idx").on(table.createdAt),
  ]
);

/* RISK ASSESSMENTS */

export const riskAssessments = pgTable(
  "risk_assessments",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    portfolioId: uuid("portfolio_id").references(() => portfolios.id, {
      onDelete: "set null",
    }),
    riskScore: numeric("risk_score", { precision: 6, scale: 2 }),
    riskLevel: riskLevelEnum("risk_level").notNull(),
    summary: text("summary"),
    metrics: jsonb("metrics"),
    checks: jsonb("checks"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("risk_portfolio_idx").on(table.portfolioId),
    index("risk_created_at_idx").on(table.createdAt),
  ]
);

/* DECISION LEDGER */

export const decisionRecords = pgTable(
  "decision_records",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    recordType: decisionTypeEnum("record_type").notNull(),
    title: varchar("title", { length: 200 }).notNull(),
    description: text("description"),
    symbol: varchar("symbol", { length: 20 }),
    agentName: varchar("agent_name", { length: 100 }),
    status: varchar("status", { length: 40 }).notNull().default("recorded"),
    payload: jsonb("payload"),
    evidenceHash: varchar("evidence_hash", { length: 128 }),
    transactionHash: varchar("transaction_hash", { length: 128 }),
    verifiedOnChain: boolean("verified_on_chain").notNull().default(false),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("decision_type_idx").on(table.recordType),
    index("decision_symbol_idx").on(table.symbol),
    index("decision_created_at_idx").on(table.createdAt),
  ]
);
