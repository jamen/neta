var App, vint;

App = require('./lib').App;

vint = new App;

vint.when('ready', function() {
  return vint.init({
    'center': true,
    'auto-hide-menu-bar': true
  });
});
