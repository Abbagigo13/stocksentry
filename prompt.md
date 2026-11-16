# STOCKSENTRY

## Autonomous Equity Intelligence & Portfolio Risk OS

**Competition:** Base Stocksmaxxing 2026  
**Track:** Agentic Stock Finance  
**Build model:** Solo developer  
**Project status:** Proposed  
**Target submission:** December 5, 2026  
**Version:** 1.0

---

## PART 1 — PRODUCT STRATEGY

## 1.1 Product vision

StockSentry is a multi-agent financial intelligence platform that researches tokenized equities, evaluates portfolio opportunities, detects risk and autonomously manages simulated portfolio strategies with verifiable decision records on Base.

The system brings together financial research, quantitative analysis, portfolio construction, risk management and blockchain verification.

It is designed to demonstrate how autonomous financial agents can collaborate while remaining accountable and constrained by explicit policies.

## 1.2 The problem

Today's tokenized-stock applications can provide asset listings, prices and trading interfaces, but users still need to independently:

- Research companies and financial developments.
- Interpret market data.
- Compare investment opportunities.
- Evaluate portfolio concentration.
- Monitor market and portfolio risks.
- Understand why a portfolio decision was made.
- Verify whether an agent actually performed its claimed actions.

AI tools can help with research, but unstructured AI-generated recommendations are difficult to audit and may contain fabricated financial information.

## 1.3 Our solution

StockSentry introduces a coordinated financial agent system.

Instead of asking one AI model to make every decision, StockSentry distributes responsibilities across specialized agents.

Each agent produces structured outputs. A central orchestrator coordinates them, validates the outputs and enforces portfolio policies before any action is approved.

## 1.4 Target users

1. DeFi users exploring tokenized equities.
2. AI-agent developers building financial applications.
3. Portfolio managers experimenting with automated research.
4. Onchain investors who want transparent decision histories.
5. Developers building agentic financial infrastructure.

## 1.5 Competitive differentiation

| Typical application | StockSentry |
| --- | --- |
| Displays stock prices | Interprets multiple financial data sources |
| Single AI assistant | Coordinated specialist agents |
| Generic AI suggestions | Structured research with evidence |
| Manual portfolio monitoring | Automated risk monitoring |
| Black-box recommendations | Traceable decision reasoning |
| Ordinary activity history | Onchain-verifiable decision receipts |
| Unrestricted agent behavior | Policy-constrained autonomy |

## 1.6 Core value proposition

**Research intelligently. Allocate responsibly. Verify everything.**

StockSentry should be judged by what its agents actually do, not how impressive their AI-generated explanations sound.

## 1.7 Competition strategy

Primary target: Agentic Stock Finance.

The project should demonstrate three core capabilities:

1. Agents independently research and analyze tokenized stocks.
2. Agents construct and rebalance a simulated portfolio under explicit risk constraints.
3. Decisions and their evidence are independently verifiable through Base.

Secondary partner opportunities:

- Bankr: explore agent infrastructure, mentorship and ecosystem integration.
- BaseStonk: investigate API access, agent integration and launch advisory.

Partner benefits are opportunities, not guaranteed integrations or awards.

---

## PART 2 — PRODUCT REQUIREMENTS DOCUMENT

## 2.1 Product objectives

The MVP must:

- Retrieve tokenized-stock reference data.
- Identify supported assets using contract addresses.
- Display normalized stock-equivalent balances and multipliers.
- Run multiple specialist financial agents.
- Generate structured investment research.
- Construct simulated portfolios.
- Detect risk and reject policy violations.
- Execute simulated rebalancing.
- Generate an auditable decision report.
- Record decision hashes on Base.

## 2.2 Functional requirements

### FR-01: Asset Intelligence

The platform must retrieve tokenized-stock records from the official Base Tokenized Stocks API.

Required information:

