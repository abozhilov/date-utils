export const getUTCDayOfYear = `
    function getUTCDayOfYear(date) {
        const ordinaryDayLookup = [
            [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
            [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]
        ];
        const year = date.getUTCFullYear();
        const ordinaryOffset = (year % 4 == 0 && (year % 100 !== 0 || year % 400 === 0)) ? 1 : 0;
    
        return ordinaryDayLookup[ordinaryOffset][date.getUTCMonth()] + date.getUTCDate();
    }
`;
//# sourceMappingURL=getUTCDayOfYear.js.map