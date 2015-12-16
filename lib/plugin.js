import loadPath from './loadPath';

export default plugin;

/**
 * Fetch a plugin (much like "require")
 * @param {String} path - Path to plugin.
 * @return {Multi} The package that was requested.
 */
function plugin(path) {
  path = loadPath('plugin', path);
  return require(path);
}
