'use strict';

const Vue = require('vue'),
        $ = require('jquery'),
   remote = require('remote');

$(function(){
  const main = remote.getCurrentWindow();
  require('./scripts/events.js')(main);
  let app = new Vue(require('./scripts/controller.js')(main));
});
