
window.addEventListener('scroll', function (e) {
  var $parallax = document.getElementsByTagName('header')[0];
  var posY = window.pageYOffset;
  $parallax.style.backgroundPositionY = -posY + 'px';
});