/*
var lang = document.getElementsByName('lang');
		for (var i=0; i<lang.length; i++) {
			lang[i].onclick = applyLanguage;
		}

function applyLanguage(lang) {
	var prevVisible = document.querySelectorAll('.visible');
	
	for (var i =0; i<prevVisible.length; i++) {
		prevVisible[i].classList.remove('visible');
	}

	var langEls= document.getElementsByClassName('lang-' + currentLang);
	for (var i=0; i<langEls.length; i++) {
		langEls[i].classList.add('visible');
	}

	localStorage.setItem('myKey', this.value);
}

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


var $save = document.querySelector('#save');
$save.addEventListener('click', function(e){
	localStorage.setItem('myKey', e.target.value);
});*/


var lang = document.getElementsByName('lang');

for (var i=0; i<lang.length; i++) {
	lang[i].addEventListener('change', applyLanguage);
};

function applyLanguage() {
	//delPrevLang();
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

function changeLanguage() {
	var langEls= document.getElementsByClassName('lang-' + currentLang);
	for (var i=0; i<langEls.length; i++) {
		langEls[i].classList.add('visible');
	}
}
changeLanguage();

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


/*var language='ua';
var lang = document.getElementsByName('lang');
for (var i=0; i<lang.length; i++) {
	lang[i].addEventListener('change', function () {
	language = this.value;
	changeLanguage();
	});
}

function changeLanguage() {
	var langEls= document.getElementsByClassName('lang-' + language);
	for (var i=0; i<langEls.length; i++) {
		langEls[i].classList.add('visible');
	}
}
*/