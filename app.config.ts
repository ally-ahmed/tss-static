import contentCollections from "@content-collections/vite";
import { defineConfig } from "@tanstack/start/config";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    preset: "cloudflare-pages",
    // prerender: {
    //   routes: ["/"],
    //   crawlLinks: true,
    // },
  },
  vite: {
    plugins: [
      // this is the plugin that enables path aliases
      viteTsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      contentCollections(),
    ],
    ssr: {
      external: [
        "workers-og",
        "@vercel/og",
        "@cloudflare/pages-plugin-vercel-og",
        "yoga-wasm-web",
        "satori",
      ],
    },
  },
  react: {
    babel: {
      plugins: [
        [
          "babel-plugin-react-compiler",
          {
            target: "19",
          },
        ],
      ],
    },
  },
});
