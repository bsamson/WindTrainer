var MoonTarget = function(ctx) {
    var self = this;

    self.ctx = ctx;
    self.killCentre = { x: 190, y: 136 };
    self.targetHeight = 530;
    self.range = 0;
    self.scaling = 1;
    self.killSize = 0;
};

MoonTarget.prototype = function(){

    var _drawTarget = function(range, killsize, mag) {
        var self = this;

        self.range = range;
        self.killSize = killsize;

        var ctx = self.ctx;
        self.ctx.clear();

        self.scaling = (20/range) / (16/mag);
        var x = (self.killCentre.x * -1) + (600/self.scaling);
        var y = (self.killCentre.y * -1) + (900/self.scaling);

        // Draw the ZeroBoard...
        ctx.scale(self.scaling,self.scaling);
        ctx.translate(x,y);


        var gradient;

        // target/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(122.1, 334.7);
        ctx.lineTo(122.1, 429.7);
        ctx.lineTo(126.1, 429.7);
        ctx.lineTo(126.1, 445.7);
        ctx.lineTo(248.1, 445.7);
        ctx.lineTo(248.1, 429.7);
        ctx.lineTo(259.1, 429.7);
        ctx.lineTo(259.1, 334.7);
        ctx.lineTo(122.1, 334.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(182, 20, 32)";
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // target/Path
        ctx.save();
        ctx.shadowColor = "rgba(0, 0, 0, 0.76)";
        ctx.shadowOffsetX = 0.0;
        ctx.shadowOffsetY = 3.0;
        ctx.shadowBlur = 6.0;
        ctx.beginPath();
        ctx.moveTo(255.9, 331.9);
        ctx.lineTo(126.1, 331.9);
        ctx.lineTo(126.1, 327.6);
        ctx.lineTo(255.9, 327.6);
        ctx.lineTo(255.9, 331.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(152, 152, 152)";
        ctx.fill();
        ctx.restore();

        // basePlate/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(267.1, 513.7);
        ctx.lineTo(110.1, 513.7);
        ctx.lineTo(110.1, 499.7);
        ctx.lineTo(267.1, 499.7);
        ctx.lineTo(267.1, 513.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(152, 152, 152)";
        ctx.fill();
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.lineJoin = "miter";
        ctx.miterLimit = 1.0;
        ctx.stroke();
        ctx.restore();

        // basePlate/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(362.6, 521.2);
        ctx.lineTo(17.6, 521.2);
        ctx.lineTo(17.6, 510.2);
        ctx.lineTo(362.6, 510.2);
        ctx.lineTo(362.6, 521.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(90, 89, 89)";
        ctx.fill();
        ctx.restore();

        // basePlate/Path
        ctx.save();
        ctx.shadowColor = "rgba(0, 0, 0, 0.76)";
        ctx.shadowOffsetX = 0.0;
        ctx.shadowOffsetY = -3.0;
        ctx.shadowBlur = 6.0;
        ctx.beginPath();
        ctx.moveTo(101.6, 442.3);
        ctx.lineTo(101.6, 503.5);
        ctx.lineTo(274.3, 503.5);
        ctx.lineTo(274.3, 442.3);
        ctx.lineTo(101.6, 442.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(174, 174, 174)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(287.9, 487.8);
        ctx.lineTo(275.1, 487.8);
        ctx.lineTo(275.1, 480.7);
        ctx.lineTo(287.9, 480.7);
        ctx.lineTo(287.9, 487.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(287.9, 465.1);
        ctx.lineTo(275.1, 465.1);
        ctx.lineTo(275.1, 455.1);
        ctx.lineTo(287.9, 455.1);
        ctx.lineTo(287.9, 465.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(287.6, 481.2);
        ctx.lineTo(275.6, 481.2);
        ctx.lineTo(275.6, 464.2);
        ctx.lineTo(287.6, 464.2);
        ctx.lineTo(287.6, 481.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut and Bolt/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(92.6, 478.2);
        ctx.lineTo(75.6, 478.2);
        ctx.lineTo(75.6, 465.2);
        ctx.lineTo(92.6, 465.2);
        ctx.lineTo(92.6, 478.2);
        ctx.closePath();
        gradient = ctx.createLinearGradient(84.1, 477.6, 84.1, 463.4);
        gradient.addColorStop(0.00, "rgb(100, 100, 100)");
        gradient.addColorStop(0.33, "rgb(76, 76, 76)");
        gradient.addColorStop(0.98, "rgb(178, 178, 178)");
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();

        // basePlate/Nut and Bolt/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(100.9, 487.8);
        ctx.lineTo(88.1, 487.8);
        ctx.lineTo(88.1, 479.1);
        ctx.lineTo(100.9, 479.1);
        ctx.lineTo(100.9, 487.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut and Bolt/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(100.9, 465.1);
        ctx.lineTo(88.1, 465.1);
        ctx.lineTo(88.1, 455.1);
        ctx.lineTo(100.9, 455.1);
        ctx.lineTo(100.9, 465.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut and Bolt/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(100.6, 481.2);
        ctx.lineTo(87.6, 481.2);
        ctx.lineTo(87.6, 461.2);
        ctx.lineTo(100.6, 461.2);
        ctx.lineTo(100.6, 481.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut and Bolt/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(189.4, 0.5);
        ctx.bezierCurveTo(85.1, 0.5, 0.5, 85.1, 0.5, 189.4);
        ctx.bezierCurveTo(0.5, 293.7, 85.1, 378.3, 189.4, 378.3);
        ctx.bezierCurveTo(293.7, 378.3, 378.3, 293.7, 378.3, 189.4);
        ctx.bezierCurveTo(378.3, 85.1, 293.7, 0.5, 189.4, 0.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(195, 21, 42)";
        ctx.fill();
        ctx.strokeStyle = "rgb(0, 0, 0)";
        ctx.lineJoin = "miter";
        ctx.miterLimit = 10.0;
        ctx.stroke();
        ctx.restore();



        /* Draw Killzone */
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 4.0;
        ctx.arc(self.killCentre.x,self.killCentre.y,(50/40)*(killsize+1),0,2*Math.PI);
        ctx.stroke();
        ctx.fillStyle = "rgb(255, 255, 163)";
        ctx.fill();
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
        ctx.fillStyle = "rgb(0,0,0,0.8)";

        ctx.arc(xpos,ypos,pelletRadius,0,2*Math.PI);

        ctx.stroke();
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    };

    return {
        drawTarget: _drawTarget,
        drawPelletStrike: _drawPelletStrike
    };
}();
