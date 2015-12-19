import $ from 'jquery';
import fs from 'fs';
import stylus from 'stylus';
import { join, resolve } from 'path';
import { ipcRenderer } from 'electron';
import { settings, packages } from './paths';

/**
 * Load stylesheets into process.
 */
function themes() {
  const { theme: themeName } = require(settings);
  let theme = join(packages, themeName);

  // Atempt to fetch theme configuration
  let config = {};
  try {
    config = require(join(theme, 'package'));
  } catch (e) {
    try {
      theme = join(__dirname, '..', 'node_modules', themeName);
      config = require(join(theme, 'package'));
    } catch (a) {
      throw new Error(`Reference "${themeName}" is not a package`);
    }
  }

  // // Check that it has required properties
  // if (config.type !== 'theme') {
  //   throw new Error(`Package "${themeName}" is not a theme`);
  // }

  // Set defaults
  if (typeof config.main !== 'string') {
    config.main = 'index.styl';
  }

  // Load theme
  const root = $('head');
  const themeInject = $('<style></style>');
  const stylusSource = fs.readFileSync(resolve(theme, config.main)).toString();

  stylus(stylusSource)
  .render(function render(err, css) {
    themeInject.text(css);
    root.append(themeInject);
    ipcRenderer.send('neta-theme-injected');
  });
}

export default themes;
