import loadPath from './loadPath';
import fs from 'fs';
import app from 'app';

export default plugin;

/**
 * Fetch a plugin (much like "require")
 * @param {String} path - Path to plugin.
 * @return {Multi} The package that was requested.
 */
function plugin(path) {
  let pack = {};
  path = loadPath('plugin', path);
  pack = fs.readFileSync(path);
  app.emit('load-plugin', pack);
  return require(path);
}
