const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        proxy.createProxyMiddleware('/api', {
            target: 'http://localhost:9000',
            changeOrigin: true
        })
    );
}