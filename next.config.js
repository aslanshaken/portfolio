const withTM = require('next-transpile-modules')([]);
const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withTM({
  swcMinify: false,
  trailingSlash: true,
  env: {
    APP_NAME: 'Cookk',
    // HOST
    HOST_API_KEY: 'https://api.cookk.co',
    API_VERSION: 'v1',
    // GOOGLE
    GOOGLE_CLIENT_ID: '688314916557-etc1cai7htim0hk0hlc26853cscmk3bf.apps.googleusercontent.com',
  },
  images: {
    domains: ['api.cookk.co'],
  },
});

module.exports = withSentryConfig(
  module.exports,
  {
    silent: true,
    org: "cookk",
    project: "cookk-front-end",
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    tunnelRoute: "/monitoring",
    hideSourceMaps: true,
    disableLogger: true,
  }
);
