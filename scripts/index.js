'use strict';

const remote = require('remote'),
           $ = require('jquery'),
         Vue = require('vue');

let main = remote.getCurrentWindow();

$(function(){

  let comp = {
    app: {
      master: $('.app-master'),
      body: $('.app-body')
    },
    page: {
      title: $('.app-body .app-side .side-head .title')
    }
  };

  let app = new Vue({
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
          comp.app.body.removeClass('-active');
          comp.page.title.html('Groups');
        } else {
          this.mode = 'current';
          comp.app.body.addClass('-active');
          comp.page.title.html('Current group');
        }

      }
    }
  });

  main.on('maximize', () => comp.master.addClass('-maximized'));
  main.on('unmaximize', () => comp.master.removeClass('-maximized'));

});
