const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3001/' || 'https://tree-house-app.herokuapp.com/',
      changeOrigin: true,
    })
  );
};
