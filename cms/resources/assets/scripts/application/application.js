/*--------------------------------------------------*\
	#REDDINGSCOURT NAME | JS MAIN COMPONENTS
	
	This script contains your standard jQuery shiz,
	functions, ui components & any other js magic.
	
	To start our script we wrap all of our code in a
	self-executing anonymous function.
\*--------------------------------------------------*/

/*  'use strict' enforces correct syntax.  */

'use strict';


/*  Declare IIFE & Namespace  */

((PRESLAND) => {

    function initMap() {
        
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

      
    


/* Checks if the namespace already exists & if not assign it */

})(window.PRESLAND = window.PRESLAND);


