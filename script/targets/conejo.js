var ConejoTarget = function(ctx) {
    var self = this;

    self.ctx = ctx;
    self.killCentre = { x: 170, y: 273 };
    self.targetHeight = 581;
    self.range = 0;
    self.scaling = 1;
    self.killSize = 0;
};

ConejoTarget.prototype = function(){

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
        ctx.moveTo(223.7, 515.8);
        ctx.bezierCurveTo(223.7, 515.8, 217.9, 512.6, 222.7, 505.2);
        ctx.lineTo(227.5, 502.4);
        ctx.lineTo(227.5, 498.5);
        ctx.lineTo(227.8, 493.4);
        ctx.bezierCurveTo(227.8, 493.4, 230.8, 477.1, 241.8, 468.3);
        ctx.bezierCurveTo(241.8, 468.3, 247.9, 463.3, 255.9, 462.8);
        ctx.bezierCurveTo(263.9, 462.3, 296.3, 460.7, 308.3, 433.0);
        ctx.bezierCurveTo(320.3, 405.4, 293.7, 418.3, 282.1, 420.8);
        ctx.lineTo(275.6, 421.7);
        ctx.bezierCurveTo(275.6, 421.7, 285.5, 413.5, 289.6, 411.3);
        ctx.bezierCurveTo(293.7, 409.1, 313.0, 395.5, 312.8, 371.2);
        ctx.bezierCurveTo(312.8, 371.2, 301.9, 306.0, 293.1, 286.1);
        ctx.bezierCurveTo(284.3, 266.1, 269.0, 230.8, 233.9, 209.7);
        ctx.bezierCurveTo(198.8, 188.5, 187.7, 185.4, 160.8, 183.2);
        ctx.bezierCurveTo(160.8, 183.2, 154.4, 181.5, 147.6, 177.0);
        ctx.bezierCurveTo(140.8, 172.5, 141.8, 169.3, 142.8, 165.7);
        ctx.bezierCurveTo(143.8, 162.1, 144.9, 158.3, 146.6, 152.2);
        ctx.bezierCurveTo(148.3, 146.0, 146.8, 145.3, 146.0, 137.0);
        ctx.bezierCurveTo(145.3, 128.7, 140.3, 114.8, 157.5, 93.2);
        ctx.bezierCurveTo(157.5, 93.2, 171.8, 78.5, 177.1, 55.4);
        ctx.bezierCurveTo(182.5, 32.3, 183.8, 28.7, 182.1, 20.1);
        ctx.bezierCurveTo(180.5, 11.5, 166.2, -8.9, 144.3, 5.5);
        ctx.bezierCurveTo(122.5, 20.0, 118.2, 35.1, 114.2, 46.6);
        ctx.bezierCurveTo(110.3, 58.0, 110.2, 78.1, 104.4, 87.6);
        ctx.bezierCurveTo(98.5, 97.0, 99.3, 94.7, 93.8, 98.1);
        ctx.bezierCurveTo(88.3, 101.5, 75.9, 101.7, 68.4, 104.1);
        ctx.bezierCurveTo(60.8, 106.5, 19.8, 121.0, 6.4, 152.5);
        ctx.bezierCurveTo(6.4, 152.5, -0.7, 166.6, 0.7, 179.1);
        ctx.bezierCurveTo(1.4, 185.3, 4.1, 188.3, 6.4, 188.5);
        ctx.bezierCurveTo(10.3, 188.6, 8.9, 191.1, 10.1, 193.5);
        ctx.bezierCurveTo(12.1, 197.9, 13.0, 197.7, 16.5, 198.5);
        ctx.bezierCurveTo(20.1, 199.4, 33.3, 199.0, 41.0, 197.9);
        ctx.bezierCurveTo(48.8, 196.8, 47.5, 199.6, 45.1, 203.0);
        ctx.bezierCurveTo(42.7, 206.3, 33.0, 218.1, 32.2, 224.2);
        ctx.bezierCurveTo(31.3, 230.2, 30.5, 230.4, 31.7, 239.0);
        ctx.bezierCurveTo(32.8, 247.6, 33.4, 249.0, 33.2, 261.7);
        ctx.bezierCurveTo(32.9, 274.5, 32.6, 287.5, 34.1, 292.6);
        ctx.bezierCurveTo(35.7, 297.8, 37.6, 306.7, 46.7, 313.0);
        ctx.bezierCurveTo(55.9, 319.3, 68.2, 326.8, 68.2, 326.8);
        ctx.bezierCurveTo(68.2, 326.8, 75.4, 330.3, 77.8, 341.6);
        ctx.bezierCurveTo(80.2, 352.9, 80.4, 355.2, 84.1, 361.1);
        ctx.bezierCurveTo(87.8, 367.0, 88.6, 373.8, 83.4, 382.6);
        ctx.bezierCurveTo(78.3, 391.5, 66.7, 399.0, 58.6, 405.7);
        ctx.bezierCurveTo(50.5, 412.5, 57.0, 417.0, 57.1, 417.2);
        ctx.bezierCurveTo(57.2, 417.4, 70.5, 433.1, 72.5, 436.5);
        ctx.bezierCurveTo(74.5, 439.9, 77.1, 447.3, 79.1, 449.7);
        ctx.bezierCurveTo(81.2, 452.1, 84.4, 455.2, 92.1, 455.2);
        ctx.bezierCurveTo(99.8, 455.2, 108.3, 454.0, 111.3, 453.9);
        ctx.bezierCurveTo(114.3, 453.8, 124.4, 453.4, 125.0, 463.8);
        ctx.bezierCurveTo(125.5, 474.3, 125.8, 487.1, 122.9, 494.8);
        ctx.bezierCurveTo(120.0, 502.5, 122.9, 502.1, 122.9, 502.1);
        ctx.bezierCurveTo(122.9, 502.1, 123.3, 501.7, 125.8, 504.1);
        ctx.bezierCurveTo(128.4, 506.5, 132.5, 511.5, 126.4, 515.8);
        ctx.bezierCurveTo(120.3, 520.0, 223.7, 515.8, 223.7, 515.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(182, 20, 32)";
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // basePlate/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(240.8, 576.5);
        ctx.lineTo(109.8, 576.5);
        ctx.lineTo(109.8, 563.5);
        ctx.lineTo(240.8, 563.5);
        ctx.lineTo(240.8, 576.5);
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
        ctx.moveTo(320.3, 582.0);
        ctx.lineTo(34.3, 582.0);
        ctx.lineTo(34.3, 572.0);
        ctx.lineTo(320.3, 572.0);
        ctx.lineTo(320.3, 582.0);
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
        ctx.moveTo(103.6, 516.3);
        ctx.lineTo(103.6, 567.1);
        ctx.lineTo(246.9, 567.1);
        ctx.lineTo(246.9, 516.3);
        ctx.lineTo(103.6, 516.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(174, 174, 174)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(97.3, 547.0);
        ctx.lineTo(86.3, 547.0);
        ctx.lineTo(86.3, 533.0);
        ctx.lineTo(97.3, 533.0);
        ctx.lineTo(97.3, 547.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(127, 127, 127)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(258.1, 554.1);
        ctx.lineTo(247.5, 554.1);
        ctx.lineTo(247.5, 548.2);
        ctx.lineTo(258.1, 548.2);
        ctx.lineTo(258.1, 554.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(258.1, 535.2);
        ctx.lineTo(247.5, 535.2);
        ctx.lineTo(247.5, 527.0);
        ctx.lineTo(258.1, 527.0);
        ctx.lineTo(258.1, 535.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(258.3, 549.0);
        ctx.lineTo(248.3, 549.0);
        ctx.lineTo(248.3, 534.0);
        ctx.lineTo(258.3, 534.0);
        ctx.lineTo(258.3, 549.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(102.6, 553.1);
        ctx.lineTo(92.0, 553.1);
        ctx.lineTo(92.0, 547.2);
        ctx.lineTo(102.6, 547.2);
        ctx.lineTo(102.6, 553.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(102.6, 534.2);
        ctx.lineTo(92.0, 534.2);
        ctx.lineTo(92.0, 525.9);
        ctx.lineTo(102.6, 525.9);
        ctx.lineTo(102.6, 534.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(101.3, 548.0);
        ctx.lineTo(92.3, 548.0);
        ctx.lineTo(92.3, 533.0);
        ctx.lineTo(101.3, 533.0);
        ctx.lineTo(101.3, 548.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();
        ctx.restore();

        // basePlate/TECNOTARGETS
        ctx.save();
        ctx.font = "12.8px 'Arial Black'";
        ctx.fillStyle = "rgb(0, 0, 255)";
        ctx.fillText("TECNOTARGETS", 118.1, 544.0);
        ctx.restore();


        /* Draw Killzone */
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 4.0;
        ctx.arc(self.killCentre.x,self.killCentre.y,(40/40)*(killsize+1),0,2*Math.PI);
        ctx.stroke();
        ctx.fillStyle = "rgb(255, 255, 163)";
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    };


    var _drawPelletStrike = function(xposmm, yposmm){
        var self = this;
        var ctx = self.ctx;

        var pelletRadius =  2.5*(40/20);

        var xpos = self.killCentre.x + (xposmm*(40/20)*-1);
        var ypos = self.killCentre.y + (yposmm*(40/20)*-1);

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
