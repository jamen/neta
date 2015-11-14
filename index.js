'use strict';

const app = require('app'),
      BrowserWindow = require('browser-window'),
      path = require('path'),
      window = require('./scripts/app-window');

// Various tasks to do before the app is ready.
require('crash-reporter').start();
app.commandLine.appendSwitch('enable-transparent-visuals');
let main = null;

let simple = false;
if (process.argv.indexOf('--simple') !== -1) simple = true;

app.on('ready', function(){
  main = window(path.join(__dirname, 'index.html'));
});
