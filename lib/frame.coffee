module.exports =
class Frame
  process: null
  stdin: null
  stdout: null

  constructor: (process) ->
    @process = process
    {@stdin, @stdout} = process
