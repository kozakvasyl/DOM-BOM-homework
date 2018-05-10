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
         var downloadMessage = document.getElementsByClassName('download-message');
                 
        for (var i = 0; i <= downloadMessage.length; i++) {
            var dataVersion = downloadMessage[i].getAttribute('data-version');
            
            if ( dataVersion === version ) {
               downloadMessage[i].style.display='block';
            }
         }
      }
   }
}