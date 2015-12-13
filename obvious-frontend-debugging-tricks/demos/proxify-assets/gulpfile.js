var gulp = require('gulp'),
    bs   = require('browser-sync').create()

gulp.task('browser-sync', function() {
    bs.init({
      proxy: {
        target: 'https://www.yandex.ru/',
        proxyRes: [function(res, req) {
            // Remove content-security-policy header
            // to allow BrowserSync connections.
            delete res.headers['content-security-policy']
        }]
      },
      port: 3000,
      serveStatic: ['./'],
      rewriteRules: [
        {
          match: /<\/body>/,
          fn: function() {
            return '<script src="/custom.js"></script>\n'
          }
        },
        {
          match: /<\/head>/,
          fn: function() {
            return '<link rel="stylesheet" href="/custom.css">\n'
          }
        }
      ]
    })
})

gulp.task('default', ['browser-sync'], function() {
    gulp.watch('custom.js', bs.reload)
    // We need to tell BrowserSync that stylesheet was changed
    // for injection without page reloading.
    gulp.watch('custom.css', bs.reload.bind(null, 'custom.css'))
})
