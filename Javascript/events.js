$(function () {
    pubsub.init();
    pubsub.applyBindings();
});

var pubsub = {

    init: function () {
        pubsub.matchPanels();
    },

    applyBindings: function () {
        $(window).on('resize', pubsub.matchPanels);
    },

    matchPanels: function () {
        var panels = $('.match-height-1');
        var frames = $('.match-height-2');
        panels.matchHeight();
        frames.matchHeight();
    }
}