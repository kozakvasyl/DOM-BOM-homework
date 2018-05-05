window.addEventListener('scroll', function (e) {
  console.log(document.body.scrollTop);
  var $parallax = document.getElementById('parallax1');
  var posY = window.pageYOffset * 1.5;
  $parallax.style.backgroundPosition = '5px ' + (-posY) + 'px';
})