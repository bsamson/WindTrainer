var Scorecard = function() {
    var self = this;

    self.ctx = null;
    self.canvas = null;
    self.numberOfTargets = 30;
    self.numberOfRows = 3;
};

Scorecard.prototype = function(){

    var _init = function() {
        var self = this;

        self.canvas = document.getElementById("scorecard");
        if (self.canvas.getContext) {
            self.ctx = self.canvas.getContext("2d");
        }

    };

    var _drawBoard = function( desc, numberOfTargets ) {
        var self = this;
        var ctx = self.ctx;

        self.numberOfTargets = numberOfTargets;

        self.clear();

        self.numberOfRows = Math.ceil(numberOfTargets/10);


        ctx.save();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        ctx.strokeRect(10,10,360,30);
        ctx.restore();

        ctx.save();
        ctx.fillStyle = "white";
        ctx.font = "bold 16px Arial";
        ctx.textAlign = 'center';
        ctx.fillText( desc, 200,30 );
        ctx.restore();

        ctx.save();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";

        // Draw each row...
        var row, col;

        for( row=0; row< Math.ceil(self.numberOfTargets/10); row++ ) {

            if( (row+1 === Math.ceil(self.numberOfTargets/10)) && (self.numberOfTargets%10>0)) {

                ctx.strokeRect(10,45+(55*row),36*(self.numberOfTargets%10),50);
                ctx.strokeRect(10,45+(55*row),36*(self.numberOfTargets%10),20);

                for( col=1; col<(self.numberOfTargets%10); col++) {
                    ctx.strokeRect(10+(col*36),45+(55*row),36,50);
                }

            } else {
                ctx.strokeRect(10,45+(55*row),360,50);
                ctx.strokeRect(10,45+(55*row),360,20);

                for( col=1; col<9; col++) {
                    ctx.strokeRect(10+(col*36),45+(55*row),36,50);
                }
            }
        }

        ctx.restore();

        ctx.save();
        ctx.fillStyle = "white";
        ctx.font = "bold 14px Arial";
        ctx.textAlign = 'center';

        for( row=0; row< self.numberOfRows; row++ ) {
            if( (row+1 === Math.ceil(self.numberOfTargets/10)) && (self.numberOfTargets%10>0)) {
                for( col=0; col<(self.numberOfTargets%10); col++) {
                    var nextNumber = (row*10)+col+1;
                    ctx.fillText( nextNumber, 10+18+(col*36),45+14+(55*row) );
                }
            } else {
                for( col=0; col<10; col++) {
                    var nextNumber = (row*10)+col+1;
                    ctx.fillText( nextNumber, 10+18+(col*36),45+14+(55*row) );
                }
            }
        }
        ctx.restore();

        ctx.save();

        ctx.lineWidth = 3;
        ctx.strokeStyle = "white";

        ctx.strokeRect(360-50,(self.numberOfRows*55)+55,60,40);

        ctx.restore();
    };

    var _markTarget = function(targetNumber, hit) {
        var self = this;

        var row = Math.ceil(targetNumber/10);
        var col = targetNumber - ((row-1)*10);

        var ctx = self.ctx;
        ctx.save();
        ctx.fillStyle = hit === true?"yellow":"red";
        ctx.font = "bold 26px Verdana";
        ctx.textAlign = 'center';
        ctx.fillText( hit===true?"X":"O", 10+18+((col-1)*36),45+44+(55*(row-1)) );
        ctx.restore();
    };

    var _setScore = function(score) {
        var self = this;

        var ctx = self.ctx;

        ctx.save();

        ctx.lineWidth = 3;
        ctx.strokeStyle = "white";

        ctx.clearRect(360-50+3,(self.numberOfRows*55)+55+3,60-6,40-6);

        ctx.fillStyle = "yellow";
        ctx.font = "bold 30px Verdana";
        ctx.textAlign = 'center';
        ctx.fillText( score, 360-20,((self.numberOfRows*55)+50+35) );

        ctx.restore();

    };

    var _message = function(message, delay) {
        var self = this;

        var ctx = self.ctx;

        ctx.save();

        ctx.clearRect(10,(self.numberOfRows*55)+55,290,40);
        ctx.fillStyle = "rgb(255,0,0)";
        ctx.font = "bold 30px Verdana";
        ctx.textAlign = 'center';
        ctx.fillText( message, 290/2,((self.numberOfRows*55)+50+35) );

        ctx.restore();

        if( delay === undefined){
            delay = 2000;
        }

        setTimeout(function(){
            ctx.save();
            ctx.clearRect(10,(self.numberOfRows*55)+55,290,40);
            ctx.restore();
        },delay);
    };

    var _clear = function() {
        var self = this;

        var ctx = self.ctx;

        ctx.clear();
    };

    return {
        init: _init,
        clear: _clear,
        markTarget: _markTarget,
        drawBoard: _drawBoard,
        setScore: _setScore,
        message: _message
    };
}();

var scorecard = new Scorecard();