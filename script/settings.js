var Settings = function() {
    var self = this;

    self.STORAGE_KEY = "settings";

    self.data = {
        BC : 0.023,
        MV : 780,
        ScopeHeight : 2.5,
        Group : {
            Size : 35,
            Distance : 55
        },
        ScopeErrorAt55 : 2,
        CrossHair: "mildot",
        Units: "y",
        ScopeMag: 16,
        KnockDelay: 0
    };

    self.FixedWind = 0;
    self.saveCallback = null;

};

Settings.prototype = function () {

    var _init = function () {
        var self = this;

        if( localStorage.getItem(self.STORAGE_KEY) !== null) {
            self.data = JSON.parse(localStorage[self.STORAGE_KEY]);
        }

        if( self.data.CrossHair === undefined ) {
            self.data.CrossHair = "mildot";
        }

        if( self.data.ScopeMag === undefined ) {
            self.data.ScopeMag = 16;
        }

        var settingsForm = document.getElementById("settingsForm");
        settingsForm.addEventListener("submit", function(e){return _onSubmit.call(self,e);}, false);
        document.getElementById("btnImperial").addEventListener("click", function(e){return _onImperialClick.call(self,e);}, false);
        document.getElementById("btnMetric").addEventListener("click", function(e){return _onMetricClick.call(self,e);}, false);
    };

    var _save = function () {
        var self = this;
        localStorage[self.STORAGE_KEY] = JSON.stringify( self.data );
    };

    var _onImperialClick = function(e){
        var self = this;
        document.getElementById("btnImperial").className = "btn btn-info active";
        document.getElementById("btnMetric").className = "btn btn-default";
    };

    var _onMetricClick = function(e){
        var self = this;
        document.getElementById("btnMetric").className = "btn btn-info active";
        document.getElementById("btnImperial").className = "btn btn-default";
    };

    var _display = function(callback) {
        var self = this;

        self.saveCallback = callback;

        var settingsDiv = document.getElementById("settings");
        settingsDiv.style.display = "block";

        var txtBC = document.getElementById("txtBC");
        txtBC.value = self.data.BC;

        var txtMV = document.getElementById("txtMV");
        txtMV.value = self.data.MV;

        var txtScopeHeight = document.getElementById("txtScopeHeight");
        txtScopeHeight.value = self.data.ScopeHeight;

        var txtGroupSize = document.getElementById("txtGroupSize");
        txtGroupSize.value = self.data.Group.Size;

        var txtGroupDistance = document.getElementById("txtGroupDistance");
        txtGroupDistance.value = self.data.Group.Distance;

        var txtScopeError = document.getElementById("txtScopeError");
        txtScopeError.value = self.data.ScopeErrorAt55;

        var optReticle = document.getElementById("optReticle");
        optReticle.value = self.data.CrossHair;

        var txtScopeMag = document.getElementById("txtScopeMag");
        txtScopeMag.value = self.data.ScopeMag;

        self.data.ScopeMag = parseFloat(txtScopeMag.value);


        var txtFixedWind = document.getElementById("txtFixedWind");
        txtFixedWind.value = self.FixedWind > 0 ? self.FixedWind : "";
        
        var txtKnockDelay = document.getElementById("txtKnockDelay");
        txtKnockDelay.value = self.data.KnockDelay > 0 ? self.data.KnockDelay : "";

        if( self.data.Units === "m" ) {
            document.getElementById("btnMetric").className = "btn btn-info active";
            document.getElementById("btnImperial").className = "btn btn-default";
        } else {
            document.getElementById("btnImperial").className = "btn btn-info active";
            document.getElementById("btnMetric").className = "btn btn-default";
        }
    };

    var _onSubmit = function(e) {
        var self = this;
        e.preventDefault();
        e.stopPropagation();

        var txtBC = document.getElementById("txtBC");
        self.data.BC = parseFloat(txtBC.value);

        var txtMV = document.getElementById("txtMV");
        self.data.MV = parseFloat(txtMV.value);

        var txtScopeHeight = document.getElementById("txtScopeHeight");
        self.data.ScopeHeight = parseFloat(txtScopeHeight.value);

        var txtGroupSize = document.getElementById("txtGroupSize");
        self.data.Group.Size = parseFloat(txtGroupSize.value);

        var txtGroupDistance = document.getElementById("txtGroupDistance");
        self.data.Group.Distance = parseFloat(txtGroupDistance.value);

        var txtScopeError = document.getElementById("txtScopeError");
        self.data.ScopeErrorAt55 = parseFloat(txtScopeError.value);

        var settingsDiv = document.getElementById("settings");
        settingsDiv.style.display = "none";

        var optReticle = document.getElementById("optReticle");
        self.data.CrossHair = optReticle.value;

        var txtScopeMag = document.getElementById("txtScopeMag");
        self.data.ScopeMag = parseFloat(txtScopeMag.value);

        var txtFixedWind = document.getElementById("txtFixedWind");
        self.FixedWind = txtFixedWind.value !== ""?parseFloat(txtFixedWind.value):0;
        
        var txtKnockDelay = document.getElementById("txtKnockDelay");
        self.data.KnockDelay = txtKnockDelay.value !== ""?parseFloat(txtKnockDelay.value):0;

        self.crossHairData = getCrossHairData(self.data.CrossHair);

        if ( document.getElementById("btnImperial").className.match(/(?:^|\s)active(?!\S)/) ) {
            self.data.Units = "y";
        } else {
            self.data.Units = "m";
        }

        _save.call(self);

        if (typeof self.saveCallback === "function") {
            self.saveCallback();
        }
    };

    var _getGroupError = function( range, wobbleFactor ) {
        var self = this;

        var groupMoa = (self.data.Group.Size-4.5)/(((self.data.Group.Distance*0.9144)*2*Math.PI)/(360*60)*1000);
        if( wobbleFactor !== null && typeof wobbleFactor !== "undefined"){
            groupMoa = groupMoa * parseFloat(wobbleFactor);
        }

        var rangedGroupsize = groupMoa * (((range*0.9144)*2*Math.PI)/(360*60)*1000);

        var randomDistance = (rangedGroupsize)/2 - randomToMax( rangedGroupsize );
        var randomAngle = randomToMax(359);

        return {
            x : Math.cos(toRadians(randomAngle)) * randomDistance,
            y: Math.sin(toRadians(randomAngle)) * randomDistance
        };
    };

    var _getRangeError = function( range ) {
        var self = this;

        var rangeMin = range - self.data.ScopeErrorAt55;
        var rangeMax = range + self.data.ScopeErrorAt55;

        if( range <= 38 ) {
            rangeMin = range - (self.data.ScopeErrorAt55/2);
            rangeMax = range + (self.data.ScopeErrorAt55/2);
        }

        if( rangeMax > 55) {
            rangeMax = 55;
        }

        var randomRange = randomInt(rangeMin,rangeMax);
        var PoiAtRealRange = _getDrop.call(self,range);
        var PoiAtRandomRange = _getDrop.call(self,randomRange);

        return PoiAtRandomRange - PoiAtRealRange;
    };

    var _getDrop = function( range ) {
        var self = this;

        range = Math.round(range);
        var sln = {};// A pointer for receiving the ballistic solution.
        var bc=self.data.BC ; // The ballistic coefficient for the projectile.
        var v=self.data.MV; // Initial velocity, in ft/s
        var sh=self.data.ScopeHeight; // The Sight height over bore, in inches.

        bc=Ballistics.AtmCorrect(bc, 0, 29.95, 68,.5);

        var zeroangle=Ballistics.ZeroAngle(Ballistics.DragFunctions.GA,bc,v,sh,25,0);
        Ballistics.SolveAll(range,range,Ballistics.DragFunctions.GA,bc,v,sh,0,zeroangle,0,90,sln);

        return sln[range].drop * 25.4;
    };

    var _getDriftWind = function(range, windVector, windSpeed){
        var self = this;

        range = Math.round(range);
        var sln = {};// A pointer for receiving the ballistic solution.
        var bc=self.data.BC ; // The ballistic coefficient for the projectile.
        var v=self.data.MV; // Initial velocity, in ft/s
        var sh=self.data.ScopeHeight; // The Sight height over bore, in inches.

        bc=Ballistics.AtmCorrect(bc, 0, 29.95, 68,.5);

        var zeroangle=Ballistics.ZeroAngle(Ballistics.DragFunctions.GA,bc,v,sh,range,0);
        Ballistics.SolveAll(range,range,Ballistics.DragFunctions.GA,bc,v,sh,0,zeroangle,windSpeed,windVector,sln);

        return sln[range].windageInch * 25.4;
    };

    return {
        init: _init,
        save: _save,
        display: _display,
        getGroupError: _getGroupError,
        getDriftWind: _getDriftWind,
        getRangeError: _getRangeError
    };
}();

var settings = new Settings();

