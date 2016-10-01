$(document).ready(function(){

	// Initialize WOW plugin for animations
	new WOW().init();


	// Use a scroll animation on nav menu items
	$('.nav-link').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': ($target.offset().top - 50)
	    }, 950, 'swing', function () {
	        window.location.hash = target;
	    });
	});


});
