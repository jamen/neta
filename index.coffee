#!/usr/bin/env coffee

{Frame, Client} = require './lib'
{stdin, stdout} = process

frame = new Frame process

process.stdin.resume()

frame.on 'input', (data) ->
  stdout.write('> ')
