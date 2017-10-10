$(document).ready(function() {
    
    //SMOOTH SCROLL SUR LIENS LOCAUX
    $('a[href^="#"]').click( function(event) {
        
        event.preventDefault();
        
        if( $(this).attr('href') != '#' ) {
            
            var target = $(this).attr('href');
            var speed  = 750;

            var targetTopOffset = Math.round($(target).offset().top)

            if( targetTopOffset != $(document).scrollTop() ) {

                $('html, body').animate({

                    scrollTop: targetTopOffset

                }, speed);

            }

        }
        
    });
    
});