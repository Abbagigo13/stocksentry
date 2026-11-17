
# StockSentry — Security Architecture

## 1. Purpose

This document describes the security principles and planned security controls for StockSentry.

StockSentry handles financial research, portfolio information, analytical records and potentially sensitive user data. Security must be considered throughout development.

## 2. Security Objectives

- Protect credentials and API keys.
- Protect user and portfolio information.
- Prevent unauthorized access.
- Validate all external input.
- Secure communication between application components.
- Preserve integrity of important analytical records.
- Avoid exposing internal errors and secrets.
- Maintain visibility into security-relevant events.

## 3. Environment Secrets

Sensitive values must be stored in environment variables.

Examples:

- Database connection strings.
- Market data provider keys.
- AI provider API keys.
- Authentication secrets.
- Blockchain RPC credentials.

Rules:

- Never hardcode secrets in source code.
- Never commit `.env` files.
- Provide `.env.example` files without real credentials.
- Rotate compromised credentials.
- Limit access to production secrets.

## 4. API Security

The Express API currently uses:

- Helmet for HTTP security headers.
- CORS for origin restrictions.
- Zod for environment validation.
- Express JSON body parsing with a request size limit.

Additional controls required before production:

- Authentication.
- Authorization.
- Rate limiting.
- Request validation for every endpoint.
- Secure session or token handling.
- Request timeouts.
- Audit logging.
- Abuse protection.

## 5. Authentication and Authorization

User authentication has not yet been implemented.

The intended system should support:

- Secure user registration and login.
- Secure password handling if passwords are used.
- Session or token expiration.
- User-specific portfolio access.
- Role-based permissions where required.
- Ownership checks for all private resources.

A user must not be able to access another user's portfolio or research records by changing an identifier.

## 6. Database Security

Database security requirements:

- Use managed PostgreSQL credentials.
- Restrict database network access where possible.
- Use encrypted connections in production.
- Apply least-privilege database permissions.
- Avoid exposing database errors to clients.
- Back up important data.
- Protect production database credentials.
- Review migration changes before application.

## 7. Data Protection

The application should collect only information required for its functionality.

Sensitive information must not be placed in:

- Public logs.
- Agent prompts without a valid need.
- Error messages.
- Public repository files.
- Client-side environment variables.

## 8. AI and Agent Security

Agent systems introduce additional risks.

Required protections include:

- Validate agent inputs.
- Validate generated outputs.
- Treat external documents and retrieved content as untrusted data.
- Protect against prompt injection.
- Restrict agent tools and permissions.
- Limit access to secrets.
- Record important agent actions.
- Enforce timeouts and execution limits.
- Require approval for consequential actions.

AI output must never bypass application authorization or risk controls.

## 9. External Integrations

External services must be accessed through controlled backend adapters.

Requirements:

- Store provider keys on the server.
- Validate provider responses.
- Apply timeouts.
- Handle rate limits.
- Avoid logging credentials.
- Monitor usage and failures.
- Use HTTPS endpoints.

## 10. Blockchain and Evidence Security

Planned evidence capabilities may include:

- Cryptographic hashing.
- Evidence metadata.
- Transaction references.
- On-chain verification.

A transaction hash alone does not prove that an analytical conclusion is correct.

The application should preserve the relationship between the recorded decision, the evidence payload and its verification result.

Private signing keys must never be exposed in frontend code or committed to GitHub.

## 11. Financial Safety

StockSentry is an analytical platform, not an authorized trading or custody service.

The application must not imply that:

- An AI prediction guarantees returns.
- A risk score guarantees safety.
- A recorded decision is necessarily correct.
- A blockchain transaction proves financial accuracy.

## 12. Security Incident Response

If a credential is exposed:

1. Revoke or rotate the credential.
2. Review relevant access logs.
3. Identify affected services.
4. Replace the compromised value.
5. Check the repository for exposed secrets.
6. Document the incident and corrective action.

## 13. Current Security Status

Implemented:

- Helmet middleware.
- CORS configuration.
- Environment variable validation.
- Request body size limit.
- Generic production error messages.

Not yet implemented:

- User authentication.
- Resource-level authorization.
- Rate limiting.
- Production audit logging.
- Agent-specific permission controls.
- Complete security testing.

These controls must be completed before production deployment.
