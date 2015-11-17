'use strict';

const app = require('app'),
      path = require('path'),
      window = require('./scripts/app-window'),
      init = require('./scripts/init');

// Various tasks to do before the app is ready.
require('crash-reporter').start();
app.commandLine.appendSwitch('enable-transparent-visuals');
const data = init();

// App
app.on('ready', function(){
  const main = window(path.join(__dirname, 'index.html'));
  main.openDevTools({detach: true});
});
