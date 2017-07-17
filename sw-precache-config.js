module.exports = {
  staticFileGlobs: [
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-loader.js',
    // '/images/*' // TODO: figure out if we should precache some/all/no images
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
