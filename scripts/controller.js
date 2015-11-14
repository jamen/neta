'use strict';

module.exports = (main) => { return {
    'el': '#app',
    'methods': {
      'close': ()=> main.close(),
      'min': ()=> main.minimize(),
      'max': ()=> main.maximize()
    }
};};
