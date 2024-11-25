import { defineConfig } from "cypress";
import customViteConfig from './vite.config'; // from miniproject

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: customViteConfig, // from miniproject
    },
    specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}", // from miniproject
  },

  e2e: {
    baseUrl: 'http://localhost:3001', // from miniproject
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
