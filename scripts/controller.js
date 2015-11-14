'use strict';

const remote = require('remote');

module.exports = function(main){
  return {

    'el': '#app',
    'methods': {
      'close': ()=> main.close(),
      'min': ()=> main.minimize(),
      'max': ()=> main.maximize()
    }

  };
};
