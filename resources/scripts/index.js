$(function() {
  var chat, input, resize;
  input = {
    main: $('.input.main'),
    container: $('.input-container'),
    wrap: $('.input-container .wrap')
  };
  chat = $('.chat');
  resize = function() {
    return chat.css('bottom', input.container.innerHeight() + 'px');
  };
  resize();
  return input.main.on('input keydown keyup', function(e) {
    if (e.type === 'keydown' || e.type === 'keyup') {
      if (e.keyCode === 13 && !e.shiftKey) {
        input.main.html('');
      }
    }
    if (input.container.outerHeight() !== 160) {
      if (input.wrap.hasClass('shadow')) {
        input.wrap.removeClass('shadow');
      }
    } else {
      input.main.scrollTop(input.main[0].scrollHeight);
      if (!input.wrap.hasClass('shadow')) {
        input.wrap.addClass('shadow');
      }
    }
    return resize();
  });
});
