var Crosshair = function() {
    var self = this;

    self.canvas = null;
    self.ctx = null;
    self.shotCallback = null;
    self.tracking = false;

};

Crosshair.prototype = function(){

    var _init = function(){
        var self = this;

        self.canvas = document.getElementById("cross");
        if (self.canvas.getContext) {
            self.ctx = self.canvas.getContext("2d");
        }
        self.canvas.addEventListener('mousemove', function(e) { _onCrossMouseMove.call(self,e);}, false);
        self.canvas.addEventListener('click', function(e) { _onShotTaken.call(self,e);},false );
    };

    var _show = function(show) {
        var self = this;

        _drawEmptyCrosshairs.call(self);
        _drawCustomCrosshairs.call(self, settings.crossHairData );

        _clearDisplayRange.call(self);
        _clearWindDirection.call(self);

        if( show === true) {
            self.canvas.style.display = "block";
        } else {
            self.canvas.style.display = "none";
        }
    };

    var _beginTracking = function(shotCallback) {
        var self = this;

        if( self.shotCallback !== null ){
            delete self.shotCallback;
            self.shotCallback = null;
        }
        self.shotCallback = shotCallback;

        self.tracking = true;
    };

    var _onCrossMouseMove = function(e) {
        var self = this;

        if( self.tracking === true ) {
            e.preventDefault();
            e.stopPropagation();

            target.canvas.style.left = (e.clientX*-1) + "px";
            target.canvas.style.cursor = 'none';
        }
    };

    var _onShotTaken = function(e) {
        var self = this;

        if( self.tracking === true ) {
            e.preventDefault();
            e.stopPropagation();

            var shotxpos = parseInt(target.canvas.style.left,10);

            self.tracking = false;

            var originalTop = parseInt(target.canvas.style.top,10);
            target.canvas.style.top = originalTop+5 + "px";
            var animation = setInterval( function(){
                var top = parseInt(target.canvas.style.top,10);
                if( top === originalTop ) {
                    clearInterval(animation);
                    self.shotCallback(shotxpos);
                } else {
                    target.canvas.style.top = top-1 + "px";
                }
            },50);
        }

    };

    var _clearWindDirection = function() {
        var self = this;

        var ctx = self.ctx;

        ctx.save();
        ctx.beginPath();
        ctx.rect(15,470,100,115);
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.lineWidth = 0.1;
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.restore();
    };


    var _drawComment = function( comment ) {
        var self = this;

        var ctx = self.ctx;

        ctx.save();
        ctx.fillStyle = "black";
        ctx.rect(420,0,180,70);
        ctx.fill();
        ctx.restore();


        if( comment !== null && typeof comment !== "undefined" ) {
            ctx.save();
            ctx.fillStyle = "white";
            ctx.font = "bold 26px Arial";
            ctx.fillText( comment, 440, 40);
            ctx.restore();
        }

    };


    var _displayWindDirection = function(windSpeed, windVector, units ) {
        var self = this;

        var ctx = self.ctx;

        _clearWindDirection.call(self);

        var circleCentreX = 15+50;
        var circleCentreY = 600-15-50;


        ctx.save();
        ctx.beginPath();
        ctx.arc(circleCentreX,circleCentreY,40,0,2*Math.PI);
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.strokeStyle = "rgba(255,0,0,0.8)";
        ctx.lineWidth = 8.0;
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.fillStyle = "white";
        ctx.font = "bold 16px Arial";
        ctx.textAlign = 'center';

        if( units === "m"){
            ctx.fillText( Math.round((windSpeed * 0.45) * 10) / 10 + " m/s", circleCentreX,circleCentreY-50 );
        } else {
            ctx.fillText( windSpeed + " mph", circleCentreX,circleCentreY-50 );
        }
        ctx.restore();

        // Draw the wind angle...
        ctx.save();
        ctx.beginPath();
        var xH = Math.sin(toRadians(windVector))*40;
        var yH = Math.cos(toRadians(windVector))*40;
        ctx.moveTo(circleCentreX,circleCentreY);
        ctx.lineTo(circleCentreX+xH, circleCentreY+yH);
        ctx.strokeStyle = "rgb(255,255,51)";
        ctx.lineWidth = 8.0;
        ctx.lineCap="round";
        ctx.stroke();
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        var xH = Math.sin(toRadians(windVector+45))*15;
        var yH = Math.cos(toRadians(windVector+45))*15;
        ctx.moveTo(circleCentreX,circleCentreY);
        ctx.lineTo(circleCentreX+xH, circleCentreY+yH);
        ctx.strokeStyle = "rgb(255,255,51)";
        ctx.lineWidth = 8.0;
        ctx.lineCap="round";
        ctx.stroke();
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        var xH = Math.sin(toRadians(windVector-45))*15;
        var yH = Math.cos(toRadians(windVector-45))*15;
        ctx.moveTo(circleCentreX,circleCentreY);
        ctx.lineTo(circleCentreX+xH, circleCentreY+yH);
        ctx.strokeStyle = "rgb(255,255,51)";
        ctx.lineWidth = 8.0;
        ctx.lineCap="round";
        ctx.stroke();
        ctx.fill();
        ctx.restore();


        /*
        ctx.save();
        ctx.beginPath();
        ctx.arc(circleCentreX,circleCentreY,4,0,2*Math.PI);
        ctx.fillStyle = "rgb(255,0,0)";
        ctx.strokeStyle = "rgba(255,0,0,0.8)";
        ctx.lineWidth = 4.0;
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.restore();
        */

    };

    var _displayRange = function(range) {
        var self = this;

        var ctx = self.ctx;

        _clearDisplayRange.call(self);

        ctx.save();
        ctx.fillStyle = "white";
        ctx.font = "bold 40px Arial";

        if( settings.data.Units === "m"){
            ctx.fillText( Math.round(range * 0.9144) + "m", 10, 40);
        } else {
            ctx.fillText( range + " yards", 10, 40);
        }

        ctx.restore();

    };

    var _clearDisplayRange = function() {
        var self = this;

        var ctx = self.ctx;

        ctx.save();
        ctx.fillStyle = "black";
        ctx.rect(0,0,180,70);
        ctx.fill();
        ctx.restore();
    };

    var _drawEmptyCrosshairs = function() {
        var self = this;
        var ctx = self.ctx;

        ctx.save();
        ctx.clearRect(0,0,600,600);
        ctx.fill();
        ctx.restore();


        // layer1/Compound Path
        ctx.save();
        ctx.beginPath();

        // layer1/Compound Path/Path
        ctx.moveTo(0.0, 0.0);
        ctx.lineTo(0.0, 600.0);
        ctx.lineTo(600.0, 600.0);
        ctx.lineTo(600.0, 0.0);
        ctx.lineTo(0.0, 0.0);
        ctx.closePath();

        // layer1/Compound Path/Path
        ctx.moveTo(300.0, 550.0);
        ctx.bezierCurveTo(161.9, 550.0, 50.0, 438.1, 50.0, 300.0);
        ctx.bezierCurveTo(50.0, 161.9, 161.9, 50.0, 300.0, 50.0);
        ctx.bezierCurveTo(438.1, 50.0, 550.0, 161.9, 550.0, 300.0);
        ctx.bezierCurveTo(550.0, 438.1, 438.1, 550.0, 300.0, 550.0);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    };

    var _drawCustomCrosshairs = function( data ) {
        var self = this;

        _drawCustomThickPosts.call( self, data );
        _drawCustomThinPosts.call( self, data );
        _drawCustomPoints.call( self, data );

    };

    var _drawCustomPoints = function( data ) {
        var self = this;
        var ctx = self.ctx;

        if( data.horizontalPoints.length > 0 ) {
            var pointData;

            for( var hp=0; hp<data.horizontalPoints.length; hp++ ) {
                pointData = data.horizontalPoints[hp];

                if( pointData.style === 'line' ){
                    ctx.save();
                    ctx.beginPath();

                    ctx.moveTo(300-moaToPx(pointData.distanceMoA),300-moaToPx(pointData.length/2));
                    ctx.lineTo(300-moaToPx(pointData.distanceMoA),300+moaToPx(pointData.length/2));
                    ctx.moveTo(300+moaToPx(pointData.distanceMoA),300-moaToPx(pointData.length/2));
                    ctx.lineTo(300+moaToPx(pointData.distanceMoA),300+moaToPx(pointData.length/2));

                    ctx.lineWidth = moaToPx(pointData.width);
                    ctx.strokeStyle = "rgba(0,0,0," + data.opacity + ")";
                    ctx.stroke();
                    ctx.restore();

                } else {
                    //  { distanceMoA: -3.438, style: 'dot', diameter: 0.2 },
                    ctx.save();
                    ctx.fillStyle = "rgba(0,0,0," + data.opacity + ")";
                    ctx.lineWidth = 0;

                    ctx.beginPath();
                    ctx.arc(300-moaToPx(pointData.distanceMoA) ,300,moaToPx(pointData.diameter)/2,0,2*Math.PI);
                    ctx.closePath();
                    ctx.fill();

                    ctx.beginPath();
                    ctx.arc(300+moaToPx(pointData.distanceMoA) ,300,moaToPx(pointData.diameter)/2,0,2*Math.PI);
                    ctx.closePath();
                    ctx.fill();

                    ctx.restore();
                }
            }
        }

        if( data.verticalPoints.length > 0 ) {
            var pointData;

            for( var vp=0; vp<data.verticalPoints.length; vp++ ) {
                pointData = data.verticalPoints[vp];

                if( pointData.style === 'line' ){
                    ctx.save();
                    ctx.beginPath();

                    ctx.moveTo(300-moaToPx(pointData.length/2),300-moaToPx(pointData.distanceMoA));
                    ctx.lineTo(300+moaToPx(pointData.length/2),300-moaToPx(pointData.distanceMoA));

                    ctx.lineWidth = moaToPx(pointData.width);
                    ctx.strokeStyle = "rgba(0,0,0," + data.opacity + ")";
                    ctx.stroke();
                    ctx.restore();

                } else {
                    ctx.save();
                    ctx.fillStyle = "rgba(0,0,0," + data.opacity + ")";
                    ctx.lineWidth = 0;

                    ctx.beginPath();
                    ctx.arc(300,300-moaToPx(pointData.distanceMoA),moaToPx(pointData.diameter)/2,0,2*Math.PI);
                    ctx.closePath();
                    ctx.fill();

                    ctx.restore();
                }
            }
        }
    };

    var _drawCustomThickPosts = function(postData) {
        var self = this;
        var ctx = self.ctx;

        if( postData.thickPost.display === true ) {
            var hGapSize = moaToPx(postData.thickPost.horizontal.distanceMoA);
            var hAngleLen = moaToPx((postData.thickPost.lineThickness/2)/Math.tan(toRadians(postData.thickPost.endPostAngle)));
            if( hGapSize < 300 ) {
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(300-hGapSize-hAngleLen, 300);
                ctx.lineTo(0, 300);
                ctx.moveTo(300+hGapSize+hAngleLen, 300);
                ctx.lineTo(600, 300);
                ctx.lineWidth = moaToPx(postData.thickPost.lineThickness);
                ctx.strokeStyle = "rgba(0,0,0," + postData.opacity + ")";
                ctx.stroke();
                ctx.restore();

                // Draw left angled line...
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(300-hGapSize,300);
                ctx.lineTo(300-hGapSize-hAngleLen, 300-(moaToPx(postData.thickPost.lineThickness)/2));
                ctx.lineTo(300-hGapSize-hAngleLen, 300+(moaToPx(postData.thickPost.lineThickness)/2));
                ctx.lineTo(300-hGapSize,300);
                ctx.fillStyle="rgba(0,0,0," + postData.opacity + ")";
                ctx.fill();
                ctx.closePath();
                ctx.restore();

                // Draw right angled line
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(300+hGapSize,300);
                ctx.lineTo(300+hGapSize+hAngleLen, 300-(moaToPx(postData.thickPost.lineThickness)/2));
                ctx.lineTo(300+hGapSize+hAngleLen, 300+(moaToPx(postData.thickPost.lineThickness)/2));
                ctx.lineTo(300+hGapSize,300);
                ctx.fillStyle="rgba(0,0,0," + postData.opacity + ")";
                ctx.fill();
                ctx.closePath();
                ctx.restore();

                // Draw vertical posts...
                var vGapSize = moaToPx(postData.thickPost.vertical.distanceMoA);
                if( postData.thickPost.vertical.displayBottom === true && vGapSize < 300) {
                    ctx.save();
                    ctx.beginPath();

                    ctx.moveTo(300, 300+vGapSize+hAngleLen);
                    ctx.lineTo(300,600);
                    ctx.lineWidth = moaToPx(postData.thickPost.lineThickness);
                    ctx.strokeStyle = "rgba(0,0,0," + postData.opacity + ")";
                    ctx.stroke();
                    ctx.restore();

                    // Draw bottom angled line...
                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(300,300+vGapSize);
                    ctx.lineTo(300-(moaToPx(postData.thickPost.lineThickness)/2), 300+vGapSize+hAngleLen);
                    ctx.lineTo(300+(moaToPx(postData.thickPost.lineThickness)/2), 300+vGapSize+hAngleLen);
                    ctx.lineTo(300, 300+vGapSize);
                    ctx.fillStyle="rgba(0,0,0," + postData.opacity + ")";
                    ctx.fill();
                    ctx.closePath();
                    ctx.restore();

                }
                if( postData.thickPost.vertical.displayTop === true && vGapSize < 300) {
                    ctx.save();
                    ctx.beginPath();

                    ctx.moveTo(300, 300-vGapSize-hAngleLen);
                    ctx.lineTo(300,0);

                    ctx.lineWidth = moaToPx(postData.thickPost.lineThickness);
                    ctx.strokeStyle = "rgba(0,0,0," + postData.opacity + ")";
                    ctx.stroke();
                    ctx.restore();

                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(300,300-vGapSize);
                    ctx.lineTo(300-(moaToPx(postData.thickPost.lineThickness)/2), 300-vGapSize-hAngleLen);
                    ctx.lineTo(300+(moaToPx(postData.thickPost.lineThickness)/2), 300-vGapSize-hAngleLen);
                    ctx.lineTo(300, 300-vGapSize);
                    ctx.fillStyle="rgba(0,0,0," + postData.opacity + ")";
                    ctx.fill();
                    ctx.closePath();
                    ctx.restore();
                }
            }
        }
    };

    var _drawCustomThinPosts = function(postData) {
        var self = this;
        var ctx = self.ctx;

        ctx.save();
        ctx.beginPath();

        var hGap = postData.thickPost.display===true ? moaToPx(postData.thickPost.horizontal.distanceMoA) : 300;
        if( hGap >= 300 ) { hGap = 300; }
        var vtGap = postData.thickPost.vertical.displayTop === true ? moaToPx(postData.thickPost.vertical.distanceMoA) : 300;
        var vbGap = postData.thickPost.vertical.displayBottom === true ? moaToPx(postData.thickPost.vertical.distanceMoA) : 300;

        if( vtGap >= 300 ) { vtGap = 300; }
        if( vbGap >= 300 ) { vbGap = 300; }

        ctx.moveTo(300-hGap, 300);
        ctx.lineTo(300+hGap, 300);

        ctx.moveTo(300, 300);
        ctx.lineTo(300, 300-vtGap);

        ctx.moveTo(300, 300);
        ctx.lineTo(300, 300+vbGap);

        ctx.lineWidth = moaToPx(postData.thinLine.lineThickness);
        ctx.strokeStyle = "rgba(0,0,0," + postData.opacity + ")";
        ctx.stroke();
        ctx.restore();
    };

    return {
        init: _init,
        show: _show,
        beginTracking: _beginTracking,
        displayWindDirection:_displayWindDirection,
        clearWindDirection: _clearWindDirection,
        displayRange: _displayRange,
        clearDisplayRange: _clearDisplayRange,
        drawComment: _drawComment
    };

}();

var crosshair = new Crosshair();