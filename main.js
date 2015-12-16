import fs from 'fs';
import app from 'app';
import {join} from 'path';
import campfire from './lib';
import BrowserWindow from 'browser-window';

/* main.js
 * Main initiation file of campfire.
 * * */

let main = app.main = {};

app.on('ready', () => {
  main = app.main = new BrowserWindow(campfire.main);
  main.loadURL('file://' + join(__dirname, '/index.html'));

  fs.readdir(campfire.dirs.packages, (err, packages) => {
    if (!err) {
      campfire.load(packages);
      if (main.webContents.isLoading()) {
        main.webContents.on('dom-ready', () => campfire.load(packages));
      } else {
        campfire.load(packages);
      }
    } else {
      console.warn('Could not load packages');
    }
  });
});
