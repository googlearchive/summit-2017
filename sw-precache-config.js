module.exports = {
  navigateFallbackWhitelist: [
    /^\/$/,
    /^\/schedule$/,
    /^\/speakers$/
  ],
  staticFileGlobs: [
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-loader.js'
  ],
  runtimeCaching: [
    {
      urlPattern: /\/images\//,
      handler: 'fastest'
    },
    {
      urlPattern: /\/bower_components\/webcomponentsjs\//,
      handler: 'fastest'
    },
    {
      urlPattern: /\/data\//,
      handler: 'networkFirst'
    }
  ],
  importScripts: [
    'sw-imported.js'
  ]
};
