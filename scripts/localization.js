
var lang = document.getElementsByName('lang');

for (var i=0; i<lang.length; i++) {
	lang[i].addEventListener('change', applyLanguage, changeLanguage);
};

function applyLanguage() {
	localStorage.language = this.value;
}

var getCurrentLanguage = function () {
	var defaultLanguage = 'ua';
	
	var langLocal = localStorage.language;
	  	if(langLocal) {
	  		return langLocal;
	  	}
	  	else {
	  		return defaultLanguage;
	  	}
}
var currentLang = getCurrentLanguage();

function changeLanguage(param) {
	param();
	var langEls= document.getElementsByClassName('lang-' + currentLang);
	for (var i=0; i<langEls.length; i++) {
		langEls[i].classList.add('visible');
	}
}
changeLanguage(delPrevLang);

function delPrevLang() {
	var prevLang = document.getElementsByClassName('lang');
	for (var i = 0; i<prevLang.length; i++) {
		prevLang[i].classList.remove('visible');
	}
}

var $save = document.querySelector('#save');
$save.addEventListener('click', function(e){
	('language', e.target.value);
});
