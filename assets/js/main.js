
(function($){
	"use strict";
    jQuery(document).ready(function () {
        jQuery('.menu').meanmenu();
    });
	// PRELOADER JS CODE
    jQuery(window).on('load',function(){
        jQuery(".loader-box").fadeOut(500);
    });
	// END PRELOADER JS CODE
	
	$(document).on('ready', function(){
		
		// START MENU JS CODE
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.main-menu').addClass('menu-shrink animated slideInDown');
			} else {
				$('.main-menu').removeClass('menu-shrink animated slideInUp');
			}
		});	
		
		$('.menu li a').on('click', function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
			e.preventDefault();
        });
		
		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
        });
		
		

		//POPUP VIDEO JS CODE
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
		//END POPUP VIDEO JS CODE


	// WOW active
	new WOW().init();

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dots:true,
		smartSpeed: 2000,
		autoplay:true,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
	//END CLIENTS SLIDER JS CODE
	

	// POPPUP GALLERY JS CODE
	$('.popup-gallery').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image'
		// other options
	  });
	// END POPPUP GALLERY JS CODE

	
	// MIXITUP JS CODE
	var mixer = mixitup('#shorting');
	

	var scroll = new SmoothScroll('a[href*="#"]');

	
		// TOP BUTTON JS CODE
		$('body').append('<div id="toTop" class="top-arrow"><i class="fas fa-fighter-jet"></i></div>');
		$(window).on('scroll', function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
			$('#toTop').fadeOut();
			}
		}); 
		$('#toTop').on('click', function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		// END TOP BUTTON JS CODE
	});
    
}(jQuery));

function openSearch() {
	document.getElementById("myOverlay").style.display = "block";
	}
	function closeSearch() {
	document.getElementById("myOverlay").style.display = "none";
	}