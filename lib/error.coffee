UI = require './ui'
ui = new UI process

module.exports =
class Verr
  constructor: (message) ->
    ui.color {fore: 'red'}
      .write 'Error: '
      .color {fore: 'yellow'}
      .write message + '\r\n'

    process.exit()
