if (typeof(Ballistics) == 'undefined') Ballistics = {};

Ballistics.M_PI = Math.PI;
Ballistics.GRAVITY = -32.194;

Ballistics.DragFunctions = {G1:1,G2:2,G3:3,G4:4,G5:5,G6:6,G7:7,G8:8,GA:9};

Ballistics.ZeroAngle = function ZeroAngle(DragFunction, DragCoefficient, Vi, SightHeight, ZeroRange, yIntercept){

    // Numerical Integration variables
    var t=0;
    var dt=1/Vi; // The solution accuracy generally doesn't suffer if its within a foot for each second of time.
    var y=-SightHeight/12;
    var x=0;
    var da; // The change in the bore angle used to iterate in on the correct zero angle.

    // State variables for each integration loop.
    var v=0, vx=0, vy=0; // velocity
    var vx1=0, vy1=0; // Last frame's velocity, used for computing average velocity.
    var dv=0, dvx=0, dvy=0; // acceleration
    var Gx=0, Gy=0; // Gravitational acceleration

    var angle; // The actual angle of the bore.

    var quit=0; // We know it's time to quit our successive approximation loop when this is 1.

    // Start with a very coarse angular change, to quickly solve even large launch angle problems.

    da=Ballistics.DegtoRad(14);


    // The general idea here is to start at 0 degrees elevation, and increase the elevation by 14 degrees
    // until we are above the correct elevation.  Then reduce the angular change by half, and begin reducing
    // the angle.  Once we are again below the correct angle, reduce the angular change by half again, and go
    // back up.  This allows for a fast successive approximation of the correct elevation, usually within less
    // than 20 iterations.
    for (angle=0;quit==0;angle=angle+da){
        vy=Vi*Math.sin(angle);
        vx=Vi*Math.cos(angle);
        Gx=Ballistics.GRAVITY*Math.sin(angle);
        Gy=Ballistics.GRAVITY*Math.cos(angle);

        for (t=0,x=0,y=-SightHeight/12;x<=ZeroRange*3;t=t+dt){
            vy1=vy;
            vx1=vx;
            v=Math.pow((Math.pow(vx,2)+Math.pow(vy,2)),0.5);
            dt=1/v;

            dv = Ballistics.retard(DragFunction, DragCoefficient, v);
            dvy = -dv*vy/v*dt;
            dvx = -dv*vx/v*dt;

            vx=vx+dvx;
            vy=vy+dvy;
            vy=vy+dt*Gy;
            vx=vx+dt*Gx;

            x=x+dt*(vx+vx1)/2;
            y=y+dt*(vy+vy1)/2;
            // Break early to save CPU time if we won't find a solution.
            if (vy<0 && y<yIntercept) {
                break;
            }
            if (vy>3*vx) {
                break;
            }
        }

        if (y>yIntercept && da>0){
            da=-da/2;
        }

        if (y<yIntercept && da<0){
            da=-da/2;
        }

        if (Math.abs(da) < Ballistics.MOAtoRad(0.01)) quit=1; // If our accuracy is sufficient, we can stop approximating.
        if (angle > Ballistics.DegtoRad(45)) quit=1; // If we exceed the 45 degree launch angle, then the projectile just won't get there, so we stop trying.

    }
    return Ballistics.RadtoDeg(angle); // Convert to degrees for return value.
};

Ballistics.DegtoMOA = function (deg){
    return deg*60;
};
Ballistics.DegtoRad = function (deg){
    return deg*Ballistics.M_PI/180;
};
Ballistics.MOAtoDeg = function (moa){
    return moa/60;
};
Ballistics.MOAtoRad = function (moa){
    return moa/60*Ballistics.M_PI/180;
};
Ballistics.RadtoDeg = function (rad){
    return rad*180/Ballistics.M_PI;
};
Ballistics.RadtoMOA = function (rad){
    return rad*60*180/Ballistics.M_PI;
};

