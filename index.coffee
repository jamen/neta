#!/usr/bin/env coffee

{Frame, Client, Server, codes} = require './lib'
{stdin, stdout} = process

frame = new Frame process
stdin.resume();

frame
  .save 'screen'
  .format 'none'
  .erase()
  .pos stdout.rows, 0
  .background 'black'
  .color 'black', 'white'
  .fillLine()
  .pos stdout.rows+1, 0
  .write '> '

typed = 0
frame.on 'input', (data, rawdata) ->
  if rawdata[0] is 127
    if typed isnt 0
      frame
        .set '[1D'
        .write ' '
        .set '[1D'
        typed--
  else if rawdata[0] is 13

  else
    frame.write data
    typed++

frame.on 'exit', (data) ->
  frame
    .format 'none'
    .color 'none', 'none'
    .restore('screen')
  process.exit()
