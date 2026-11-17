
# StockSentry — External Integrations

## 1. Purpose

This document describes how StockSentry will connect to external services.

Integrations provide market information, financial research, AI capabilities, database infrastructure and optional blockchain verification.

## 2. Integration Principles

- Keep provider integrations isolated.
- Never expose private credentials in the frontend.
- Normalize external responses.
- Validate retrieved data.
- Apply request timeouts.
- Handle rate limits.
- Cache data where appropriate.
- Track data source and retrieval timestamps.
- Make providers replaceable where practical.
- Clearly communicate provider failures.

## 3. Market Data Providers

Purpose:

Supply the financial and market information required by research, quantitative analysis and portfolio intelligence.

Potential capabilities:

- Stock quotes.
- Historical prices.
- Company profiles.
- Financial statements.
- Financial ratios.
- Corporate events.
- Market news.

A provider has not yet been selected or connected.

The selected provider must be evaluated based on:

- API availability.
- Market coverage.
- Historical data depth.
- Rate limits.
- Pricing.
- Licensing and redistribution restrictions.
- Data quality.
- Reliability.

## 4. AI Model Providers

Purpose:

Provide language and reasoning capabilities to specialized agents.

Expected uses:

- Company research summaries.
- Financial document interpretation.
- Research synthesis.
- Investment thesis preparation.
- Explanation of quantitative findings.
- Structured analytical output.

AI models should not be treated as authoritative market data providers.

Important financial values must come from validated data sources or independently calculated results.

Provider API keys must remain on the backend.

No AI provider is currently connected to the StockSentry backend.

## 5. PostgreSQL Infrastructure

Purpose:

Persist application data.

Planned integration:

- PostgreSQL database.
- Postgres.js connection driver.
- Drizzle ORM.
- Drizzle migrations.

The database provider can be changed without changing the application's database model.

Development and production database credentials must remain separate.

## 6. Base Network Integration

Purpose:

Provide optional on-chain verification of analytical evidence.

Planned workflow:

1. Create a decision record.
2. Prepare a canonical evidence payload.
3. Generate a cryptographic hash.
4. Submit the hash through a supported Base integration.
5. Store the resulting transaction reference.
6. Verify the transaction and evidence relationship.
7. Display verification status in the Decision Ledger.

The application should not place private research data or confidential user information directly on-chain.

A blockchain transaction does not establish that an investment conclusion is correct.

Base integration is planned and not currently connected.

## 7. External Service Adapters

Each external provider should be accessed through an isolated service module.

Suggested structure:

```text
server/
└── src/
    ├── integrations/
    │   ├── market-data/
    │   │   ├── market-data.adapter.js
    │   │   └── market-data.service.js
    │   │
    │   ├── ai/
    │   │   ├── ai.adapter.js
    │   │   └── ai.service.js
    │   │
    │   └── blockchain/
    │       ├── base.adapter.js
    │       └── verification.service.js
    │
    └── ...
```

This is the proposed structure and can be introduced as integrations are implemented.

## 8. Reliability

External integrations should support:

- Timeouts.
- Retry policies where safe.
- Rate-limit handling.
- Response validation.
- Error classification.
- Structured logs.
- Usage monitoring.

Repeated provider failures should not be hidden from users.

## 9. Data Provenance

Market and research data should preserve:

- Provider name.
- External source identifier where available.
- Retrieval timestamp.
- Relevant data timestamp.
- Data freshness.
- Any important transformation applied.

This is particularly important for financial research and later evidence verification.

## 10. Integration Testing

Each integration should be tested independently.

Test cases should include:

- Successful provider response.
- Invalid provider response.
- Authentication failure.
- Timeout.
- Rate limit.
- Network failure.
- Missing information.
- Unexpected data formats.

Tests should not depend entirely on live external services.

## 11. Current Status

Implemented:

- Backend HTTP infrastructure.
- Environment variable configuration.
- PostgreSQL and Drizzle dependencies.

In progress:

- PostgreSQL provisioning and connection.

Planned:

- Market data integration.
- AI model integration.
- Agent service integrations.
- Base network integration.
- Evidence verification.
