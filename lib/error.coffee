Core = require './core'
UI = require './ui'
module.exports =
class Verr extends Core
  constructor: (message) ->
    ui = new UI process
    ui.color {fore: 'red'}
      .write 'Error: '
      .color {fore: 'yellow'}
      .write message + '\r\n'
      .format 'none'

    process.exit()
