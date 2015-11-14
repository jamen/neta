'use strict';

module.exports = (main) => ({
    'el': '#app',
    'methods': {
      'close': ()=> main.close(),
      'min': ()=> main.minimize(),
      'max': ()=> main.maximize()
    }
});
