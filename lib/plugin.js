import loadPath from './loadPath';
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
  app.main.webContents.executeJavaScript(pack, true);
  return require(path);
}
