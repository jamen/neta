module.exports =
class Frame
  process: null
  stdin: null
  stdout: null
  event: {}

  constructor: (process) ->
    @process = process
    {@stdin, @stdout} = process

  on: (name, func) ->
    @event[name] = func

  trigger: (name, data) ->
    @event[name].apply this, data
