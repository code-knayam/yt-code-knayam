$(document).ready(function(){

    // calling function on page first load
    update();

    // binding scroll event to window
    $(window).bind('scroll', update);

    function update(){
        // amount of page scrolled
        var scroll = $(window).scrollTop();
        
        // rate at which background changes its position        
        var velocity = 0.2;

        $('.jumbotron').each(function(){
            $(this).css('backgroundPosition', '50% ' + Math.round(-scroll)* velocity + 'px');
        })
    }

});