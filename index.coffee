#!/usr/bin/env coffee

{Frame, Client, Server, codes} = require './lib'
{stdin, stdout} = process

frame = new Frame process
stdin.resume();

frame.build()

typed = ''
previous = ''
frame.on 'input', (data, rawdata) ->
  if rawdata[0] is 127
    if typed isnt 0
      frame
        .set '[1D'
        .write ' '
        .set '[1D'
        typed = typed.slice(0, -1)
  else if rawdata[0] is 13
    frame.prompt()
    previous = typed
    typed = ''
  else if rawdata[0] is 27
    if rawdata[1] is 91 and rawdata[2] is 65
      frame.write previous
      typed = previous
    else if rawdata[2] is 66
    else
      frame.write data
      typed++
  else
    frame.write data
    typed += data

frame.on 'exit', (data) ->
  frame
    .format 'none'
    .color 'none', 'none'
    .restore('screen')
  process.exit()
