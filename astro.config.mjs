import { defineConfig } from "astro/config";

// The site URL is set here and only here. The build must not depend on
// host-specific environment variables (see CONTRIBUTING.md).
export default defineConfig({
  site: "https://wademartin.dev",
  trailingSlash: "always",
  markdown: {
    // Code colours come from CSS variables set in src/theme.ts.
    shikiConfig: { theme: "css-variables" },
  },
});
