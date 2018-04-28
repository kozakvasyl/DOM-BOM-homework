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



/*var appendForm = document.getElementById('block1');
var html = '<form name="login" action="google.com" style="padding: 10px; align-self: center;">\
   <input type="text" name="age" style="height: 30px; margin-left: 10px">\
   <input type="text" name="username" style="height: 30px; margin-left: 10px">\
   <input type="text" name="date" style="height: 30px; margin-left: 10px">\
   <input type="submit" value="Validate Me" style="height: 30px; margin-left: 10px; background: #104d62;">\
</form>'
appendForm.insertAdjacentHTML('beforeEnd', html);

console.log(html); */

var block1 = document.querySelectorAll('#block1')[0];
var form = document.createElement('form');
form.name="login";
form.action="google.com";
form.className = "validate";
block1.insertAdjacentElement('beforeend', form);


var age = document.createElement('input');
age.type= "text";
age.name= "age";
age.placeholder = "age";
age.className = "inputStyle";
form.insertAdjacentElement('beforeEnd', age);

var username = document.createElement('input');
username.type="text";
username.name="username";
username.placeholder = "_@gmail.com";
username.className = "inputStyle";
form.insertAdjacentElement('beforeEnd', username);

var date = document.createElement('input');
date.type="text";
date.name="date";
date.placeholder = "curent date";
date.className = "inputStyle";
form.insertAdjacentElement('beforeEnd', date);

var submit = document.createElement('input');
submit.type="submit";
submit.value="Validate Me";
submit.className = "submitStyle";
form.insertAdjacentElement('beforeEnd', submit);

var regexAge = 






// ----- get curent year -----
 function clock () {
 	var time = new Date();
 	var year = time.getFullYear();
 	document.querySelectorAll('.bottom')[0].innerHTML =year+' ©   kozakvasyl';
 }
 clock();

 


