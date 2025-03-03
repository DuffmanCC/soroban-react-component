import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    include: [
      "tests/**/*.test.ts",
      "tests/**/*.test.tsx",
      "tests/**/*.test.js",
      "tests/**/*.test.jsx",
    ],
  },
});