Ballistics.retard = function ( DragFunction, DragCoefficient, Velocity) {

    var vp=Velocity;
    var val=-1;
    var A=-1;
    var M=-1;
    switch(DragFunction) {
        case Ballistics.DragFunctions.G1:
        case Ballistics.DragFunctions.GA:
            if (vp > 4230) { A = 1.477404177730177e-04; M = 1.9565; }
            else if (vp> 3680) { A = 1.920339268755614e-04; M = 1.925 ; }
            else if (vp> 3450) { A = 2.894751026819746e-04; M = 1.875 ; }
            else if (vp> 3295) { A = 4.349905111115636e-04; M = 1.825 ; }
            else if (vp> 3130) { A = 6.520421871892662e-04; M = 1.775 ; }
            else if (vp> 2960) { A = 9.748073694078696e-04; M = 1.725 ; }
            else if (vp> 2830) { A = 1.453721560187286e-03; M = 1.675 ; }
            else if (vp> 2680) { A = 2.162887202930376e-03; M = 1.625 ; }
            else if (vp> 2460) { A = 3.209559783129881e-03; M = 1.575 ; }
            else if (vp> 2225) { A = 3.904368218691249e-03; M = 1.55  ; }
            else if (vp> 2015) { A = 3.222942271262336e-03; M = 1.575 ; }
            else if (vp> 1890) { A = 2.203329542297809e-03; M = 1.625 ; }
            else if (vp> 1810) { A = 1.511001028891904e-03; M = 1.675 ; }
            else if (vp> 1730) { A = 8.609957592468259e-04; M = 1.75  ; }
            else if (vp> 1595) { A = 4.086146797305117e-04; M = 1.85  ; }
            else if (vp> 1520) { A = 1.954473210037398e-04; M = 1.95  ; }
            else if (vp> 1420) { A = 5.431896266462351e-05; M = 2.125 ; }
            else if (vp> 1360) { A = 8.847742581674416e-06; M = 2.375 ; }
            else if (vp> 1315) { A = 1.456922328720298e-06; M = 2.625 ; }
            else if (vp> 1280) { A = 2.419485191895565e-07; M = 2.875 ; }
            else if (vp> 1220) { A = 1.657956321067612e-08; M = 3.25  ; }
            else if (vp> 1185) { A = 4.745469537157371e-10; M = 3.75  ; }
            else if (vp> 1150) { A = 1.379746590025088e-11; M = 4.25  ; }
            else if (vp> 1100) { A = 4.070157961147882e-13; M = 4.75  ; }
            else if (vp> 1060) { A = 2.938236954847331e-14; M = 5.125 ; }
            else if (vp> 1025) { A = 1.228597370774746e-14; M = 5.25  ; }
            else if (vp>  980) { A = 2.916938264100495e-14; M = 5.125 ; }
            else if (vp>  945) { A = 3.855099424807451e-13; M = 4.75  ; }
            else if (vp>  905) { A = 1.185097045689854e-11; M = 4.25  ; }
            else if (vp>  860) { A = 3.566129470974951e-10; M = 3.75  ; }
            else if (vp>  810) { A = 1.045513263966272e-08; M = 3.25  ; }
            else if (vp>  780) { A = 1.291159200846216e-07; M = 2.875 ; }
            else if (vp>  750) { A = 6.824429329105383e-07; M = 2.625 ; }
            else if (vp>  700) { A = 3.569169672385163e-06; M = 2.375 ; }
            else if (vp>  640) { A = 1.839015095899579e-05; M = 2.125 ; }
            else if (vp>  600) { A = 5.71117468873424e-05 ; M = 1.950 ; }
            else if (vp>  550) { A = 9.226557091973427e-05; M = 1.875 ; }
            else if (vp>  250) { A = 9.337991957131389e-05; M = 1.875 ; }
            else if (vp>  100) { A = 7.225247327590413e-05; M = 1.925 ; }
            else if (vp>   65) { A = 5.792684957074546e-05; M = 1.975 ; }
            else if (vp>    0) { A = 5.206214107320588e-05; M = 2.000 ; }
            break;

        case Ballistics.DragFunctions.G2:
            if (vp> 1674 ) { A = .0079470052136733   ;  M = 1.36999902851493; }
            else if (vp> 1172 ) { A = 1.00419763721974e-03;  M = 1.65392237010294; }
            else if (vp> 1060 ) { A = 7.15571228255369e-23;  M = 7.91913562392361; }
            else if (vp>  949 ) { A = 1.39589807205091e-10;  M = 3.81439537623717; }
            else if (vp>  670 ) { A = 2.34364342818625e-04;  M = 1.71869536324748; }
            else if (vp>  335 ) { A = 1.77962438921838e-04;  M = 1.76877550388679; }
            else if (vp>    0 ) { A = 5.18033561289704e-05;  M = 1.98160270524632; }
            break;

        case Ballistics.DragFunctions.G5:
            if (vp> 1730 ){ A = 7.24854775171929e-03; M = 1.41538574492812; }
            else if (vp> 1228 ){ A = 3.50563361516117e-05; M = 2.13077307854948; }
            else if (vp> 1116 ){ A = 1.84029481181151e-13; M = 4.81927320350395; }
            else if (vp> 1004 ){ A = 1.34713064017409e-22; M = 7.8100555281422 ; }
            else if (vp>  837 ){ A = 1.03965974081168e-07; M = 2.84204791809926; }
            else if (vp>  335 ){ A = 1.09301593869823e-04; M = 1.81096361579504; }
            else if (vp>    0 ){ A = 3.51963178524273e-05; M = 2.00477856801111; }
            break;

        case Ballistics.DragFunctions.G6:
            if (vp> 3236 ) { A = 0.0455384883480781   ; M = 1.15997674041274; }
            else if (vp> 2065 ) { A = 7.167261849653769e-02; M = 1.10704436538885; }
            else if (vp> 1311 ) { A = 1.66676386084348e-03 ; M = 1.60085100195952; }
            else if (vp> 1144 ) { A = 1.01482730119215e-07 ; M = 2.9569674731838 ; }
            else if (vp> 1004 ) { A = 4.31542773103552e-18 ; M = 6.34106317069757; }
            else if (vp>  670 ) { A = 2.04835650496866e-05 ; M = 2.11688446325998; }
            else if (vp>    0 ) { A = 7.50912466084823e-05 ; M = 1.92031057847052; }
            break;

        case Ballistics.DragFunctions.G7:
            if (vp> 4200 ) { A = 1.29081656775919e-09; M = 3.24121295355962; }
            else if (vp> 3000 ) { A = 0.0171422231434847  ; M = 1.27907168025204; }
            else if (vp> 1470 ) { A = 2.33355948302505e-03; M = 1.52693913274526; }
            else if (vp> 1260 ) { A = 7.97592111627665e-04; M = 1.67688974440324; }
            else if (vp> 1110 ) { A = 5.71086414289273e-12; M = 4.3212826264889 ; }
            else if (vp>  960 ) { A = 3.02865108244904e-17; M = 5.99074203776707; }
            else if (vp>  670 ) { A = 7.52285155782535e-06; M = 2.1738019851075 ; }
            else if (vp>  540 ) { A = 1.31766281225189e-05; M = 2.08774690257991; }
            else if (vp>    0 ) { A = 1.34504843776525e-05; M = 2.08702306738884; }
            break;

        case Ballistics.DragFunctions.G8:
            if (vp> 3571 ) { A = .0112263766252305   ; M = 1.33207346655961; }
            else if (vp> 1841 ) { A = .0167252613732636   ; M = 1.28662041261785; }
            else if (vp> 1120 ) { A = 2.20172456619625e-03; M = 1.55636358091189; }
            else if (vp> 1088 ) { A = 2.0538037167098e-16 ; M = 5.80410776994789; }
            else if (vp>  976 ) { A = 5.92182174254121e-12; M = 4.29275576134191; }
            else if (vp>    0 ) { A = 4.3917343795117e-05 ; M = 1.99978116283334; }
            break;

        default:
            break;
    }

    if (A!=-1 && M!=-1 && vp>0 && vp<10000){
        val=A*Math.pow(vp,M)/DragCoefficient;

        if( DragFunction === Ballistics.DragFunctions.GA){
            return val * 0.925;
        }
        return val;
    }
    else return -1;
};

