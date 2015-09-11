Core = require './core'
UI = require './ui'
module.exports =
class Verr extends Core
  constructor: () ->
    ui = new UI process
    @on 'new', (message) ->
      ui.color {fore: 'red'}
        .write 'Error: '
        .color {fore: 'yellow'}
        .write message + '\r\n'
        .format 'none'

      process.exit()
