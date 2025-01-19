import { defineConfig, PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  // testMatch: ["tests/login.test.ts"],
  use: {
    headless: false,
    screenshot: "on",
    video: "retain-on-failure",
  },
  // retries: 4,
  reporter: [["dot"], ["html"]],
};

export default config;
