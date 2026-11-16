
import app from "./app.js";
import { env } from "./config/env.js";

const server = app.listen(env.PORT, () => {
  console.log("");
  console.log("====================================");
  console.log("       STOCKSENTRY API");
  console.log("====================================");
  console.log(`Environment: ${env.NODE_ENV}`);
  console.log(`Server:      http://localhost:${env.PORT}`);
  console.log(`Health:      http://localhost:${env.PORT}/api/v1/health`);
  console.log("====================================");
  console.log("");
});

function shutdown(signal) {
  console.log(`\n${signal} received. Shutting down API...`);

  server.close(() => {
    console.log("StockSentry API stopped.");
    process.exit(0);
  });

  setTimeout(() => {
    console.error("Forced shutdown after timeout.");
    process.exit(1);
  }, 10000).unref();
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
