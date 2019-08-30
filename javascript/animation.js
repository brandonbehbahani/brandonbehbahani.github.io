$(document).ready(function () {
    $(window).on('load scroll', function () {
        var scrolled = $(this).scrollTop();
        $('#title').css({
            'transform': 'translate3d(0, ' + (scrolled * 0.5) + 'px, 0)', // parallax (20% scroll rate)
            'opacity': 1 - scrolled / 500 // fade out at 400px from top
        });
        // $('#hero-vid').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
        if (scrolled > 700){
            
        }
    
    });
    
});