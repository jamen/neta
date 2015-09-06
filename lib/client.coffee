net = require 'net'

module.exports =
class Client
  name: null
  location: null
  event: {}

  constructor: (name, location) ->
    @name = name
    @location = location
    return

  on: (name, func) ->
    @event[name] = func

  trigger: (name, data) ->
    @event[name].apply this, data
