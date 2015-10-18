'use strict';

const $ = require('jquery'),
      remote = require('remote');

let main = remote.getCurrentWindow();

$(() => {
  $('.tools .close').on('click', () => {
    $('.app').addClass('closing');
    setTimeout(() => {
      main.close();
    }, 200);
  });
  $('.tools .maximize').on('click', () => {
    main.maximize();
  });
  $('.tools .minimize').on('click', () => {
    main.minimize();
  });
});
