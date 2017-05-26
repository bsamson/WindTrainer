function randomInt(min,max)
{
    return Math.floor((Math.random() * ((max + 1) - min)) + min);
}

function randomToMax(max)
{
    return (1 - Math.random())*max;
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
}

function calcWindVector( windDirection, targetDirection) {
    var windVector = windDirection + (360-targetDirection);
    if(windVector > 360){
        windVector -= 360;
    }
    return windVector;
}

function moaToPx ( moa ) {
    return moa*13.35078;
}

CanvasRenderingContext2D.prototype.clear =
    CanvasRenderingContext2D.prototype.clear || function () {
        this.closePath();
        this.setTransform(1, 0, 0, 1, 0, 0);
        this.scale(1,1);
        this.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };