{Socket} = require 'net'
{EventEmitter} = require 'events'

module.exports =
class Client extends EventEmitter
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
            @emit data.type, data

    return
