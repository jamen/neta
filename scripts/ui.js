'use strict';

const $ = require('jquery'),
      remote = require('remote');

let main = remote.getCurrentWindow();

$(function(){
  $('.window-controls > div').on('click', (e) => main[e.target.className]());

  let toggleMax = () => $('.app').toggleClass('maximized');
  main.on('maximize', toggleMax).on('unmaximize', toggleMax);
});
