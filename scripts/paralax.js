
window.addEventListener('scroll', function (e) {
  console.log(document.body.scrollTop);
  var $parallax = document.getElementsByTagName('header')[0];
  var posY = window.pageYOffset;
  $parallax.style.backgroundPositionY = -posY + 'px';
});