const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
export function timedelta(options) {
    let delta = 0;
    if (options.milliseconds) {
        delta += options.milliseconds;
    }
    if (options.seconds) {
        delta += options.seconds * SECOND;
    }
    if (options.minutes) {
        delta += options.minutes * MINUTE;
    }
    if (options.hours) {
        delta += options.hours * HOUR;
    }
    if (options.days) {
        delta += options.days * DAY;
    }
    if (options.weeks) {
        delta += options.weeks * WEEK;
    }
    return delta;
}
//# sourceMappingURL=timedelta.js.map