import { getDayOfYear } from './getDayOfYear.js';
import { getISODayOfWeek } from './getISODayOfWeek.js';

export function getMondayWeek(year: number, month: number, date: number): number {
    const weekDay = getISODayOfWeek(year, month, date);

    return Math.floor((10 + getDayOfYear(year, month, date) - weekDay) / 7);
}