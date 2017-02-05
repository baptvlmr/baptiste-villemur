$(document).ready(function () {

    console.log('Document ready');


    // Header H1
    /*var hh1 = $('header h1');
    var hh1t = hh1.text().replace(' ', '');
    var hh1l = hh1t.split('');
    
    rows = 0;
    hh1l.forEach(function(letter, index) {
        
        console.log(letter);
        
    });*/


    // Add .titl titl attributes
    const tilt = $('.tilt')
        .tilt({
            maxTilt: 20,
            perspective: 1000,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            scale: 1,
            speed: 300,
            transition: true,
            axis: null,
            reset: true,
            glare: false,
            maxGlare: 1
        });


    // Ajax email
    $('#contact form button[type="submit"]').click( function(e) {
        
        e.preventDefault();
        
        console.log('submit clicked');

        var form = $(this).parents('form');
        console.log(form);
        
        form.find('input, textarea').removeClass('outline-red');
        
        var firstname = form.find('#firstname').val();
        var lastname = form.find('#lastname').val();
        var email = form.find('#email').val();
        var message = form.find('#message').val();
        
        console.log(firstname);
        console.log(lastname);
        console.log(email);
        console.log(message);
        
        var isEmail = email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

        if ( firstname.length != 0 && lastname.length != 0 && email.length != 0 && message.length > 1 && isEmail ) {
            
            console.log('form ok');

            var post = $.ajax({
                url: 'http://baptistevillemur.fr/V3/form.php',
                type: 'post',
                data: {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    message: message
                },
                dataType: 'json'
            });

            post.done(function (data) {

                console.log(data);
                console.log('success');

            });

            post.fail(function (data) {

                console.log(data);
                console.log('fail');

            });

            post.always(function () {

                console.log('complete');

            });

        }else {
            
            if( !isEmail ) {

                console.log('not email');
                form.find('#email').addClass('outline-red');

            }

            console.log('form error');
            form.find('input').filter(function() {
                
                console.log(!this.value);
                return !this.value;
                
            }).addClass('outline-red');
                
            form.find('textarea').filter(function() {
                
                console.log( this.value == '');
                return this.value == '';
                
            }).addClass('outline-red');

        }

    });


    // Nav color change
    var sections = $('body > section');
    sections.each(function (index, section) {

        var sectionArticles = $(section).children('article');

        sectionArticles.each(function (index, article) {

            new Waypoint({

                element: $(article),
                handler: function (direction) {

                    if (direction == 'down') {
                        if (index % 2 == 0) {
                            $('nav').addClass('dark');
                        } else {
                            $('nav').removeClass('dark');
                        }
                    } else {
                        if (index % 2 == 0) {
                            $('nav').removeClass('dark');
                        } else {
                            $('nav').addClass('dark');
                        }
                    }

                },
                offset: 50

            });

        });

    });

});
