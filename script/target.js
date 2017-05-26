var Target = function() {
    var self = this;

    self.canvas = null;
    self.ctx = null;
    self.currentTarget = null;

};

Target.prototype = function(){

    var _init = function(){
        var self = this;

        self.canvas = document.getElementById("target");
        if (self.canvas.getContext) {
            self.ctx = self.canvas.getContext("2d");
        }
    };

    var _show = function(show) {
        var self = this;

        if( show === true) {
            self.canvas.style.display = "block";
        } else {
            self.canvas.style.display = "none";
        }
    };

    var _drawTarget = function( range, oTarget, killzoneSize, mag ) {
        var self = this;

        self.canvas.style.webkitTransform = "none";
        self.canvas.style.Transform = "none";
        self.canvas.style.MozTransform = "none";
        self.canvas.style.oTransform = "none";

        self.currentTarget = oTarget;

        self.currentTarget.drawTarget( range, killzoneSize, mag );

        self.canvas.style.left = "-300px";
        self.canvas.style.top = "-600px";

    };

    var _knockover = function() {
        var self = this;

        var yOrigin = 900 + (self.currentTarget.targetHeight-self.currentTarget.killCentre.y)*self.currentTarget.scaling;

        self.canvas.style.WebkitTransformOrigin =  "0 " + yOrigin + "px";
        self.canvas.style.MozTransformOrigin = "0 " + yOrigin + "px";
        self.canvas.style.TransformOrigin = "0 " + yOrigin + "px";
        self.canvas.style.oTransformOrigin = "0 " + yOrigin + "px";


        var angle = 0;
        var fallover = setInterval(function(){
            angle += 5;
            if( angle === 75) {
                clearInterval(fallover);
            } else {
                self.canvas.style.webkitTransform = "rotateX(" + angle + "deg)";
                self.canvas.style.Transform = "rotateX(" + angle + "deg)";
                self.canvas.style.MozTransform = "rotateX(" + angle + "deg)";
                self.canvas.style.oTransform = "rotateX(" + angle + "deg)";
            }
        },10);
    };

    return {
        init: _init,
        show: _show,
        drawTarget: _drawTarget,
        knockover: _knockover
    };
}();

var target = new Target();





