$(document).ready(function () {

    console.log('Document ready');

    $('a[href="#"]').click( function(e) { e.preventDefault(); })

    
    // Menu
    $('a#menu-open').click( function(e) { $('nav').addClass('menu-show'); })
    $('a#menu-close').click( function(e) { $('nav').removeClass('menu-show'); })
    

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
    $('#contact form button[type="submit"]').click(function (e) {

        e.preventDefault();

        var form = $(this).parents('form');

        form.find('input, textarea').removeClass('outline-red');

        var firstname = form.find('#firstname').val();
        var lastname = form.find('#lastname').val();
        var email = form.find('#email').val();
        var message = form.find('#message').val();

        var isEmail = email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        if (firstname.length != 0 && lastname.length != 0 && email.length != 0 && message.length > 1 && isEmail) {

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

                notif( 'Votre email a bien été envoyé.', 'success' );
                form.find('input, textarea').val('');

            });

            post.fail(function (data) {

                notif( 'Il y a eu une erreur lors de l\'envoi de votre email... Veuillez réessayez.', 'fail' );

            });

            post.always(function () {

                console.log('complete');

            });

        } else {

            if (!isEmail) {

                console.log('not email');
                form.find('#email').addClass('outline-red');

            }

            console.log('form error');
            form.find('input').filter(function () {

                return !this.value;

            }).addClass('outline-red');

            form.find('textarea').filter(function () {

                return this.value == '';

            }).addClass('outline-red');

        }

    });
    
});


function notif( msg, status ) {

    var notif = $('<div></div>');
    var notifClasses = [
        'notif',
        'notif-in',
        'shadow',
        'fixed',
        'vertical-align',
        's-full-width',
        'm-full-width',
        'l-full-width'
    ];

    notifClasses.forEach(function (clss, index) {

        notif.addClass(clss);

    });

    var icon = $('<div></div>').addClass('fa');
    switch (status) {
        
        case 'success':
            notif.addClass('bg-beige').addClass('txt-white');
            icon.addClass('fa-check');
            break;
            
        case 'fail':
            notif.addClass('bg-black').addClass('txt-beige');
            icon.addClass('fa-time');
            break;
            
        default:
            notif.addClass('bg-blue').addClass('txt-white');
            icon = '';
        
    }
    
    var notifContent = $('<p></p>').text(' ' + msg).prepend(icon);
    notif.append(notifContent);

    $(notif).appendTo('body').delay(2000).queue(function () {
        console.log('change class');
        $(notif).removeClass('notif-in').addClass('notif-out');
    });
    setTimeout(function(){
        
        $(notif).remove();
        
    }, 3000)

}
