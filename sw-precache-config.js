/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http:polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http:polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http:polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http:polymer.github.io/PATENTS.txt
 */

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
