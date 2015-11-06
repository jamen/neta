'use strict';

const remote = require('remote'),
           $ = require('jquery'),
         Vue = require('vue');

let main = remote.getCurrentWindow();

$(function(){

  let comp = {
    master: $('.app-master')
  };

  let app = new Vue({
    el: '#app',
    methods: {
      close: () => main.close(),
      min: () => main.minimize(),
      max: () => main.maximize()
    }
  });

  main.on('maximize', () => comp.master.addClass('-maximized'));
  main.on('unmaximize', () => comp.master.removeClass('-maximized'));

});
