// ----- TASK1 validation -----
/*var block1 = document.querySelectorAll('#block1')[0];
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
date.placeholder = "dd-mm-yyyy (date)";
date.className = "inputStyle";
form.insertAdjacentElement('beforeEnd', date);

var submit = document.createElement('input');
submit.type="submit";
submit.value="Validate Me";
submit.className = "submitStyle";
form.insertAdjacentElement('beforeEnd', submit);

var success = 0;
var regexAge = /\d/g;
var regexUsername = /user_/;
var regexDate = /\d{2}-\d{2}-\d{4}/;

function validate(e) {
   e.preventDefault();

   if(regexAge.test(age.value) && age.value >= 0) {
      success++;
      console.log(true);
   }
      
   else
      age.style.border = '1px solid red';
      setTimeout( function(){age.style.border = '1px solid #0000003b'}, 3000);

   if( regexUsername.test(username)) {
      success++;
   }
   else if (!username.value) {return false;}
   else
      username.style.border = '1px solid red';
      setTimeout( function(){username.style.border = '1px solid #0000003b'}, 3000);

   if(regexDate.test(date)) {
      success++;
   }
   else if (!date.value) {return false;}
   
   else
      date.style.border = '1px solid red';
      setTimeout( function(){date.style.border = '1px solid #0000003b'}, 3000);
      alert('Your date is invalid');
      

   if(success === 3) { 
      window.open('https://www.google.com/');
   }
}

form.addEventListener('submit', validate);*/




// ----- TASK3 user system -----

var button = document.querySelectorAll('.button')[0];
button.addEventListener('click', showPlatform);

function showPlatform () {

   var platform = navigator.platform.toLowerCase();

   var platformsMap = {
      'mac': 'macos',
      'iphone': 'macos',
      'win': 'windows',
      'linux': 'linux'
   };

   for (var key in platformsMap) {
      key = key.toLowerCase();
      var version = platformsMap[key];
     
     if (platform.indexOf(key) >= 0){
       
          var message = document.getElementsByClassName('download-message');
            
        for (var i = 0; i <= message.length; i++) {
            
            if ( message[i].getAttribute('data-version') === version ) {
               
               message[i].style.display='block';
            }
         }
      }
   }
}


// ----- get curent year -----
 function clock () {
 	var time = new Date();
 	var year = time.getFullYear();
 	document.querySelectorAll('.bottom')[0].innerHTML =year+' ©   kozakvasyl';
 }
 clock();
