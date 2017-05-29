var GamoSquirrelTarget = function(ctx) {
    var self = this;

    self.ctx = ctx;
    self.killCentre = { x: 224, y: 212 };
    self.targetHeight = 580;
    self.range = 0;
    self.scaling = 1;
    self.killSize = 0;
};

GamoSquirrelTarget.prototype = function(){

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

        // layer15/Compound Path
        ctx.save();
        ctx.beginPath();

        // layer15/Compound Path/Path
        ctx.moveTo(453.9, 239.0);
        ctx.bezierCurveTo(451.5, 236.3, 446.1, 235.3, 447.2, 230.7);
        ctx.bezierCurveTo(448.2, 226.6, 445.4, 224.1, 442.4, 221.6);
        ctx.bezierCurveTo(438.9, 218.5, 436.1, 220.0, 431.9, 220.0);
        ctx.bezierCurveTo(427.4, 220.1, 425.2, 217.1, 420.4, 219.5);
        ctx.bezierCurveTo(417.4, 221.1, 416.8, 224.4, 414.1, 226.2);
        ctx.bezierCurveTo(411.4, 228.0, 406.9, 228.4, 403.7, 228.8);
        ctx.bezierCurveTo(394.5, 230.2, 385.2, 230.4, 375.9, 229.7);
        ctx.bezierCurveTo(368.7, 229.2, 363.5, 227.7, 365.0, 219.2);
        ctx.bezierCurveTo(365.9, 213.4, 367.9, 194.3, 376.3, 195.6);
        ctx.bezierCurveTo(386.5, 197.2, 395.6, 201.2, 406.3, 201.2);
        ctx.bezierCurveTo(410.4, 201.2, 414.6, 199.8, 418.8, 200.2);
        ctx.bezierCurveTo(424.8, 200.7, 426.8, 204.5, 433.3, 200.8);
        ctx.bezierCurveTo(438.0, 198.1, 437.3, 193.3, 441.1, 190.4);
        ctx.bezierCurveTo(444.0, 188.1, 448.1, 191.3, 451.1, 189.3);
        ctx.bezierCurveTo(456.6, 185.6, 449.9, 166.9, 449.0, 161.7);
        ctx.bezierCurveTo(445.2, 140.7, 437.4, 120.4, 423.1, 104.2);
        ctx.bezierCurveTo(418.0, 98.4, 411.1, 94.4, 404.6, 90.3);
        ctx.bezierCurveTo(399.5, 87.1, 390.7, 83.4, 387.4, 78.0);
        ctx.bezierCurveTo(383.3, 71.5, 384.2, 62.8, 379.9, 56.0);
        ctx.bezierCurveTo(376.5, 50.6, 365.6, 36.9, 359.5, 45.1);
        ctx.bezierCurveTo(354.5, 51.9, 353.9, 60.3, 343.8, 52.3);
        ctx.bezierCurveTo(341.7, 50.7, 340.2, 46.7, 337.1, 47.0);
        ctx.bezierCurveTo(332.8, 47.3, 327.9, 49.4, 326.9, 53.9);
        ctx.bezierCurveTo(326.0, 57.5, 324.2, 60.3, 324.5, 64.2);
        ctx.bezierCurveTo(324.8, 69.1, 326.3, 73.9, 326.7, 78.8);
        ctx.bezierCurveTo(327.0, 82.2, 327.6, 86.2, 327.4, 89.5);
        ctx.bezierCurveTo(327.0, 94.6, 322.0, 94.4, 318.8, 96.8);
        ctx.bezierCurveTo(315.2, 99.4, 310.9, 100.5, 307.6, 103.5);
        ctx.bezierCurveTo(303.9, 106.9, 300.6, 110.7, 296.4, 113.5);
        ctx.bezierCurveTo(288.0, 119.1, 274.7, 120.0, 265.0, 119.3);
        ctx.bezierCurveTo(241.9, 117.6, 221.3, 115.6, 199.0, 123.5);
        ctx.bezierCurveTo(157.4, 138.2, 126.4, 174.6, 120.4, 218.4);
        ctx.bezierCurveTo(117.0, 243.1, 119.7, 270.5, 125.7, 294.7);
        ctx.bezierCurveTo(126.9, 299.3, 127.7, 304.2, 129.2, 308.6);
        ctx.bezierCurveTo(131.2, 314.4, 134.6, 319.5, 135.6, 325.6);
        ctx.bezierCurveTo(137.1, 334.2, 128.5, 337.5, 122.4, 332.4);
        ctx.bezierCurveTo(113.5, 324.8, 106.7, 311.4, 101.9, 300.9);
        ctx.bezierCurveTo(87.0, 268.1, 86.5, 231.3, 93.6, 196.7);
        ctx.bezierCurveTo(97.3, 178.4, 101.9, 159.4, 110.2, 142.5);
        ctx.bezierCurveTo(114.5, 133.8, 120.1, 126.0, 123.8, 117.0);
        ctx.bezierCurveTo(127.4, 108.3, 129.5, 99.2, 132.5, 90.3);
        ctx.bezierCurveTo(135.5, 81.0, 139.6, 71.9, 141.2, 62.2);
        ctx.bezierCurveTo(143.1, 50.8, 140.9, 39.4, 139.1, 28.2);
        ctx.bezierCurveTo(138.3, 22.5, 137.1, 17.0, 134.0, 12.1);
        ctx.bezierCurveTo(132.0, 9.1, 126.8, 0.3, 122.3, 0.5);
        ctx.bezierCurveTo(107.3, 1.1, 90.0, 8.5, 77.7, 17.0);
        ctx.bezierCurveTo(70.5, 21.9, 64.8, 29.2, 58.6, 35.4);
        ctx.bezierCurveTo(51.5, 42.5, 46.0, 50.2, 40.8, 58.8);
        ctx.bezierCurveTo(17.9, 96.5, 7.1, 138.1, 2.0, 181.6);
        ctx.bezierCurveTo(-7.9, 266.3, 30.6, 363.0, 110.9, 400.1);
        ctx.bezierCurveTo(113.8, 401.5, 123.9, 408.5, 117.8, 411.9);
        ctx.bezierCurveTo(111.9, 415.1, 103.0, 414.6, 96.4, 414.7);
        ctx.bezierCurveTo(96.5, 420.3, 96.0, 461.0, 98.6, 461.0);
        ctx.bezierCurveTo(112.3, 461.0, 126.0, 460.9, 139.7, 460.9);
        ctx.bezierCurveTo(192.7, 460.7, 245.7, 460.5, 298.6, 460.3);
        ctx.bezierCurveTo(319.7, 460.2, 340.7, 460.1, 361.7, 460.0);
        ctx.bezierCurveTo(361.4, 450.1, 361.1, 440.1, 360.8, 430.1);
        ctx.bezierCurveTo(360.7, 425.2, 360.5, 420.2, 360.4, 415.2);
        ctx.bezierCurveTo(360.3, 411.5, 353.9, 412.4, 350.8, 411.9);
        ctx.bezierCurveTo(345.6, 411.1, 344.2, 405.8, 339.8, 402.4);
        ctx.bezierCurveTo(332.1, 396.6, 320.6, 397.2, 311.5, 396.2);
        ctx.bezierCurveTo(303.7, 395.3, 290.9, 397.1, 284.3, 392.1);
        ctx.bezierCurveTo(281.6, 390.0, 276.8, 388.6, 277.0, 384.4);
        ctx.bezierCurveTo(277.4, 379.7, 279.5, 373.6, 281.5, 369.4);
        ctx.bezierCurveTo(286.3, 359.1, 290.3, 351.1, 291.6, 339.6);
        ctx.bezierCurveTo(292.8, 330.0, 292.8, 320.1, 292.7, 310.5);
        ctx.bezierCurveTo(292.5, 301.9, 290.8, 293.3, 287.8, 285.3);
        ctx.bezierCurveTo(285.5, 279.2, 284.3, 272.8, 291.2, 269.8);
        ctx.bezierCurveTo(298.9, 266.5, 301.3, 281.2, 303.7, 285.7);
        ctx.bezierCurveTo(307.3, 292.5, 313.2, 292.0, 320.0, 292.4);
        ctx.bezierCurveTo(329.1, 292.9, 337.5, 289.6, 346.3, 287.3);
        ctx.bezierCurveTo(355.4, 285.0, 363.8, 282.3, 372.1, 277.6);
        ctx.bezierCurveTo(377.5, 274.5, 382.1, 270.7, 387.3, 267.2);
        ctx.bezierCurveTo(392.7, 263.6, 399.7, 262.8, 406.1, 261.7);
        ctx.bezierCurveTo(415.9, 259.9, 425.2, 267.3, 434.0, 270.8);
        ctx.bezierCurveTo(436.8, 271.9, 439.5, 273.0, 441.8, 270.1);
        ctx.bezierCurveTo(443.6, 267.7, 441.5, 267.2, 441.7, 264.7);
        ctx.bezierCurveTo(442.4, 257.9, 448.5, 264.2, 449.9, 257.5);
        ctx.bezierCurveTo(450.6, 254.4, 443.9, 249.4, 451.3, 248.6);
        ctx.bezierCurveTo(457.6, 248.0, 457.8, 243.3, 453.9, 239.0);
        ctx.closePath();

        // layer15/Compound Path/Path
        ctx.moveTo(136.1, 449.7);
        ctx.bezierCurveTo(120.1, 449.7, 120.1, 425.1, 136.1, 425.1);
        ctx.bezierCurveTo(152.1, 425.1, 152.1, 449.7, 136.1, 449.7);
        ctx.closePath();

        // layer15/Compound Path/Path
        ctx.moveTo(319.1, 424.2);
        ctx.bezierCurveTo(336.1, 424.2, 336.1, 448.9, 319.1, 448.9);
        ctx.bezierCurveTo(305.1, 448.9, 305.1, 424.2, 319.1, 424.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(192, 38, 44)";
        ctx.fill();
        ctx.strokeStyle = "rgb(1, 1, 1)";
        ctx.stroke();
        ctx.restore();

        // basePlate/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(308.6, 531.8);
        ctx.lineTo(149.6, 531.8);
        ctx.lineTo(149.6, 518.8);
        ctx.lineTo(308.6, 518.8);
        ctx.lineTo(308.6, 531.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(6, 6, 6)";
        ctx.fill();

        // basePlate/Path
        ctx.save();
        ctx.shadowColor = "rgba(0, 0, 0, 0.76)";
        ctx.shadowOffsetX = 0.0;
        ctx.shadowOffsetY = -2.8;
        ctx.shadowBlur = 5.6;
        ctx.beginPath();
        ctx.moveTo(143.9, 460.2);
        ctx.lineTo(143.9, 519.9);
        ctx.lineTo(312.5, 519.9);
        ctx.lineTo(312.5, 460.2);
        ctx.lineTo(143.9, 460.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(1, 1, 1)";
        ctx.fill();

        // basePlate/Path
        ctx.restore();
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(440.6, 580.8);
        ctx.lineTo(5.6, 580.8);
        ctx.lineTo(5.6, 526.8);
        ctx.lineTo(440.6, 526.8);
        ctx.lineTo(440.6, 580.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(90, 89, 89)";
        ctx.fill();
        ctx.restore();

        // basePlate/Nut

        // basePlate/Nut/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(325.7, 504.6);
        ctx.lineTo(313.2, 504.6);
        ctx.lineTo(313.2, 497.7);
        ctx.lineTo(325.7, 497.7);
        ctx.lineTo(325.7, 504.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();

        // basePlate/Nut/Path
        ctx.beginPath();
        ctx.moveTo(325.7, 482.4);
        ctx.lineTo(313.2, 482.4);
        ctx.lineTo(313.2, 472.7);
        ctx.lineTo(325.7, 472.7);
        ctx.lineTo(325.7, 482.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();

        // basePlate/Nut/Path
        ctx.beginPath();
        ctx.moveTo(325.6, 497.8);
        ctx.lineTo(312.6, 497.8);
        ctx.lineTo(312.6, 481.8);
        ctx.lineTo(325.6, 481.8);
        ctx.lineTo(325.6, 497.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();

        // basePlate/Nut and Bolt
        ctx.restore();

        // basePlate/Nut and Bolt/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(135.6, 495.8);
        ctx.lineTo(127.6, 495.8);
        ctx.lineTo(127.6, 481.8);
        ctx.lineTo(135.6, 481.8);
        ctx.lineTo(135.6, 495.8);
        ctx.closePath();
        gradient = ctx.createLinearGradient(131.6, 495.2, 131.6, 479.9);
        gradient.addColorStop(0.00, "rgb(100, 100, 100)");
        gradient.addColorStop(0.33, "rgb(76, 76, 76)");
        gradient.addColorStop(0.98, "rgb(178, 178, 178)");
        ctx.fillStyle = gradient;
        ctx.fill();

        // basePlate/Nut and Bolt/Path
        ctx.beginPath();
        ctx.moveTo(143.2, 504.6);
        ctx.lineTo(130.7, 504.6);
        ctx.lineTo(130.7, 496.1);
        ctx.lineTo(143.2, 496.1);
        ctx.lineTo(143.2, 504.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(67, 66, 66)";
        ctx.fill();

        // basePlate/Nut and Bolt/Path
        ctx.beginPath();
        ctx.moveTo(143.2, 482.4);
        ctx.lineTo(130.7, 482.4);
        ctx.lineTo(130.7, 472.7);
        ctx.lineTo(143.2, 472.7);
        ctx.lineTo(143.2, 482.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(131, 130, 130)";
        ctx.fill();

        // basePlate/Nut and Bolt/Path
        ctx.beginPath();
        ctx.moveTo(144.6, 497.8);
        ctx.lineTo(131.6, 497.8);
        ctx.lineTo(131.6, 477.8);
        ctx.lineTo(144.6, 477.8);
        ctx.lineTo(144.6, 497.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(200, 198, 198)";
        ctx.fill();

        // basePlate/Nut and Bolt/Path
        ctx.beginPath();
        ctx.moveTo(204.1, 485.3);
        ctx.lineWidth = 2.8;
        ctx.strokeStyle = "rgb(39, 38, 37)";
        ctx.lineJoin = "miter";
        ctx.miterLimit = 1.0;
        ctx.stroke();

        // basePlate/Nut and Bolt/Path
        ctx.beginPath();
        ctx.moveTo(201.2, 493.7);
        ctx.stroke();

        // basePlate/Nut and Bolt/Path
        ctx.beginPath();
        ctx.moveTo(204.1, 485.3);
        ctx.stroke();

        // basePlate/Nut and Bolt/Path
        ctx.beginPath();
        ctx.moveTo(207.5, 493.7);
        ctx.stroke();

        // basePlate/Layer 13
        ctx.restore();

        // basePlate/Layer 13/
//        ctx.save();

        // basePlate/Layer 12
 //       ctx.restore();

        // basePlate/Layer 12/Group
  //      ctx.save();

        // basePlate/Layer 12/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(147.5, 436.8);
        ctx.bezierCurveTo(147.5, 429.9, 141.9, 424.3, 135.0, 424.3);
        ctx.bezierCurveTo(128.1, 424.3, 122.6, 429.9, 122.6, 436.8);
        ctx.bezierCurveTo(122.6, 443.7, 128.1, 449.2, 135.0, 449.2);
        ctx.bezierCurveTo(141.9, 449.2, 147.5, 443.7, 147.5, 436.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(98, 98, 97)";
        ctx.fill();

        // basePlate/Layer 12/Group/Path
        ctx.beginPath();
        ctx.moveTo(142.4, 443.1);
        ctx.lineTo(133.9, 446.3);
        ctx.lineTo(126.9, 440.3);
        ctx.lineTo(128.4, 431.3);
        ctx.lineTo(136.9, 428.2);
        ctx.lineTo(143.9, 434.1);
        ctx.lineTo(142.4, 443.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(21, 21, 21)";
        ctx.fill();

        // basePlate/Layer 12 copy
        ctx.restore();
//        ctx.restore();

        // basePlate/Layer 12 copy/Group
        ctx.save();

        // basePlate/Layer 12 copy/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(333.2, 436.3);
        ctx.bezierCurveTo(333.2, 429.5, 327.7, 424.0, 320.9, 424.0);
        ctx.bezierCurveTo(314.1, 424.0, 308.6, 429.5, 308.6, 436.3);
        ctx.bezierCurveTo(308.6, 443.1, 314.1, 448.6, 320.9, 448.6);
        ctx.bezierCurveTo(327.7, 448.6, 333.2, 443.1, 333.2, 436.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(98, 98, 97)";
        ctx.fill();

        // basePlate/Layer 12 copy/Group/Path
        ctx.beginPath();
        ctx.moveTo(328.2, 442.6);
        ctx.lineTo(319.8, 445.7);
        ctx.lineTo(312.9, 439.8);
        ctx.lineTo(314.4, 430.9);
        ctx.lineTo(322.8, 427.8);
        ctx.lineTo(329.7, 433.7);
        ctx.lineTo(328.2, 442.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(21, 21, 21)";
        ctx.fill();
        ctx.restore();
//        ctx.restore();
//        ctx.restore();

        // stickyLabel/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(412.1, 575.3);
        ctx.lineTo(35.1, 575.3);
        ctx.lineTo(35.1, 534.3);
        ctx.lineTo(412.1, 534.3);
        ctx.lineTo(412.1, 575.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
        ctx.stroke();

        // stickyLabel/Warning

        // stickyLabel/Warning/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(117.6, 547.8);
        ctx.lineTo(40.6, 547.8);
        ctx.lineTo(40.6, 539.8);
        ctx.lineTo(117.6, 539.8);
        ctx.lineTo(117.6, 547.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 158, 83)";
        ctx.fill();

        // stickyLabel/Warning/WARNING
        ctx.font = "8.0px 'Arial Black'";
        ctx.save();
        ctx.transform(1.145, 0.000, 0.000, 1.000, 55.1, 547.0);
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fillText("WARNING :", 0, 0);
        ctx.restore();

        // stickyLabel/Warning/Group

        // stickyLabel/Warning/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(50.9, 547.2);
        ctx.lineTo(47.0, 540.2);
        ctx.bezierCurveTo(46.9, 540.1, 46.8, 540.1, 46.7, 540.1);
        ctx.bezierCurveTo(46.6, 540.1, 46.6, 540.2, 46.5, 540.2);
        ctx.lineTo(42.6, 547.2);
        ctx.bezierCurveTo(42.6, 547.2, 42.6, 546.9, 42.6, 547.0);
        ctx.bezierCurveTo(42.7, 547.1, 42.7, 546.8, 42.8, 546.8);
        ctx.lineTo(50.7, 546.8);
        ctx.bezierCurveTo(50.7, 546.8, 50.8, 547.1, 50.9, 547.0);
        ctx.bezierCurveTo(50.9, 546.9, 50.9, 547.2, 50.9, 547.2);
        ctx.closePath();
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fill();

        // stickyLabel/Warning/Group/Path
        ctx.beginPath();
        ctx.moveTo(46.8, 546.1);
        ctx.bezierCurveTo(46.5, 546.1, 46.3, 546.3, 46.3, 546.6);
        ctx.bezierCurveTo(46.3, 546.9, 46.5, 547.2, 46.8, 547.2);
        ctx.bezierCurveTo(47.1, 547.2, 47.3, 546.9, 47.3, 546.6);
        ctx.bezierCurveTo(47.3, 546.3, 47.1, 546.1, 46.8, 546.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 160, 84)";
        ctx.fill();

        // stickyLabel/Warning/Group/Path
        ctx.beginPath();
        ctx.moveTo(47.0, 541.5);
        ctx.lineTo(46.6, 541.5);
        ctx.bezierCurveTo(46.3, 541.5, 46.1, 541.8, 46.1, 542.1);
        ctx.lineTo(46.3, 544.7);
        ctx.bezierCurveTo(46.3, 545.1, 46.5, 545.4, 46.7, 545.4);
        ctx.lineTo(46.8, 545.4);
        ctx.bezierCurveTo(47.0, 545.4, 47.2, 545.1, 47.2, 544.7);
        ctx.lineTo(47.4, 542.1);
        ctx.bezierCurveTo(47.4, 541.8, 47.2, 541.5, 47.0, 541.5);
        ctx.closePath();
        ctx.fill();

        // stickyLabel/THIS PELLET TARGET IS DESIGNED FOR USE WITH LEAD AIRGUN PELLETS ONLY  DO NOT USE BBS BBS WILL
        ctx.restore();
        ctx.restore();
        ctx.font = "5.3px 'Arial'";
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fillText("THIS PELLET TARGET IS DESIGNED FOR USE WITH LEAD AIRGUN PELLETS ONLY.  DO NOT USE BBS. BBS WILL", 117.4, 547.2);

        // stickyLabel/REBOUND AND RICOCHET AND CAN CAUSE PERMANENT INJURY PARTICULARLY TO THE EYE BE SURE THE AREA AROUN
        ctx.fillText("REBOUND AND RICOCHET AND CAN CAUSE PERMANENT INJURY PARTICULARLY TO THE EYE. BE SURE THE AREA AROUND THE TARGET", 41.6, 553.6);

        // stickyLabel/IS CLEAR AND SAFE IN CASE THE SHOOTER SHOULD MISS THE TARGET  DO NOT USE WITH TARGET CLOSER THAN 2
        ctx.fillText("IS CLEAR AND SAFE IN CASE THE SHOOTER SHOULD MISS THE TARGET.  DO NOT USE WITH TARGET CLOSER THAN 25 YARDS TO THE ", 41.6, 559.3);

        // stickyLabel/SHOOTER BECAUSE PELLETS COULD FRAGMENT AND HIT THE SHOOTER  CLEAN PELLETS FROM THE PELLET TRAP AFT
        ctx.fillText("SHOOTER BECAUSE PELLETS COULD FRAGMENT AND HIT THE SHOOTER.  CLEAN PELLETS FROM THE PELLET TRAP AFTER EACH USE.", 41.6, 565.4);

        // stickyLabel/ALWAYS WEAR PROTECTIVE SHOOTING GLASSES
        ctx.fillText("ALWAYS WEAR PROTECTIVE SHOOTING GLASSES.", 41.6, 570.7);

        // stickyLabel/MADE IN CHINA
        ctx.fillText("MADE IN CHINA", 364.7, 570.7);
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
