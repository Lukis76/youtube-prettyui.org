import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../../components/**/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../../core/**/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/*.stories.@(js|jsx|ts|tsx)",
  ],
  // staticDirs: ["../public"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "storybook-dark-mode",
  ],
  framework: "@storybook/react-vite",
  core: {
    disableTelemetry: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
      },
      propFilter: () => true,
    },
  },
};

export default config;
