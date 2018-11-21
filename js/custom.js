(function($){
/* ---------------------------------------------- /*
 * Navbar
/* ---------------------------------------------- */

	$('.nav-fix').sticky({
		topSpacing: 0
	});

	$('body').scrollspy({
		target: '.navbar-custom',
		offset: 70
	})

})(jQuery);

/* ---------------------------------------------- /*
 * Smooth Scroll
/* ---------------------------------------------- */
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

/* ---------------------------------------------- /*
 * Modal Focus
/* ---------------------------------------------- */
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

/* ---------------------------------------------- /*
 * Tooltip
/* ---------------------------------------------- */
$(document).ready(function() {
    $('[data-toggle=tooltip]').tooltip();
}); 

new Vivus('nav-svg', {
    type: 'delayed',
    duration: 150 ,
    animTimingFunction: Vivus.EASE
}, function doDone(obj) {
    obj.el.classList.add('finished');
});
