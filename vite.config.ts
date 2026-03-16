import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "soroban-react-component",
      fileName: () => "index.js",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.names[0];

          if (fileName.endsWith(".css")) {
            return "index.css"; // 🔹 Fuerza el nombre index.css
          }
          return fileName;
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
