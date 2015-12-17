import fs from 'fs';
import app from 'app';
import {join} from 'path';
import neta from './lib';
import BrowserWindow from 'browser-window';

/* main.js
 * Main initiation file of neta.
 * * */

let main = app.main = {};

app.on('ready', () => {
  main = app.main = new BrowserWindow(neta.main);
  main.loadURL('file://' + join(__dirname, '/index.html'));

  fs.readdir(neta.dirs.packages, (err, packages) => {
    if (!err) {
      neta.load(packages);
      if (main.webContents.isLoading()) {
        main.webContents.on('dom-ready', () => neta.load(packages));
      } else {
        neta.load(packages);
      }
    } else {
      console.warn('Could not load packages');
    }
  });
});
