(function ($) {
    
    // Navigation scrolls
		
	$('.navbar-nav li a').bind('click', function(event) {
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
        	$('html, body').stop().animate({				
            	scrollTop: $($anchor.attr('href')).offset().top - 30				
        	}, 1000, 'easeInOutExpo');
        
        	event.preventDefault();
        }
	});
	
	$(document).ready(function() {
		var spot = $(window.location.hash);
		console.log(spot);
		
		if (spot.length) {
			console.log('working');
			$('html, body').stop().animate({
				scrollTop: spot.offset().top - 30
			})
		}
	});
	
	$(window).scroll(function(event) {
		$('.navbar-nav li').removeClass('active');
		var activeSection = $('#homeBan');
		
		var scrollLoc = parseInt($('body').scrollTop());
		var scrollServices = parseInt($('#service').offset().top - 60);
		var scrollPortfolio = parseInt($('#portfolio').offset().top - 60);
		var scrollTeam = parseInt($('#about').offset().top - 60);
		var scrollContact = parseInt($('#contact').offset().top - 60);
		
		if (scrollLoc >= scrollServices) {
			activeSection = $('#serviceNav');
		}
		
		if (scrollLoc >= scrollPortfolio) {
			activeSection = $('#portfolioNav');
		}
		
		if (scrollLoc >= scrollTeam) {
			activeSection = $('#aboutNav');
		}
		
		if (scrollLoc >= scrollContact) {
			activeSection = $('#contactNav');
		}
		
		activeSection.addClass('active');
	});
       

    // Instantiate MixItUp:
    $('#Container').mixItUp();

    // Team Slider
    $('.autoplay').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    
})(jQuery);