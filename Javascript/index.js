$(function () {
    pubsub.init();
    pubsub.applyBindings();
    //$('.scout-panel-body').matchHeight();
});

var pubsub = {

    init: function () {
        pubsub.matchPanels();
        pubsub.preventCarouselPause();
    },

    applyBindings: function () {
        $(window).on('resize', pubsub.matchPanels);
    },

    matchPanels: function () {
        var panels = $('.scout-panel-body');
        $('.scout-panel-body').matchHeight();
    },

    preventCarouselPause: function () {
        $('.carousel').carousel({
            pause: "false"
        });
    }
}

/*
 var panels = $('.scout-panel-body');
        var maxHeight = panels.first().height();
        panels.each(function(i,e) {
            if ($(e).height() > maxHeight) {
                maxHeight = $(e).height();
            };
        });
        panels.each(function(i,e) {
            $(e).height(maxHeight);
        });
*/

