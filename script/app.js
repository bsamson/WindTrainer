var App = function() {
    var self = this;

    self.currentGame = null;
    self.gameWindow = null;

};

App.prototype = function() {

    var _init = function() {
        var self = this;

        settings.init();
        mainMenu.init();
        target.init();
        crosshair.init();
        scorecard.init();

        self.gameWindow = document.getElementById("windapp");

        _startScreen.call(self);
    };

    var _startScreen = function() {
        var self = this;

        settings.display(function(){ _continueFromSettings.call(self); });
    };

    var _continueFromSettings = function () {
        var self = this;
        mainMenu.display(function(e){ _continueFromMainMenu.call(self,e); });
    };

    var _gameFinished = function () {
        var self = this;

        if( self.currentGame !== null ) {
            delete self.currentGame;
            self.currentGame = null;
        }

        _startScreen.call(self);
    };

    var _continueFromMainMenu = function(id) {
        var self = this;

        // Start the Game!!
        self.currentGame = new GameControl(id);
        self.currentGame.startNewGame(function(){ _gameFinished.call(self); });
    };

    var _showGameWindow = function(show) {
        var self = this;

        if( show === true ){
            self.gameWindow.style.display = "block";
        } else {
            self.gameWindow.style.display = "none";
        }

    };

    return {
        init: _init,
        showGameWindow: _showGameWindow
    };
}();

var app = new App();

function init() {
    app.init();
}

