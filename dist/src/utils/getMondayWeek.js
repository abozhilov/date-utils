import { getDayOfYear } from './getDayOfYear.js';
import { getISODayOfWeek } from './getISODayOfWeek.js';
export function getMondayWeek(year, month, date) {
    const weekDay = getISODayOfWeek(year, month, date);
    return Math.floor((10 + getDayOfYear(year, month, date) - weekDay) / 7);
}
//# sourceMappingURL=getMondayWeek.js.map