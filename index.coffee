{App} = require './lib'
vint = new App

vint.when 'ready', ->
  vint.init(
    width: 800
    height: 800
  )
