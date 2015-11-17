'use strict';

const app = require('app'),
      path = require('path'),
      window = require('./scripts/app-window'),
      init = require('./scripts/init');

// Various tasks to do before the app is ready.
require('crash-reporter').start();
app.commandLine.appendSwitch('enable-transparent-visuals');
const socii = init();

// App
app.on('ready', function(){
  const main = window(path.join(__dirname, 'index.html')), wc = main.webContents;
  wc.insertCSS(socii.style);
  main.openDevTools({detach: true});
});