Ballistics.Windage = function (WindSpeed, Vi, xx, t) {
    var Vw = WindSpeed*17.60; // Convert to inches per second.
    return (Vw*(t-xx/Vi));
};

// Headwind is positive at WindAngle=0
Ballistics.HeadWind = function (WindSpeed, WindAngle) {
    var Wangle = Ballistics.DegtoRad(WindAngle);
    return (Math.cos(Wangle)*WindSpeed);
};

// Positive is from Shooter's Right to Left (Wind from 90 degree)
Ballistics.CrossWind = function (WindSpeed, WindAngle) {
    var Wangle = Ballistics.DegtoRad(WindAngle);
    return (Math.sin(Wangle)*WindSpeed);
};

Ballistics.SolveAll = function (MinRange, MaxRange, DragFunction, DragCoefficient, Vi, SightHeight, ShootingAngle, ZAngle, WindSpeed, WindAngle, Solution){

    var t=0;
    var dt=0.5/Vi;
    var v=0;
    var vx=0, vx1=0, vy=0, vy1=0;
    var dv=0, dvx=0, dvy=0;
    var x=0, y=0;

    var headwind=Ballistics.HeadWind(WindSpeed, WindAngle);
    var crosswind=Ballistics.CrossWind(WindSpeed, WindAngle);

    var Gy=Ballistics.GRAVITY*Math.cos(Ballistics.DegtoRad((ShootingAngle + ZAngle)));
    var Gx=Ballistics.GRAVITY*Math.sin(Ballistics.DegtoRad((ShootingAngle + ZAngle)));

    vx=Vi*Math.cos(Ballistics.DegtoRad(ZAngle));
    vy=Vi*Math.sin(Ballistics.DegtoRad(ZAngle));

    y=-SightHeight/12;

    var n=MinRange;
    for (t=0;;t=t+dt){

        vx1=vx;
        vy1=vy;
        v=Math.pow(Math.pow(vx,2)+Math.pow(vy,2),0.5);
        dt=0.5/v;

        // Compute acceleration using the drag function retardation
        dv = Ballistics.retard(DragFunction,DragCoefficient,v+headwind);
        dvx = -(vx/v)*dv;
        dvy = -(vy/v)*dv;

        // Compute velocity, including the resolved gravity vectors.
        vx=vx + dt*dvx + dt*Gx;
        vy=vy + dt*dvy + dt*Gy;

        if (x/3>=n){
            var windageInch = Ballistics.Windage(crosswind,Vi,x,t+dt);

            Solution[n] = {
                actualRange : x/3,
                drop : y*12,
                moa : -1 * Ballistics.RadtoMOA(Math.atan(y/x)),
                time : t+dt,
                windageInch : windageInch,
                //windageMoa : RadtoMOA(Math.atan(windageInch)),
                velocity : v
                //velocityX : vx,
                //velocityY : vy
            };
            n++;
        }

        // Compute position based on average velocity.
        x=x+dt*(vx+vx1)/2;
        y=y+dt*(vy+vy1)/2;

        if (Math.abs(vy)>Math.abs(3*vx)) break;
        if (n>MaxRange) break;
    }

    return n;
};


