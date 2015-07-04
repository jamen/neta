Client = (stdin, stdout, argv, lib) ->
  data =
    dump: []

  methods =
    set: (data) ->
      data.dump.push data

    get: ->
      data.dump

module.exports = Client;
