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
  pack = fs.readFileSync(path);
  app.emit('load-plugin', pack);
  return require(path);
}

app.on('load-plugin', (plugin, gesture = true) => {
  app.main.webContents.executeJavaScript(plugin, gesture);
});
