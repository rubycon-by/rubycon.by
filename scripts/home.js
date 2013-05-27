$(function() {
  var hoverHighlight;
  hoverHighlight = function(selector, color) {
    return $(selector).hover((function() {
      return $(this).parent().find(selector).animate({
        backgroundColor: color,
        color: '#fff'
      }, 100);
    }), function() {
      return $(this).parent().find(selector).animate({
        backgroundColor: '#fff',
        color: '#a7a3aa'
      }, 0);
    });
  };
  hoverHighlight('.ruby', '#cf2f30');
  hoverHighlight('.js', '#d4622a');
  hoverHighlight('.search', '#327a5f');
  hoverHighlight('.html', '#2274b5');
  hoverHighlight('.db', '#6422b5');
  return hoverHighlight('.web', '#3d6175');
});