- Asset name.
- Symbol.
- Contract address.
- Decimals.
- Token supply.
- Current multiplier.
- NAV/reference value.
- NAV update timestamp.
- ISIN, where available.
- Asset metadata.

Requirements:

- Support API pagination.
- Cache API responses.
- Validate token contract addresses.
- Handle unavailable fields.
- Detect stale reference values.
- Display the distinction between NAV and market execution price.

### FR-02: AI Research Agent

The Research Agent gathers information about selected companies.

Responsibilities:

- Company research.
- Relevant financial news.
- Market developments.
- Business fundamentals.
- Source collection.
- Evidence extraction.

Output:

- Research summary.
- Key developments.
- Bullish factors.
- Bearish factors.
- Supporting sources.
- Confidence score.
- Data timestamp.

Every material claim must have supporting evidence or be explicitly marked unverified.

### FR-03: Quantitative Analyst Agent

Responsibilities:

- Analyze historical price series.
- Calculate returns.
- Measure volatility.
- Calculate moving averages.
- Identify momentum.
- Compare assets.
- Produce quantitative signals.

Calculations must be performed by deterministic code, not invented by the language model.

### FR-04: Portfolio Manager Agent

Responsibilities:

- Receive research and quantitative outputs.
- Construct proposed portfolios.
- Calculate allocation weights.
- Compare existing and proposed portfolios.
- Generate rebalancing plans.

The agent must respect configured allocation limits.

### FR-05: Risk Guardian Agent

This agent has veto authority.

Responsibilities:

- Monitor asset concentration.
- Calculate portfolio volatility.
- Measure drawdowns.
- Detect excessive exposure.
- Check stale data.
- Validate proposed transactions.
- Reject unsafe portfolio changes.

Initial configurable policy:

- Maximum single-asset allocation: 25%.
- Maximum portfolio allocation to one sector: 40%.
- Maximum simulated rebalance size: 10% of portfolio value.
- Reject decisions based on stale or missing critical data.
- Require sufficient evidence before accepting an agent proposal.

These are initial product defaults, not investment recommendations.

### FR-06: Execution Simulator Agent

Responsibilities:

- Receive an approved portfolio plan.
- Generate simulated buy/sell orders.
- Apply configurable execution costs.
- Calculate resulting portfolio allocations.
- Record before-and-after balances.
- Produce a simulated execution report.

The MVP must clearly distinguish simulated execution from actual blockchain transactions.

### FR-07: Audit Agent

Responsibilities:

- Collect outputs from all agents.
- Generate a decision summary.
- Calculate a canonical decision hash.
- Record the hash on Base.
- Retrieve and verify the transaction.
- Display the transaction reference.

No personal information or confidential research payloads should be placed onchain.

### FR-08: Agent Orchestrator

Responsibilities:

- Start research workflows.
- Dispatch tasks to specialist agents.
- Validate agent responses.
- Manage workflow states.
- Enforce timeouts.
- Handle retries.
- Prevent duplicate execution.
- Maintain complete execution logs.

### FR-09: Portfolio Dashboard

The dashboard must display:

- Portfolio value.
- Asset allocation.
- Portfolio performance.
- Risk score.
- Exposure by asset.
- Recent agent activity.
- Active research sessions.
- Pending proposals.
- Approved and rejected decisions.
- Onchain audit records.

### FR-10: Human approval

The user must be able to:

- Review portfolio proposals.
- Approve or reject decisions.
- Modify allocation constraints.
- Pause agents.
- Inspect evidence.
- Review simulated execution results.

No autonomous financial transaction should be signed without the required explicit authorization.

---

## PART 3 — SYSTEM ARCHITECTURE

## 3.1 Architecture philosophy

Use a modular monolith with independent agent modules.

Do not introduce unnecessary microservices, Kubernetes or complex distributed infrastructure for a solo competition project.

The system should have clear module boundaries so that individual agents can eventually be separated into independent services.

## 3.2 High-level architecture

