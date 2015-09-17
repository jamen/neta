app = require 'app'
ipc = require 'ipc'
path = require 'path'
BrowserWindow = require 'browser-window'

module.exports =
class App
  options:
    views: __dirname

  init: (input) ->
    # Create
    screen = require('screen')
    @screen = screen.getPrimaryDisplay()

    if typeof input.height is 'undefined'
      input.height = @screen.bounds.height - 200

    if typeof input.width is 'undefined'
      input.width = @screen.bounds.width - 100

    @main = new BrowserWindow input
    @sub = {}
    @main.openDevTools()
    @load [@options.views, '..', 'views', 'index.html']

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

  load: (name, loc) ->
    if arguments.length > 1
      @sub[name].loadUrl 'file://' + path.join.apply path, loc
    else
      @main.loadUrl 'file://' + path.join.apply path, name
