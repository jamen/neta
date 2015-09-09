module.exports =
class Core extends EventEmitter
  hook: (name, value) ->
    @[name] = value
