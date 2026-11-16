
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is missing from server/.env");
}

export const sql = postgres(databaseUrl, {
  max: 10,
  idle_timeout: 20,
  connect_timeout: 10,
  ssl: process.env.DATABASE_SSL === "true" ? "require" : false,
});

export const db = drizzle(sql);
