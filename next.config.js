const withTM = require('next-transpile-modules')([]);

module.exports = withTM({
  swcMinify: false,
  trailingSlash: true,
  env: {
    APP_NAME: 'Hickory - United Food',
    // HOST
    HOST_API_KEY: 'https://fff7-175-101-156-41.in.ngrok.io',
    API_VERSION: 'v1'
  },
});
