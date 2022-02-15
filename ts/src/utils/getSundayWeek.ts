import { getDayOfYear } from './getDayOfYear.js';
import { getDayOfWeek } from './getDayOfWeek.js';

export function getSundayWeek(year: number, month: number, date: number): number {
    return Math.floor((10 + getDayOfYear(year, month, date) - getDayOfWeek(year, month, date)) / 7);
}