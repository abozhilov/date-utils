import { isLeapYear } from './isLeapYear.js';
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
export function isValidDate(year, month, date) {
    let days = monthDays[month];
    if (month === 1) {
        days += Number(isLeapYear(year));
    }
    return date <= days && date >= 1;
}
//# sourceMappingURL=isValidDate.js.map