
(function() {
	var langDefault = document.getElementsByClassName('lang-ua');
	for(var i =0; i<langDefault.length; i++) {
		langDefault[i].classList.add('visible');
	};
} ());

var lang = document.getElementsByName('lang');
for (var i=0; i<lang.length; i++) {
	lang[i].addEventListener('change', applyLanguage);
};


// main function_____________
function applyLanguage() {
	localStorage.language = this.value;

	// get value from localStorage_______________
	function getCurrentLanguage() {
		
		var defaultLanguage = 'ua';
		var langLocal = localStorage.language;

		if(langLocal) {
			return langLocal;
		}else 	return defaultLanguage;
		
		
	}
	var currentLang = getCurrentLanguage();

	// change visibility on spans language___________
	function changeVisibleLanguage(param) {
		param();
		var langEls= document.getElementsByClassName('lang-' + currentLang);
		for (var i=0; i<langEls.length; i++) {
			langEls[i].classList.add('visible');
		}
	}
	changeVisibleLanguage(delPrevLang);
};

// remove visibility on spans language___________
function delPrevLang() {
	var prevLang = document.getElementsByClassName('lang');
	for (var i = 0; i<prevLang.length; i++) {
		prevLang[i].classList.remove('visible');
	}
};

// button event______________
var save = document.querySelector('#save');
save.addEventListener('click', function(){
	var langDefault = document.getElementsByClassName('lang-'+localStorage.language);
	for(var i =0; i<langDefault.length; i++) {
		langDefault[i].classList.add('visible');
	};
});


