#!/usr/bin/env coffee

{UI, Client, Server, codes} = require './lib'
{stdin, stdout} = process

ui = new UI process
stdin.resume();

ui.build()

share = {typed:'', right:0}
ui.on 'input', (data, rawdata) ->
  isFunction = ui.handle 'input functions', [data, rawdata, ui, share]

  if rawdata[0] is 13
    console.log '\n' + share.typed
    share.typed = ''
    ui.prompt()

  else if isFunction isnt true
    ui.write data
    if !share.right
      share.typed += data
    else
      alter = share.typed.split('')
      alter[alter.length - share.right] = data
      share.typed = alter.join('')
      share.right--


ui.on 'resize', ->
  ui.prompt

ui.on 'exit', (data) ->
  ui.format 'none'
    .color 'none', 'none'
    .restore 'screen'
  process.exit()
