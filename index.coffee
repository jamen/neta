#!/usr/bin/env coffee

{Frame, Client} = require './lib'
{stdin, stdout} = process

frame = new Frame process
stdin.resume();

collect = ''
frame.on 'input', (data, rawdata) ->
  if (rawdata[0] isnt 13)
    frame.put '[2J'
    frame.write rawdata
    collect += data
  else
    console.log collect
    collect = ''

frame.on 'exit', (data) ->
  process.exit()
