/*****************************************************************************************************
 * @purpose	:show elapse line between two click;
 * @author	:sangita awaghad
 * @since	:23-08-2019
 *****************************************************************************************************/
const utility = require("../Utility/Utility");

stopwatch = () => {
    let starttime;
    let stoptime;
    let start;
    let stop;

    do {
        console.log("Press 1 to start StopWatch");
        start = utility.getInputNumber();

        if (start == 1)
            starttime = Date.now();
    } while (start != 1);

    do {
        console.log("Press 0 to stop StopWatch");
        stop = utility.getInputNumber();
        if (stop == 0)
            stoptime = Date.now();
    } while (stop != 0);

    let elapsetime = stoptime - starttime;
    let seconds = Math.floor(elapsetime / 1000);
    console.log(`Elapsed Time in seonds:${seconds}`);

    let userinput = { "start": start, "stop": stop };
    return userinput;
}

module.exports = stopwatch();