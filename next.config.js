const withTM = require('next-transpile-modules')([]);

module.exports = withTM({
  swcMinify: false,
  trailingSlash: true,
  env: {
    APP_NAME: 'Hickory - United Food',
    // HOST
    HOST_API_KEY: 'http://13.238.200.214',
    API_VERSION: 'v1',
    // GOOGLE
    GOOGLE_CLIENT_ID: '688314916557-etc1cai7htim0hk0hlc26853cscmk3bf.apps.googleusercontent.com',
  },
});
