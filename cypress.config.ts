import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.onliner.by/',
    viewportHeight: 1080,
    viewportWidth: 1920
  },
  watchForFileChanges: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
})
