import { screen } from 'electron';

/**
 * Create main window's settings.
 * @param {Object} rawopts - Configuration options for main window.
 * @return {Object} The main window configuration.
 */
function mainWindow(rawopts) {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const opts = Object.assign({
    width: width - 200,
    height: height - 200,
  }, mainWindow._default, rawopts);
  return opts;
}

mainWindow._default = {
  center: true,
  autoHideMenuBar: true,
  show: false,
};


export default mainWindow;
