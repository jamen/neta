app = require 'app'
ipc = require 'ipc'
path = require 'path'
BrowserWindow = require 'browser-window'

module.exports =
class App
  options:{}
  init: (input) ->
    # Create
    @main = new BrowserWindow input
    @sub = {}
    @main.loadUrl 'file://' + path.join(@options.views or __dirname + '/../views', 'index.html')

  new: (key, input) ->
    @sub[key] = new BrowserWinodw input
    return @

  set: (name, value) ->
    @options[name] = value
    return @

  when: (input...) ->
    app.on input...
    return @

  on: (input...) ->
    ipc.on input...
    return @
