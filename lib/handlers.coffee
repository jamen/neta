module.exports =
  'input functions': (data, rawdata, frame, share) ->
    # Delete
    if rawdata[0] is 127
      if share.typed.length isnt 0
        frame
          .set '[1D'
          .write ' '
          .set '[1D'

      share.typed = share.typed.slice(0, -1)
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
          frame.write data
          share.right--
        return true


      # Left
      if rawdata[2] is 68
        if (share.typed.length - share.right) isnt 0
          frame.write data
          share.right++
        return true



    return false
