import {app, BrowserWindow} from 'electron';
import {join} from 'path';
import neta from './lib';

let main = app.main = {};

app.on('ready', () => {
  main = app.main = new BrowserWindow(neta.main());
  main.loadURL('file' + join(__dirname, 'views', 'app.html'));
});

app.on('window-all-closed', function() {
  app.quit();
});
