// TASK - StopWatch

function StopWatch() {

    let stopTime, startTime, counting, duration = 0;

    this.start = function() {
        if (counting)
            throw new Error('Stopwatch has already started.');

        startTime = new Date();
        counting = true;
        stopped = false;
    };

    this.stop = function() {
        if (!counting)
            throw new Error('Stopwatch has already stopped.');

        stopTime = new Date();
        const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
        counting = false;
        stopped = true;
    };

    this.reset = function() {
        startTime = null;
        stopTime = null;
        duration = 0;
        counting = false;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {
           return duration;
        }
    });


}




