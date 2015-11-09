'use strict';

const remote = require('remote'),
           $ = require('jquery'),
         Vue = require('vue');

let main = remote.getCurrentWindow();

$(function(){

  const comp = require('./scripts/comp.js'),
        app = comp.app,
        side = comp.side;

  new Vue({
    el: '#app',
    data: {
      mode: 'groups',
      managing: false
    },
    methods: {
      close: () => main.close(),
      min: () => main.minimize(),
      max: () => main.maximize(),
      toggleMode: function(){
        if (comp.app.body.hasClass('-active')) {
          this.mode = 'groups';
          app.body.removeClass('-active');
          side.title.html('Groups');
        } else {
          this.mode = 'current';
          app.body.addClass('-active');
          side.title.html('Current group');
        }

      }
    }
  });

  main.on('maximize', () => app.master.addClass('-maximized'));
  main.on('unmaximize', () => app.master.removeClass('-maximized'));

});
