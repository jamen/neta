tty = require 'tty'

module.exports =
class Frame
  process: null
  stdin: null
  stdout: null
  event: {}
  aLine: null
  codes: null

  constructor: (process) ->
    @process = process
    {@stdin, @stdout, @argv} = process
    #@argv = @argv.slice 2
    @aLine = new Array(@stdout.columns+1).join(' ')
    @codes = require './codes'

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
    return @

  set: (code) ->
    input = @encode(code)
    if arguments.length <= 1
      @stdin.write input
    else
      @write @encode(Array.prototype.slice.call(arguments))
    return @

  color: (fore, back) ->
    @set '['+ @codes.color[fore].fore +';'+ @core.color[back].back +'m'
    return @

  format: (code) ->
    @set '['+ (@codes.format[code]) +'m'
    return @

  erase: ->
    return @

  save: (which) ->
    if which is 'cur' or 'cursor'
      @set '[s'
    else if which is 'screen'
      @set '[?47h'
    return @

  restore: (which) ->
    if which is 'cur' or 'cursor'
      @set '[u'
    else if which is 'screen'
      @set '[?47l'
    return @

  # ~~~
  # Cursor actions
  up: (num) ->
    if typeof num is 'number'
      @set '['+num+'A'
    return @

  down: (num) ->
    if typeof num is 'number'
      @set '['+num+'B'
    return @

  right: (num) ->
    if typeof num is 'number'
      @set '['+num+'C'
    return @

  left: (num) ->
    if typeof num is 'number'
      @set '['+num+'D'
    return @

  pos: (x, y) ->
    if typeof x is 'number' and typeof y is 'number'
      @set '['+ x +';'+ y +'H'
    return @


  background: (color) ->
    return @

  # ~~~
  # Custom eventing
  on: (name, func) ->
    if typeof name is 'string' and typeof func is 'function'
      @event[name] = func
    return @

  trigger: (name, data) ->
    if arguments.length is 2
      if typeof name is 'string'
        if data instanceof Array and typeof @event[name] isnt 'undefined'
          @event[name].apply @, data
    return @
