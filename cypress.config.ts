import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "k41pxe",
  e2e: {
    baseUrl: "http://localhost:5000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
