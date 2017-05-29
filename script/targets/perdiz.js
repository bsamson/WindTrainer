var PerdizTarget = function(ctx) {
    var self = this;

    self.ctx = ctx;
    self.killCentre = { x: 188, y: 293 };
    self.targetHeight = 590;
    self.range = 0;
    self.scaling = 1;
    self.killSize = 0;
};

PerdizTarget.prototype = function(){

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

        // layer6/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(234.1, 525.2);
        ctx.bezierCurveTo(234.1, 525.2, 227.1, 520.7, 234.1, 514.4);
        ctx.lineTo(237.4, 512.3);
        ctx.bezierCurveTo(237.4, 512.3, 243.6, 500.6, 234.9, 493.0);
        ctx.bezierCurveTo(226.2, 485.5, 223.6, 482.2, 221.3, 478.9);
        ctx.bezierCurveTo(219.0, 475.6, 208.5, 461.0, 207.3, 454.3);
        ctx.bezierCurveTo(206.1, 447.7, 209.1, 439.9, 214.7, 435.7);
        ctx.bezierCurveTo(220.3, 431.6, 315.1, 391.0, 303.2, 278.7);
        ctx.bezierCurveTo(303.2, 278.7, 293.5, 213.5, 285.4, 189.7);
        ctx.bezierCurveTo(285.4, 189.7, 282.1, 177.6, 284.4, 161.0);
        ctx.bezierCurveTo(286.6, 144.4, 280.7, 133.1, 277.8, 129.3);
        ctx.bezierCurveTo(274.9, 125.5, 269.3, 114.8, 279.2, 103.2);
        ctx.bezierCurveTo(279.2, 103.2, 298.8, 79.3, 301.6, 77.0);
        ctx.bezierCurveTo(304.4, 74.7, 312.2, 68.9, 314.0, 64.7);
        ctx.bezierCurveTo(315.8, 60.4, 317.2, 60.1, 315.8, 50.7);
        ctx.bezierCurveTo(314.4, 41.4, 318.3, 38.6, 321.1, 36.7);
        ctx.lineTo(332.2, 28.9);
        ctx.bezierCurveTo(332.2, 28.9, 336.8, 25.4, 331.5, 21.7);
        ctx.bezierCurveTo(326.2, 17.9, 322.7, 16.9, 322.7, 16.9);
        ctx.bezierCurveTo(322.7, 16.9, 318.2, 14.2, 312.2, 18.3);
        ctx.bezierCurveTo(306.1, 22.3, 303.4, 18.7, 302.0, 17.4);
        ctx.bezierCurveTo(300.5, 16.2, 298.1, 14.2, 292.5, 12.0);
        ctx.bezierCurveTo(286.9, 9.9, 286.3, 8.4, 283.9, 5.7);
        ctx.bezierCurveTo(281.6, 3.0, 272.1, 0.2, 261.6, 0.5);
        ctx.bezierCurveTo(251.1, 0.9, 240.5, 3.3, 223.8, 16.2);
        ctx.bezierCurveTo(223.8, 16.2, 207.0, 25.0, 208.6, 44.5);
        ctx.bezierCurveTo(208.6, 44.5, 212.7, 59.0, 202.2, 72.8);
        ctx.bezierCurveTo(191.7, 86.7, 191.6, 83.1, 184.0, 94.1);
        ctx.bezierCurveTo(176.4, 105.2, 175.9, 116.8, 175.5, 121.4);
        ctx.bezierCurveTo(175.1, 126.0, 176.2, 137.1, 165.7, 153.6);
        ctx.bezierCurveTo(155.2, 170.2, 141.2, 186.8, 135.0, 198.8);
        ctx.bezierCurveTo(128.7, 210.8, 109.8, 222.4, 105.5, 224.6);
        ctx.bezierCurveTo(101.3, 226.8, 69.3, 240.0, 55.9, 264.0);
        ctx.bezierCurveTo(42.5, 288.0, 29.3, 320.3, 27.9, 373.0);
        ctx.bezierCurveTo(26.5, 425.8, 32.4, 435.2, 19.4, 470.0);
        ctx.bezierCurveTo(6.5, 504.8, 3.3, 497.9, 0.8, 515.9);
        ctx.bezierCurveTo(-2.3, 538.2, 17.9, 538.4, 17.6, 538.2);
        ctx.bezierCurveTo(17.6, 538.2, 33.7, 541.6, 43.6, 533.0);
        ctx.bezierCurveTo(53.5, 524.3, 50.8, 502.7, 56.4, 492.0);
        ctx.bezierCurveTo(62.0, 481.3, 66.2, 471.8, 83.7, 465.5);
        ctx.bezierCurveTo(101.2, 459.3, 101.3, 450.4, 112.2, 452.0);
        ctx.bezierCurveTo(123.2, 453.5, 128.3, 468.7, 128.3, 472.9);
        ctx.bezierCurveTo(128.3, 472.9, 132.3, 478.3, 119.0, 497.3);
        ctx.bezierCurveTo(119.0, 497.3, 113.3, 506.9, 126.4, 510.5);
        ctx.bezierCurveTo(139.6, 514.0, 141.2, 515.0, 141.2, 515.0);
        ctx.bezierCurveTo(141.2, 515.0, 146.3, 520.4, 140.1, 525.4);
        ctx.lineTo(234.1, 525.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(182, 20, 32)";
        ctx.fill();
        ctx.stroke();
        ctx.restore();


        ctx.save();
        ctx.beginPath();
        ctx.moveTo(250.2, 586.5);
        ctx.lineTo(119.2, 586.5);
        ctx.lineTo(119.2, 573.5);
        ctx.lineTo(250.2, 573.5);
        ctx.lineTo(250.2, 586.5);
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
        ctx.moveTo(329.7, 592.0);
        ctx.lineTo(43.7, 592.0);
        ctx.lineTo(43.7, 582.0);
        ctx.lineTo(329.7, 582.0);
        ctx.lineTo(329.7, 592.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(90, 89, 89)";
        ctx.fill();
        ctx.restore();


        // basePlate/Path
        ctx.save();
        ctx.shadowColor = "rgba(0, 0, 0, 0.76)";
        ctx.shadowOffsetX = 0.0;
        ctx.shadowOffsetY = -2.5;
        ctx.shadowBlur = 5.0;
        ctx.beginPath();
        ctx.moveTo(113.1, 526.4);
        ctx.lineTo(113.1, 577.1);
        ctx.lineTo(256.4, 577.1);
        ctx.lineTo(256.4, 526.4);
        ctx.lineTo(113.1, 526.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(174, 174, 174)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(106.7, 557.0);
        ctx.lineTo(95.7, 557.0);
        ctx.lineTo(95.7, 543.0);
        ctx.lineTo(106.7, 543.0);
        ctx.lineTo(106.7, 557.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(127, 127, 127)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(267.6, 564.1);
        ctx.lineTo(257.0, 564.1);
        ctx.lineTo(257.0, 558.2);
        ctx.lineTo(267.6, 558.2);
        ctx.lineTo(267.6, 564.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(267.6, 545.2);
        ctx.lineTo(257.0, 545.2);
        ctx.lineTo(257.0, 537.0);
        ctx.lineTo(267.6, 537.0);
        ctx.lineTo(267.6, 545.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(267.7, 559.0);
        ctx.lineTo(257.7, 559.0);
        ctx.lineTo(257.7, 544.0);
        ctx.lineTo(267.7, 544.0);
        ctx.lineTo(267.7, 559.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(112.1, 563.1);
        ctx.lineTo(101.5, 563.1);
        ctx.lineTo(101.5, 557.2);
        ctx.lineTo(112.1, 557.2);
        ctx.lineTo(112.1, 563.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(112.1, 544.2);
        ctx.lineTo(101.5, 544.2);
        ctx.lineTo(101.5, 535.9);
        ctx.lineTo(112.1, 535.9);
        ctx.lineTo(112.1, 544.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(110.7, 558.0);
        ctx.lineTo(101.7, 558.0);
        ctx.lineTo(101.7, 543.0);
        ctx.lineTo(110.7, 543.0);
        ctx.lineTo(110.7, 558.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.font = "12.8px 'Arial Black'";
        ctx.fillStyle = "rgb(0, 0, 255)";
        ctx.fillText("TECNOTARGETS", 127.6, 554.0);
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