```text
                   USER
                    |
                    v
          STOCKSENTRY FRONTEND
             React + Vite
                    |
                    v
              API GATEWAY
             FastAPI Backend
                    |
          +---------+----------+
          |                    |
          v                    v
    AGENT ORCHESTRATOR    DATA SERVICES
          |                    |
    +-----+------+       +-----+------+
    |     |      |       |            |
    v     v      v       v            v
 Research Quant Portfolio Base API  Market Data
    |     |      |
    +-----+------+
          |
          v
     RISK GUARDIAN
          |
          v
   POLICY VALIDATION
          |
          v
  EXECUTION SIMULATOR
          |
          v
      AUDIT AGENT
          |
          v
    DECISION HASH
          |
          v
      BASE NETWORK
          |
          v
   VERIFICATION SERVICE
```

## 3.3 Agent architecture

### Agent 1 — Research Agent

Input: Asset identifier.

Output: Structured company research.

Tools:

- Financial news search.
- Company information retrieval.
- Research source extraction.
- Evidence validation.

### Agent 2 — Quant Agent

Input: Historical market data.

Output: Quantitative analysis.

Tools:

- Pandas.
- NumPy.
- Technical indicator calculations.
- Historical returns.

### Agent 3 — Portfolio Agent

Input: Research and quantitative signals.

Output: Portfolio allocation proposal.

Tools:

- Portfolio optimization.
- Allocation calculations.
- Rebalancing comparisons.

### Agent 4 — Risk Guardian

Input: Proposed portfolio.

Output: Risk assessment and approval/rejection.

Tools:

- Concentration analysis.
- Volatility calculations.
- Drawdown calculations.
- Policy enforcement.

### Agent 5 — Execution Agent

Input: Approved simulated portfolio plan.

Output: Simulated execution report.

Tools:

- Paper trading engine.
- Simulated order book.
- Execution cost calculations.

### Agent 6 — Audit Agent

Input: Completed decision workflow.

Output:

- Decision record.
- SHA-256 digest.
- Blockchain transaction reference.
- Verification result.

## 3.4 Agent communication protocol

Every agent should communicate through validated JSON schemas.

Example:

```json
{
  "agent": "risk_guardian",
  "workflow_id": "workflow_001",
  "status": "rejected",
  "decision": "reject",
  "reason_codes": [
    "ASSET_CONCENTRATION_EXCEEDED"
  ],
  "metrics": {
    "max_asset_weight": 0.31,
    "allowed_asset_weight": 0.25
  },
  "timestamp": "2026-11-16T10:00:00Z"
}
```

Use Pydantic to validate every response.

The LLM must never be trusted to enforce risk limits by itself.

## 3.5 Suggested technology stack

| Component | Technology |
| --- | --- |
| Frontend | React + Vite + TypeScript |
| Styling | Tailwind CSS |
| Motion | Framer Motion |
| Icons | Lucide React |
| Charts | Recharts |
| Backend | Python + FastAPI |
| Agent framework | Modular Python orchestration |
| Validation | Pydantic |
| Database | PostgreSQL |
| ORM | SQLAlchemy |
| Migrations | Alembic |
| Cache | Redis |
| AI | Tool-calling LLM API |
| Market data | Base Tokenized Stocks API + selected data providers |
| Blockchain | Base |
| Smart contracts | Solidity |
| Contract development | Foundry |
| EVM interaction | viem |
| Wallet connection | Wagmi |
| Frontend deployment | Vercel |
| Backend deployment | Railway |

Keep the backend modular. Avoid adding a second backend or a separate Node.js service unless a demonstrated requirement demands it.

## 3.6 Blockchain architecture

Deploy a small StockSentry Decision Registry contract.

Its responsibility is to record:

- Decision hash.
- Workflow identifier hash.
- Agent version.
- Timestamp.
- Decision type.

It must not store private research documents, personal information or complete portfolio data.

Suggested interface:

