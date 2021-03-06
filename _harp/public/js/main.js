$(document).ready(function(){

	// Initialize WOW plugin for animations
	new WOW().init();


	// Use a scroll animation on nav menu items
	$('.nav-link').on('click',function (e) {
	    e.preventDefault();

			$('.navbar-collapse').collapse('hide');

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': ($target.offset().top - 50)
	    }, 950, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	// Initialize Owl Carousel sliders
	$('#testimonial-carousel').owlCarousel({
		navigation: true,
		slideSpeed: 200,
		paginationSpeed: 600,
		singleItem: true,
		autoPlay: true,
		stopOnHover: true
	});

	// Initialize modals
	$('#service1').apFullscreenModal({
		openSelector: '#service1-link',
		showCloseButton: true
		// autoOpen: true
	});
	$('#service2').apFullscreenModal({
		openSelector: '#service2-link',
		showCloseButton: true
	});
	$('#service3').apFullscreenModal({
		openSelector: '#service3-link',
		showCloseButton: true
	});


	$(document).scroll(function() {
		var scrolledPx = parseInt( $(window).scrollTop() );
		var toScroll = parseInt(scrolledPx * 0.3);
		if(toScroll <= 0){
			toScroll = 0;
		}
		$('.header-bg').css( 'transform', 'translate3d(0px, ' + ( toScroll * -1 ) + 'px, 0px)')
	});


});
