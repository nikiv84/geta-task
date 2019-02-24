(function(window) {
    'use strict';

    var APP_SELECTOR = 'app';
    var URL = 'http://api.tvmaze.com/shows';
    var App = window.App || {};
    var DataController = App.DataController;
    var dataCtrl = new DataController(URL);
    var UIController = App.UIController;
    var uiCtrl = new UIController(APP_SELECTOR);

    dataCtrl.getAll(uiCtrl.displayData.bind(uiCtrl));
})(window);