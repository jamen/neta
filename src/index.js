import { BrowserWindow, app, screen } from 'electron';
import { join } from 'path';
import minimist from 'minimist';

const opts = minimist(process.argv.slice(2));

app.on('ready', () => {
  const size = screen.getPrimaryDisplay().workAreaSize;
  const main = new BrowserWindow({
    width: size.width - 100,
    height: size.height - 100,
    autoHideMenuBar: true,
  });
  main.loadURL('file://' + join(__dirname, 'view', 'index.html'));

  if (opts.dev) {
    main.openDevTools();
  }
});
