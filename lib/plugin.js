import loadPath from './loadPath';

export default plugin;

/**
 * Fetch a plugin (much like "require")
 * @param {String} packpath - Path to plugin.
 */
function plugin(packpath) {
  packpath = loadPath(packpath);
}