/*
 * Copyright 2004-present Facebook. All Rights Reserved.
 * @flow strict-local
 * @format
 */
const babel = require('@babel/core');
const createCacheKeyFunction = require('fbjs-scripts/jest/createCacheKeyFunction');
const path = require('path');

let cacheKeyPackages = [
  'babel-preset-fbjs',
  'babel-plugin-fbt',
  'babel-plugin-fbt-runtime',
].map(name => path.join(path.dirname(require.resolve(name)), 'package.json'));

// This is basically fbjs-scripts/jest/preprocessor, but with the
// ability to specify additional plugins
function createTransformer(opts /*: Object*/ = {}) {
  return {
    process(src /*: string*/, filename /*: string*/) {
      const options = {
        presets: [
          ['@babel/react', {throwIfNamespace: false}],
          require('babel-preset-fbjs'),
        ],
        plugins: opts.plugins || [],
        filename: filename,
        retainLines: true,
      };
      return babel.transform(src, options).code;
    },

    // Generate a cache key that is based on the contents of this file,
    // babel-preset-fbjs, and the plugins passed in as options and fbjs (used as
    // a proxy for determining if the preset has changed configuration at all).
    getCacheKey: createCacheKeyFunction([__filename].concat(cacheKeyPackages)),
  };
}

module.exports = {
  ...createTransformer(),
  createTransformer,
};
