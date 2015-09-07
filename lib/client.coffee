{Socket} = require 'net'

module.exports =
class Client
  name: null
  location: null
  event: {}
  objects: {}
  socket: null
  inConnection: false

  constructor: (name, location, socketOptions) ->
    @name = name
    @location = location
    @socket = new Socket socketOptions

    @on 'new connection', (ip, port) ->
      @socket.connect port, ip, (socket) =>
        socket.on 'data', (data) =>
          try data = JSON.parse data catch
            data = {}

          if typeof data.type isnt 'undefined'
            @trigger data.type, [data]

    return

  on: (name, func) ->
    if typeof name is 'string' and typeof func is 'function'
      @event[name] = func

  trigger: (name, data) ->
    if arguments.length is 2
      if typeof name is 'string'
        if data instanceof Array and typeof @event[name] isnt 'undefined'
          @event[name].apply this, data
