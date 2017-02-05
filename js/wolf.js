$(document).ready(function() {
    
    console.log('Document ready');
    
    
    //SMOOTH SCROLL SUR LIENS LOCAUX
    $('a[href^="#"]').click( function(event) {
        
        event.preventDefault();
        
        var target = $(this).attr('href');
        var speed  = 750;
        
        var targetTopOffset = Math.round($(target).offset().top)
        
        if( targetTopOffset != $(document).scrollTop() ) {
        
            $('html, body').animate({

                scrollTop: targetTopOffset

            }, speed);
            
        }
        
    });
    
    
    //DEFINITION DE LA LARGEUR DES HR
    function setAHrWidth() {
        
        aHrs = $('hr.a-hr')
        
        aHrs.each( function(index, aHr) {
            
            var relatedSpan = $(aHr).parent().children('span');
            var hrWidth = $(relatedSpan).width();
            
            $(aHr).css('width', hrWidth);
            
        });
        
    }
    
    setAHrWidth();
    
    $(window).resize(function() {
        
        setAHrWidth();         
        
    });
    
});