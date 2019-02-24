(function(window) {
    'use strict';

    var App = window.App || {};

    function UIController(selector) {
        this.element = document.getElementById(selector);
    }

    UIController.prototype.displayData = function(shows) {
        var output = '';
        for (var show of shows) {
            var genres = '<p>Genres: ';
            for (var i in show.genres) {
                var ending = i == (show.genres.length - 1) ? '' : ',';
                genres += ' ' + show.genres[i] + ending;
            }
            genres += '</p>'

            output +=
                '<article class="show">' +
                '<div class="poster">' +
                '<img src="' + show.image + '" width="136" height="200">' +
                '</div>' +
                '<div class="summary">' +
                '<ul>' +
                '<li class="show-title">' + show.name + '</li>' +
                '<li>Language: ' + show.language + '</li>' +
                '<li>Premiered: ' + show.premiered + '</li>' +
                '</ul>' +
                '<p>Summary: ' + show.summary + '</p>' +
                genres +
                '<a href=' + show.url + ' target="_blank" title="' + show.name + '">Visit site</a>' +
                '</div>' +
                '</article>';
        }
        this.element.innerHTML = output;
    }


    App.UIController = UIController;
    window.App = App;
})(window);