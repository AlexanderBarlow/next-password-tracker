// next.config.js
// Importing environment variables if needed
await import("./src/env.js");

// Configuration object
const config = {
  // Your other configuration options go here

  // Remove the "target" property

  // If you were using "target: 'serverless'", you can use the "target: 'experimental-serverless-trace'" option instead:
  experimental: {
    serverlessTracing: true,
  },

  // If you were using "target: 'server'", the default behavior is now serverless, so you can simply remove the "target" property.
};

// Export the configuration
export default config;
