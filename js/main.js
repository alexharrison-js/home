$(document).ready(function() {
	// Header Scroll
	$(window).on('load', function() {
		var scroll = $(window).scrollTop();
		$('#header').addClass('fixed');

/* -- below was the function to make nav bar translucent on load, then add color / opacity change after scroll over 50 px
If background image changes, consider adding the below function

		if (scroll >= 00) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
		*/
	});



	// Fancybox
	$('.work-box').fancybox();

	// Page Scroll

//This page scroll should be adjusted so that the buttons are bigger cuz rn it has to be on text specifically


	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});