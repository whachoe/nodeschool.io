function repeat_n_times(callback, times) {
    callback();
    if (times - 1 > 0)
        repeat_n_times(callback, times - 1);
}

module.exports = repeat_n_times;