var ZeroRange = function(wind, rangeAngle, onFinished ) {
    var self = this;

    self.finishedCallback = onFinished;
    self.Wind = wind;
    self.zeroRangeAngle = rangeAngle;
    self.currentTarget = null;
};

ZeroRange.prototype = function(){

    var _init = function() {
        var self = this;

        _setupButtonEvents.call(self);
    };

    var _displayMenu = function() {
        var self = this;

        var zeroRangeMenu = document.getElementById("zero-range");
        zeroRangeMenu.style.display = "block";

        // Change the units depending on what's selected...
        if( settings.data.Units === "m" ) {
            document.getElementById("btnZero55").style.display = "none";
            document.getElementById("btnZero50").innerHTML = "50m";
            document.getElementById("btnZero45").innerHTML = "45m";
            document.getElementById("btnZero40").innerHTML = "40m";
            document.getElementById("btnZero35").innerHTML = "35m";
            document.getElementById("btnZero30").innerHTML = "30m";
            document.getElementById("btnZero25").innerHTML = "25m";
            document.getElementById("btnZero20").innerHTML = "20m";
            document.getElementById("btnZero15").innerHTML = "15m";
            document.getElementById("btnZero10").innerHTML = "10m";
        } else {
            document.getElementById("btnZero55").style.display = "block";
            document.getElementById("btnZero50").innerHTML = "50 yards";
            document.getElementById("btnZero45").innerHTML = "45 yards";
            document.getElementById("btnZero40").innerHTML = "40 yards";
            document.getElementById("btnZero35").innerHTML = "35 yards";
            document.getElementById("btnZero30").innerHTML = "30 yards";
            document.getElementById("btnZero25").innerHTML = "25 yards";
            document.getElementById("btnZero20").innerHTML = "20 yards";
            document.getElementById("btnZero15").innerHTML = "15 yards";
            document.getElementById("btnZero10").innerHTML = "10 yards";
        }


        target.ctx.clear();
        crosshair.show(true);

        app.showGameWindow(true);
    };

    var _showZeroTarget = function( range ) {
        var self = this;

        if( self.currentTarget !== null ) {
            delete self.currentTarget;
            self.currentTarget = null;
        }
        self.currentTarget = new ZeroBoard(target.ctx);

        if( settings.data.Units === "m"){
            range = Math.round(range * 1.0936133);
        }

        target.drawTarget( range, self.currentTarget, 0, settings.data.ScopeMag );

        crosshair.displayRange(range);
        crosshair.displayWindDirection( self.Wind.Speed, calcWindVector(self.Wind.Direction,self.zeroRangeAngle), settings.data.Units );

        _takeAim.call(self);
    };

    var _takeAim = function() {
        var self = this;
        crosshair.beginTracking( function(xposmm){ _shotTaken.call(self,xposmm);});
    };

    var _shotTaken = function(xpos) {
        var self = this;

        var shotxposmm = ((300+xpos)/self.currentTarget.scaling)/50*20;

        var windVector = calcWindVector(self.Wind.Direction,self.zeroRangeAngle);

        var adjustForGroup = settings.getGroupError(self.currentTarget.range);
        var wind = settings.getDriftWind(self.currentTarget.range, windVector, self.Wind.Speed );

        self.currentTarget.drawPelletStrike( shotxposmm + adjustForGroup.x + wind, 0 + adjustForGroup.y );

        _takeAim.call(self);
    };

    var _onTargetBoardClick = function(e,range) {
        var self = this;
        e.preventDefault();
        e.stopPropagation();

        _showZeroTarget.call(self,range);
    };

    var _onShootCourse = function(e) {
        var self = this;
        e.preventDefault();
        e.stopPropagation();

        var settingsDiv = document.getElementById("zero-range");
        settingsDiv.style.display = "none";
        app.showGameWindow(false);

        self.finishedCallback("START");
    };

    var _onQuit = function(e) {
        var self = this;
        e.preventDefault();
        e.stopPropagation();

        var settingsDiv = document.getElementById("zero-range");
        settingsDiv.style.display = "none";
        app.showGameWindow(false);

        self.finishedCallback("QUIT");
    };

    var _setupButtonEvents = function() {
        var self = this;

        document.getElementById("btnZeroQuit").addEventListener("click", function(e){ _onQuit.call(self,e);}, false );
        document.getElementById("btnZeroShoot").addEventListener("click", function(e){ _onShootCourse.call(self,e);}, false );

        // TODO listen for click event on 'return to zero range menu' button

        document.getElementById("btnZero55").addEventListener("click", function(e){ _onTargetBoardClick.call(self,e,55);}, false );
        document.getElementById("btnZero50").addEventListener("click", function(e){ _onTargetBoardClick.call(self,e,50);}, false );
        document.getElementById("btnZero45").addEventListener("click", function(e){ _onTargetBoardClick.call(self,e,45);}, false );
        document.getElementById("btnZero40").addEventListener("click", function(e){ _onTargetBoardClick.call(self,e,40);}, false );
        document.getElementById("btnZero35").addEventListener("click", function(e){ _onTargetBoardClick.call(self,e,35);}, false );
        document.getElementById("btnZero30").addEventListener("click", function(e){ _onTargetBoardClick.call(self,e,30);}, false );
        document.getElementById("btnZero25").addEventListener("click", function(e){ _onTargetBoardClick.call(self,e,25);}, false );
        document.getElementById("btnZero20").addEventListener("click", function(e){ _onTargetBoardClick.call(self,e,20);}, false );
        document.getElementById("btnZero15").addEventListener("click", function(e){ _onTargetBoardClick.call(self,e,15);}, false );
        document.getElementById("btnZero10").addEventListener("click", function(e){ _onTargetBoardClick.call(self,e,10);}, false );
    };

    return {
        init: _init,
        displayMenu : _displayMenu
    }
}();
