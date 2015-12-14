import path from 'path';

/* load.js
 * Load Campfire packages.  Themes and plugins.
 * * */

export let load = function(packpath){
  try {
    return require(packpath);
  } catch (e) { }

  let pack = {};
};

load._packages =
  process.env.CAMP_PACKAGES ||
  path.resolve(process.env.HOME, '.campfire', 'packages');
