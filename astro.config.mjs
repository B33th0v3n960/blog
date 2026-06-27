import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { remarkAlert } from "remark-github-blockquote-alert";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  integrations: [mdx(), sitemap()],
  server: {
    port: 3000,
    host: "0.0.0.0", // Optional: allows external access
  },
  markdown: {
    remarkPlugins: [remarkAlert, remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      themes: {
        light: "gruvbox-light-hard",
        dark: "gruvbox-dark-hard",
      },
      wrap: true,
    },
  },
});
