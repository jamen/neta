net = require 'net'

module.exports =
class Client
  name: null
  location: null
  constructor: (name, location) ->
    @name = name
    @location = location
