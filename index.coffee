#!/usr/bin/env coffee

{Frame, Client, Server, codes} = require './lib'
{stdin, stdout} = process

frame = new Frame process
stdin.resume();

frame.build()

share = {typed:'', right:0}
frame.on 'input', (data, rawdata) ->
  isFunction = frame.handle 'input functions', [data, rawdata, frame, share]

  if rawdata[0] is 13
    console.log '\n' + share.typed
    share.typed = ''
    frame.prompt()

  else if isFunction isnt true
    frame.write data
    if !share.right
      share.typed += data
    else
      alter = share.typed.split('')
      alter[alter.length - share.right] = data
      share.typed = alter.join('')


frame.on 'resize', ->
  frame.prompt

frame.on 'exit', (data) ->
  frame
    .format 'none'
    .color 'none', 'none'
    .restore('screen')
  process.exit()
