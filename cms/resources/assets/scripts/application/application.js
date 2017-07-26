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

    // Smooth scroll

    $(document).on('click', '.js-smooth-scroll', function(e) {

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

            var target = $(this.hash);

            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            if (target.length) {

                $('html, body').animate({

                    scrollTop: target.offset().top - headerHeight

                }, 800);

                e.preventDefault();

            }

        }

    });

    


/* Checks if the namespace already exists & if not assign it */

})(window.PRESLAND = window.PRESLAND);


