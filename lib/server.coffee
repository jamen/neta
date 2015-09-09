{EventEmitter} = require 'events'
Core = require './core'

module.exports =
class Server extends Core
  ip: '0.0.0.0'
  port: 1338
  constructor: (ip, port) ->
    if ip then @ip = ip
    if port then @port = port
