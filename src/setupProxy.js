const { createProxyMiddleware } = require('http-proxy-middleware')

const port = process.env.SERVER_PORT

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://localhost:${port}`,
      changeOrigin: true,
    })
  )
}