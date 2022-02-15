import { isLeapYear } from './isLeapYear.js';

export function getYearDays(year: number): number {
    return 365 + Number(isLeapYear(year));
}