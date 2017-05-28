var CornejaTarget = function(ctx) {
    var self = this;

    self.ctx = ctx;
    self.killCentre = { x: 150, y: 287 };
    self.targetHeight = 600;
    self.range = 0;
    self.scaling = 1;
    self.killSize = 0;
};

CornejaTarget.prototype = function(){

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
        ctx.moveTo(102.7, 533.5);
        ctx.bezierCurveTo(102.7, 533.5, 110.1, 525.6, 99.5, 520.1);
        ctx.bezierCurveTo(96.5, 518.6, 98.0, 519.3, 98.0, 519.3);
        ctx.lineTo(98.3, 504.0);
        ctx.bezierCurveTo(98.3, 504.0, 75.6, 490.4, 75.8, 476.9);
        ctx.bezierCurveTo(76.1, 453.8, 84.6, 452.8, 83.8, 428.3);
        ctx.bezierCurveTo(83.0, 403.8, 77.1, 359.3, 67.8, 346.4);
        ctx.bezierCurveTo(59.6, 335.1, 58.9, 329.1, 48.5, 346.1);
        ctx.bezierCurveTo(44.0, 353.4, 44.8, 358.0, 38.0, 346.5);
        ctx.bezierCurveTo(27.7, 329.1, -5.0, 199.5, 2.5, 162.3);
        ctx.bezierCurveTo(4.7, 151.7, 6.9, 143.8, 15.6, 132.3);
        ctx.bezierCurveTo(27.8, 116.2, 38.1, 113.4, 45.2, 96.7);
        ctx.bezierCurveTo(52.3, 79.9, 53.5, 68.2, 56.2, 58.3);
        ctx.bezierCurveTo(59.5, 45.8, 69.2, 30.6, 82.8, 19.6);
        ctx.bezierCurveTo(90.6, 13.3, 100.8, 7.7, 112.3, 5.5);
        ctx.bezierCurveTo(123.8, 3.2, 135.3, 0.2, 140.9, 0.6);
        ctx.bezierCurveTo(146.4, 1.0, 173.9, 7.5, 177.2, 12.1);
        ctx.bezierCurveTo(181.8, 18.2, 185.2, 25.7, 185.3, 25.8);
        ctx.bezierCurveTo(185.4, 25.9, 222.5, 37.4, 227.5, 49.0);
        ctx.bezierCurveTo(227.5, 49.0, 228.0, 52.2, 195.2, 58.4);
        ctx.bezierCurveTo(195.2, 58.4, 175.4, 68.7, 169.5, 84.2);
        ctx.bezierCurveTo(163.3, 100.6, 162.4, 106.0, 169.0, 114.1);
        ctx.bezierCurveTo(175.7, 122.2, 211.9, 149.8, 226.5, 170.2);
        ctx.bezierCurveTo(241.2, 190.7, 258.1, 213.9, 258.8, 250.0);
        ctx.bezierCurveTo(259.6, 286.1, 257.3, 318.8, 258.8, 342.6);
        ctx.bezierCurveTo(260.4, 366.3, 266.1, 409.6, 269.1, 422.3);
        ctx.bezierCurveTo(271.4, 432.3, 268.6, 444.1, 266.3, 447.0);
        ctx.bezierCurveTo(263.9, 449.9, 256.9, 458.2, 256.9, 458.2);
        ctx.bezierCurveTo(256.9, 458.2, 250.9, 429.9, 240.2, 418.3);
        ctx.lineTo(228.0, 401.6);
        ctx.bezierCurveTo(228.0, 401.6, 218.7, 395.0, 214.0, 404.9);
        ctx.bezierCurveTo(209.2, 414.7, 210.1, 488.7, 212.3, 501.6);
        ctx.bezierCurveTo(212.9, 504.6, 205.8, 504.1, 206.1, 520.3);
        ctx.bezierCurveTo(206.1, 520.3, 201.6, 518.2, 198.6, 525.2);
        ctx.bezierCurveTo(196.2, 531.0, 202.0, 531.3, 201.5, 533.4);
        ctx.bezierCurveTo(200.7, 537.0, 102.7, 533.5, 102.7, 533.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(182, 20, 32)";
        ctx.fill();
        ctx.lineWidth = 1.1;
        ctx.stroke();
        ctx.restore();

        // basePlate/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(220.1, 595.3);
        ctx.lineTo(89.1, 595.3);
        ctx.lineTo(89.1, 582.3);
        ctx.lineTo(220.1, 582.3);
        ctx.lineTo(220.1, 595.3);
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
        ctx.moveTo(299.6, 600.8);
        ctx.lineTo(13.6, 600.8);
        ctx.lineTo(13.6, 590.8);
        ctx.lineTo(299.6, 590.8);
        ctx.lineTo(299.6, 600.8);
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
        ctx.moveTo(83.0, 535.2);
        ctx.lineTo(83.0, 585.9);
        ctx.lineTo(226.3, 585.9);
        ctx.lineTo(226.3, 535.2);
        ctx.lineTo(83.0, 535.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(174, 174, 174)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(76.6, 565.8);
        ctx.lineTo(65.6, 565.8);
        ctx.lineTo(65.6, 551.8);
        ctx.lineTo(76.6, 551.8);
        ctx.lineTo(76.6, 565.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(127, 127, 127)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(237.5, 572.9);
        ctx.lineTo(226.9, 572.9);
        ctx.lineTo(226.9, 567.0);
        ctx.lineTo(237.5, 567.0);
        ctx.lineTo(237.5, 572.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(237.5, 554.0);
        ctx.lineTo(226.9, 554.0);
        ctx.lineTo(226.9, 545.8);
        ctx.lineTo(237.5, 545.8);
        ctx.lineTo(237.5, 554.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(237.6, 567.8);
        ctx.lineTo(227.6, 567.8);
        ctx.lineTo(227.6, 552.8);
        ctx.lineTo(237.6, 552.8);
        ctx.lineTo(237.6, 567.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(82.0, 571.9);
        ctx.lineTo(71.4, 571.9);
        ctx.lineTo(71.4, 566.0);
        ctx.lineTo(82.0, 566.0);
        ctx.lineTo(82.0, 571.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(82.0, 553.0);
        ctx.lineTo(71.4, 553.0);
        ctx.lineTo(71.4, 544.8);
        ctx.lineTo(82.0, 544.8);
        ctx.lineTo(82.0, 553.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(80.6, 566.8);
        ctx.lineTo(71.6, 566.8);
        ctx.lineTo(71.6, 551.8);
        ctx.lineTo(80.6, 551.8);
        ctx.lineTo(80.6, 566.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();
        ctx.restore();

        // layer7/TECNOTARGETS
        ctx.save();
        ctx.font = "13.5px 'Arial Black'";
        ctx.fillStyle = "rgb(0, 0, 255)";
        ctx.fillText("TECNOTARGETS", 92.6, 560.7);
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
