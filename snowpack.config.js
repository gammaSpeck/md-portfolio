module.exports = {
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018'
  },
  mount: {
    assets: '/assets',
    css: '/css',
    scripts: '/scripts',
    html: '/'
  },
  excludes: ['**/node_modules/**/*', '**/sass/**/*']
}
