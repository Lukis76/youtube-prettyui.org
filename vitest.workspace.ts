import { defineWorkspace } from "vitest/config";

// defineWorkspace provides a nice type hinting DX
export default defineWorkspace([
  "packages/**/*",
  {
    // add "extends" to merge two configs together
    extends: "./vitest.config.ts",
    test: {
      include: [
        "packages/**/**/__tests__/*.{test,spec}.{js,ts,jsx,tsx,mjs,cjs,mts,cts}",
        "apps/**/**/__tests__/*.{test,spec}.{js,ts,jsx,tsx,mjs,cjs,mts,cts}",
        "__tests__/*.{test,spec}.{js,ts,jsx,tsx,mjs,cjs,mts,cts}",

      ],
      // it is recommended to define a name when using inline configs
      name: "happy-dom",
      environment: "happy-dom",
    },
  },
]);
