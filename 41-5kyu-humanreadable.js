function humanReadable(seconds) {
    var secs = seconds,
        time = {

            hours: Math.floor(seconds/3600),
            hrsToSec: this.reportHrs*3600,
            minToSec: this.reportMin*60,
        
            reportHrs: function() {
                var retHr = Math.floor(secs/3600);
                if (retHr<10){
                    retHr = "0" + retHr;
                }
                return retHr;
            },
            reportMin: function() {
                var minutesNonRounded = (secs/60);
                var minRoundDown= Math.floor(minutesNonRounded)%60;
                if (minRoundDown<10){
                    minRoundDown = "0" + minRoundDown;
                }
                return minRoundDown;
            },
            reportSecs: function() {
                var retSec = secs-((this.reportMin()*60)+(this.reportHrs()*3600));
                if (retSec<10){
                    retSec = "0" + retSec;
                }
                return retSec;
            }
        } 
        
    return time.reportHrs() + ":" + time.reportMin() + ":" + time.reportSecs();
}

console.log(humanReadable(3663)); //23:59:59