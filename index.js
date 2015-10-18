'use strict';

const app = require('app'),
      BW = require('browser-window'),
      path = require('path');

// Various tasks to do before the app is ready.
require('crash-reporter').start();
app.commandLine.appendSwitch('enable-transparent-visuals');
let main = null;


app.on('ready', function(){
  const screen = require('screen');

  let size = screen.getPrimaryDisplay().workAreaSize;

  main = new BW({
    'width': size.width - 200,
    'height': size.height - 200,
    'frame': false,
    'transparent': true,
    'center': true
  });

  main.setTitle('Pheo');

  main.openDevTools();

  main.loadUrl('file://' + path.join(__dirname, 'views', 'index.html'));
});
