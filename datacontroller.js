(function(window) {
    'use strict';

    var App = window.App || {};
    var Show = App.Show;

    function DataController(url) {
        this.url = url;
    }

    DataController.prototype.createEntitites = function(shows) {
        var allShows = [];

        for (var show of shows) {
            var id = show.id;
            var url = show.url;
            var name = show.name;
            var language = show.language;
            var premiered = show.premiered;
            var genres = show.genres;
            var image = show.image.original;
            var summary = show.summary;
            allShows.push(new Show(id, url, name, language, premiered, genres, image, summary));
        }

        return allShows;
    }

    DataController.prototype.getAll = function(callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.url, true);

        var _self = this;

        xhr.onload = function() {
            if (this.status == 200) {
                var response = JSON.parse(this.responseText).slice(0, 20);
                var shows = _self.createEntitites(response);
                callback(shows);
            }
        }

        xhr.send();
    };

    App.DataController = DataController;
    window.App = App;
})(window);