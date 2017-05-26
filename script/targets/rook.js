var RookTarget = function(ctx) {
    var self = this;

    self.ctx = ctx;
    self.killCentre = { x: 244, y: 276 };
    self.targetHeight = 600;
    self.range = 0;
    self.scaling = 1;
    self.killSize = 0;
};

RookTarget.prototype = function(){

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

        // basePlate/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(385.6, 251.6);
        ctx.bezierCurveTo(378.2, 214.0, 381.2, 176.6, 347.2, 152.6);
        ctx.bezierCurveTo(304.0, 122.3, 297.6, 123.0, 297.2, 120.3);
        ctx.bezierCurveTo(295.3, 108.2, 296.2, 102.6, 292.3, 91.3);
        ctx.bezierCurveTo(289.1, 81.8, 284.5, 73.8, 279.7, 65.0);
        ctx.bezierCurveTo(271.2, 49.5, 250.4, 40.3, 235.8, 31.3);
        ctx.bezierCurveTo(218.5, 20.5, 199.5, 9.8, 180.3, 2.8);
        ctx.bezierCurveTo(164.4, -3.0, 159.1, 3.1, 146.5, 11.2);
        ctx.bezierCurveTo(135.6, 18.2, 124.2, 24.2, 112.6, 30.0);
        ctx.bezierCurveTo(103.0, 34.8, 98.7, 43.2, 88.2, 44.8);
        ctx.bezierCurveTo(63.0, 48.7, 36.9, 54.2, 14.6, 67.2);
        ctx.bezierCurveTo(7.9, 71.1, -4.4, 80.0, 2.5, 89.0);
        ctx.bezierCurveTo(8.3, 96.4, 19.6, 93.4, 27.4, 92.3);
        ctx.bezierCurveTo(39.4, 90.7, 50.5, 94.9, 62.1, 96.3);
        ctx.bezierCurveTo(75.0, 97.9, 87.5, 98.7, 99.5, 103.8);
        ctx.bezierCurveTo(109.9, 108.2, 119.8, 114.1, 131.1, 115.9);
        ctx.bezierCurveTo(138.6, 117.1, 137.9, 116.0, 142.4, 121.5);
        ctx.bezierCurveTo(145.8, 125.8, 145.5, 131.6, 146.8, 136.6);
        ctx.bezierCurveTo(148.0, 141.2, 149.7, 146.2, 149.3, 151.0);
        ctx.bezierCurveTo(148.8, 156.0, 139.0, 156.1, 135.0, 157.3);
        ctx.bezierCurveTo(125.0, 160.2, 115.1, 166.6, 108.7, 174.9);
        ctx.bezierCurveTo(101.3, 184.6, 100.8, 197.3, 99.3, 209.0);
        ctx.bezierCurveTo(97.7, 221.1, 95.9, 233.3, 95.0, 245.6);
        ctx.bezierCurveTo(93.6, 264.3, 93.1, 266.8, 92.2, 277.1);
        ctx.bezierCurveTo(90.1, 299.3, 89.7, 295.2, 89.6, 308.6);
        ctx.bezierCurveTo(90.1, 315.3, 89.5, 316.8, 92.2, 327.0);
        ctx.bezierCurveTo(100.8, 345.2, 99.4, 344.5, 113.3, 353.5);
        ctx.bezierCurveTo(129.0, 363.6, 134.3, 381.1, 142.5, 397.0);
        ctx.bezierCurveTo(146.5, 404.8, 152.6, 415.0, 153.2, 423.8);
        ctx.bezierCurveTo(154.0, 436.3, 153.8, 452.4, 153.2, 464.5);
        ctx.bezierCurveTo(152.7, 473.4, 154.9, 485.0, 155.8, 489.1);
        ctx.bezierCurveTo(156.6, 492.3, 161.2, 500.4, 161.2, 500.4);
        ctx.bezierCurveTo(172.6, 515.1, 174.9, 515.2, 175.8, 522.5);
        ctx.bezierCurveTo(177.7, 536.1, 176.5, 539.5, 176.3, 548.0);
        ctx.bezierCurveTo(176.3, 550.6, 176.3, 554.6, 176.3, 565.8);
        ctx.bezierCurveTo(176.3, 574.8, 195.6, 567.6, 203.2, 567.8);
        ctx.bezierCurveTo(213.5, 568.0, 223.7, 569.9, 234.0, 569.9);
        ctx.bezierCurveTo(244.2, 570.0, 254.3, 568.0, 264.4, 567.5);
        ctx.bezierCurveTo(275.1, 566.9, 277.5, 567.8, 293.8, 568.3);
        ctx.bezierCurveTo(294.3, 549.1, 294.3, 549.1, 294.8, 532.3);
        ctx.bezierCurveTo(295.0, 522.3, 294.6, 519.5, 301.7, 513.3);
        ctx.bezierCurveTo(307.5, 508.2, 312.6, 501.4, 312.5, 494.0);
        ctx.bezierCurveTo(312.2, 472.5, 309.2, 469.3, 312.7, 449.0);
        ctx.bezierCurveTo(313.8, 442.5, 324.4, 436.2, 330.0, 431.5);
        ctx.bezierCurveTo(337.5, 425.0, 341.6, 417.9, 348.3, 410.6);
        ctx.bezierCurveTo(353.6, 404.9, 355.8, 400.7, 362.3, 392.5);
        ctx.bezierCurveTo(371.9, 380.6, 374.2, 378.3, 379.2, 369.7);
        ctx.bezierCurveTo(390.5, 350.1, 387.2, 336.3, 386.7, 315.8);
        ctx.bezierCurveTo(386.0, 290.3, 390.2, 274.6, 385.6, 251.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(192, 38, 44)";
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // basePlate/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(308.0, 610.8);
        ctx.lineTo(160.0, 610.8);
        ctx.lineTo(160.0, 596.8);
        ctx.lineTo(308.0, 596.8);
        ctx.lineTo(308.0, 610.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(127, 127, 127)";
        ctx.fill();
        ctx.restore();

        // basePlate/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(401.0, 619.8);
        ctx.lineTo(72.0, 619.8);
        ctx.lineTo(72.0, 609.8);
        ctx.lineTo(401.0, 609.8);
        ctx.lineTo(401.0, 619.8);
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
        ctx.moveTo(151.9, 544.5);
        ctx.lineTo(151.9, 602.9);
        ctx.lineTo(316.8, 602.9);
        ctx.lineTo(316.8, 544.5);
        ctx.lineTo(151.9, 544.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(174, 174, 174)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(329.7, 588.0);
        ctx.lineTo(317.5, 588.0);
        ctx.lineTo(317.5, 581.2);
        ctx.lineTo(329.7, 581.2);
        ctx.lineTo(329.7, 588.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(329.7, 566.3);
        ctx.lineTo(317.5, 566.3);
        ctx.lineTo(317.5, 556.8);
        ctx.lineTo(329.7, 556.8);
        ctx.lineTo(329.7, 566.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(329.0, 581.8);
        ctx.lineTo(318.0, 581.8);
        ctx.lineTo(318.0, 565.8);
        ctx.lineTo(329.0, 565.8);
        ctx.lineTo(329.0, 581.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut and Bolt/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(143.0, 578.8);
        ctx.lineTo(127.0, 578.8);
        ctx.lineTo(127.0, 565.8);
        ctx.lineTo(143.0, 565.8);
        ctx.lineTo(143.0, 578.8);
        ctx.closePath();
        gradient = ctx.createLinearGradient(135.0, 578.3, 135.0, 564.1);
        gradient.addColorStop(0.00, "rgb(100, 100, 100)");
        gradient.addColorStop(0.33, "rgb(76, 76, 76)");
        gradient.addColorStop(0.98, "rgb(178, 178, 178)");
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();

        // basePlate/Nut and Bolt/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(151.2, 588.0);
        ctx.lineTo(139.0, 588.0);
        ctx.lineTo(139.0, 579.7);
        ctx.lineTo(151.2, 579.7);
        ctx.lineTo(151.2, 588.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut and Bolt/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(151.2, 566.3);
        ctx.lineTo(139.0, 566.3);
        ctx.lineTo(139.0, 556.8);
        ctx.lineTo(151.2, 556.8);
        ctx.lineTo(151.2, 566.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut and Bolt/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(151.0, 581.8);
        ctx.lineTo(139.0, 581.8);
        ctx.lineTo(139.0, 562.8);
        ctx.lineTo(151.0, 562.8);
        ctx.lineTo(151.0, 581.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();
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
    };

    return {
        drawTarget: _drawTarget,
        drawPelletStrike: _drawPelletStrike
    };
}();
