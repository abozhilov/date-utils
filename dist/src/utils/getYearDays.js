import { isLeapYear } from './isLeapYear.js';
export function getYearDays(year) {
    return 365 + Number(isLeapYear(year));
}
//# sourceMappingURL=getYearDays.js.map