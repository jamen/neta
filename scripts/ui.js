'use strict';

const $ = require('jquery'),
      remote = require('remote');

let main = remote.getCurrentWindow();

$(function(){
  $('.tools > div').on('click', (e) => main[e.target.className]());
  main.on('maximize', (e) => $('.app').addClass('maximized'));
});
