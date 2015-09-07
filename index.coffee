#!/usr/bin/env coffee

{Frame, Client} = require './lib'
{stdin, stdout} = process

frame = new Frame process
stdin.resume();

frame
  .save()
  .set '[0m'
  .erase()
  .set '['+stdout.rows+';0f'
  .background '[40m'
  .set '[47;30m'
  .fillLine()
  .set '['+(stdout.rows+1)+'H'
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
  .restore()
  process.exit()
