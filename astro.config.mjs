import { defineConfig } from 'astro/config';

// For GitHub Pages deployment, the repository name becomes the base path.
// Set BASE_URL env var in GitHub Actions workflow.
// For local development, base defaults to '/'
const base = process.env.BASE_URL || '/';

export default defineConfig({
  site: 'https://gompels.github.io',
  base,
  output: 'static',
  integrations: [],
});
