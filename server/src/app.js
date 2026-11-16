
import express from "express";
import cors from "cors";
import helmet from "helmet";

import { env } from "./config/env.js";
import healthRoutes from "./routes/health.routes.js";

const app = express();

app.disable("x-powered-by");

app.use(helmet());

app.use(
  cors({
    origin: env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.json({
    name: "StockSentry API",
    version: "1.0.0",
    documentation: "API documentation will be added in a later stage.",
  });
});

app.use("/api/v1/health", healthRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: {
      code: "ROUTE_NOT_FOUND",
      message: `Cannot ${req.method} ${req.originalUrl}`,
    },
  });
});

app.use((err, req, res, next) => {
  console.error("API error:", err);

  res.status(err.status || 500).json({
    success: false,
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message:
        env.NODE_ENV === "production"
          ? "An unexpected server error occurred."
          : err.message,
    },
  });
});

export default app;
