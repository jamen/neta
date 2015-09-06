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
    console.log @argv

  on: (name, func) ->
    @event[name] = func

  trigger: (name, data) ->
    @event[name].apply this, data
