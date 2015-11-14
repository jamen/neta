'use strict';

const remote = require('remote'),
           $ = require('jquery'),
         ipc = require('ipc');

console.log(ipc);

module.exports = function(main){
  const app = $('#app');

  main
  .on('maximize', () => app.addClass('-maximized'))
  .on('unmaximize', () => app.removeClass('-maximized'));

  ipc.on('simple', function(simple){
    if (simple) app.addClass('-simple');
  });
};