```solidity
interface IDecisionRegistry {
    event DecisionRecorded(
        bytes32 indexed decisionHash,
        bytes32 indexed workflowHash,
        address indexed recorder,
        uint256 timestamp
    );

    function recordDecision(
        bytes32 decisionHash,
        bytes32 workflowHash
    ) external;
}
```

Implementation requirements:

- Restrict recording to authorized application wallets.
- Prevent accidental duplicate submissions where appropriate.
- Emit verifiable events.
- Use deterministic hashing.
- Add tests for access control and event emission.

Deployment strategy:

- Use Base Sepolia for the competition demonstration.
- Use Base mainnet reference data where accessible.
- Never claim that a Base Sepolia receipt represents an actual stock trade.

## 3.7 Data architecture

### Core database entities

#### users

- id
- wallet_address
- created_at

### assets

- id
- contract_address
- symbol
- name
- decimals
- multiplier
- nav_price
- nav_updated_at
- metadata
- updated_at

### portfolios

- id
- user_id
- name
- base_currency
- created_at

### portfolio_positions

- id
- portfolio_id
- asset_id
- quantity
- average_cost
- updated_at

### agent_runs

- id
- workflow_id
- agent_name
- status
- input_hash
- output_json
- started_at
- completed_at

### research_reports

- id
- asset_id
- workflow_id
- findings
- sources
- confidence
- created_at

### portfolio_proposals

- id
- portfolio_id
- workflow_id
- proposed_allocations
- risk_status
- approval_status
- created_at

### simulated_orders

- id
- portfolio_id
- proposal_id
- asset_id
- side
- quantity
- simulated_price
- execution_status
- created_at

### decision_records

- id
- workflow_id
- decision_hash
- workflow_hash
- transaction_hash
- block_number
- verification_status
- created_at

### risk_events

- id
- portfolio_id
- workflow_id
- severity
- reason_code
- metrics
- created_at

## 3.8 API design

### Asset endpoints

```text
GET /api/v1/assets
GET /api/v1/assets/{address}
GET /api/v1/assets/{address}/history
```

### Agent endpoints

```text
POST /api/v1/agents/research
POST /api/v1/agents/analyze
POST /api/v1/agents/portfolio
POST /api/v1/agents/risk-check
GET  /api/v1/agents/runs
GET  /api/v1/agents/runs/{id}
```

### Portfolio endpoints

```text
GET  /api/v1/portfolios
POST /api/v1/portfolios
GET  /api/v1/portfolios/{id}
POST /api/v1/portfolios/{id}/simulate
GET  /api/v1/portfolios/{id}/performance
```

### Audit endpoints

```text
POST /api/v1/audit/record
GET  /api/v1/audit/records
GET  /api/v1/audit/verify/{hash}
```

### System endpoints

```text
GET /health
GET /api/v1/system/status
GET /api/v1/system/metrics
```

---

## PART 4 — SECURITY AND RELIABILITY

## 4.1 Security principles

1. Never expose API keys in frontend code.
2. Never place private keys in source control.
3. Use environment variables for secrets.
4. Validate wallet signatures.
5. Use explicit transaction approval.
6. Validate all LLM outputs.
7. Sanitize external research content.
8. Apply rate limits.
9. Record agent activity.
10. Implement idempotency for execution workflows.

## 4.2 Financial safety

- No real trading in the initial MVP.
- No automatic transfers or unrestricted wallet signing.
- No leverage or borrowing.
- No derivatives or prediction-market functionality.
- No guarantee of investment returns.
- Clearly label simulations.
- Reject stale or missing critical price data.
- Treat external research and news as untrusted input.

## 4.3 Important data integrity rules

The Base API is reference data, not an execution venue.

The system must:

- Apply the current B20 multiplier.
- Distinguish raw token units from share-equivalent units.
- Monitor NAV update timestamps.
- Never present NAV as a guaranteed executable price.
- Never invent historical market data.
- Keep a record of data sources and retrieval timestamps.

