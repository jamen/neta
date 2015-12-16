import loadPath from './loadPath';
import stylus from 'stylus';
import fs from 'fs';
import app from 'app';

export default theme;

/**
 * Fetch a theme
 * @param {String} path - Path to plugin.
 */
function theme(path) {
  path = loadPath('themes', path);
  let pack = fs.readFileSync(path);
  stylus(pack)
  .render(function(err, css) {
    if (err) {
      console.error(path + ': invalid stylus. (Stylus error)');
      console.error(err);
      return;
    }

    app.emit('load-theme', css);
  });
}
