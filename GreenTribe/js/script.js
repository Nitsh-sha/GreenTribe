/* =========================================
                Preloader
============================================ */
$(window).on('load', function () { // make sure that the site is fully loaded
	$('#status').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
});

/* =========================================
                Team
============================================ */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});

/* =========================================
                Responsive Tabs
============================================ */
$(function () {
	$("#crisis-tabs").responsiveTabs({
		animation: 'slide'
	});
});


/* =========================================
                Stats
============================================ */
$(function () {
	$(".counter").counterUp({
		delay: 10,
		time: 2000
	});
});

/* =========================================
                Clients
============================================ */
$(function () {
	$("#clients-list").owlCarousel({
		items: 6,
		autoplay: false,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
            // breakpoint from 0 up
            0: {
                items: 4
            },
            // breakpoint from 480 up
            480: {
                items: 6
            },
			// breakpoint from 768 up
			768: {
                items: 7
            }
        }
	});
});

/* =========================================
                Navigation
============================================ */

/* Show & hide navigation */
$(function () {
    showHideNav();
    $(window).scroll(function () {
        showHideNav();
    });
    function showHideNav() {
        if( $(window).scrollTop() > 50 ) {
            $("nav").addClass("white-nav-top");
			$("#back-to-top").fadeIn();
        } else {
            $("nav").removeClass("white-nav-top");
			$("#back-to-top").fadeOut();
        }
    }
});

// Smooth Scrolling
$(function() {
	$("a.smooth-scroll").click(function(event) {
		event.preventDefault();
		var section_id = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(section_id).offset().top - 64
		}, 1250);
	});
});

/* =========================================
                Mobile menu
============================================ */
$(function() {
	
	// Show nav
	$("#mobile-nav-open-btn").click(function() {	$("#mobile-nav").css("height", "100%");	
	});
	
	// Hide nav
	$("#mobile-nav-close-btn, #mobile-nav a").click(function() {	$("#mobile-nav").css("height", "0%");	
	});
	
	

});














