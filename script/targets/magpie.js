var MagpieTarget = function(ctx) {
    var self = this;

    self.ctx = ctx;
    self.killCentre = { x: 297, y: 234 };
    self.targetHeight = 588;
    self.range = 0;
    self.scaling = 1;
    self.killSize = 0;

};

MagpieTarget.prototype = function(){


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
        ctx.moveTo(507.4, 35.6);
        ctx.bezierCurveTo(501.8, 29.7, 492.2, 27.2, 484.5, 25.4);
        ctx.bezierCurveTo(479.0, 24.2, 473.3, 23.4, 467.7, 23.1);
        ctx.bezierCurveTo(467.0, 23.1, 460.8, 22.9, 459.3, 23.6);
        ctx.bezierCurveTo(452.5, 9.7, 415.7, 4.4, 402.6, 2.0);
        ctx.bezierCurveTo(378.9, -2.4, 351.1, 4.5, 333.8, 22.0);
        ctx.bezierCurveTo(308.7, 47.5, 292.9, 86.0, 280.9, 119.3);
        ctx.bezierCurveTo(266.4, 149.5, 242.7, 160.7, 217.6, 191.0);
        ctx.bezierCurveTo(195.6, 217.5, 176.3, 244.3, 157.3, 272.2);
        ctx.bezierCurveTo(110.8, 340.5, 72.9, 415.5, 11.3, 472.1);
        ctx.bezierCurveTo(-22.3, 506.7, 32.9, 503.4, 54.9, 496.2);
        ctx.bezierCurveTo(72.9, 490.3, 93.0, 488.3, 109.2, 477.6);
        ctx.bezierCurveTo(124.7, 467.3, 132.9, 451.6, 146.6, 439.9);
        ctx.bezierCurveTo(156.2, 431.8, 170.8, 413.2, 183.1, 418.8);
        ctx.bezierCurveTo(194.7, 424.1, 219.1, 423.4, 216.4, 441.1);
        ctx.bezierCurveTo(214.7, 452.7, 234.3, 468.5, 239.7, 478.8);
        ctx.bezierCurveTo(248.7, 496.1, 244.6, 498.6, 231.4, 509.3);
        ctx.bezierCurveTo(243.4, 518.6, 283.3, 508.1, 297.4, 508.1);
        ctx.bezierCurveTo(316.7, 508.1, 336.0, 506.8, 355.3, 507.6);
        ctx.bezierCurveTo(330.7, 456.8, 311.7, 442.9, 332.7, 430.5);
        ctx.bezierCurveTo(387.5, 398.3, 405.4, 382.4, 422.6, 336.6);
        ctx.bezierCurveTo(449.0, 266.0, 469.7, 200.6, 441.9, 126.3);
        ctx.bezierCurveTo(439.0, 120.1, 435.9, 112.7, 435.0, 106.0);
        ctx.bezierCurveTo(434.3, 101.4, 436.5, 97.3, 438.4, 93.2);
        ctx.bezierCurveTo(440.0, 89.5, 441.0, 85.7, 442.3, 81.9);
        ctx.bezierCurveTo(443.8, 77.6, 448.0, 75.6, 450.6, 72.1);
        ctx.bezierCurveTo(452.4, 69.6, 453.5, 66.6, 455.5, 64.2);
        ctx.bezierCurveTo(455.8, 63.9, 455.9, 63.5, 456.0, 63.1);
        ctx.bezierCurveTo(456.6, 60.9, 458.1, 61.8, 460.2, 61.9);
        ctx.bezierCurveTo(465.2, 62.1, 470.0, 61.6, 474.6, 59.9);
        ctx.bezierCurveTo(484.2, 56.3, 493.9, 49.8, 504.3, 49.2);
        ctx.bezierCurveTo(506.9, 49.0, 510.3, 49.3, 510.8, 46.0);
        ctx.bezierCurveTo(511.5, 42.2, 510.0, 38.3, 507.4, 35.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(192, 38, 44)";
        ctx.fill();
        ctx.lineWidth = 1.4;
        ctx.stroke();

        // basePlate/Nut

        // basePlate/Nut/
        ctx.save();

        // basePlate/Nut and Bolt
        ctx.restore();

        // basePlate/Nut and Bolt/
        ctx.save();

        // basePlate/Path
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(394.4, 553.1);
        ctx.lineTo(380.8, 553.1);
        ctx.lineTo(380.8, 545.5);
        ctx.lineTo(394.4, 545.5);
        ctx.lineTo(394.4, 553.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();

        // basePlate/Path
        ctx.beginPath();
        ctx.moveTo(394.4, 528.7);
        ctx.lineTo(380.8, 528.7);
        ctx.lineTo(380.8, 518.1);
        ctx.lineTo(394.4, 518.1);
        ctx.lineTo(394.4, 528.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();

        // basePlate/Path
        ctx.beginPath();
        ctx.moveTo(394.7, 545.5);
        ctx.lineTo(380.7, 545.5);
        ctx.lineTo(380.7, 526.5);
        ctx.lineTo(394.7, 526.5);
        ctx.lineTo(394.7, 545.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();

        // basePlate/Path
        ctx.beginPath();
        ctx.moveTo(183.7, 541.5);
        ctx.lineTo(166.7, 541.5);
        ctx.lineTo(166.7, 527.5);
        ctx.lineTo(183.7, 527.5);
        ctx.lineTo(183.7, 541.5);
        ctx.closePath();
        gradient = ctx.createLinearGradient(175.2, 541.0, 175.2, 525.7);
        gradient.addColorStop(0.00, "rgb(100, 100, 100)");
        gradient.addColorStop(0.33, "rgb(76, 76, 76)");
        gradient.addColorStop(0.98, "rgb(178, 178, 178)");
        ctx.fillStyle = gradient;
        ctx.fill();

        // basePlate/Path
        ctx.beginPath();
        ctx.moveTo(194.4, 553.1);
        ctx.lineTo(180.7, 553.1);
        ctx.lineTo(180.7, 543.8);
        ctx.lineTo(194.4, 543.8);
        ctx.lineTo(194.4, 553.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();

        // basePlate/Path
        ctx.beginPath();
        ctx.moveTo(194.4, 528.7);
        ctx.lineTo(180.7, 528.7);
        ctx.lineTo(180.7, 518.1);
        ctx.lineTo(194.4, 518.1);
        ctx.lineTo(194.4, 528.7);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();

        // basePlate/Path
        ctx.beginPath();
        ctx.moveTo(195.7, 545.5);
        ctx.lineTo(179.7, 545.5);
        ctx.lineTo(179.7, 522.5);
        ctx.lineTo(195.7, 522.5);
        ctx.lineTo(195.7, 545.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();

        // basePlate/Path
        ctx.beginPath();
        ctx.moveTo(372.7, 586.5);
        ctx.lineTo(202.7, 586.5);
        ctx.lineTo(202.7, 565.5);
        ctx.lineTo(372.7, 565.5);
        ctx.lineTo(372.7, 586.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(152, 152, 152)";
        ctx.fill();

        // basePlate/Path
        ctx.beginPath();
        ctx.moveTo(474.7, 588.5);
        ctx.lineTo(105.7, 588.5);
        ctx.lineTo(105.7, 579.5);
        ctx.lineTo(474.7, 579.5);
        ctx.lineTo(474.7, 588.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(90, 89, 89)";
        ctx.fill();

        // basePlate/Path
        ctx.save();
        ctx.shadowColor = "rgba(0, 0, 0, 0.76)";
        ctx.shadowOffsetX = 0.0;
        ctx.shadowOffsetY = -3.5;
        ctx.shadowBlur = 6.9;
        ctx.beginPath();
        ctx.moveTo(195.1, 504.4);
        ctx.lineTo(195.1, 569.8);
        ctx.lineTo(380.0, 569.8);
        ctx.lineTo(380.0, 504.4);
        ctx.lineTo(195.1, 504.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(174, 174, 174)";
        ctx.fill();
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