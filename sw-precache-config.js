module.exports = {
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
      urlPattern: /\/data\//,
      handler: 'networkFirst'
    }
  ],
  importScripts: [
    'sw-imported.js'
  ]
};
