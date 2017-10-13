i = 0;

$(document)
    .ready(function () {

        console.clear();

        $('a[href="#"]')
            .click(function (e) {
                e.preventDefault();
            });

        // Big title
        /*var btt  = document.getElementById('big-title').innerText;
         btt = btt.replace(/\s+/g, ''); // Removing spaces
         var btst = btt.split('');

         console.log('Big Title Splitted Text: ', btst);

         btst.forEach(function(l, index) {

         });*/

        // Parallax
        $('.p-scroll')
            .pScroll();

        // Menu
        $('.menu-toggle')
            .click(function (e) {

                if (!$('nav')
                    .hasClass('menu-show')) {

                    disableScroll();

                    $('nav ul li')
                        .css('opacity', 0);

                    $('nav')
                        .addClass('menu-show');
                    $('nav .menu')
                        .removeClass('menu-out');
                    $('nav .bar p')
                        .removeClass('txt-black')
                        .addClass('txt-white');
                    $('nav .bar .menu-toggle i')
                        .removeClass('fa-bars')
                        .addClass('fa-times');

                    setTimeout(menuItemsAppear, 100);

                } else {

                    enableScroll();

                    $('nav .menu')
                        .addClass('menu-out');
                    $('nav .bar p')
                        .removeClass('txt-white')
                        .addClass('txt-black');
                    $('nav .bar .menu-toggle i')
                        .addClass('fa-bars')
                        .removeClass('fa-times');

                    setTimeout(function () {

                        $('nav')
                            .removeClass('menu-show');
                        $('nav ul li')
                            .removeClass('slideIn');

                    }, 400);

                }

            });

        // Menu appear
        $('nav')
            .css('opacity', 0);
        var menuAppear = new Waypoint({
            element: document.getElementById('menu-appear'),
            handler: function (direction) {
                if (direction === 'down') {
                    $('nav')
                        .css('opacity', 1);
                } else if (direction === 'up') {
                    $('nav')
                        .css('opacity', 0);
                }
            },
            offset: '20%'
        });

        // Portfolio cards appear
        var $pCards = $('#portfolio .card');
        $pCards.css('opacity', 0);
        var pCardsAppear = new Waypoint({
            element: document.getElementById('portfolio'),
            handler: function () {
                if (!$($pCards[0])
                    .hasClass('appear')) {
                    $pCards.each(function (index, el) {
                        $(el)
                            .delay(250 * index)
                            .queue(function (next) {
                                $(this).addClass('appear');
                                next();
                            });
                    });
                }
            },
            offset: '20%'
        });

        // Add .titl titl attributes
        const tilt = $('.tilt')
            .tilt({
                maxTilt: 15,
                perspective: 1000,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                scale: 1.02,
                speed: 400,
                transition: true,
                reset: true,
            });

        // Ajax email
        $('#contact form button[type="submit"]')
            .click(function (e) {

                e.preventDefault();

                var form = $(this)
                    .parents('form');

                form.find('input, textarea')
                    .removeClass('outline-red');

                var firstname = form.find('#firstname')
                    .val();
                var lastname = form.find('#lastname')
                    .val();
                var email = form.find('#email')
                    .val();
                var message = form.find('#message')
                    .val();

                var isEmail = email.match(
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

                if (firstname.length != 0 && lastname.length != 0 &&
                    email.length != 0 && message.length > 1 && isEmail) {

                    var post = $.ajax({
                        url: 'https://v3.baptistevillemur.fr/form.php',
                        type: 'post',
                        data: {
                            firstname: firstname,
                            lastname: lastname,
                            email: email,
                            message: message,
                        },
                        dataType: 'json',
                    });

                    post.done(function (data) {

                        notif('Votre email a bien été envoyé.', 'success');
                        form.find('input, textarea')
                            .val('');

                    });

                    post.fail(function (data) {

                        notif(
                            'Il y a eu une erreur lors de l\'envoi de votre email... Veuillez réessayez.',
                            'fail');

                    });

                    post.always(function () {


                    });

                } else {

                    if (!isEmail) {

                        form.find('#email')
                            .addClass('outline-red');

                    }

                    form.find('input')
                        .filter(function () {

                            return !this.value;

                        })
                        .addClass('outline-red');

                    form.find('textarea')
                        .filter(function () {

                            return this.value == '';

                        })
                        .addClass('outline-red');

                }

            });
    
        $(document).keydown(function (e) {
            var key = e.keyCode;

            switch (key) {
                case 96:
                    smoothScroll('#home');
                    break;
                case 97:
                    smoothScroll('#about');
                    break;
                case 98:
                    smoothScroll('#skills');
                    break;
                case 99:
                    smoothScroll('#portfolio');
                    break;
                case 100:
                    smoothScroll('#contact');
                    break;
                    
                default:
                    break;

            }
        });

    });

function smoothScroll(target) {

    var speed = 750;

    var targetTopOffset = Math.round($(target).offset().top)

    if (targetTopOffset != $(document).scrollTop()) {

        $('html, body').animate({

            scrollTop: targetTopOffset

        }, speed);

    }

}

$.fn.pScroll = function () {

    var all = this;
    var fct = function () {
        $(all)
            .each(function (i, el) {

                var $el = $(el);
                var winCenter = $(window)
                    .height() / 2;
                var midLine = winCenter + $(window)
                    .scrollTop();
                var $elCenter = $el.height() / 2 + $el.offset().top;
                var val = $el.data('p-scroll') ? $el.data('p-scroll') : .3;

                var top = (($elCenter - midLine) / 2) * val;

                $el.css('transform', 'translateY(' + top + 'px) ');

            });
    };
    fct();
    $(window)
        .scroll(fct);
};

function menuItemsAppear() {
    $($('nav#nav ul li')[i])
        .addClass('slideIn');
    i++;
    if (i < $('nav ul li').length) {
        setTimeout(menuItemsAppear, 100);
    } else {
        i = 0;
        return;
    }
}

function portfolioCardsAppear() {
    $($('#portfolio .card')[i])
        .addClass('slideIn');
    i++;
    if (i < $('#portfolio .card').length) {
        setTimeout(portfolioCardsAppear, 500);
    } else {
        i = 0;
        return;
    }
}

function notif(msg, status, delay = 2000) {

    var notif = $('<div></div>');
    var notifClasses = [
        'notif',
        'notif-in',
        'shadow',
        'fixed',
        'vertical-align',
        's-full-width',
        'm-full-width',
        'l-full-width',
        'txt-center',
    ];

    notifClasses.forEach(function (clss, index) {

        notif.addClass(clss);

    });

    var icon = $('<div></div>')
        .addClass('fa');
    switch (status) {

        case 'success':
            notif.addClass('bg-beige')
                .addClass('txt-white');
            icon.addClass('fa-check');
            break;

        case 'fail':
            notif.addClass('bg-black')
                .addClass('txt-beige');
            icon.addClass('fa-times');
            break;

        default:
            notif.addClass('bg-blue')
                .addClass('txt-white');
            icon = '';

    }

    var notifContent = $('<p></p>')
        .text(' ' + msg)
        .prepend(icon);
    notif.append(notifContent);

    $(notif)
        .appendTo('body')
        .delay(delay)
        .queue(function () {
            $(notif)
                .removeClass('notif-in')
                .addClass('notif-out');
        });
    setTimeout(function () {

        $(notif)
            .remove();

    }, 3000);

}


function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = {
        32: 1,
        37: 1,
        38: 1,
        39: 1,
        40: 1
    };
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}
