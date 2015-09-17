$ ->
  input =
    main: $('.input.main')
    container: $('.input-container')
    wrap: $('.input-container .wrap')

  chat = $('.chat')

  resize = ->
    chat.css 'bottom', input.container.innerHeight() + 'px'
  resize()

  input.main.on 'input keydown keyup', (e) ->
    # Sending events
    if e.type is 'keydown' or e.type is 'keyup'
      if e.keyCode is 13 and not e.shiftKey # enter minus shift
        input.main.html ''

    if input.container.outerHeight() isnt 160
      if input.wrap.hasClass 'shadow'
        input.wrap.removeClass 'shadow'

    else
      input.main.scrollTop(input.main[0].scrollHeight)
      if !input.wrap.hasClass 'shadow'
        input.wrap.addClass 'shadow'

    resize();
