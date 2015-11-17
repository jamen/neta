'use strict';

const BrowserWindow = require('browser-window'),
      init = require('./init'),
      arg = item => process.argv.indexOf(item) !== -1;

module.exports = function(file){
  const screen = require('screen'),
        size = screen.getPrimaryDisplay().workAreaSize,
        socii = init(),

  is = {
    'simple': arg('--simple'),
    'dev': arg('--dev'),
    'menu': arg('--menu'),
    'disableStyle': arg('--disable-style')
  },

  app = new BrowserWindow({
    'width': size.width - 200,
    'height': size.height - 200,
    'frame': is.simple,
    'transparent': !is.simple,
    'autoHideMenuBar': true,
    'backgroundColor': '#000',
    'center': true,
    'title': 'Socii',
    'show': false // Used to prepare the window before showing it.
  }), wc = app.webContents;

  if (!is.menu) app.setMenu(null);
  if (!is.disableStyle) wc.insertCSS(socii.style);
  if (is.dev) app.openDevTools();
  if (is.simple) wc.on('dom-ready', () => wc.send('simple'));

  app.loadURL('file://' + file);

  // Show the window once it's finished.
  wc.on('did-finish-load', () => app.show());

  return app;
};
