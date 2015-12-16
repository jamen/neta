import app from 'app';
// import campfire from './lib';
// import BrowserWindow from 'browser-window';

/* main.js
 * Main initiation file of campfire.
 * * */

let main = app.main = {};

app.on('ready', () => {

});

app.on('load-plugin', function(plugin, gesture = true) {
  main.webContents.executeJavaScript(plugin, gesture);
});
