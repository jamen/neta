module.exports.Core =
class Core extends EventEmitter
  hook: (name, value) ->
    @[name] = value
