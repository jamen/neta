tty = require 'tty'
fs = require 'fs'
{EventEmitter} = require 'events'

module.exports =
class UI extends EventEmitter
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
    {@codes, @handlers} = require './'

    @stdin.setRawMode true

    @stdin.on 'data', (rawdata) =>
      data = rawdata.toString()
      @emit 'input', data, rawdata
      if rawdata[0] is 3
        @emit 'exit', rawdata[0]

    @stdout.on 'resize', =>
      @aLine = new Array(@stdout.columns+1).join(' ')
      @emit 'resize'

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
    @set '[' + @codes.colors[fore].fore + ';' + @codes.colors[back].back + 'm'
    return @

  format: (code) ->
    code = @codes.format[code]
    @set('[' + code + 'm')
    return @

  erase: ->
    @set '[2J'
    return @

  save: (which) ->
    if which is 'cur' or which is 'cursor'
      @set '[s'
    else if which is 'screen'
      @set '[?47h'
    return @

  restore: (which) ->
    if which is 'cur' or which is 'cursor'
      @set '[u'
    else if which is 'screen'
      @set '[?47l'
    return @

  # ~~~
  # Cursor actions
  up: (num) ->
    if typeof num is 'number'
      @set '[' +num+ 'A'
    return @

  down: (num) ->
    if typeof num is 'number'
      @set '[' +num+ 'B'
    return @

  right: (num) ->
    if typeof num is 'number'
      @set '[' +num+ 'C'
    return @

  left: (num) ->
    if typeof num is 'number'
      @set '[' +num+ 'D'
    return @

  pos: (x, y) ->
    if typeof x is 'number' and typeof y is 'number'
      @set '[' + x + ';' + y + 'H'
    return @

  fillLine: ->
    @write @aLine
    return @

  background: (back) ->
    @save 'cur'
    i = 0
    while @stdout.rows >= i
      @pos i, 0
      @fillLine()
      @color 'none', back
      i++;
    @restore 'cur'
    @color 'none', 'none'
    return @

  prompt: ->
    @pos @stdout.rows, 0
    @color 'black', 'white'
    @fillLine()
    @pos @stdout.rows+1, 0
    @write '> '
    return @

  build: ->
    @save 'screen'
    @format 'none'
    @erase()
    @background 'black'
    @prompt()
    return @

  handle: (name, data) ->
    return @handlers[name]?.apply @, data
