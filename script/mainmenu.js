var MainMenu = function() {
    var self = this;

    self.callback = null;
};

MainMenu.prototype = function() {

    var _init = function(){
        var self = this;


        document.getElementById("yorkWinterLeagueCourse").addEventListener("click",function(e){ return _onSelect.call(self,e,"yorkWinterLeagueCourse");},false);
        document.getElementById("inters2014").addEventListener("click",function(e){ return _onSelect.call(self,e,"inters2014");},false);
        document.getElementById("mendip2014").addEventListener("click",function(e){ return _onSelect.call(self,e,"mendip2014");},false);
        document.getElementById("tecnotargetopen2014").addEventListener("click",function(e){ return _onSelect.call(self,e,"tecnotargetopen2014");},false);
        document.getElementById("643FT").addEventListener("click",function(e){ return _onSelect.call(self,e,"643FT");},false);
        document.getElementById("Shebbear").addEventListener("click",function(e){ return _onSelect.call(self,e,"Shebbear");},false);

        _calcTroyer.call( self, "yorkWinterLeagueCourse" );
        _calcTroyer.call( self, "inters2014" );
        _calcTroyer.call( self, "mendip2014" );
        _calcTroyer.call( self, "tecnotargetopen2014" );
        _calcTroyer.call( self, "643FT" );
        _calcTroyer.call( self, "Shebbear" );
    };

    var _display = function(callback) {
        var self = this;

        self.callback = callback;

        var shootMenuDiv = document.getElementById("shoot-menu");
        shootMenuDiv.style.display = "block";

    };

    var _calcTroyer = function(courseId) {
        var self = this;

        var badge = Sizzle("#" + courseId + " h4 span:nth-child(1)");
        if( badge.length > 0 ){

            var totalTroyer = 0;
            // Loop through all targets in the course
            var course = getCourseInfo(courseId);
            for( i=0; i<course.course.length; i++){
                var baseScore = course.course[i].range / (course.course[i].killzone / 25.4) ;
                if( course.course[i].range>=45 ){
                    baseScore*=1.125;
                }
                baseScore*= 1 + Math.pow(((course.meanWind + course.course[i].additionalWind)/20),1.8);

                if( course.course[i].additionalWind > 1 ){
                    baseScore*=1.25;
                }
                if( course.course[i].comment !== null && course.course[i].comment === "Standing"){
                    baseScore*=1.75;
                } else if (course.course[i].comment !== null && course.course[i].comment === "Kneeling") {
                    baseScore*=1.5;
                }
                totalTroyer += baseScore;
            }
            badge[0].innerText = "rating " + Math.round(totalTroyer/course.course.length);
        }
    };

    var _onSelect = function(e,id) {
        var self = this;
        e.preventDefault();
        e.stopPropagation();

        var shootMenuDiv = document.getElementById("shoot-menu");
        shootMenuDiv.style.display = "none";

        if (typeof self.callback === "function") {
            self.callback(id);
        }
    };

    return {
        init: _init,
        display: _display
    };
}();
var mainMenu = new MainMenu();
