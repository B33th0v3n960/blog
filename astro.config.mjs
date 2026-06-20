// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0", // Optional: allows external access
  },
});
