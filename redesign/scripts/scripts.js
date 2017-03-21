$(document).ready(function(){
    $(window).load(function() {
        $('.destination-slider').flexslider({
            animation: "slide",
            animationLoop: true,
            itemWidth: 210,
            itemMargin: 5,
            minItems: 1,
            maxItems: 2,
            slideshow: false,
            reverse: false,
            touch: true,
            controlNav: false
        });
        $('.guest-reviews-slider').flexslider({
            animation: "slide",
            animationLoop: false,
            slideshow: false,
            touch: true,
            controlNav: false
        });
    });
});

(function() {

    // store the slider in a local variable
    var $window = $(window),
        flexslider = { vars:{} };

    // tiny helper function to add breakpoints
    function getGridSize() {
        return (window.innerWidth < 770) ? 1 : 2;
           // (window.innerWidth < 900) ? 2 : 4;
    }

    $window.load(function() {
        $('.special-offer-slider').flexslider({
            animation: "slide",
            animationLoop: false,
            controlNav: true,
            itemWidth: 210,
            itemMargin: 5,
            minItems: getGridSize(), // use function to pull in initial value
            maxItems: getGridSize() // use function to pull in initial value
        });
    });

    // check grid size on resize event
    $window.resize(function() {
        var gridSize = getGridSize();

        flexslider.vars.minItems = gridSize;
        flexslider.vars.maxItems = gridSize;
    });
}());

(function() {

    // store the slider in a local variable
    var $window = $(window);

    $window.load(function() {
        if(window.innerWidth < 1281) {
            var gd = $('.global-nav__right').find('.global-nav__destinations');
            $('#main-left-menu li.first').append(gd);
        }
    });

    // check grid size on resize event
    $window.resize(function() {
        if(window.innerWidth <= 1280) {
            if(!$('#main-left-menu').find('.global-nav__destinations').length) {
                var gd = $('.global-nav__right').find('.global-nav__destinations');
                $('#main-left-menu li.first').append(gd);
            }
        } else {
            if($('#main-left-menu').find('.global-nav__destinations').length) {
                var gd = $('.global-nav__right').find('.global-nav__destinations');
                $('#main-left-menu').after(gd);
            }
        }
    });
}());