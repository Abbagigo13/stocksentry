
# StockSentry — Database Design

## 1. Purpose

This document describes the planned PostgreSQL persistence model for StockSentry.

The database is responsible for preserving portfolio information, research outputs, agent execution history, risk assessments and decision records.

## 2. Technology

- PostgreSQL: relational database.
- Drizzle ORM: schema definition and typed database queries.
- Postgres.js: PostgreSQL driver.
- Drizzle Kit: migration generation and application.

## 3. Database Design Principles

- Use UUID primary keys for application records.
- Store timestamps with timezone information.
- Use appropriate numeric precision for financial quantities.
- Use foreign keys to maintain relationships.
- Index frequently queried fields.
- Store structured analytical output in JSONB where appropriate.
- Avoid storing secrets in ordinary application records.
- Preserve important decision history.

## 4. Planned Tables

### portfolios

Represents a portfolio workspace.

Fields:

- id: UUID primary key.
- name: Portfolio name.
- description: Optional description.
- currency: Portfolio reporting currency.
- status: Active or archived.
- created_at: Creation timestamp.
- updated_at: Last update timestamp.

### holdings

Represents an asset position inside a portfolio.

Fields:

- id: UUID primary key.
- portfolio_id: Reference to portfolios.
- symbol: Stock ticker.
- company_name: Company name.
- quantity: Position quantity.
- average_cost: Average acquisition cost.
- created_at: Creation timestamp.
- updated_at: Last update timestamp.

A portfolio can contain multiple holdings. A symbol should appear only once per portfolio in the initial model.

### research_reports

Stores company research and analytical reports.

Fields:

- id: UUID primary key.
- symbol: Stock ticker.
- company_name: Company name.
- status: Pending, processing, completed or failed.
- summary: Research summary.
- thesis: Investment thesis.
- analysis: Structured analytical output.
- sources: Supporting sources.
- overall_score: Optional analytical score.
- created_at: Creation timestamp.
- completed_at: Completion timestamp.

### agent_runs

Stores agent execution history.

Fields:

- id: UUID primary key.
- agent_name: Executing agent.
- task: Description of the task.
- status: Execution status.
- input: Structured input.
- output: Structured output.
- error: Error information.
- started_at: Execution start time.
- completed_at: Execution completion time.
- created_at: Creation timestamp.

### risk_assessments

Stores portfolio risk assessments.

Fields:

- id: UUID primary key.
- portfolio_id: Optional portfolio reference.
- risk_score: Numerical risk score.
- risk_level: Low, moderate, high or critical.
- summary: Assessment summary.
- metrics: Structured risk metrics.
- checks: Risk policy results.
- created_at: Creation timestamp.

### decision_records

Stores analytical decisions and their evidence metadata.

Fields:

- id: UUID primary key.
- record_type: Research, risk assessment, portfolio, quant analysis or agent action.
- title: Record title.
- description: Record description.
- symbol: Related ticker, if applicable.
- agent_name: Responsible agent, if applicable.
- status: Record status.
- payload: Structured decision data.
- evidence_hash: Optional cryptographic evidence hash.
- transaction_hash: Optional blockchain transaction reference.
- verified_on_chain: Verification status.
- created_at: Creation timestamp.

## 5. Relationships

```text
PORTFOLIOS
    |
    | 1:N
    v
HOLDINGS

PORTFOLIOS
    |
    | 1:N
    v
RISK_ASSESSMENTS

RESEARCH_REPORTS
    |
    | Related to
    v
DECISION_RECORDS

AGENT_RUNS
    |
    | May generate
    v
DECISION_RECORDS
```

The initial schema does not yet define all possible foreign-key relationships between research, agents and decisions. Those relationships can be strengthened as workflows are implemented.

## 6. Financial Data Handling

Financial quantities should use PostgreSQL NUMERIC rather than floating-point types when exact decimal representation is required.

Examples:

- Share quantity.
- Average acquisition cost.
- Portfolio values.
- Analytical financial metrics.

Currency should be explicitly identified.

Historical prices and current market prices should not be confused.

## 7. JSONB Usage

JSONB is intended for flexible structured data such as:

- Research findings.
- Agent input and output.
- Risk metrics.
- Evidence metadata.
- Source references.

Important fields should remain relational columns when they require filtering, indexing or constraints.

## 8. Migrations

Database changes must be managed through Drizzle migrations.

Expected workflow:

1. Update the Drizzle schema.
2. Generate a migration.
3. Review generated SQL.
4. Apply the migration to the development database.
5. Verify the resulting tables.
6. Commit migration files to version control.

Commands:

```bash
npm run db:generate
npm run db:migrate
```

## 9. Backups and Retention

Production database backups should be enabled through the managed database provider.

Important decision records should have a defined retention policy.

Deletion and archival behavior should be designed carefully so historical evidence is not unintentionally destroyed.

## 10. Current Status

The database design is documented, and the PostgreSQL and Drizzle dependencies have been installed in the backend.

Database provisioning, connection verification and migration execution must be completed before the schema can be considered operational.
