tty = require 'tty'

module.exports =
class Frame
  process: null
  stdin: null
  stdout: null
  argv: []
  event: {}

  constructor: (process) ->
    @process = process
    {@stdin, @stdout, @argv} = process
    @argv = @argv.slice 2

    @stdin.on 'data', (data) =>
      data = data.toString()
      @trigger 'input', [data.slice(0,-1)]

    return

  on: (name, func) ->
    if typeof name is 'string' and typeof func is 'function'
      @event[name] = func

  trigger: (name, data) ->
    if arguments.length is 2
      if typeof name is 'string'
        if data instanceof Array and typeof @event[name] isnt 'undefined'
          @event[name].apply this, data
