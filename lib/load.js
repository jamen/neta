import path from 'path';

/* load.js
 * Load Campfire packages.  Themes and plugins.
 * * */

export let load = function(packpath) {
  // Check if package already exists.
  try {
    return require(packpath);
  } catch (_) {}

  // let pack = {}
};

load._packages =
  process.env.CAMP_PACKAGES ||
  path.resolve(process.env.HOME, '.campfire', 'packages');
