
# StockSentry — API Documentation

## 1. Overview

The StockSentry backend exposes an HTTP REST API.

The API is responsible for communication between the frontend, application services, database and external integrations.

## 2. Base URL

Development:

```text
http://localhost:4000
```

API version prefix:

```text
/api/v1
```

Production URL will be configured during deployment.

## 3. Response Conventions

Successful responses should use a consistent structure.

Example:

```json
{
  "success": true,
  "data": {}
}
```

Error responses should use:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request contains invalid fields."
  }
}
```

## 4. Implemented Endpoints

### GET /

Returns basic API information.

Example:

```http
GET /
```

### GET /api/v1/health

Checks whether the API process is responding.

Example:

```http
GET /api/v1/health
```

Example response:

```json
{
  "success": true,
  "service": "StockSentry API",
  "status": "operational",
  "environment": "development",
  "timestamp": "2026-11-16T16:16:28.221Z",
  "uptime": 21,
  "database": "not_configured"
}
```

The current health route does not test PostgreSQL connectivity.

## 5. Planned API Modules

The following are planned API resources, not currently implemented endpoints.

### Portfolios

Intended operations:

```text
GET    /api/v1/portfolios
POST   /api/v1/portfolios
GET    /api/v1/portfolios/:id
PATCH  /api/v1/portfolios/:id
DELETE /api/v1/portfolios/:id
```

### Holdings

Intended operations:

```text
GET    /api/v1/portfolios/:id/holdings
POST   /api/v1/portfolios/:id/holdings
PATCH  /api/v1/holdings/:id
DELETE /api/v1/holdings/:id
```

### Research

Intended operations:

```text
GET    /api/v1/research
POST   /api/v1/research
GET    /api/v1/research/:id
```

### Agents

Intended operations:

```text
GET    /api/v1/agents
POST   /api/v1/agents/:name/run
GET    /api/v1/agents/runs
GET    /api/v1/agents/runs/:id
```

### Risk

Intended operations:

```text
GET    /api/v1/risk
POST   /api/v1/risk/assessments
GET    /api/v1/risk/assessments/:id
```

### Decision Ledger

Intended operations:

```text
GET    /api/v1/ledger
POST   /api/v1/ledger
GET    /api/v1/ledger/:id
```

### Market Data

Intended operations:

```text
GET    /api/v1/market/quote/:symbol
GET    /api/v1/market/history/:symbol
GET    /api/v1/market/company/:symbol
```

These routes require a market data provider integration.

## 6. Request Validation

Requests must be validated before processing.

Validation should cover:

- Required fields.
- Symbol formats.
- Numeric ranges.
- UUID identifiers.
- Pagination parameters.
- Allowed enum values.
- Request body size.

Zod is included in the backend for validation.

## 7. Error Handling

Expected error categories:

- VALIDATION_ERROR
- ROUTE_NOT_FOUND
- RESOURCE_NOT_FOUND
- UNAUTHORIZED
- FORBIDDEN
- RATE_LIMITED
- PROVIDER_ERROR
- DATABASE_ERROR
- INTERNAL_SERVER_ERROR

The API should avoid returning internal stack traces in production.

## 8. Pagination

List endpoints should support pagination.

Example planned parameters:

```text
?page=1&limit=20
```

Responses should provide pagination metadata.

## 9. Authentication

Authentication is not yet implemented.

Private portfolio, research and decision resources will require authorization before production.

## 10. API Versioning

The `/api/v1` prefix establishes the initial API version.

Breaking API changes should be introduced through an intentional versioning strategy.

## 11. Current Status

Implemented:

- GET /
- GET /api/v1/health
- Express routing.
- CORS and Helmet middleware.
- Not-found handler.
- Central error handler.

Planned:

- Portfolio endpoints.
- Research endpoints.
- Agent endpoints.
- Risk endpoints.
- Ledger endpoints.
- Market data endpoints.
- Authentication and authorization.
