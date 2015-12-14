'use strict';

const path = require('path');

/* load.js
 * Load Campfire packages.  Themes and plugins.
 * * */

module.exports = exports = function(packpath){
  try {
    return require(packpath);
  } catch (e) { }

  let pack = {};
};

exports._packages =
  process.env.CAMP_PACKAGES ||
  path.resolve(process.env.HOME, '.campfire', 'packages');
