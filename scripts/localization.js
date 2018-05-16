var lang = document.getElementsByName('lang');
		for (var i=0; i<lang.length; i++) {
			lang[i].onchange = applyLanguage;
		}

function applyLanguage() {
	localStorage.setItem('myKey', this.value);
}

/*var applyLanguage = function (lang) {  
	alert('now language is: ' + lang);
	var lang = document.getElementsByName('lang');
		for (var i=0; i<lang.length; i++) {
			if (lang[i].checked) {
				localStorage.setItem('myKey', lang[i].value);
			}
		}
}*/


var getCurrentLanguage = function () {
	var defaultLanguage = 'ua';
	
	var langLocal = localStorage.getItem('myKey');
	  	if(langLocal) {
	  		return langLocal;
	  	}
	  	else {
	  		return defaultLanguage;
	  	}
}


var currentLang = getCurrentLanguage();
var langEls = document.getElementsByClassName('lang-' + currentLang);


for (var i=0; i<langEls.length; i++) {
	var langEl = langEls[i];
	langEl.classList.add('visible');
}

// $<prefix> == DOMElement
var $save = document.querySelector('#save');
$save.addEventListener('click', function(){
	alert(1);
});