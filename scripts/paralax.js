
window.addEventListener('scroll', function (e) {
  console.log(document.body.scrollTop);
  var $parallax = document.getElementsByTagName('header')[0];
  var posY = window.pageYOffset * 1.7;
  $parallax.style.backgroundPosition = '1px ' + (-posY) + '1px';
});