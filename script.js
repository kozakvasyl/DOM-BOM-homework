/*var block1 = document.getElementById('block1');
console.log(block1);*/

/*var block = document.getElementsByClassName('block');
console.log(block);*/

/*var i =0;
while (i < block.length) {
	console.log(block[i]);
	i++;
}*/

/*var main = document.getElementById('main');
console.log(main.childNodes);*/


/*console.log (navigator.userAgent);
console.log (navigator.platform);
console.log (screen);
console.log (location);*/

/*var html = '<form name="login" action="google.com" style="padding: 10px; align-self: center;">\
   <input type="text" name="age" style="height: 30px; margin-left: 10px">\
   <input type="text" name="username" style="height: 30px; margin-left: 10px">\
   <input type="text" name="date" style="height: 30px; margin-left: 10px">\
   <input type="submit" value="Validate Me" style="height: 30px; margin-left: 10px">\
</form>'*/



var appendForm = document.getElementById('block1');
var html = '<form name="login" action="google.com" style="padding: 10px; align-self: center;">\
   <input type="text" name="age" style="height: 30px; margin-left: 10px">\
   <input type="text" name="username" style="height: 30px; margin-left: 10px">\
   <input type="text" name="date" style="height: 30px; margin-left: 10px">\
   <input type="submit" value="Validate Me" style="height: 30px; margin-left: 10px; background: #104d62;">\
</form>'
appendForm.insertAdjacentHTML('beforeEnd', html);

console.log(html);

// ----- det curent year -----
 function clock () {
 	var time = new Date();
 	var year = time.getFullYear();
 	document.querySelectorAll('.bottom')[0].innerHTML =year+' ©   kozakvasyl';
 }
 clock();


