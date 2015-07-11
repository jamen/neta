var Interface = function(stdin, stdout, argv, lib) {
  var data = {dump: []};

  var methods = {
    set: function(data) {
      data.dump.push(data)
    },

    get: function() {
      return data.dump
    }
  }
}

module.exports = Interface;
