#!/usr/bin/env node

'use strict';

module.exports = function svg2favicons(options) {
  var favicons = require('favicons');
  var fs = require('fs');
  var svgToPng = require('svg-to-png');
  var opts = options || {
    src: null,
    dest: null,
    iconsPath: null,
    icoPath: null,

    appName: null,
    appDescription: null,
    background: null,
    developer: null,
    developerURL: null,
    url: null
  };
  var opt;

  if (typeof opts !== 'object') {
    throw new Error('options not an object');
  }

  for (opt in opts) {
    if (opts.hasOwnProperty(opt)) {
      if (!opts[opt]) {
        throw new Error('all options required');
      }
    }
  }

  return svgToPng
    .convert(
      opts.src,
      opts.dest,
      {
        defaultWidth: '1000px',
        defaultHeight: '1000px',
        compress: true
      }
    )
    .then(function generateIcons() {
      favicons({
        files: {
          src: opts.src.replace('.svg', '.png'),
          dest: opts.dest,
          iconsPath: opts.iconsPath
        },
        settings: {
          appName: opts.appName,
          appDescription: opts.appDescription,
          background: opts.background,
          developer: opts.developer,
          developerURL: opts.developerURL,
          url: opts.url
        }
      }, function moveFaviconToRoot() {
        fs.rename(
          opts.src.replace('.svg', '.ico'),
          opts.icoPath
        );
      });
    });
};
