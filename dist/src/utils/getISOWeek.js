import { getISODayOfWeek } from './getISODayOfWeek.js';
// http://www.proesite.com/timex/wkcalc.htm
export function getISOWeek(year, month, date) {
    let y = year;
    let m = month;
    let d = date;
    let thisYearDow0101 = getISODayOfWeek(y, 0, 1) - 1;
    let nextYearDow0101 = getISODayOfWeek(y + 1, 0, 1) - 1;
    let dow = getISODayOfWeek(y, m, d) - 1;
    let dow0101 = thisYearDow0101;
    if (m === 0 && dow0101 > 3 && dow0101 < 7 - (d - 1)) {
        // days before week 1 of the current year have the same week number as
        // the last day of the last week of the previous year
        dow = dow0101 - 1;
        dow0101 = getISODayOfWeek(y - 1, 0, 1) - 1;
        m = 11;
        d = 31;
    }
    else if (month === 11 && nextYearDow0101 > 30 - (d - 1) && nextYearDow0101 < 4) {
        // days after the last week of the current year have the same week number as
        // the first day of the next year, (i.e. 1)
        return 1;
    }
    if (thisYearDow0101 < 4) {
        return Math.floor(1 + (4 * m) + (2 * m + (d - 1) + dow0101 - dow + 6) * 36 / 256);
    }
    return Math.floor(4 * m + (2 * m + (d - 1) + dow0101 - dow + 6) * 36 / 256);
}
//# sourceMappingURL=getISOWeek.js.map