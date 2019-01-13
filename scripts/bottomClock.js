// ----- get curent year -----
 function clock () {
 	var time = new Date();
 	var year = time.getFullYear();
 	document.querySelectorAll('.bottom')[0].innerHTML =year+' ©   kozakvasyl';
 }
 clock();
