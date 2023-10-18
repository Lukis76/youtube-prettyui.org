/// <reference types='vitest' />

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "happy-dom",
    globals: true,
    include: [
      "packages/**/*.{test,spec}.{js,ts,jsx,tsx,mjs,cjs,mts,cts}",
      "apps/**/*.{test,spec}.{js,ts,jsx,tsx,mjs,cjs,mts,cts}",
    ],
    // ...
  },
});
