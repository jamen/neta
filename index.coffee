module.exports =
(->
  "use strict"
  lib = require "./lib"

  {Client, Interface} = lib
  {stdin, stdout, argv} = process
  argv = argv.slice 2, process.argv.lenth

  Cluster = (params = {}) ->
    {host, port} = params
    return (
      host: host,
      port: port
    )

  if stdin.isTTY
    cluster = Cluster(
      host: argv[0],
      port: argv[1]
    )
    console.log cluster

  return Cluster
)()
