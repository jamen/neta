module.exports =
(function(stdin, stdout, argv){
  "use strict";
  var lib = require("./lib"),

  Cluster = function(params){
    var self = this;
    this.params = params || {};
    this.lib = lib;

    /* Old tests that used a version of Interface I forgot to commit:
    this.interface = new lib.Interface(stdin, stdout, argv, lib);
    this.interface.input(function(data){
      self.interface.output(data);
    });*/

    if (typeof this.params !== "undefined") console.log(this.params);
  };

  /* Check if we're launching as a client
   * instead of using as a module.  Then
   * use the API.
   */
  if (stdin.isTTY) {
    var cluster = new Cluster({
      host: argv[0],
      port: argv[1]
    });
  }


  // Pass value to anonymous function,
  // which is set to module export.
  // So it can be used a API.
  return Cluster;
}(process.stdin,
  process.stdout,
  process.argv.slice(2, process.argv.length)));
