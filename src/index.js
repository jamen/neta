import { BrowserWindow, app, screen } from 'electron';
import { join } from 'path';
import minimist from 'minimist';
import pack from '../package';

const opts = minimist(process.argv.slice(2));

if (opts.version) {
  console.log(pack.version);
  process.exit(0);
}

app.on('ready', () => {
  const size = screen.getPrimaryDisplay().workAreaSize;
  const win = new BrowserWindow({
    width: size.width - 100,
    height: size.height - 100,
    autoHideMenuBar: true,
    show: false,
  });
  const wc = win.webContents;
  win.loadURL('file://' + join(__dirname, 'views', 'index.html'));
  wc.on('dom-ready', () => win.show());

  if (opts.dev) {
    win.openDevTools();
  }
});