Ballistics.AtmCorrect = function (DragCoefficient, Altitude, Barometer, Temperature, RelativeHumidity) {

    var calcFR = function (Temperature, Pressure, RelativeHumidity) {
        var VPw=4e-6*Math.pow(Temperature,3) - 0.0004*Math.pow(Temperature,2)+0.0234*Temperature-0.2517;
        return 0.995*(Pressure/(Pressure-(0.3783)*(RelativeHumidity)*VPw));
    };

    var calcFP = function (Pressure) {
        var Pstd=29.53; // in-hg
        return (Pressure-Pstd)/(Pstd);
    };

    var calcFT = function (Temperature,Altitude) {
        var Tstd=-0.0036*Altitude+59;
        return (Temperature-Tstd)/(459.6+Tstd);
    };

    var calcFA = function (Altitude) {
        var fa=-4e-15*Math.pow(Altitude,3)+4e-10*Math.pow(Altitude,2)-3e-5*Altitude+1;
        return (1/fa);
    };

    var FA = calcFA(Altitude);
    var FT = calcFT(Temperature, Altitude);
    var FR = calcFR(Temperature, Barometer, RelativeHumidity);
    var FP = calcFP(Barometer);

    // Calculate the atmospheric correction factor
    var CD = (FA*(1+FT-FP)*FR);
    return DragCoefficient*CD;

};

function precise_round (value, decPlaces){
    var val = value * Math.pow(10, decPlaces);
    var fraction = (Math.round((val-parseInt(val))*10)/10);

    //this line is for consistency with .NET Decimal.Round behavior
    // -342.055 => -342.06
    if(fraction == -0.5) fraction = -0.6;

    val = Math.round(parseInt(val) + fraction) / Math.pow(10, decPlaces);
    return val;
}