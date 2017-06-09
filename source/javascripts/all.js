//= require ./lib/_energize
//= require ./app/_lang
//= require ./app/_search
//= require ./app/_toc

var stick;

jQuery(document).ready(function(){

    stick = (function($) {
        return function () {


            var stickys = [];

            var headers = $('.content h1, .content h2');
            headers.each(function(a,b){
                stickys[a] = {
                    element: b,
                    offset: (b.offsetTop),
                    set: false,
                    text: $(b).text()
                };
            });

            $(window).scroll(function () {

                if ($(window).scrollTop() == 0) {
                    $('#sticky-header').hide();
                    return false;
                }

                stickys.forEach(function(a){
                    if ($(window).scrollTop() > a.offset) {
                        $('#sticky-header').text(a.text);
                        $('#sticky-header').show();
                    }
                });

            });
        }

    })(jQuery);

    stick();

    jQuery(window).resize(stick);
});