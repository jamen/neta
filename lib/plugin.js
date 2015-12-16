import loadPath from './loadPath';

export default plugin;

/**
 * Fetch a plugin (much like "require")
 * @param {String} packpath - Path to plugin.
 * @return {Multi} The package that was requested.
 */
function plugin(packpath) {
  packpath = loadPath('plugin', packpath);
  return require(packpath);
}
