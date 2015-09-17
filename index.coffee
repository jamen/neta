{App} = require './lib'
vint = new App

vint.when 'ready', ->
  vint.init(
    'center': true
    'auto-hide-menu-bar': true
  )
