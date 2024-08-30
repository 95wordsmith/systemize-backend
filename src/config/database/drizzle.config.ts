import 'dotenv/config'
import { defineConfig } from "drizzle-kit";
import type { Config } from "drizzle-kit";
import { DATABASE_URL } from "../constants";
export default defineConfig({
  schema:'./src/config/database/drizzle/schema.ts',
  out: "./src/config/database/drizzle/migrations",
  dialect: 'postgresql',
  dbCredentials:{
    url:DATABASE_URL
  },
  verbose:true,
  strict: true
})satisfies Config