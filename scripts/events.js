'use strict';

const $ = require('jquery'),
      ipc = require('ipc');

module.exports = function(main){
  const app = $('#app');

  main
  .on('maximize', () => app.addClass('-maximized'))
  .on('unmaximize', () => app.removeClass('-maximized'));

  ipc
  .on('simple', () => app.addClass('-simple'));
};
