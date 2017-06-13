//= require ./lib/_energize
//= require ./app/_lang
//= require ./app/_search
//= require ./app/_toc

jQuery(document).ready(function(){
    $(window).scroll(function () {
        if ($(window).scrollTop() == 0) {
            $('#sticky-header').hide();
            return false;
        }

        $('#sticky-header').text(jQuery(window.location.hash).text());
        $('#sticky-header').show();
    });
});