import { defineConfig } from "@tanstack/start/config";
import viteTsConfigPaths from "vite-tsconfig-paths";
import contentCollections from "@content-collections/vite";
import wasmModuleWorkers from "vite-plugin-wasm-module-workers";

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
      wasmModuleWorkers(),
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
