
# StockSentry — Testing Strategy

## 1. Purpose

This document defines the testing approach for StockSentry.

The objective is to ensure that the frontend, backend, database, analytical services and integrations behave correctly.

## 2. Testing Principles

- Test important business logic independently.
- Validate API inputs and outputs.
- Test database operations against a real development database.
- Verify error handling.
- Test financial calculations with known expected values.
- Never treat demo data as evidence of live-data correctness.
- Test external integrations independently.
- Prevent secrets from appearing in logs or test output.

## 3. Testing Layers

### Unit Testing

Test individual functions and modules.

Examples:

- Financial calculations.
- Risk calculations.
- Input validation.
- Portfolio allocation calculations.
- Data transformation.
- Agent output validation.

### Integration Testing

Test communication between system components.

Examples:

- Express API and PostgreSQL.
- Drizzle queries and database schema.
- Frontend API requests.
- Market data adapters.
- Agent orchestration and persistence.

### API Testing

Verify:

- HTTP methods.
- Request validation.
- Response structures.
- Status codes.
- Error handling.
- Authentication and authorization when implemented.

### End-to-End Testing

Verify important user journeys.

Examples:

- Open the dashboard.
- Navigate to Research.
- Submit a research request.
- View a research result.
- Review a portfolio.
- Inspect risk assessments.
- Open a decision record.

### Security Testing

Test:

- Environment secret protection.
- Input validation.
- Access control.
- CORS configuration.
- Request size limits.
- Rate limiting.
- Error information exposure.

## 4. Backend Verification

Current health endpoint:

```http
GET /api/v1/health
```

Example PowerShell check:

```powershell
Invoke-RestMethod http://localhost:4000/api/v1/health
```

Expected result:

- HTTP 200.
- `success` is true.
- Service identifies itself as StockSentry API.
- Status is operational.

The current health endpoint checks API process availability, not database availability.

## 5. Database Testing

After PostgreSQL is configured, test:

- Database connectivity.
- Migration execution.
- Portfolio creation.
- Holding creation.
- Foreign-key constraints.
- Numeric precision.
- Research report persistence.
- Agent run persistence.
- Decision record persistence.

## 6. Financial Calculation Testing

Financial calculations require known test inputs and expected outputs.

Test:

- Position market value.
- Portfolio allocation percentage.
- Average cost.
- Unrealized gain or loss.
- Return percentage.
- Concentration.
- Exposure.
- Volatility calculations.

Use decimal-safe arithmetic where precision is important.

## 7. Frontend Testing

Test:

- Navigation.
- Responsive layouts.
- Search and filters.
- Expandable records.
- Loading states.
- Empty states.
- Error states.
- Form validation.
- Accessibility.

## 8. Integration Testing

External provider tests should use controlled development credentials and avoid unexpected usage costs.

Test provider failures, malformed responses and rate limits.

## 9. Suggested Tooling

Potential testing tools:

- Node.js test runner or Vitest.
- Supertest for Express API testing.
- Playwright for browser-based end-to-end testing.
- PostgreSQL test database.
- ESLint for code quality.

These tools are proposed testing choices, not all currently installed.

## 10. Build Verification

Frontend:

```bash
npm run build
```

Backend:

```bash
cd server
npm run dev
```

Health check:

```bash
curl http://localhost:4000/api/v1/health
```

## 11. Release Criteria

A feature should not be considered production-ready until:

- Its core behavior is tested.
- Validation is in place.
- Failure behavior is understood.
- Sensitive information is protected.
- Database changes are migrated.
- Documentation is updated.
- Relevant frontend and backend builds pass.

## 12. Current Status

The frontend production build has been verified.

The Express API health endpoint has been tested successfully.

Automated test suites, database integration tests and end-to-end tests remain to be established.
