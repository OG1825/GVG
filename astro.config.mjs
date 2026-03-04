import { defineConfig } from "astro/config";

function normaliseBase(input) {
  if (!input) return "/";
  let base = input.trim();
  if (!base.startsWith("/")) base = `/${base}`;
  if (!base.endsWith("/")) base = `${base}/`;
  return base;
}

const site = process.env.SITE_URL || "https://example.github.io";
const base = normaliseBase(process.env.BASE_PATH);

export default defineConfig({
  site,
  base,
  output: "static",
});
