module.exports =
(->
  "use strict"
  lib = require "./lib"

  {Client, Interface} = lib
  {stdin, stdout, argv} = process
  argv = argv.slice 1, process.argv.lenth

  Cluster = (params = {}) ->
    @params = params
    console.log "ayy"

  if stdin.isTTY
    cluster = new Cluster(
      host: argv[0],
      port: argv[1]
    )

  return Cluster
)()
