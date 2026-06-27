// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { remarkAlert } from "remark-github-blockquote-alert";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0", // Optional: allows external access
  },
  markdown: {
    remarkPlugins: [remarkAlert],
    shikiConfig: {
      themes: {
        light: "gruvbox-light-hard",
        dark: "gruvbox-dark-hard",
      },
      wrap: true,
    },
  },
});
