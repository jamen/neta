import {app, BrowserWindow} from 'electron';
import {join} from 'path';
import neta from './lib';

let main = neta.main = {};

app.on('ready', () => {
  main = neta.main = new BrowserWindow(neta.mainWindow());
  main.loadURL('file' + join(__dirname, 'views', 'app.html'));
});

app.on('window-all-closed', function() {
  app.quit();
});
