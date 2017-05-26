var GameControl = function(id) {
    var self = this;

    self.courseId = id;
    self.zeroRange = null;
    self.gameFinishedCallback = null;
    self.courseInfo = getCourseInfo(id);

    self.startTargetNumber = -1;
    self.currentTargetNumber = -1;
    self.currentTarget = null;
    self.score = 0;

    self.courseWind = {
        Speed : randomInt( Math.round(self.courseInfo.meanWind-(1)), Math.round(self.courseInfo.meanWind+(1)) ),
        Direction : randomInt(0,359)
    }

};

GameControl.prototype = function(){

    var _startNewGame = function(callback) {
        var self = this;

        if( self.gameFinishedCallback !== null )
        {
            delete self.gameFinishedCallback;
            self.gameFinishedCallback = null;
        }
        self.gameFinishedCallback = callback;

        if( settings.FixedWind > 0 ) {
            self.courseWind.Speed = settings.FixedWind;
        }

        self.zeroRange = new ZeroRange( self.courseWind, self.courseInfo.zeroRangeAngle, function(e){ _zeroRangeFinished.call(self,e);} );
        self.zeroRange.init();

        scorecard.clear();
        self.zeroRange.displayMenu();

    };

    var _zeroRangeFinished = function(e) {
        var self = this;

        // e could be QUIT or START GAME.
        if( self.zeroRange !== null ) {
            delete self.zeroRange;
            self.zeroRange = null;
        }

        if( e === "START" ) {

            target.ctx.clear();
            crosshair.show(true);
            scorecard.drawBoard(self.courseInfo.desc, self.courseInfo.course.length);

            app.showGameWindow(true);


            _getNextTarget.call(self);

        } else {
            self.gameFinishedCallback();
        }
    };

    var _getNextTarget = function() {
        var self = this;

        var gameover = false;

        if( self.startTargetNumber < 0 )
        {
            self.startTargetNumber = (randomInt(1, self.courseInfo.course.length / 2 )*2)-1;
            self.currentTargetNumber = self.startTargetNumber;
        } else {
            self.currentTargetNumber++;
            if( self.currentTargetNumber > self.courseInfo.course.length ) {
                self.currentTargetNumber = 1;
            }
            if( self.currentTargetNumber === self.startTargetNumber ) {
                gameover = true;
                // GAME OVER
                scorecard.message( "GAME OVER", 8000 );
                setTimeout(function(){
                    app.showGameWindow(false);
                    self.gameFinishedCallback();
                },10000);
            }
        }

        if( gameover !== true ) {
            // Display the current target
            if( self.currentTarget !== null ) {
                delete self.currentTarget;
                self.currentTarget = null;
            }

            switch (self.courseInfo.course[self.currentTargetNumber-1].target)
            {
                case "MP":
                    self.currentTarget = new MagpieTarget(target.ctx);
                    break;
                case "SQ":
                    self.currentTarget = new SquirrelTarget(target.ctx);
                    break;
                case "GSQ":
                    self.currentTarget = new GamoSquirrelTarget(target.ctx);
                    break;
                case "RAT":
                    self.currentTarget = new RatTarget(target.ctx);
                    break;
                case "RB":
                    self.currentTarget = new RabbitTarget(target.ctx);
                    break;
                case "ROOK":
                    self.currentTarget = new RookTarget(target.ctx);
                     break;
                case "MOON":
                    self.currentTarget = new MoonTarget(target.ctx);
                    break;
                case "TJACK":
                    self.currentTarget = new CornejaTarget(target.ctx);
                    break;
                case "TRB":
                    self.currentTarget = new ConejoTarget(target.ctx);
                    break;
                case "TSTAR":
                    self.currentTarget = new EstorninoTarget(target.ctx);
                    break;
                case "TPART":
                    self.currentTarget = new PerdizTarget(target.ctx);
                    break;
                 case "TWOOD":
                     self.currentTarget = new TorcazTarget(target.ctx);
                     break;
                default:
                    self.currentTarget = new SquirrelTarget(target.ctx);
                    break;
            }
            target.drawTarget( self.courseInfo.course[self.currentTargetNumber-1].range,
                               self.currentTarget,
                               self.courseInfo.course[self.currentTargetNumber-1].killzone,
                               settings.data.ScopeMag );

            crosshair.displayRange(self.courseInfo.course[self.currentTargetNumber-1].range);
            crosshair.displayWindDirection( self.courseWind.Speed + self.courseInfo.course[self.currentTargetNumber-1].additionalWind,
                                            calcWindVector(self.courseWind.Direction,self.courseInfo.course[self.currentTargetNumber-1].angle ),
                                            settings.data.Units
                                          );
            crosshair.drawComment(self.courseInfo.course[self.currentTargetNumber-1].comment );

            _takeAim.call(self);
        }

    };

    var _takeAim = function() {
        var self = this;
        crosshair.beginTracking( function(xposmm){ _shotTaken.call(self,xposmm);});
    };

    var _shotTaken = function(xpos) {
        var self = this;

        var shotxposmm = ((300+xpos)/self.currentTarget.scaling)/50*20;

        var windVector = calcWindVector(self.courseWind.Direction,self.courseInfo.course[self.currentTargetNumber-1].angle );

        var adjustForGroup = settings.getGroupError(self.currentTarget.range, self.courseInfo.course[self.currentTargetNumber-1].wobbleFactor);
        var wind = settings.getDriftWind(self.currentTarget.range,
                                         windVector,
                                         self.courseWind.Speed + self.courseInfo.course[self.currentTargetNumber-1].additionalWind );
        var rangeError = settings.getRangeError(self.currentTarget.range);

        self.currentTarget.drawPelletStrike( shotxposmm + adjustForGroup.x + wind, rangeError + adjustForGroup.y );

        // Was it a hit a miss or a splitter?
        var pelletStrikeRadius = Math.sqrt(Math.pow(shotxposmm + adjustForGroup.x + wind,2) + Math.pow(rangeError + adjustForGroup.y,2));
        if ( pelletStrikeRadius < (self.courseInfo.course[self.currentTargetNumber-1].killzone - 2)/2 ) {
            setTimeout(function(){
                target.knockover();
                scorecard.markTarget(self.currentTargetNumber,true);
                scorecard.setScore(++self.score);
            },400);
        } else if ( pelletStrikeRadius < (self.courseInfo.course[self.currentTargetNumber-1].killzone + 4)/2 ) {
            scorecard.message("-- SPLIT --");
            scorecard.markTarget(self.currentTargetNumber,false);
        } else {
            scorecard.message("-- DINK --");
            scorecard.markTarget(self.currentTargetNumber,false);
        }

        setTimeout(function(){
            _getNextTarget.call(self);
        },2000);
    };


    return {
        startNewGame : _startNewGame
    };

}();

