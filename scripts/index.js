'use strict';

const Vue = require('vue'),
      $ = require('jquery'),
      remote = require('remote');

$(function(){
  const main = remote.getCurrentWindow();
  new Vue(require('./scripts/controller.js')(main));
  require('./scripts/events.js')(main);
});
