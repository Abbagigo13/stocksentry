
# StockSentry — System Architecture

## 1. Purpose

This document describes the intended technical architecture of StockSentry, an equity intelligence platform combining research, quantitative analysis, portfolio intelligence, risk oversight, specialized AI agents and verifiable decision records.

The architecture separates the user interface, API, analytical services, persistence layer and external integrations.

## 2. Architectural Principles

- Modular services with clearly defined responsibilities.
- Independent frontend and backend deployment.
- API-first communication between application layers.
- Persistent storage for important analytical records.
- Structured and validated agent inputs and outputs.
- Separation between market data, analysis and presentation.
- Traceability of analytical decisions.
- Secure management of external credentials.

## 3. High-Level Architecture

```text
                 USER
                   |
                   v
           REACT + VITE UI
                   |
             HTTPS / JSON
                   |
                   v
             EXPRESS API
                   |
       +-----------+-----------+
       |           |           |
       v           v           v
   Research    Portfolio     Risk
   Module      Module       Module
       |           |           |
       +-----------+-----------+
                   |
                   v
           AGENT ORCHESTRATOR
                   |
       +-----------+-----------+
       |           |           |
       v           v           v
    Research     Quant      Portfolio
     Agent       Agent       Agent
                   |
                   v
              Risk Guardian
                   |
                   v
             ANALYSIS OUTPUT
                   |
          +--------+--------+
          |                 |
          v                 v
      PostgreSQL       Evidence Service
          |                 |
          +--------+--------+
                   |
                   v
             Base Integration
```

This is the target architecture. The current implementation is a smaller foundation consisting of the frontend, Express API and initial backend dependencies.

## 4. Frontend Layer

Technology:

- React
- Vite
- React Router
- JavaScript
- CSS
- Lucide React

Responsibilities:

- Render product pages and dashboard interfaces.
- Display research reports and analytical outputs.
- Present portfolio and risk information.
- Show agent activity and execution status.
- Display decision and evidence records.
- Communicate with the backend using HTTP APIs.

The frontend should not contain private provider API keys or database credentials.

## 5. Backend Layer

Technology:

- Node.js
- Express
- Zod
- Helmet
- CORS middleware

Responsibilities:

- Receive and validate requests.
- Enforce application rules.
- Coordinate research and analytical modules.
- Manage portfolio and risk operations.
- Coordinate agent execution.
- Persist results.
- Return consistent API responses.

The backend is the trusted application layer between the frontend and external services.

## 6. Database Layer

Technology:

- PostgreSQL
- Drizzle ORM
- Postgres.js

The database is intended to store:

- Portfolios.
- Holdings.
- Research reports.
- Agent runs.
- Risk assessments.
- Decision records.

The database schema and migrations are part of the current backend development milestone.

## 7. Analytical Services

Analytical services will be responsible for:

- Company research.
- Financial metric evaluation.
- Quantitative calculations.
- Portfolio allocation analysis.
- Risk calculations.
- Evidence generation.

These services should be independent of the React interface.

## 8. Agent Orchestration

The orchestrator will coordinate specialized agents.

It will be responsible for:

- Receiving analytical tasks.
- Determining which agents are required.
- Passing validated inputs.
- Tracking execution status.
- Handling failures and timeouts.
- Collecting structured outputs.
- Triggering risk checks.
- Recording completed workflows.

Agents should not directly control the database or execute unrestricted external actions.

## 9. External Integrations

Planned integration categories:

- Market data providers.
- Financial information sources.
- AI model providers.
- Blockchain RPC services.
- Base network verification.

Each integration should have an isolated adapter so providers can be changed without rewriting the entire application.

## 10. Data Flow

A typical research workflow:

1. A user requests analysis of a stock symbol.
2. The frontend submits the request to the API.
3. The API validates the input.
4. The research module retrieves available company and market information.
5. The Research Agent prepares structured findings.
6. The Quant Agent evaluates available quantitative signals.
7. The Portfolio Agent may evaluate portfolio implications.
8. The Risk Guardian evaluates applicable risk constraints.
9. The backend stores the completed report and agent execution records.
10. A decision record is generated.
11. The frontend displays the result.

## 11. Deployment Architecture

Development:

- React/Vite frontend runs locally.
- Express API runs independently.
- PostgreSQL can be hosted by a managed provider.

Production target:

- Frontend deployed independently.
- Backend deployed as a Node.js service.
- Managed PostgreSQL database.
- External integrations configured through environment variables.
- HTTPS between deployed services.

## 12. Reliability

The system should support:

- Request validation.
- Consistent error responses.
- Timeouts for external providers.
- Retry policies where safe.
- Structured logs.
- Database connection management.
- Graceful shutdown.
- Health and readiness checks.

## 13. Current Implementation Boundary

Implemented:

- React frontend and dashboard.
- Express API foundation.
- Environment validation.
- Health route.
- CORS and Helmet.

In progress:

- PostgreSQL connection.
- Drizzle schema and migrations.
- Backend resource routes.

Planned:

- Analytical services.
- Agent orchestration.
- Live market data.
- Evidence verification.
- Base integration.
