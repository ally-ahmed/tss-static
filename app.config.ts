import { defineConfig } from "@tanstack/start/config";
import viteTsConfigPaths from "vite-tsconfig-paths";
import contentCollections from "@content-collections/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  server: {
    preset: "cloudflare-pages",
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [
      // this is the plugin that enables path aliases
      viteTsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      contentCollections(),
      ViteImageOptimizer({
        /* pass your config */
      }),
    ],
  },
});
