'use strict';

const path = require('path'),
      fs = require('fs'),
      stylus = require('stylus'),
      exists = fs.existsSync,
      mkdir = fs.mkdirSync,
      write = fs.writeFileSync;

module.exports = function(){
  let base = path.join(process.env.HOME || '~', '.socii'),
  dir = {
    base: base,
    settings: path.join(base, 'settings.json'),
    servers: path.join(base, 'servers.json'),
    style: path.join(base, 'style.styl'),
    themes: path.join(base, 'themes'),
    packages: path.join(base, 'packages'),
    defaults: path.join(base, 'defaults')
  };

  let item = null, what = '';
  for (let key in dir) {
    item = dir[key];
    if (path.extname(item) === '') what = 'folder';
    else what = 'file';

    if (!exists(item)) {
      console.log(' - the %s %s does not exist...  creating...', what, item);
      try {
        if (what === 'file') write(item, '{ }');
        else mkdir(item);
        item = true;
      } catch (e) {
        console.log(' ! failed to create');
        item = false;
      }
      if (item) console.log(' + successfully created');
    }
  }

  // Get settings
  let settings = {};
  try { settings = fs.readFileSync(dir.settings); }
  catch (e) { console.log(' ! failed to read %s', dir.settings); }
  try { settings = JSON.parse(settings); }
  catch (e) { console.log(' ! failed to parse %s as JSON', dir.settings); }

  // Get servers
  let servers = {};
  try { servers = fs.readFileSync(dir.servers); }
  catch (e) { console.log(' ! failed to read %s', dir.servers); }
  try { servers = JSON.parse(servers); }
  catch (e) { console.log(' ! failed to parse %s as JSON', dir.servers); }

  // Get user-styles
  let style = '';
  try { style = fs.readFileSync(dir.style).toString(); }
  catch (e) { console.log(' ! failed to read %s', dir.style); }
  stylus(style).render(function(err, css){
    if (err) {
      console.log(' ! failed to render %s as stylus', dir.style);
      return;
    }
    style = css;
  });

  // Return results
  return {
    settings: settings,
    style: style,
    servers: servers
  };
};

console.log(module.exports());
