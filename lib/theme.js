import stylus from 'stylus';
import fs from 'fs';
import app from 'app';

export default theme;

/**
 * Fetch a theme
 * @param {String} path - Path to plugin.
 */
function theme(path) {
  let pack = fs.readFileSync(path).toString();
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

app.on('load-theme', function(theme) {
  app.main.webContents.insertCSS(theme);
});
