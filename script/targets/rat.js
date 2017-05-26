var RatTarget = function(ctx) {
    var self = this;

    self.ctx = ctx;
    self.killCentre = { x: 660, y: 96 };
    self.targetHeight = 412;
    self.range = 0;
    self.scaling = 1;
    self.killSize = 0;
};

RatTarget.prototype = function(){

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

        // measure/Compound Path
        ctx.save();
        ctx.beginPath();

        // measure/Compound Path/Path
        ctx.moveTo(905.7, 201.5);
        ctx.bezierCurveTo(901.6, 195.1, 896.8, 190.0, 891.7, 184.2);
        ctx.bezierCurveTo(887.2, 179.1, 882.5, 175.9, 877.2, 171.8);
        ctx.bezierCurveTo(872.5, 168.2, 866.9, 164.1, 862.9, 159.9);
        ctx.bezierCurveTo(858.8, 155.6, 856.5, 152.5, 851.8, 148.9);
        ctx.bezierCurveTo(832.4, 133.7, 832.6, 106.5, 821.2, 86.2);
        ctx.bezierCurveTo(816.7, 78.1, 816.1, 72.3, 807.4, 63.0);
        ctx.bezierCurveTo(797.7, 52.6, 785.5, 43.4, 774.1, 34.7);
        ctx.bezierCurveTo(758.1, 22.6, 746.8, 19.2, 732.7, 12.1);
        ctx.bezierCurveTo(725.6, 8.5, 720.4, 8.3, 712.8, 6.4);
        ctx.bezierCurveTo(706.1, 4.7, 697.9, 4.8, 691.0, 4.4);
        ctx.bezierCurveTo(682.8, 4.0, 675.7, 3.3, 666.5, 3.8);
        ctx.bezierCurveTo(659.3, 4.2, 652.8, 5.3, 645.7, 5.9);
        ctx.bezierCurveTo(633.7, 7.0, 623.7, 9.2, 612.9, 14.9);
        ctx.bezierCurveTo(607.5, 17.8, 604.0, 23.2, 599.4, 27.2);
        ctx.bezierCurveTo(593.7, 32.3, 586.6, 32.0, 579.3, 30.1);
        ctx.bezierCurveTo(579.6, 27.6, 579.5, 28.1, 579.8, 24.8);
        ctx.bezierCurveTo(580.1, 21.3, 580.6, 18.0, 581.4, 14.8);
        ctx.bezierCurveTo(582.5, 10.0, 582.6, 3.7, 576.1, 2.9);
        ctx.bezierCurveTo(569.4, 2.0, 562.8, 7.1, 559.0, 11.5);
        ctx.bezierCurveTo(555.6, 15.5, 548.8, 20.4, 544.3, 14.8);
        ctx.bezierCurveTo(544.8, 9.1, 544.3, 11.8, 544.9, 8.0);
        ctx.bezierCurveTo(545.6, 4.1, 546.1, 2.9, 544.1, 1.5);
        ctx.bezierCurveTo(537.7, -3.3, 529.2, 10.9, 525.6, 13.4);
        ctx.bezierCurveTo(521.5, 16.3, 499.5, 17.2, 494.5, 17.2);
        ctx.bezierCurveTo(482.8, 17.1, 470.3, 21.6, 459.5, 26.0);
        ctx.bezierCurveTo(449.6, 30.1, 441.3, 34.8, 433.8, 42.7);
        ctx.bezierCurveTo(432.8, 43.7, 430.5, 46.9, 429.3, 47.5);
        ctx.bezierCurveTo(427.7, 48.3, 424.7, 48.2, 423.0, 49.2);
        ctx.bezierCurveTo(419.6, 51.1, 419.6, 55.8, 421.9, 58.3);
        ctx.bezierCurveTo(423.2, 59.7, 426.3, 59.3, 427.4, 60.6);
        ctx.bezierCurveTo(428.6, 62.1, 427.6, 63.1, 428.4, 64.8);
        ctx.bezierCurveTo(430.0, 68.2, 431.2, 70.7, 433.8, 73.6);
        ctx.bezierCurveTo(440.4, 80.6, 443.9, 82.4, 453.3, 83.0);
        ctx.bezierCurveTo(452.3, 89.5, 467.8, 90.3, 472.3, 91.5);
        ctx.bezierCurveTo(481.9, 94.0, 491.9, 97.0, 500.8, 101.1);
        ctx.bezierCurveTo(507.4, 104.2, 513.0, 110.8, 515.9, 117.6);
        ctx.bezierCurveTo(517.9, 122.1, 519.9, 127.8, 521.4, 132.5);
        ctx.bezierCurveTo(522.8, 137.3, 525.5, 139.4, 522.4, 142.8);
        ctx.bezierCurveTo(517.7, 148.1, 510.0, 149.8, 509.6, 157.7);
        ctx.bezierCurveTo(509.5, 162.3, 510.5, 166.7, 515.3, 166.0);
        ctx.bezierCurveTo(519.4, 165.4, 520.0, 160.4, 522.0, 156.8);
        ctx.bezierCurveTo(523.2, 154.5, 527.4, 152.9, 530.7, 152.5);
        ctx.bezierCurveTo(533.3, 152.2, 536.4, 155.2, 538.3, 156.7);
        ctx.bezierCurveTo(543.9, 161.0, 549.7, 163.5, 556.5, 166.1);
        ctx.bezierCurveTo(563.0, 168.7, 564.1, 169.9, 565.9, 169.0);
        ctx.bezierCurveTo(567.4, 180.1, 565.5, 179.1, 562.5, 186.1);
        ctx.bezierCurveTo(557.8, 189.1, 554.3, 190.6, 550.2, 191.6);
        ctx.bezierCurveTo(546.4, 192.6, 540.3, 192.3, 536.5, 193.1);
        ctx.bezierCurveTo(533.5, 193.8, 527.5, 196.0, 527.8, 199.7);
        ctx.bezierCurveTo(528.0, 203.1, 531.0, 203.9, 533.5, 203.7);
        ctx.bezierCurveTo(538.2, 203.2, 539.2, 199.5, 542.8, 202.8);
        ctx.bezierCurveTo(546.0, 205.7, 547.5, 206.9, 549.5, 207.7);
        ctx.lineTo(549.5, 322.1);
        ctx.lineTo(610.5, 322.1);
        ctx.lineTo(610.5, 366.1);
        ctx.lineTo(718.5, 366.1);
        ctx.lineTo(718.5, 322.1);
        ctx.lineTo(777.5, 322.1);
        ctx.lineTo(777.5, 268.4);
        ctx.bezierCurveTo(780.5, 268.3, 782.0, 268.1, 783.1, 268.2);
        ctx.bezierCurveTo(789.5, 268.8, 794.9, 268.4, 802.1, 267.6);
        ctx.bezierCurveTo(809.3, 266.8, 818.0, 266.0, 825.3, 265.8);
        ctx.bezierCurveTo(831.2, 265.7, 837.2, 265.5, 843.0, 264.3);
        ctx.bezierCurveTo(854.5, 262.0, 868.1, 257.2, 878.5, 251.7);
        ctx.bezierCurveTo(888.7, 246.4, 895.8, 238.5, 901.3, 228.9);
        ctx.bezierCurveTo(903.6, 225.0, 906.4, 222.0, 907.1, 217.6);
        ctx.bezierCurveTo(908.4, 208.9, 907.1, 203.7, 905.7, 201.5);
        ctx.closePath();

        // measure/Compound Path/Path
        ctx.moveTo(609.2, 190.2);
        ctx.bezierCurveTo(608.8, 207.1, 609.2, 181.0, 608.8, 207.1);
        ctx.lineTo(566.4, 207.1);
        ctx.bezierCurveTo(567.9, 205.1, 568.3, 202.2, 569.1, 200.0);
        ctx.bezierCurveTo(571.3, 193.7, 578.2, 182.5, 584.9, 181.5);
        ctx.bezierCurveTo(589.2, 180.9, 592.9, 183.0, 597.5, 181.1);
        ctx.bezierCurveTo(601.7, 179.4, 604.1, 181.1, 609.2, 181.0);
        ctx.bezierCurveTo(608.8, 207.1, 609.5, 181.4, 609.2, 190.2);
        ctx.closePath();

        // measure/Compound Path/Path
        ctx.moveTo(746.2, 192.8);
        ctx.bezierCurveTo(740.7, 192.6, 736.4, 193.3, 730.9, 193.0);
        ctx.bezierCurveTo(726.2, 192.6, 719.7, 194.0, 714.9, 193.7);
        ctx.bezierCurveTo(715.0, 189.6, 714.9, 187.2, 715.0, 181.5);
        ctx.bezierCurveTo(714.9, 181.0, 714.9, 180.7, 715.4, 180.9);
        ctx.bezierCurveTo(720.8, 180.0, 728.8, 180.9, 734.3, 182.0);
        ctx.bezierCurveTo(737.9, 182.8, 741.4, 183.6, 745.1, 184.1);
        ctx.bezierCurveTo(748.0, 184.5, 750.9, 183.2, 753.7, 183.6);
        ctx.bezierCurveTo(754.0, 189.9, 753.0, 193.2, 746.2, 192.8);
        ctx.closePath();

        // measure/Compound Path/Path
        ctx.moveTo(882.1, 224.2);
        ctx.bezierCurveTo(880.1, 227.6, 875.6, 232.6, 872.7, 235.3);
        ctx.bezierCurveTo(866.4, 241.3, 867.0, 239.3, 856.6, 245.2);
        ctx.bezierCurveTo(852.2, 247.7, 847.3, 248.9, 843.0, 250.6);
        ctx.bezierCurveTo(837.1, 253.0, 829.2, 254.2, 823.4, 254.4);
        ctx.bezierCurveTo(810.6, 254.9, 797.6, 256.0, 784.9, 256.7);
        ctx.bezierCurveTo(783.4, 256.7, 781.5, 256.6, 777.5, 256.5);
        ctx.lineTo(777.5, 207.1);
        ctx.lineTo(747.8, 207.1);
        ctx.bezierCurveTo(748.0, 206.1, 748.1, 206.4, 748.5, 206.1);
        ctx.bezierCurveTo(750.2, 204.4, 751.3, 205.3, 753.8, 205.0);
        ctx.bezierCurveTo(761.3, 203.9, 768.1, 197.7, 773.7, 192.9);
        ctx.bezierCurveTo(776.4, 190.7, 778.9, 187.2, 781.9, 185.8);
        ctx.bezierCurveTo(786.3, 183.8, 792.1, 184.7, 796.6, 185.5);
        ctx.bezierCurveTo(806.6, 187.4, 815.8, 189.5, 824.9, 189.1);
        ctx.bezierCurveTo(831.0, 188.8, 836.5, 186.5, 842.5, 185.5);
        ctx.bezierCurveTo(846.2, 184.9, 851.4, 184.1, 855.6, 184.3);
        ctx.bezierCurveTo(863.2, 184.7, 874.7, 191.7, 880.2, 197.0);
        ctx.bezierCurveTo(888.9, 205.5, 887.6, 215.3, 882.1, 224.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(192, 38, 44)";
        ctx.fill();
        ctx.strokeStyle = "rgb(1, 1, 1)";
        ctx.stroke();

        // measure/Group

        // measure/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(761.0, 382.2);
        ctx.lineTo(749.1, 382.2);
        ctx.lineTo(749.1, 375.6);
        ctx.lineTo(761.0, 375.6);
        ctx.lineTo(761.0, 382.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();

        // measure/Group/Path
        ctx.beginPath();
        ctx.moveTo(761.0, 361.1);
        ctx.lineTo(749.1, 361.1);
        ctx.lineTo(749.1, 351.9);
        ctx.lineTo(761.0, 351.9);
        ctx.lineTo(761.0, 361.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();

        // measure/Group/Path
        ctx.beginPath();
        ctx.moveTo(761.0, 375.6);
        ctx.lineTo(750.0, 375.6);
        ctx.lineTo(750.0, 359.6);
        ctx.lineTo(761.0, 359.6);
        ctx.lineTo(761.0, 375.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();

        // measure/Group/Path
        ctx.beginPath();
        ctx.moveTo(579.0, 372.6);
        ctx.lineTo(563.0, 372.6);
        ctx.lineTo(563.0, 360.6);
        ctx.lineTo(579.0, 360.6);
        ctx.lineTo(579.0, 372.6);
        ctx.closePath();
        gradient = ctx.createLinearGradient(571.0, 372.1, 571.0, 359.0);
        gradient.addColorStop(0.00, "rgb(100, 100, 100)");
        gradient.addColorStop(0.33, "rgb(76, 76, 76)");
        gradient.addColorStop(0.98, "rgb(178, 178, 178)");
        ctx.fillStyle = gradient;
        ctx.fill();

        // measure/Group/Path
        ctx.beginPath();
        ctx.moveTo(587.7, 382.2);
        ctx.lineTo(575.8, 382.2);
        ctx.lineTo(575.8, 374.1);
        ctx.lineTo(587.7, 374.1);
        ctx.lineTo(587.7, 382.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();

        // measure/Group/Path
        ctx.beginPath();
        ctx.moveTo(587.7, 361.1);
        ctx.lineTo(575.8, 361.1);
        ctx.lineTo(575.8, 351.9);
        ctx.lineTo(587.7, 351.9);
        ctx.lineTo(587.7, 361.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();

        // measure/Group/Path
        ctx.beginPath();
        ctx.moveTo(589.0, 375.6);
        ctx.lineTo(576.0, 375.6);
        ctx.lineTo(576.0, 356.6);
        ctx.lineTo(589.0, 356.6);
        ctx.lineTo(589.0, 375.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();

        // measure/Group/Path
        ctx.beginPath();
        ctx.moveTo(742.0, 410.6);
        ctx.lineTo(596.0, 410.6);
        ctx.lineTo(596.0, 392.6);
        ctx.lineTo(742.0, 392.6);
        ctx.lineTo(742.0, 410.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(152, 152, 152)";
        ctx.fill();

        // measure/Group/Path
        ctx.beginPath();
        ctx.moveTo(830.0, 412.6);
        ctx.lineTo(511.0, 412.6);
        ctx.lineTo(511.0, 403.6);
        ctx.lineTo(830.0, 403.6);
        ctx.lineTo(830.0, 412.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(90, 89, 89)";
        ctx.fill();

        // measure/Group/Path
        ctx.save();
        ctx.shadowColor = "rgba(0, 0, 0, 0.76)";
        ctx.shadowOffsetX = 0.0;
        ctx.shadowOffsetY = -3.0;
        ctx.shadowBlur = 6.0;
        ctx.beginPath();
        ctx.moveTo(588.4, 340.0);
        ctx.lineTo(588.4, 396.7);
        ctx.lineTo(748.5, 396.7);
        ctx.lineTo(748.5, 340.0);
        ctx.lineTo(588.4, 340.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(174, 174, 174)";
        ctx.fill();
        ctx.restore();



        /* Draw Killzone */
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 4.0;
        ctx.arc(self.killCentre.x,self.killCentre.y,(46/40)*(killsize+1),0,2*Math.PI);
        ctx.stroke();
        ctx.fillStyle = "rgb(255, 255, 163)";
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    };


    var _drawPelletStrike = function(xposmm, yposmm){
        var self = this;
        var ctx = self.ctx;

        var pelletRadius =  2.5*(46/20);

        var xpos = self.killCentre.x + (xposmm*(46/20)*-1);
        var ypos = self.killCentre.y + (yposmm*(46/20)*-1);

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
