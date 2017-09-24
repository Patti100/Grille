module.exports = function (str, substr, time, overlap) {
    if (time < 0) {
        time = -1 - time;
        var step = overlap ? 1 : substr.length;
        var pos = str.length - 1 + step;

        do {
            if (pos < step) return -1;
            pos = str.lastIndexOf(substr, pos - step);
            if (pos === -1) return -1;
        } while (time--)
    } else {
        var step = overlap ? 1 : substr.length;
        var pos = 0 - step;

        do {
            pos = str.indexOf(substr, pos + step);
            if (pos === -1) return -1;
        } while (time--)
    }

    return pos;
};
