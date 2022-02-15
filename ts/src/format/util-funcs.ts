export const getTimezoneOffset = `
    function getTimezoneOffset(date) {
        const offset = date.getTimezoneOffset();
        const sign = offset < 0 ? '+' : '-';
        const hours = \`0\${Math.abs(Math.floor(offset / 60))}\`.slice(-2);
        const minutes = \`0\${offset % 60}\`.slice(-2);

        return \`\${sign}\${hours}\${minutes}\`;
    }
`;

export const getDayOfYear = `
    function getDayOfYear(year, month, date) {
        const passedDayLookup = [
            [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
            [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]
        ];
        const offset = Number(year % 4 == 0 && (year % 100 !== 0 || year % 400 === 0));

        return passedDayLookup[offset][month] + date;
    }
`;

export const getDayOfWeek = `
    // 0 - Sunday ... 6 - Saturday
    function getDayOfWeek(year, month, date) {
        const lookupMap = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
        const y = month < 2 ? year - 1 : year;
        const day = (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + lookupMap[month] + date) % 7;

        return day;
    }
`;

export const getISODayOfWeek = `
    // 1 - Monday ... 7 - Sunday
    function getISODayOfWeek(year, month, date) {
        const lookupMap = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
        const y = month < 2 ? year - 1 : year;
        const day = (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + lookupMap[month] + date) % 7;

        return day || 7;
    }
`;

export const getMondayWeek = `
    function getMondayWeek(year, month, date) {
        const weekDay = getISODayOfWeek(year, month, date);

        return Math.floor((10 + getDayOfYear(year, month, date) - weekDay) / 7);
    }
`;

export const getSundayWeek = `
    function getSundayWeek(year, month, date) {
        return Math.floor((10 + getDayOfYear(year, month, date) - getDayOfWeek(year, month, date)) / 7);
    }
`;

export const getISOWeek = `
    // http://www.proesite.com/timex/wkcalc.htm
    function getISOWeek(year, month, date) {
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
        else if (month === 11 && nextYearDow0101 > 30 - (d - 1)  && nextYearDow0101 < 4) {
            // days after the last week of the current year have the same week number as
            // the first day of the next year, (i.e. 1)

            return 1;
        }

        if (thisYearDow0101 < 4) {
            return Math.floor(1 + (4 * m) + (2 * m + (d - 1) + dow0101 - dow + 6) * 36 / 256);
        }

        return Math.floor(4 * m + (2 * m + (d - 1) + dow0101 - dow + 6) * 36 / 256);
    }
`;