---

## PART 5 — UI/UX DESIGN SYSTEM

## 5.1 Design direction

### Institutional Quant Terminal × AI Agent Command Center

Avoid generic SaaS cards, oversized gradients, excessive rounded containers and decorative animations.

The interface should feel like professional financial infrastructure.

## 5.2 Visual identity

- Background: deep navy.
- Primary surfaces: graphite and dark slate.
- Accent: electric blue.
- Positive indicators: restrained green.
- Negative indicators: controlled red.
- Typography: Inter or Geist.
- Icons: Lucide.
- Charts: precise, high-contrast financial visualizations.

## 5.3 Main application pages

### 1. Overview

- Portfolio summary.
- Market overview.
- Agent health.
- Recent decisions.
- Risk alerts.

### 2. Agent Command Center

- Agent status.
- Current task.
- Workflow execution timeline.
- Agent-to-agent messages.
- Failed and completed tasks.

### 3. Research Terminal

- Asset research.
- Company fundamentals.
- Research sources.
- Quantitative indicators.
- Evidence and confidence.

### 4. Portfolio Lab

- Asset allocations.
- Portfolio construction.
- Rebalancing proposals.
- Simulation controls.
- Performance analytics.

### 5. Risk Center

- Asset concentration.
- Portfolio volatility.
- Maximum drawdown.
- Policy violations.
- Risk history.

### 6. Audit Explorer

- Decision records.
- Agent workflow summaries.
- Decision hashes.
- Transaction hashes.
- Base block explorer links.

### 7. Settings

- Wallet.
- Agent permissions.
- Risk limits.
- Data providers.
- API configuration.

## 5.4 Loading and interaction

Implement:

- Skeleton loading.
- Streaming agent activity.
- Empty states.
- Error boundaries.
- Retry controls.
- Responsive layouts.
- Accessible contrast.
- Clear confirmation dialogs.

Never show fabricated live activity or pretend that an agent has completed an operation when it has not.

---

## PART 6 — IMPLEMENTATION ROADMAP

## November 16–17: Foundation

- Finalize product scope.
- Create GitHub repository.
- Initialize frontend.
- Initialize FastAPI backend.
- Configure PostgreSQL.
- Configure environment variables.
- Create database migrations.
- Set up project documentation.
- Connect the Base Tokenized Stocks API.

**Milestone:** Running full-stack application with real tokenized-stock reference data.

## November 18–19: Data and quantitative intelligence

- Implement asset discovery.
- Implement pagination and caching.
- Normalize token amounts.
- Apply B20 multipliers.
- Validate NAV timestamps.
- Implement historical data adapter.
- Build quantitative calculations.
- Create asset detail endpoints.

**Milestone:** Reliable asset intelligence layer.

## November 20–22: AI agent system

- Implement agent base class.
- Build Research Agent.
- Build Quant Agent.
- Build Portfolio Agent.
- Implement structured agent outputs.
- Build orchestration workflow.
- Add retry and failure handling.
- Save agent execution records.

**Milestone:** Multiple working agents collaborating on one research workflow.

## November 23–25: Risk and simulation

- Implement Risk Guardian.
- Build portfolio allocation engine.
- Implement policy validation.
- Build Execution Simulator.
- Implement simulated orders.
- Add before-and-after portfolio analysis.
- Test rejected proposals.

**Milestone:** End-to-end portfolio management simulation.

## November 26–27: Base integration

- Implement Decision Registry contract.
- Write Foundry tests.
- Deploy to Base Sepolia.
- Implement decision hashing.
- Connect wallet.
- Record decision receipts.
- Build transaction verification.

**Milestone:** Demonstrable onchain audit trail.

## November 28–30: Frontend integration

- Build Overview.
- Build Agent Command Center.
- Build Research Terminal.
- Build Portfolio Lab.
- Build Risk Center.
- Build Audit Explorer.
- Connect backend endpoints.
- Implement skeleton states and errors.

