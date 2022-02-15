export const getUTCMondayWeek = `
    function getUTCMondayWeek(date) {
        const weekDay = date.getUTCDay() || 7;

        return Math.floor((10 + getUTCDayOfYear(date) - weekDay) / 7);
    }
`;
//# sourceMappingURL=getUTCMondayWeek.js.map