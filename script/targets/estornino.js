var EstorninoTarget = function(ctx) {
    var self = this;

    self.ctx = ctx;
    self.killCentre = { x: 139, y: 155 };
    self.targetHeight = 444;
    self.range = 0;
    self.scaling = 1;
    self.killSize = 0;
};

EstorninoTarget.prototype = function(){

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
        ctx.moveTo(121.5, 48.9);
        ctx.lineTo(124.1, 49.7);
        ctx.lineTo(121.8, 54.8);
        ctx.bezierCurveTo(121.8, 54.8, 122.1, 56.0, 123.0, 56.8);
        ctx.bezierCurveTo(123.9, 57.6, 124.7, 57.6, 123.5, 59.5);
        ctx.bezierCurveTo(122.2, 61.3, 121.8, 61.9, 121.8, 64.0);
        ctx.bezierCurveTo(121.8, 66.0, 122.6, 68.3, 120.7, 70.5);
        ctx.bezierCurveTo(118.8, 72.7, 121.3, 74.1, 121.5, 76.7);
        ctx.bezierCurveTo(121.6, 79.3, 121.1, 81.5, 120.2, 82.1);
        ctx.bezierCurveTo(119.3, 82.8, 115.7, 83.5, 115.1, 84.0);
        ctx.bezierCurveTo(114.5, 84.5, 111.5, 86.8, 111.2, 88.5);
        ctx.bezierCurveTo(110.9, 90.2, 108.7, 90.8, 105.9, 92.9);
        ctx.bezierCurveTo(103.1, 94.9, 100.4, 96.8, 98.3, 100.8);
        ctx.bezierCurveTo(96.2, 104.7, 88.3, 121.1, 84.0, 128.1);
        ctx.bezierCurveTo(79.8, 135.2, 70.5, 168.7, 69.7, 172.9);
        ctx.bezierCurveTo(68.9, 177.1, 66.7, 189.4, 66.5, 196.3);
        ctx.bezierCurveTo(66.4, 203.2, 61.8, 220.0, 60.2, 224.5);
        ctx.bezierCurveTo(58.6, 228.9, 59.4, 236.1, 58.8, 239.3);
        ctx.bezierCurveTo(58.2, 242.4, 54.0, 252.6, 53.1, 256.7);
        ctx.bezierCurveTo(52.1, 260.7, 50.9, 264.0, 57.9, 261.0);
        ctx.bezierCurveTo(64.9, 258.1, 62.2, 259.9, 60.8, 263.5);
        ctx.bezierCurveTo(59.5, 267.1, 23.6, 309.5, 23.1, 310.6);
        ctx.bezierCurveTo(23.1, 310.6, 15.3, 321.8, 29.5, 320.7);
        ctx.bezierCurveTo(40.8, 319.8, 40.9, 316.7, 47.0, 313.8);
        ctx.bezierCurveTo(47.0, 313.8, 51.2, 308.5, 60.4, 314.6);
        ctx.bezierCurveTo(71.5, 322.1, 79.7, 325.6, 86.6, 312.5);
        ctx.bezierCurveTo(92.2, 301.8, 90.0, 306.3, 91.9, 295.2);
        ctx.bezierCurveTo(94.4, 280.9, 95.8, 285.7, 95.7, 290.4);
        ctx.bezierCurveTo(95.7, 290.4, 99.5, 335.6, 87.5, 355.8);
        ctx.lineTo(87.5, 367.7);
        ctx.bezierCurveTo(87.5, 367.7, 100.9, 371.2, 91.2, 382.2);
        ctx.lineTo(184.6, 382.2);
        ctx.bezierCurveTo(184.6, 382.2, 175.2, 372.8, 188.0, 367.7);
        ctx.bezierCurveTo(188.0, 367.7, 189.7, 356.3, 194.7, 351.6);
        ctx.bezierCurveTo(199.6, 347.0, 215.3, 333.7, 223.1, 323.7);
        ctx.bezierCurveTo(230.9, 313.8, 233.8, 302.1, 220.5, 290.7);
        ctx.bezierCurveTo(207.1, 279.4, 193.9, 273.4, 186.6, 268.8);
        ctx.bezierCurveTo(179.2, 264.2, 182.4, 261.5, 183.6, 259.2);
        ctx.bezierCurveTo(184.9, 256.8, 186.4, 255.1, 185.3, 248.0);
        ctx.bezierCurveTo(184.2, 240.8, 181.9, 236.8, 188.3, 230.6);
        ctx.bezierCurveTo(194.6, 224.3, 210.2, 208.2, 213.0, 188.1);
        ctx.bezierCurveTo(213.0, 188.1, 216.3, 169.0, 218.3, 165.4);
        ctx.bezierCurveTo(220.3, 161.9, 227.8, 153.2, 232.3, 149.3);
        ctx.bezierCurveTo(236.8, 145.3, 239.9, 128.3, 234.9, 114.6);
        ctx.bezierCurveTo(229.9, 100.9, 223.7, 91.7, 219.5, 84.9);
        ctx.bezierCurveTo(215.4, 78.2, 208.9, 76.3, 206.5, 71.1);
        ctx.bezierCurveTo(204.0, 65.9, 206.3, 65.2, 206.0, 61.9);
        ctx.bezierCurveTo(205.7, 58.7, 205.1, 55.6, 205.7, 53.8);
        ctx.bezierCurveTo(206.3, 52.1, 210.2, 46.9, 212.5, 41.1);
        ctx.bezierCurveTo(214.9, 35.3, 222.2, 30.8, 231.0, 28.4);
        ctx.bezierCurveTo(239.7, 26.0, 242.2, 21.9, 258.6, 22.3);
        ctx.bezierCurveTo(273.1, 22.7, 268.6, 15.8, 260.5, 14.8);
        ctx.bezierCurveTo(260.5, 14.8, 237.5, 11.3, 233.1, 11.3);
        ctx.bezierCurveTo(228.8, 11.2, 226.6, 10.8, 222.5, 11.3);
        ctx.bezierCurveTo(218.4, 11.7, 215.6, 9.4, 213.1, 8.2);
        ctx.bezierCurveTo(210.7, 6.9, 202.9, 2.7, 195.6, 1.9);
        ctx.bezierCurveTo(188.3, 1.2, 174.4, -0.4, 168.4, 1.2);
        ctx.bezierCurveTo(162.3, 2.7, 148.2, 7.1, 138.1, 18.9);
        ctx.bezierCurveTo(128.0, 30.7, 126.7, 36.9, 124.9, 40.6);
        ctx.bezierCurveTo(123.0, 44.4, 121.9, 46.5, 121.5, 49.0);
        ctx.fillStyle = "rgb(182, 20, 32)";
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // basePlate/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(206.5, 439.2);
        ctx.lineTo(75.5, 439.2);
        ctx.lineTo(75.5, 426.2);
        ctx.lineTo(206.5, 426.2);
        ctx.lineTo(206.5, 439.2);
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
        ctx.moveTo(286.0, 444.7);
        ctx.lineTo(0.0, 444.7);
        ctx.lineTo(0.0, 434.7);
        ctx.lineTo(286.0, 434.7);
        ctx.lineTo(286.0, 444.7);
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
        ctx.moveTo(69.4, 379.0);
        ctx.lineTo(69.4, 429.7);
        ctx.lineTo(212.7, 429.7);
        ctx.lineTo(212.7, 379.0);
        ctx.lineTo(69.4, 379.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(174, 174, 174)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(63.0, 409.7);
        ctx.lineTo(52.0, 409.7);
        ctx.lineTo(52.0, 395.7);
        ctx.lineTo(63.0, 395.7);
        ctx.lineTo(63.0, 409.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(127, 127, 127)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(223.9, 416.8);
        ctx.lineTo(213.3, 416.8);
        ctx.lineTo(213.3, 410.9);
        ctx.lineTo(223.9, 410.9);
        ctx.lineTo(223.9, 416.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(223.9, 397.9);
        ctx.lineTo(213.3, 397.9);
        ctx.lineTo(213.3, 389.6);
        ctx.lineTo(223.9, 389.6);
        ctx.lineTo(223.9, 397.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(224.0, 411.7);
        ctx.lineTo(214.0, 411.7);
        ctx.lineTo(214.0, 396.7);
        ctx.lineTo(224.0, 396.7);
        ctx.lineTo(224.0, 411.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(68.4, 415.7);
        ctx.lineTo(57.7, 415.7);
        ctx.lineTo(57.7, 409.8);
        ctx.lineTo(68.4, 409.8);
        ctx.lineTo(68.4, 415.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(68.4, 396.9);
        ctx.lineTo(57.7, 396.9);
        ctx.lineTo(57.7, 388.6);
        ctx.lineTo(68.4, 388.6);
        ctx.lineTo(68.4, 396.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(67.0, 410.7);
        ctx.lineTo(58.0, 410.7);
        ctx.lineTo(58.0, 395.7);
        ctx.lineTo(67.0, 395.7);
        ctx.lineTo(67.0, 410.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();
        ctx.restore();

        // basePlate/TECNOTARGETS
        ctx.save();
        ctx.font = "12.8px 'Arial Black'";
        ctx.fillStyle = "rgb(0, 0, 255)";
        ctx.fillText("TECNOTARGETS", 83.8, 406.7);
        ctx.restore();



        /* Draw Killzone */
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 4.0;
        ctx.arc(self.killCentre.x,self.killCentre.y,(45/40)*(killsize+1),0,2*Math.PI);
        ctx.stroke();
        ctx.fillStyle = "rgb(255, 255, 163)";
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    };


    var _drawPelletStrike = function(xposmm, yposmm){
        var self = this;
        var ctx = self.ctx;

        var pelletRadius =  2.5*(45/20);

        var xpos = self.killCentre.x + (xposmm*(45/20)*-1);
        var ypos = self.killCentre.y + (yposmm*(45/20)*-1);

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
