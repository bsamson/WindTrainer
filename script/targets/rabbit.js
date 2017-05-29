var RabbitTarget = function(ctx) {
    var self = this;

    self.ctx = ctx;
    self.killCentre = { x: 613, y: 326 };
    self.targetHeight = 600;
    self.range = 0;
    self.scaling = 1;
    self.killSize = 0;
};

RabbitTarget.prototype = function(){

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

        // layer6/Measure
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(798.8, 412.0);
        ctx.bezierCurveTo(797.2, 402.9, 794.7, 392.5, 787.7, 385.4);
        ctx.bezierCurveTo(775.0, 372.7, 772.8, 402.9, 762.5, 400.7);
        ctx.bezierCurveTo(759.9, 400.1, 752.0, 375.9, 748.0, 365.9);
        ctx.bezierCurveTo(739.8, 345.5, 736.5, 318.7, 728.1, 302.4);
        ctx.bezierCurveTo(719.3, 285.5, 711.1, 273.5, 699.5, 259.4);
        ctx.bezierCurveTo(687.6, 245.0, 679.7, 236.1, 664.7, 224.2);
        ctx.bezierCurveTo(655.3, 216.7, 641.5, 209.6, 629.6, 203.2);
        ctx.bezierCurveTo(608.8, 192.0, 599.3, 186.5, 600.1, 160.6);
        ctx.bezierCurveTo(601.6, 115.3, 583.3, 109.0, 565.4, 79.9);
        ctx.bezierCurveTo(546.5, 49.3, 556.2, 20.9, 545.9, 8.7);
        ctx.bezierCurveTo(530.9, -9.2, 517.5, 5.0, 515.3, 24.5);
        ctx.bezierCurveTo(511.0, 64.4, 532.9, 88.6, 489.0, 100.9);
        ctx.bezierCurveTo(462.6, 108.2, 416.7, 139.0, 418.5, 171.9);
        ctx.bezierCurveTo(420.8, 214.2, 469.1, 218.6, 497.0, 236.4);
        ctx.bezierCurveTo(502.2, 239.6, 492.9, 234.0, 498.6, 237.6);
        ctx.bezierCurveTo(512.1, 246.2, 504.1, 287.3, 501.0, 304.9);
        ctx.bezierCurveTo(494.9, 340.6, 498.7, 365.3, 502.0, 395.3);
        ctx.bezierCurveTo(505.9, 429.6, 506.0, 465.8, 531.2, 499.5);
        ctx.bezierCurveTo(553.1, 528.9, 582.5, 536.8, 570.7, 571.8);
        ctx.bezierCurveTo(604.6, 579.5, 639.6, 563.9, 672.9, 571.6);
        ctx.bezierCurveTo(667.3, 529.5, 682.3, 539.3, 713.5, 536.8);
        ctx.bezierCurveTo(741.0, 534.6, 758.2, 519.0, 773.3, 495.4);
        ctx.bezierCurveTo(787.3, 473.3, 804.2, 442.3, 798.8, 412.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(192, 38, 44)";
        ctx.fill();
        ctx.strokeStyle = "rgb(1, 1, 1)";
        ctx.stroke();
        ctx.restore();

        // basePlate/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(698.0, 628.6);
        ctx.lineTo(547.0, 628.6);
        ctx.lineTo(547.0, 615.6);
        ctx.lineTo(698.0, 615.6);
        ctx.lineTo(698.0, 628.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(136, 136, 136)";
        ctx.fill();
        ctx.restore();

        // basePlate/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(789.0, 636.6);
        ctx.lineTo(460.0, 636.6);
        ctx.lineTo(460.0, 626.6);
        ctx.lineTo(789.0, 626.6);
        ctx.lineTo(789.0, 636.6);
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
        ctx.moveTo(539.9, 561.4);
        ctx.lineTo(539.9, 619.7);
        ctx.lineTo(704.8, 619.7);
        ctx.lineTo(704.8, 561.4);
        ctx.lineTo(539.9, 561.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(174, 174, 174)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(717.7, 604.8);
        ctx.lineTo(705.5, 604.8);
        ctx.lineTo(705.5, 598.0);
        ctx.lineTo(717.7, 598.0);
        ctx.lineTo(717.7, 604.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(717.7, 583.1);
        ctx.lineTo(705.5, 583.1);
        ctx.lineTo(705.5, 573.6);
        ctx.lineTo(717.7, 573.6);
        ctx.lineTo(717.7, 583.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(717.0, 598.6);
        ctx.lineTo(706.0, 598.6);
        ctx.lineTo(706.0, 582.6);
        ctx.lineTo(717.0, 582.6);
        ctx.lineTo(717.0, 598.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut and Bolt/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(531.0, 595.6);
        ctx.lineTo(515.0, 595.6);
        ctx.lineTo(515.0, 582.6);
        ctx.lineTo(531.0, 582.6);
        ctx.lineTo(531.0, 595.6);
        ctx.closePath();
        gradient = ctx.createLinearGradient(523.0, 595.1, 523.0, 580.9);
        gradient.addColorStop(0.00, "rgb(100, 100, 100)");
        gradient.addColorStop(0.33, "rgb(76, 76, 76)");
        gradient.addColorStop(0.98, "rgb(178, 178, 178)");
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();

        // basePlate/Nut and Bolt/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(539.2, 604.8);
        ctx.lineTo(527.0, 604.8);
        ctx.lineTo(527.0, 596.5);
        ctx.lineTo(539.2, 596.5);
        ctx.lineTo(539.2, 604.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut and Bolt/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(539.2, 583.1);
        ctx.lineTo(527.0, 583.1);
        ctx.lineTo(527.0, 573.6);
        ctx.lineTo(539.2, 573.6);
        ctx.lineTo(539.2, 583.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut and Bolt/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(539.0, 598.6);
        ctx.lineTo(527.0, 598.6);
        ctx.lineTo(527.0, 579.6);
        ctx.lineTo(539.0, 579.6);
        ctx.lineTo(539.0, 598.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();
        ctx.restore();


        /* Draw Killzone */
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 4.0;
        ctx.arc(self.killCentre.x,self.killCentre.y,(47/40)*(killsize+1),0,2*Math.PI);
        ctx.stroke();
        ctx.fillStyle = "rgb(255, 255, 163)";
        ctx.fill();
        ctx.closePath();
        ctx.restore();

    };


    var _drawPelletStrike = function(xposmm, yposmm){
        var self = this;
        var ctx = self.ctx;

        var pelletRadius =  2.5*(47/20);

        var xpos = self.killCentre.x + (xposmm*(47/20)*-1);
        var ypos = self.killCentre.y + (yposmm*(47/20)*-1);

        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 0.1;
        ctx.fillStyle = "rgb(0,0,0,0.8)";

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
