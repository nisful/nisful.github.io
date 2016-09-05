$(function() {
    
    var $meters = $(".skillbar-bar");
    var $section = $('#third');
    var $queue = $({});
    
    function loadDaBars() {
		 
        $meters.each(function() {
            var $el = $(this);
            var origWidth = $el.attr('data-percent');
			console.log(origWidth);
            $el.width(0);
           
                $el.animate({width: origWidth}, 1200);
             
			 
        });
    }
    
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    }); 
    
}); 
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});