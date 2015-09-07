module.exports =
class Server
  ip: '0.0.0.0'
  port: 1338
  constructor: (ip, port) ->
    if ip then @ip = ip
    if port then @port = port
