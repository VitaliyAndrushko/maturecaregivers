$(document).ready(function(){

    //INITIALIZES PRETTYPHOTO PLUGIN
	$("a[rel^='prettyPhoto']").prettyPhoto({theme:'light_square'}); //choose between different styles / dark_rounded / light_rounded / dark_square / light_square / facebook /

    //INITIALIZES CYCLE2 PLUGIN
	$('.cycle-slideshow').cycle({
		fx:      'fade', // transition type
		speed:    3000,
		timeout:  5000,
		nowrap:  1,
		cleartype: false,   //  Fixes the issue with IE6+
		startingSlide: 0,
		// next: '#cycle-next',
		// prev: '#cycle-prev'
	});
});