**Milestone:** Fully connected application.

## December 1–2: Testing and refinement

- Test full agent workflows.
- Test risk policy rejection.
- Test data freshness.
- Test database persistence.
- Test contract interactions.
- Test wallet approval.
- Run security checks.
- Fix critical defects.

**Milestone:** Stable competition-ready MVP.

## December 3: Documentation and deployment

- Deploy frontend.
- Deploy backend.
- Configure production database.
- Configure Redis.
- Write README.
- Write architecture documentation.
- Write agent workflow documentation.
- Publish API documentation.
- Verify public demo access.

**Milestone:** Publicly accessible project.

## December 4: Demo production

- Prepare realistic demonstration dataset.
- Record agent workflow.
- Demonstrate risk rejection.
- Demonstrate portfolio simulation.
- Demonstrate onchain receipt.
- Record video.
- Publish project announcement.

**Milestone:** Complete competition submission package.

## December 5: Submission

- Publish public X demo post.
- Tag @buildonbase.
- Complete official submission form.
- Verify submission receipt.
- Save all submission links.

**Milestone:** Competition entry submitted.

---

## PART 7 — ACCEPTANCE CRITERIA

The project is not complete merely because the frontend renders.

The following must work:

| Test | Expected result |
| --- | --- |
| Asset API integration | Real asset records retrieved |
| Pagination | Additional asset pages loaded |
| Multiplier handling | Correct share-equivalent conversion |
| Research Agent | Structured sourced research |
| Quant Agent | Deterministic calculated metrics |
| Portfolio Agent | Valid allocation proposal |
| Risk Guardian | Rejects policy violations |
| Execution Simulator | Produces simulated orders |
| Audit Agent | Produces deterministic decision hash |
| Base integration | Verified transaction receipt |
| Persistence | Workflow survives page refresh |
| Error handling | Failed tasks show meaningful errors |

## Final demonstration scenario

A user selects an asset such as NVDA.

1. Research Agent retrieves company information and relevant developments.
2. Quant Agent calculates historical performance and volatility.
3. Portfolio Agent proposes an allocation.
4. Risk Guardian checks concentration and portfolio constraints.
5. An intentionally unsafe allocation is rejected.
6. The Portfolio Agent generates a corrected proposal.
7. The user approves the simulated rebalancing.
8. Execution Simulator produces the resulting portfolio.
9. Audit Agent creates the decision hash.
10. The hash is recorded on Base Sepolia.
11. Audit Explorer verifies the transaction.

The demo should show the complete sequence, including the rejection. This proves that the system has meaningful safeguards rather than simply generating agreeable AI responses.

---

## PART 8 — POST-COMPETITION ROADMAP

After the competition:

## Phase 2 — Advanced intelligence

- Better historical data.
- More quantitative strategies.
- Agent performance benchmarking.
- Multi-model consensus.
- Advanced risk scenarios.

### Phase 3 — Agent infrastructure

- Independent agent identities.
- Agent-to-agent communication.
- x402 paid data access.
- Agent service marketplace.
- Usage metering.

### Phase 4 — Authorized execution

- Explore supported wallet integrations.
- Add explicit transaction authorization.
- Integrate eligible execution venues.
- Add transaction simulation.
- Add transaction monitoring.

Any real execution feature requires separate jurisdictional, regulatory, provider and security review.

---

## FINAL PRODUCT PRINCIPLE

StockSentry must not become another AI application that generates impressive financial text.

It must become a system where:

- Research is sourced.
- Calculations are reproducible.
- Agents have defined responsibilities.
- Risk policies are enforced by code.
- Simulations are honest.
- Transactions are authorized.
- Decisions are verifiable.

**The goal is not to build the biggest system. The goal is to demonstrate the most convincing autonomous financial workflow within the competition deadline.**
