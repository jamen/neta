import loadPath from './loadPath';

export default plugin;

/**
 * Fetch a plugin (much like "require")
 * @param {String} packpath - Path to plugin.
 * @return {Multi} The package that was requested.
 */
function plugin(packpath) {
  let info;
  let pack;
  packpath = loadPath('plugin', packpath);

  // Get package's info
  try {
    info = require(packpath + '/package.json');
  } catch (_) {
    throw new Error(packpath + ': not a package! (Missing package.json)');
  }

  // Require entry
  try {
    pack = require(packpath + '/' + info.main);
  } catch (_) {
    throw new Error(packpath + ': no valid entry! (Missing or invalid "main")');
  }

  return pack;
}
