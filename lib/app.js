var App, BrowserWindow, app, ipc, path,
  slice = [].slice;

app = require('app');

ipc = require('ipc');

path = require('path');

BrowserWindow = require('browser-window');

module.exports = App = (function() {
  function App() {}

  App.prototype.options = {
    views: __dirname
  };

  App.prototype.init = function(input) {
    var screen;
    screen = require('screen');
    this.screen = screen.getPrimaryDisplay();
    if (typeof input.height === 'undefined') {
      input.height = this.screen.bounds.height - 200;
    }
    if (typeof input.width === 'undefined') {
      input.width = this.screen.bounds.width - 100;
    }
    this.main = new BrowserWindow(input);
    this.sub = {};
    this.main.openDevTools();
    return this.load([this.options.views, '..', 'views', 'index.html']);
  };

  App.prototype["new"] = function(key, input) {
    this.sub[key] = new BrowserWinodw(input);
    return this;
  };

  App.prototype.set = function(name, value) {
    this.options[name] = value;
    return this;
  };

  App.prototype.when = function() {
    var input;
    input = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    app.on.apply(app, input);
    return this;
  };

  App.prototype.on = function() {
    var input;
    input = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    ipc.on.apply(ipc, input);
    return this;
  };

  App.prototype.load = function(name, loc) {
    if (arguments.length > 1) {
      return this.sub[name].loadUrl('file://' + path.join.apply(path, loc));
    } else {
      return this.main.loadUrl('file://' + path.join.apply(path, name));
    }
  };

  return App;

})();
