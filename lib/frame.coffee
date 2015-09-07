tty = require 'tty'
code = require './resources'

module.exports =
class Frame
  process: null
  stdin: null
  stdout: null
  event: {}
  aLine: null

  constructor: (process) ->
    @process = process
    {@stdin, @stdout, @argv} = process
    #@argv = @argv.slice 2
    @aLine = new Array(@stdout.columns+1).join(' ')

    @stdin.setRawMode true

    @stdin.on 'data', (rawdata) =>
      data = rawdata.toString()
      @trigger 'input', [data, rawdata]
      if rawdata[0] is 3
        @trigger 'exit', [rawdata[0]]

    @stdout.on 'resize', =>
      @aLine = new Array(@stdout.columns+1).join(' ')
      @trigger 'resize', []

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
    return this

  set: (code) ->
    input = @encode(code)
    if arguments.length <= 1
      @stdin.write input
    else
      @write @encode(Array.prototype.slice.call(arguments))
    return this



  save: ->
    @set '[?47h'
    return this

  restore: ->
    @set '[?47l'
    return this

  # ~~~
  # Custom eventing
  on: (name, func) ->
    if typeof name is 'string' and typeof func is 'function'
      @event[name] = func
    return this

  trigger: (name, data) ->
    if arguments.length is 2
      if typeof name is 'string'
        if data instanceof Array and typeof @event[name] isnt 'undefined'
          @event[name].apply this, data
    return this
