{encode} = require './ui'

module.exports =
class Verr
  constructor: (message) ->
    {stdin} = process
    stdin.write(encode '[31m')
    stdin.write 'Error: '
    stdin.write(encode '[0m')
    stdin.write message
    process.exit()
