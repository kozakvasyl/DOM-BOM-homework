
var block1 = document.querySelectorAll('#block1')[0];
var form = document.createElement('form');
form.name="login";
form.action="google.com";
form.className = "validate";
block1.insertAdjacentElement('beforeend', form);


var age = document.createElement('input');
age.type= "text";
age.name= "age";
age.placeholder = "your age";
age.className = "inputStyle";
form.insertAdjacentElement('beforeEnd', age);

var username = document.createElement('input');
username.type="text";
username.name="username";
username.placeholder = "your username";
username.className = "inputStyle";
form.insertAdjacentElement('beforeEnd', username);

var date = document.createElement('input');
date.type="text";
date.name="date";
date.placeholder = "dd/mm/yyyy (date)";
date.className = "inputStyle";
form.insertAdjacentElement('beforeEnd', date);

var submit = document.createElement('input');
submit.type="submit";
submit.value="Validate Me";
submit.className = "submitStyle";
form.insertAdjacentElement('beforeEnd', submit);

var success = 0;
var regexAge = /()\d/g;
var regexUsername = 'user_';
var regexDate = /\d{2}\/\d{2}\/\d{4}/;


function validate(e) {
   e.preventDefault();

   if(age.value === regexAge || age.value >= 0)
      /*success++;*/
      console.log(success++);
   else
      age.style.border = '1px solid red'
      setTimeout( function(){age.style.border = '1px solid #0000003b'}, 3000);

   if (regexUsername == username.value)
      console.log(success++);
   else
      username.style.border = '1px solid red'
      setTimeout( function(){username.style.border = '1px solid #0000003b'}, 3000);

      if (regexDate == date.value)
      console.log(success++);
   else
      date.style.border = '1px solid red'
      setTimeout( function(){date.style.border = '1px solid #0000003b'}, 3000);


   if (success === 3) 
    window.open('https://www.google.com/');

      console.log (success);
}

form.addEventListener('submit', validate);



// ----- get curent year -----
/* function clock () {
 	var time = new Date();
 	var year = time.getFullYear();
 	document.querySelectorAll('.bottom')[0].innerHTML =year+' ©   kozakvasyl';
 }
 clock();*/

 var time = new Date();
 console.log(time);

 


