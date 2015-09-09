module.exports =
  'input functions': (data, rawdata, ui, share) ->
    # Delete
    if rawdata[0] is 127
      if (share.typed.length - share.right) isnt 0
        ui.save 'cur'
        burst = share.typed.split('')
        burst.splice share.typed.length - share.right - 1, 1
        share.typed = burst.join ''
        ui
          .prompt share.typed
          .restore 'cur'
          .left 1
      return true

    # Arrow
    if rawdata[0] is 27 and rawdata[1] is 91
      # Up
      if rawdata[2] is 65
        return true

      # Down
      if rawdata[2] is 66
        return true

      # Right
      if rawdata[2] is 67
        if share.right isnt 0
          ui.write data
          share.right--
        return true


      # Left
      if rawdata[2] is 68
        if (share.typed.length - share.right) isnt 0
          ui.write data
          share.right++
        return true



    return false
