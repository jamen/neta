import $ from 'jquery';
import fs from 'fs';
import stylus from 'stylus';
import { join } from 'path';
import { settings, packages } from './paths';

/**
 * Load stylesheets into process.
 */
function themes() {
  const { theme: themeName } = require(settings);
  const theme = join(packages, themeName);

  // Atempt to fetch theme configuration
  let config = {};
  try {
    config = require(theme, 'package.json');
  } catch (e) {
    throw new Error(`Reference "${themeName}" is not a package`);
  }

  // Check that it has required properties
  if (config.type !== 'theme') {
    throw new Error(`Package "${themeName}" is not a theme`);
  }

  // Set defaults
  if (typeof config.main !== 'string') {
    config.main = 'index.styl';
  }

  // Load theme
  const root = $($('html').shadowRoot);
  const themeInject = $('<style></style>');
  const stylusSource = fs.readFileSync();

  stylus(stylusSource)
  .render(function render(err, css) {
    themeInject.text(css);
    root.append(themeInject);
  });
}

export default themes;
