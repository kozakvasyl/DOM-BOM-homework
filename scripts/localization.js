
var applyLanguage = function (lang) {  
	alert('now language is: ' + lang);
}

var getCurrentLanguage = function () {
	var defaultLanguage = 'ua';
	//
  
  return defaultLanguage;
}

var currentLang = getCurrentLanguage();
var langEls = document.getElementsByClassName('lang-' + currentLang)[0];
console.log(langEls);
for (var i=0; i<langEls.length; i++) {
	var langEl = langEls[i];
console.log('clicked-',langEls);	
  // langEl.style.display = 'inline';
  langEl.classList.add('visible');
}





// $<prefix> == DOMElement
var $save = document.querySelectorAll('#save')[0];
console.log($save);
$save.addEventListener('click', function(){
	alert(1);
});