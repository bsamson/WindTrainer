var TorcazTarget = function(ctx) {
    var self = this;

    self.ctx = ctx;
    self.killCentre = { x: 184, y: 319 };
    self.targetHeight = 600;
    self.range = 0;
    self.scaling = 1;
    self.killSize = 0;
};

TorcazTarget.prototype = function(){

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

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(227.3, 546.5);
        ctx.bezierCurveTo(227.3, 546.5, 217.2, 538.1, 230.2, 532.6);
        ctx.lineTo(230.2, 519.6);
        ctx.bezierCurveTo(230.2, 519.6, 244.7, 422.6, 251.6, 407.7);
        ctx.bezierCurveTo(258.6, 392.7, 261.7, 371.3, 286.9, 353.1);
        ctx.bezierCurveTo(312.1, 335.0, 310.7, 329.5, 321.0, 311.3);
        ctx.bezierCurveTo(331.2, 293.1, 332.5, 246.9, 332.0, 240.0);
        ctx.bezierCurveTo(331.6, 233.0, 327.4, 183.6, 317.5, 163.2);
        ctx.bezierCurveTo(307.5, 142.8, 303.6, 134.1, 300.3, 123.1);
        ctx.bezierCurveTo(297.0, 112.1, 291.8, 93.6, 291.8, 88.0);
        ctx.bezierCurveTo(291.8, 82.5, 291.6, 78.5, 297.8, 72.0);
        ctx.bezierCurveTo(304.1, 65.4, 310.3, 62.9, 312.2, 62.1);
        ctx.bezierCurveTo(314.2, 61.3, 321.5, 59.1, 327.1, 64.2);
        ctx.bezierCurveTo(332.0, 68.7, 332.0, 68.3, 332.0, 68.3);
        ctx.bezierCurveTo(332.0, 68.3, 334.1, 69.2, 335.2, 65.8);
        ctx.bezierCurveTo(336.2, 63.0, 337.1, 61.5, 335.9, 59.1);
        ctx.bezierCurveTo(334.0, 55.6, 334.5, 56.8, 329.6, 53.9);
        ctx.bezierCurveTo(324.7, 51.0, 316.4, 44.9, 315.9, 44.5);
        ctx.bezierCurveTo(315.5, 44.0, 311.6, 38.7, 315.9, 33.7);
        ctx.bezierCurveTo(320.2, 28.7, 319.5, 24.1, 317.3, 20.9);
        ctx.bezierCurveTo(315.1, 17.6, 299.1, -2.7, 270.4, 0.9);
        ctx.bezierCurveTo(241.6, 4.6, 234.0, 16.7, 227.1, 25.5);
        ctx.bezierCurveTo(220.2, 34.3, 211.2, 65.2, 209.5, 71.8);
        ctx.bezierCurveTo(207.8, 78.4, 200.1, 115.9, 197.4, 123.2);
        ctx.bezierCurveTo(194.7, 130.5, 181.4, 158.9, 170.9, 163.7);
        ctx.bezierCurveTo(160.3, 168.5, 135.1, 187.4, 125.6, 193.6);
        ctx.bezierCurveTo(116.2, 199.9, 89.2, 230.1, 81.3, 254.6);
        ctx.bezierCurveTo(73.4, 279.2, 68.5, 298.6, 62.3, 325.8);
        ctx.bezierCurveTo(62.3, 325.8, 44.9, 368.1, 37.1, 379.0);
        ctx.bezierCurveTo(29.3, 389.8, 22.0, 420.4, 20.1, 428.3);
        ctx.bezierCurveTo(18.2, 436.1, 14.6, 452.7, 13.0, 457.8);
        ctx.bezierCurveTo(11.4, 462.9, 0.4, 494.6, 0.5, 500.3);
        ctx.bezierCurveTo(0.7, 506.0, 1.3, 510.7, 3.4, 513.0);
        ctx.bezierCurveTo(5.5, 515.3, 28.5, 527.2, 37.3, 536.3);
        ctx.bezierCurveTo(46.1, 545.4, 56.3, 535.7, 60.0, 532.7);
        ctx.bezierCurveTo(63.7, 529.8, 93.2, 467.4, 99.6, 444.3);
        ctx.bezierCurveTo(99.6, 444.3, 107.5, 427.9, 112.6, 444.9);
        ctx.bezierCurveTo(117.7, 461.9, 127.2, 506.2, 127.3, 513.0);
        ctx.lineTo(134.2, 519.5);
        ctx.lineTo(134.2, 532.9);
        ctx.bezierCurveTo(134.2, 532.9, 146.0, 537.0, 137.1, 546.3);
        ctx.lineTo(227.3, 546.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(182, 20, 32)";
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // basePlate/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(240.2, 595.1);
        ctx.lineTo(119.2, 595.1);
        ctx.lineTo(119.2, 584.1);
        ctx.lineTo(240.2, 584.1);
        ctx.lineTo(240.2, 595.1);
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
        ctx.moveTo(313.7, 600.6);
        ctx.lineTo(49.7, 600.6);
        ctx.lineTo(49.7, 590.6);
        ctx.lineTo(313.7, 590.6);
        ctx.lineTo(313.7, 600.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(90, 89, 89)";
        ctx.fill();
        ctx.restore();

        // basePlate/Path
        ctx.save();
        ctx.shadowColor = "rgba(0, 0, 0, 0.76)";
        ctx.shadowOffsetX = 0.0;
        ctx.shadowOffsetY = -2.3;
        ctx.shadowBlur = 4.6;
        ctx.beginPath();
        ctx.moveTo(114.0, 540.0);
        ctx.lineTo(114.0, 586.8);
        ctx.lineTo(246.3, 586.8);
        ctx.lineTo(246.3, 540.0);
        ctx.lineTo(114.0, 540.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(174, 174, 174)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(108.7, 569.6);
        ctx.lineTo(98.7, 569.6);
        ctx.lineTo(98.7, 555.6);
        ctx.lineTo(108.7, 555.6);
        ctx.lineTo(108.7, 569.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(127, 127, 127)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(256.7, 574.8);
        ctx.lineTo(246.9, 574.8);
        ctx.lineTo(246.9, 569.4);
        ctx.lineTo(256.7, 569.4);
        ctx.lineTo(256.7, 574.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(256.7, 557.4);
        ctx.lineTo(246.9, 557.4);
        ctx.lineTo(246.9, 549.8);
        ctx.lineTo(256.7, 549.8);
        ctx.lineTo(256.7, 557.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(256.7, 570.6);
        ctx.lineTo(246.7, 570.6);
        ctx.lineTo(246.7, 555.6);
        ctx.lineTo(256.7, 555.6);
        ctx.lineTo(256.7, 570.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(113.0, 573.9);
        ctx.lineTo(103.2, 573.9);
        ctx.lineTo(103.2, 568.4);
        ctx.lineTo(113.0, 568.4);
        ctx.lineTo(113.0, 573.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(113.0, 556.4);
        ctx.lineTo(103.2, 556.4);
        ctx.lineTo(103.2, 548.8);
        ctx.lineTo(113.0, 548.8);
        ctx.lineTo(113.0, 556.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(111.7, 570.6);
        ctx.lineTo(103.7, 570.6);
        ctx.lineTo(103.7, 555.6);
        ctx.lineTo(111.7, 555.6);
        ctx.lineTo(111.7, 570.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.font = "11.9px 'Arial Black'";
        ctx.fillStyle = "rgb(0, 0, 255)";
        ctx.fillText("TECNOTARGETS", 127.3, 565.5);
        ctx.restore();


        /* Draw Killzone */
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 4.0;
        ctx.arc(self.killCentre.x,self.killCentre.y,(43/40)*(killsize+1),0,2*Math.PI);
        ctx.stroke();
        ctx.fillStyle = "rgb(255, 255, 163)";
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    };


    var _drawPelletStrike = function(xposmm, yposmm){
        var self = this;
        var ctx = self.ctx;

        var pelletRadius =  2.5*(43/20);

        var xpos = self.killCentre.x + (xposmm*(43/20)*-1);
        var ypos = self.killCentre.y + (yposmm*(43/20)*-1);

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
