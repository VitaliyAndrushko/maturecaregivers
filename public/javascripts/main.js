$(document).ready(function(){

    //INITIALIZES PRETTYPHOTO PLUGIN
	$("a[rel^='prettyPhoto']").prettyPhoto({theme:'light_square'}); //choose between different styles / dark_rounded / light_rounded / dark_square / light_square / facebook /

    //INITIALIZES CYCLE2 PLUGIN
	$('.cycle-slideshow').cycle({
		fx:      'fade',
		speed:    3000,
		timeout:  5000,
		nowrap:  1,
		cleartype: false,
		startingSlide: 0
	});

	$('.phone').mask('000-000-0000');

	if ( $('#contact-modal').attr('data-success') === 'success' ) {
		$('#contact-modal').modal('show');
	}

	if ( $('#find-modal').attr('data-success') === 'success' ) {
		$('#find-modal').modal('show');
	}
});
