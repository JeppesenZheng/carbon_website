import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

// A dedicated subdomain serves assets from / rather than /carbon_website.
const result = spawnSync(
  process.execPath,
  [fileURLToPath(new URL("./build-pages.mjs", import.meta.url))],
  {
    stdio: "inherit",
    env: { ...process.env, NEXT_PUBLIC_BASE_PATH: "" },
  },
);
if (result.error) throw result.error;
process.exit(result.status ?? 1);
