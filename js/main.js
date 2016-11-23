$(function() {
  $('button').on('click', function(eventObject) {
      console.log('button was clicked');
      $('button' ).toggleClass('off');
      $('button' ).toggleClass('on');
      $('body' ).toggleClass('light');
      $('body' ).toggleClass('dark');

      if ($('button').hasClass('off')) {
          $('h1').text('lights turned off');
      }  else {
          $('h1').text('lights turned on');
      }
});
});
