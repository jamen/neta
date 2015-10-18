'use strict';

const $ = require('jquery'),
      remote = require('remote');

let main = remote.getCurrentWindow();

$(function(){
  $('.tools > div').on('click', function(e){
    main[e.target.className]();
  });
});
