import { getISODayOfWeek } from './getISODayOfWeek.js';
import { getISOWeek } from './getISOWeek.js';
export function fromISOWeek(year, week, day) {
    const firstDay = getISODayOfWeek(year, 0, 1);
    const firstWeek = getISOWeek(year, 0, 1);
    if (firstWeek !== 1) {
    }
    console.log(firstDay, firstWeek);
    return [2022, 0, 1];
}
//# sourceMappingURL=fromISOWeek.js.map