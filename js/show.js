(function(window) {
    'use strict';

    var App = window.App || {};

    function Show(id, url, name, language, premiered, genres, image, summary) {
        this.id = id;
        this.url = url;
        this.name = name;
        this.language = language;
        this.premiered = premiered;
        this.genres = genres;
        this.image = image;
        this.summary = summary;
    };

    App.Show = Show;
    window.App = App;
})(window);