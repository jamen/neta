'use strict';

const $ = require('jquery'),
      remote = require('remote');

let main = remote.getCurrentWindow();

$(function(){
  $('.tools .close').on('click', function(){
    $('.app').addClass('closing');
    setTimeout(function(){
      main.close();
    }, 300);
  });

  $('.tools .maximize').on('click', function(){
    main.maximize();
  });

  $('.tools .minimize').on('click', function(){
    main.minimize();
  });
});
