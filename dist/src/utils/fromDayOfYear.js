import { isLeapYear } from './isLeapYear.js';
export function fromDayOfYear(year, dayOfYear) {
    const passedDayLookup = [
        [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
        [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]
    ];
    const offset = Number(isLeapYear(year));
    let month = 0;
    let date = 0;
    for (const [i, value] of passedDayLookup[offset].entries()) {
        if (dayOfYear > value) {
            month = i;
        }
        else {
            break;
        }
    }
    date = dayOfYear - passedDayLookup[offset][month];
    return [year, month, date];
}
//# sourceMappingURL=fromDayOfYear.js.map