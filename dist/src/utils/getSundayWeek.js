import { getDayOfYear } from './getDayOfYear.js';
import { getDayOfWeek } from './getDayOfWeek.js';
export function getSundayWeek(year, month, date) {
    return Math.floor((10 + getDayOfYear(year, month, date) - getDayOfWeek(year, month, date)) / 7);
}
//# sourceMappingURL=getSundayWeek.js.map