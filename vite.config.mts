import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    root: "src/",
    environment: "jsdom",
    coverage: {
      provider: "v8",
      enabled: true,
      all: true,
      thresholds: {
        "100": true,
      },
      exclude: [
        "**/__tests__/**", // Don't check test coverage of tests

        "main.ts", // Covered by E2E tests
        "service/menuService.ts", // Interface definitions only
        "types/**", // Type definitions only
      ],
      reporter: ["text", "html"],
    },
  },
});
