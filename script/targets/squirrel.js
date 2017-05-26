var SquirrelTarget = function(ctx) {
    var self = this;

    self.ctx = ctx;
    self.killCentre = { x: 211, y: 271 };
    self.targetHeight = 597;
    self.range = 0;
    self.scaling = 1;
    self.killSize = 0;
};

SquirrelTarget.prototype = function(){

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


        // basePlate/Live Paint/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(417.1, 107.6);
        ctx.bezierCurveTo(417.3, 108.3, 419.6, 121.4, 419.0, 125.4);
        ctx.bezierCurveTo(417.8, 134.4, 412.0, 149.1, 404.0, 153.7);
        ctx.bezierCurveTo(372.3, 141.7, 353.7, 162.0, 356.5, 201.2);
        ctx.bezierCurveTo(358.9, 235.5, 372.5, 273.7, 373.5, 309.8);
        ctx.bezierCurveTo(375.4, 378.2, 358.3, 448.5, 326.0, 488.1);
        ctx.bezierCurveTo(309.6, 508.0, 299.3, 521.3, 275.6, 528.6);
        ctx.lineTo(275.6, 528.6);
        ctx.bezierCurveTo(270.4, 529.3, 253.8, 528.7, 248.5, 529.1);
        ctx.bezierCurveTo(239.8, 529.7, 231.3, 528.8, 222.6, 528.9);
        ctx.bezierCurveTo(209.2, 529.0, 195.6, 528.0, 182.3, 528.0);
        ctx.bezierCurveTo(171.7, 528.0, 161.9, 527.3, 151.7, 527.7);
        ctx.bezierCurveTo(146.4, 527.9, 140.7, 527.9, 135.4, 527.9);
        ctx.bezierCurveTo(131.5, 527.9, 128.6, 520.0, 126.4, 516.9);
        ctx.bezierCurveTo(123.4, 512.5, 120.2, 508.2, 116.9, 504.0);
        ctx.bezierCurveTo(109.9, 495.2, 102.6, 486.7, 95.6, 478.0);
        ctx.bezierCurveTo(76.4, 454.2, 56.2, 424.3, 70.9, 393.1);
        ctx.bezierCurveTo(83.6, 381.6, 109.1, 385.6, 118.0, 397.2);
        ctx.bezierCurveTo(112.5, 373.3, 97.3, 359.1, 92.5, 334.4);
        ctx.bezierCurveTo(73.6, 320.8, 58.1, 306.4, 46.7, 280.1);
        ctx.bezierCurveTo(39.9, 264.4, 38.8, 241.6, 28.0, 234.3);
        ctx.bezierCurveTo(21.6, 229.9, 13.4, 233.3, 7.7, 229.2);
        ctx.bezierCurveTo(2.2, 225.6, -2.3, 217.0, 4.2, 212.2);
        ctx.bezierCurveTo(37.0, 184.6, 77.1, 224.1, 94.2, 244.4);
        ctx.bezierCurveTo(101.4, 215.8, 142.4, 195.1, 107.8, 174.9);
        ctx.bezierCurveTo(89.8, 164.3, 55.6, 158.6, 41.6, 142.6);
        ctx.bezierCurveTo(41.9, 136.6, 52.0, 140.5, 51.8, 134.1);
        ctx.bezierCurveTo(38.5, 127.6, 25.3, 121.0, 21.3, 105.2);
        ctx.bezierCurveTo(56.3, 73.5, 95.5, 46.0, 153.7, 37.4);
        ctx.bezierCurveTo(158.0, 24.1, 157.5, 5.2, 171.1, 1.2);
        ctx.bezierCurveTo(176.9, -0.1, 182.9, 5.3, 185.9, 8.5);
        ctx.bezierCurveTo(190.9, 14.5, 184.4, 27.4, 187.6, 37.4);
        ctx.bezierCurveTo(189.9, 44.3, 201.4, 48.3, 208.0, 56.0);
        ctx.bezierCurveTo(226.6, 77.8, 223.4, 116.2, 235.1, 140.9);
        ctx.bezierCurveTo(243.0, 157.6, 262.7, 169.5, 274.2, 178.2);
        ctx.bezierCurveTo(277.1, 142.4, 267.7, 114.7, 284.4, 90.0);
        ctx.bezierCurveTo(289.9, 81.8, 297.4, 75.1, 306.1, 70.4);
        ctx.bezierCurveTo(314.8, 65.6, 324.5, 62.8, 334.3, 61.6);
        ctx.bezierCurveTo(344.3, 60.4, 354.5, 60.8, 364.3, 62.9);
        ctx.bezierCurveTo(373.9, 64.9, 383.2, 68.5, 391.5, 73.7);
        ctx.bezierCurveTo(399.3, 78.6, 406.3, 85.1, 411.1, 93.1);
        ctx.bezierCurveTo(412.8, 96.0, 415.9, 104.2, 417.1, 107.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(192, 38, 44)";
        ctx.fill();

        // basePlate/Live Paint/Group
        ctx.restore();

        // basePlate/Live Paint/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(275.6, 528.6);
        ctx.bezierCurveTo(270.4, 529.3, 253.8, 528.7, 248.5, 529.1);
        ctx.bezierCurveTo(239.8, 529.7, 231.3, 528.8, 222.6, 528.9);
        ctx.bezierCurveTo(209.2, 529.0, 195.6, 528.0, 182.3, 528.0);
        ctx.bezierCurveTo(171.7, 528.0, 161.9, 527.3, 151.7, 527.7);
        ctx.bezierCurveTo(146.4, 527.9, 140.7, 527.9, 135.4, 527.9);
        ctx.bezierCurveTo(131.5, 527.9, 128.6, 520.0, 126.4, 516.9);
        ctx.bezierCurveTo(123.4, 512.5, 120.2, 508.2, 116.9, 504.0);
        ctx.bezierCurveTo(109.9, 495.2, 102.6, 486.7, 95.6, 478.0);
        ctx.bezierCurveTo(76.4, 454.2, 56.2, 424.3, 70.9, 393.1);
        ctx.bezierCurveTo(83.6, 381.6, 109.1, 385.6, 118.0, 397.2);
        ctx.bezierCurveTo(112.5, 373.3, 97.3, 359.1, 92.5, 334.4);
        ctx.bezierCurveTo(73.6, 320.8, 58.1, 306.4, 46.7, 280.1);
        ctx.bezierCurveTo(39.9, 264.4, 38.8, 241.6, 28.0, 234.3);
        ctx.bezierCurveTo(21.6, 229.9, 13.4, 233.3, 7.7, 229.2);
        ctx.bezierCurveTo(2.2, 225.6, -2.3, 217.0, 4.2, 212.2);
        ctx.lineWidth = 2.0;
        ctx.stroke();

        // basePlate/Live Paint/Group/Path
        ctx.beginPath();
        ctx.moveTo(419.0, 125.4);
        ctx.bezierCurveTo(417.8, 134.4, 412.0, 149.1, 404.0, 153.7);
        ctx.bezierCurveTo(372.3, 141.7, 353.7, 162.0, 356.5, 201.2);
        ctx.bezierCurveTo(358.9, 235.5, 372.5, 273.7, 373.5, 309.8);
        ctx.bezierCurveTo(375.4, 378.2, 358.3, 448.5, 326.0, 488.1);
        ctx.bezierCurveTo(309.6, 508.0, 299.3, 521.3, 275.6, 528.6);
        ctx.lineTo(275.6, 528.6);
        ctx.bezierCurveTo(275.4, 528.7, 275.2, 528.8, 275.0, 528.8);
        ctx.stroke();

        // basePlate/Live Paint/Group/Path
        ctx.beginPath();
        ctx.moveTo(417.1, 107.6);
        ctx.bezierCurveTo(417.3, 108.3, 419.6, 121.4, 419.0, 125.4);
        ctx.stroke();

        // basePlate/Live Paint/Group/Path
        ctx.beginPath();
        ctx.moveTo(171.1, 1.2);
        ctx.bezierCurveTo(176.9, -0.1, 182.9, 5.3, 185.9, 8.5);
        ctx.bezierCurveTo(190.9, 14.5, 184.4, 27.4, 187.6, 37.4);
        ctx.bezierCurveTo(189.9, 44.3, 201.4, 48.3, 208.0, 56.0);
        ctx.bezierCurveTo(226.6, 77.8, 223.4, 116.2, 235.1, 140.9);
        ctx.bezierCurveTo(243.0, 157.6, 262.7, 169.5, 274.2, 178.2);
        ctx.bezierCurveTo(277.1, 142.4, 267.7, 114.7, 284.4, 90.0);
        ctx.bezierCurveTo(289.9, 81.8, 297.4, 75.1, 306.1, 70.4);
        ctx.bezierCurveTo(314.8, 65.6, 324.5, 62.8, 334.3, 61.6);
        ctx.bezierCurveTo(344.3, 60.4, 354.5, 60.8, 364.3, 62.9);
        ctx.bezierCurveTo(373.9, 64.9, 383.2, 68.5, 391.5, 73.7);
        ctx.bezierCurveTo(399.3, 78.6, 406.3, 85.1, 411.1, 93.1);
        ctx.bezierCurveTo(412.8, 96.0, 415.9, 104.2, 417.1, 107.6);
        ctx.bezierCurveTo(417.2, 107.6, 417.2, 107.7, 417.2, 107.8);
        ctx.stroke();

        // basePlate/Live Paint/Group/Path
        ctx.beginPath();
        ctx.moveTo(171.1, 1.2);
        ctx.bezierCurveTo(157.5, 5.2, 158.0, 24.1, 153.7, 37.4);
        ctx.bezierCurveTo(95.5, 46.0, 56.3, 73.5, 21.3, 105.2);
        ctx.bezierCurveTo(25.3, 121.0, 38.5, 127.6, 51.8, 134.1);
        ctx.bezierCurveTo(52.0, 140.5, 41.9, 136.6, 41.6, 142.6);
        ctx.bezierCurveTo(55.6, 158.6, 89.8, 164.3, 107.8, 174.9);
        ctx.bezierCurveTo(142.4, 195.1, 101.4, 215.8, 94.2, 244.4);
        ctx.bezierCurveTo(77.1, 224.1, 37.0, 184.6, 4.2, 212.2);
        ctx.stroke();

        // basePlate/Path
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(300.3, 568.5);
        ctx.lineTo(288.4, 568.5);
        ctx.lineTo(288.4, 561.9);
        ctx.lineTo(300.3, 561.9);
        ctx.lineTo(300.3, 568.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();

        // basePlate/Path
        ctx.beginPath();
        ctx.moveTo(300.3, 547.4);
        ctx.lineTo(288.4, 547.4);
        ctx.lineTo(288.4, 538.1);
        ctx.lineTo(300.3, 538.1);
        ctx.lineTo(300.3, 547.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();

        // basePlate/Path
        ctx.beginPath();
        ctx.moveTo(300.3, 561.9);
        ctx.lineTo(289.3, 561.9);
        ctx.lineTo(289.3, 545.9);
        ctx.lineTo(300.3, 545.9);
        ctx.lineTo(300.3, 561.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();

        // basePlate/Path
        ctx.beginPath();
        ctx.moveTo(118.3, 558.9);
        ctx.lineTo(102.3, 558.9);
        ctx.lineTo(102.3, 546.9);
        ctx.lineTo(118.3, 546.9);
        ctx.lineTo(118.3, 558.9);
        ctx.closePath();
        var gradient = ctx.createLinearGradient(110.3, 558.4, 110.3, 545.3);
        gradient.addColorStop(0.00, "rgb(100, 100, 100)");
        gradient.addColorStop(0.33, "rgb(76, 76, 76)");
        gradient.addColorStop(0.98, "rgb(178, 178, 178)");
        ctx.fillStyle = gradient;
        ctx.fill();

        // basePlate/Path
        ctx.beginPath();
        ctx.moveTo(127.0, 568.5);
        ctx.lineTo(115.1, 568.5);
        ctx.lineTo(115.1, 560.4);
        ctx.lineTo(127.0, 560.4);
        ctx.lineTo(127.0, 568.5);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();

        // basePlate/Path
        ctx.beginPath();
        ctx.moveTo(127.0, 547.4);
        ctx.lineTo(115.1, 547.4);
        ctx.lineTo(115.1, 538.1);
        ctx.lineTo(127.0, 538.1);
        ctx.lineTo(127.0, 547.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();

        // basePlate/Path
        ctx.beginPath();
        ctx.moveTo(128.3, 561.9);
        ctx.lineTo(115.3, 561.9);
        ctx.lineTo(115.3, 542.9);
        ctx.lineTo(128.3, 542.9);
        ctx.lineTo(128.3, 561.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();

        // basePlate/Path
        ctx.beginPath();
        ctx.moveTo(281.3, 596.9);
        ctx.lineTo(135.3, 596.9);
        ctx.lineTo(135.3, 578.9);
        ctx.lineTo(281.3, 578.9);
        ctx.lineTo(281.3, 596.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(152, 152, 152)";
        ctx.fill();

        // basePlate/Path
        ctx.beginPath();
        ctx.moveTo(369.3, 598.9);
        ctx.lineTo(50.3, 598.9);
        ctx.lineTo(50.3, 589.9);
        ctx.lineTo(369.3, 589.9);
        ctx.lineTo(369.3, 598.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(90, 89, 89)";
        ctx.fill();

        // basePlate/Path
        ctx.save();
        ctx.shadowColor = "rgba(0, 0, 0, 0.76)";
        ctx.shadowOffsetX = 0.0;
        ctx.shadowOffsetY = -3.0;
        ctx.shadowBlur = 6.0;
        ctx.beginPath();
        ctx.moveTo(127.7, 526.3);
        ctx.lineTo(127.7, 583.0);
        ctx.lineTo(287.8, 583.0);
        ctx.lineTo(287.8, 526.3);
        ctx.lineTo(127.7, 526.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(174, 174, 174)";
        ctx.fill();

        // basePlate/Nut
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
