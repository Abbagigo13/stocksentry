
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    service: "StockSentry API",
    status: "operational",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
    database: "not_configured",
  });
});

export default router;
