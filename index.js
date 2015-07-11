module.exports =
(function(){
  "use strict"
  var lib = require("./lib")
  // let {Client, Interface} = lib
  // let {stdin, stdout, argv} = process

  var Client = lib.client,
      Interface = lib.interface;

  var stdin = process.stdin,
      stoud = process.stdout,
      argv = process.argv.slice(2, process.argv.length);

  var Cluster = function(params /* = {} */) {
    var params = (typeof params === "undefined" ? {} : params);
    // let {host, port} = params
    var host = params.host,
        port = params.port;

    return {
      host: host,
      port: port
    }
  }

  if (stdin.isTTY) {
    var cluster = Cluster({
      host: argv[0],
      port: argv[1]
    })
    console.log(cluster)
  }

  return Cluster
})()
