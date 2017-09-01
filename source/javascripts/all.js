//= require ./lib/_energize
//= require ./app/_lang
//= require ./app/_search
//= require ./app/_toc

// jQuery(document).ready(function(){
//     $(window).scroll(function () {
//         if ($(window).scrollTop() == 0) {
//             $('#sticky-header').hide();
//             return false;
//         }
//
//         $('#sticky-header').text(jQuery(window.location.hash).text());
//         $('#sticky-header').show();
//     });
// });

jQuery(function() {

    var toolbox = $('.tocify-wrapper'),
        height = toolbox.height();

    toolbox.bind('wheel', function (e) {
        var d  = e.originalEvent.deltaY,
            scrollHeight = toolbox.get(0).scrollHeight;
        if((this.scrollTop === (scrollHeight - height) && d > 0) || (this.scrollTop === 0 && d < 0)) {
            e.preventDefault();
        }
    });

});