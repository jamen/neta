module.exports =
class Server
  ip: '0.0.0.0'
  port: 1338
  constructor: (ip, port) ->
    if ip then @ip = ip
    if port then @port = port

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
