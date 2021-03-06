//require('smoothscroll-polyfill').polyfill();

import 'smoothscroll-polyfill'
import { tns } from "tiny-slider/src/tiny-slider.module"

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

    // function initMap() {
        
    //     var uluru = {lat: -25.363, lng: 131.044};
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //         zoom: 4,
    //         center: uluru
    //     });
    //     var marker = new google.maps.Marker({
    //         position: uluru,
    //         map: map
    //     });
    // }

    const smoothTarget = document.querySelectorAll('.js-smooth-scroll')

    if (smoothTarget.length) {

        [...smoothTarget].map(link => {

            link.onclick = ((e) => {
            
                const href = link.getAttribute("href")
                const target = document.querySelectorAll(href)[0]

                target.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                });
                

            })

        })

    }

    console.log(tns)

    const slider = tns({
        container: document.querySelector('.js-slider'),
        items: 3,
        slideBy: 'page',
        autoplay: false,
        ".js-slider": "#responsive",
        "responsive": {
            "0": 1,
            "600": 2,
            "900": 3
        },
        controls: false
    });
    


/* Checks if the namespace already exists & if not assign it */

})(window.PRESLAND = window.PRESLAND);


