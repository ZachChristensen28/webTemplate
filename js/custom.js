$(function() {
  /**
   * Mobile Navigation show/hide
   */
  $('i').on('click', function() {
    if ($('nav').css('display') !== 'grid') {
      $('nav').css('display', 'grid').slideUp(0);
    }
    $('nav').slideToggle('slow', 'swing');
  });
});
