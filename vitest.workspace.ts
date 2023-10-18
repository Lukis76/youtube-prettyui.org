import { defineWorkspace } from "vitest/config";

// defineWorkspace provides a nice type hinting DX
export default defineWorkspace([
  "packages/**/*",
  {
    // add "extends" to merge two configs together
    extends: "./vitest.config.ts",
    test: {
      include: ["__tests__/*.{test,spec}.{tsx,jsx,ts,js}"],
      // it is recommended to define a name when using inline configs
      name: "happy-dom",
      environment: "happy-dom",
    },
  },
]);
