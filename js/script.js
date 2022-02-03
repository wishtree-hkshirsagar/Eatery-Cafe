/*=====================================
                Preloader
=======================================*/
$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(500).fadeOut('slow');
});

/*=====================================
            Testimonial Section
=======================================*/
$(function() {
    $("#testimonialSlider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/*=====================================
            Header Section
=======================================*/

// Show and hide white navigation bar

$(function() {

    //Show and hide navigation bar on page reload/refresh
    showHideNav();

    //Show and hide navigation bar on page scroll
    $(window).scroll(function() {
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {
            //Show white navigation bar
            $("nav").addClass("whiteNavTop");

            // Show dark logo
            $(".navbar-brand img").attr("src", "images/logo/logo-dark.png");

            // Add logo styling
            $(".navbar-brand img").css({
                'width': '135px',
                'position': 'relative',
                'top': '-12px',
                'left': '-18px'
            });

            //Show back to top button
            $("#backToTop").fadeIn();

        } else {
            //Hide white navigation bar
            $("nav").removeClass("whiteNavTop");

            // Show normal logo
            $(".navbar-brand img").attr("src", "images/logo/logo.png");

            //Add logo styling
            $(".navbar-brand img").css({
                'width': '175px',
                'position': 'relative',
                'top': '-20px',
                'left': '-18px'
            });

            //Hide back to top button
            $("#backToTop").fadeOut();
        }
    }
});

// Smooth scrolling

$(function() {
    $("a.smoothScroll").click(function(event) {
        event.preventDefault();

        //get section id (ex: #home, #about)
        var sectionId = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(sectionId).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});