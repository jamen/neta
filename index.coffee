#!/usr/bin/env coffee

{Frame, Client} = require './lib'
{stdin, stdout} = process

frame = new Frame process
stdin.resume();

frame.on 'input', (data, rawdata) ->
  console.log data, rawdata

frame.on 'exit', (data) ->
  process.exit()
