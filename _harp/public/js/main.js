$(document).ready(function(){

	// Initialize WOW plugin for animations
	new WOW().init();


	// Animate the text in jumbo heading
	$('.jumbo-heading').textillate({ in: { effect: 'rubberBand' } });


	// Add animations to portfolio items on hover
	$('.box-content').hover(function(){
		$(this).find('i').addClass('animated').addClass('rubberBand');
	}, function(){
		$(this).find('i').removeClass('animated').removeClass('rubberBand');
	})


	// Use a scroll animation on nav menu items
	$('.nav-link').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	// At top of page make Navbar transparent

	


});
