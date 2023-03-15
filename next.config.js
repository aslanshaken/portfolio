const withTM = require('next-transpile-modules')([]);

module.exports = withTM({
  swcMinify: false,
  trailingSlash: true,
  env: {
    APP_NAME: 'Hickory - United Food',
    // HOST
    HOST_API_KEY: 'http://localhost:8000',
  },
});
