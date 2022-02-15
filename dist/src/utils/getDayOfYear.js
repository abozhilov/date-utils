import { isLeapYear } from './isLeapYear.js';
export function getDayOfYear(year, month, date) {
    const passedDayLookup = [
        [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
        [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]
    ];
    const offset = Number(isLeapYear(year));
    return passedDayLookup[offset][month] + date;
}
//# sourceMappingURL=getDayOfYear.js.map