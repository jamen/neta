tty = require 'tty'

module.exports =
class Frame
  process: null
  stdin: null
  stdout: null
  argv: []
  event: {}
  options: {}

  constructor: (process) ->
    @process = process
    {@stdin, @stdout, @argv} = process
    @argv = @argv.slice 2

    @stdin.setRawMode true

    @stdin.on 'data', (rawdata) =>
      data = rawdata.toString()
      @trigger 'input', [data, rawdata]
      if rawdata[0] is 3
        @trigger 'exit', [rawdata[0]]

    return

  encode: (input) ->
    bytes = (x) ->
      if typeof x is 'string'
        x.split('').map (c) =>
          return c.charCodeAt(0)

      else if Array.isArray(x)
        output = []
        input.forEach (part) ->
          output.push bytes(part)

        return output

    return new Buffer([0x1b].concat bytes(input))

  write: (input) ->
    if arguments.length <= 1
      @stdin.write input
    else
      inputs = Array.prototype.slice.call arguments
      inputs.forEach (input) ->
        @stdin.write input

  put: (code) ->
    input = @encode(code)
    if arguments.length <= 1
      @stdin.write input
    else
      @write @encode(Array.prototype.slice.call(arguments))

  set: (option, data) ->
    if typeof option is 'string' and typeof data isnt 'undefined'
      @options[option] = data

  on: (name, func) ->
    if typeof name is 'string' and typeof func is 'function'
      @event[name] = func


  trigger: (name, data) ->
    if arguments.length is 2
      if typeof name is 'string'
        if data instanceof Array and typeof @event[name] isnt 'undefined'
          @event[name].apply this, data
