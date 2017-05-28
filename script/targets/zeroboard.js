var ZeroBoard = function(ctx) {
    var self = this;

    self.ctx = ctx;
    self.killCentre = { x: 600, y: 600 };
    self.targetHeight = 600;
    self.range = 0;
    self.scaling = 1;

};

ZeroBoard.prototype = function(){

    var _drawTarget = function(range, killzoneSize, mag) {
        var self = this;

        self.range = range;

        var oneInch = 25.4*(50/20);

        var ctx = self.ctx;
        self.ctx.clear();

        self.scaling = (20/range) / (16/mag);
        var x = (self.killCentre.x * -1) + (600/self.scaling);
        var y = (self.killCentre.y * -1) + (900/self.scaling);

        // Draw the ZeroBoard...
        ctx.scale(self.scaling,self.scaling);
        ctx.translate(x,y);

        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.arc(self.killCentre.x,self.killCentre.y,(50/40)*(40+1),0,2*Math.PI);
        ctx.stroke();
        ctx.fillStyle = "rgb(255, 255, 163)";
        ctx.fill();
        ctx.closePath();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.arc(self.killCentre.x,self.killCentre.y,(50/40)*(25+1),0,2*Math.PI);
        ctx.stroke();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
        ctx.closePath();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.arc(self.killCentre.x,self.killCentre.y,(50/40)*(15+1),0,2*Math.PI);
        ctx.stroke();
        //ctx.fillStyle = "rgb(204, 102, 102)";
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
        ctx.closePath();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 2.0;
        ctx.moveTo(self.killCentre.x-oneInch*5,self.killCentre.y);
        ctx.lineTo(self.killCentre.x+oneInch*5,self.killCentre.y);
        ctx.moveTo(self.killCentre.x,self.killCentre.y-oneInch*5);
        ctx.lineTo(self.killCentre.x,self.killCentre.y+oneInch*5);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();

        // Draw windage lines in 25mm increments from the centre
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 2.0;
        ctx.strokeStyle = '#CC6666';

        for( var x=1; x<5; x++ ) {
            ctx.moveTo(self.killCentre.x-oneInch*x,self.killCentre.y-oneInch/2);
            ctx.lineTo(self.killCentre.x-oneInch*x,self.killCentre.y+oneInch/2);
            ctx.moveTo(self.killCentre.x+oneInch*x,self.killCentre.y-oneInch/2);
            ctx.lineTo(self.killCentre.x+oneInch*x,self.killCentre.y+oneInch/2);
        }

        ctx.stroke();
        ctx.closePath();
        ctx.restore();





    };

    var _drawPelletStrike = function(xposmm, yposmm){
        var self = this;
        var ctx = self.ctx;

        var pelletRadius =  2.5*(50/20);

        var xpos = self.killCentre.x + (xposmm*(50/20)*-1);
        var ypos = self.killCentre.y + (yposmm*(50/20)*-1);

        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 0.1;
        ctx.fillStyle = "rgb(0,0,255,0.8)";

        ctx.arc(xpos,ypos,pelletRadius,0,2*Math.PI);

        ctx.stroke();
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        
        ctx.save(); 
        ctx.beginPath();
        ctx.arc(f, g, e * 5, 0, 2 * Math.PI);
        ctx.stroke();
    };

    return {
        drawTarget: _drawTarget,
        drawPelletStrike: _drawPelletStrike
    };

}();