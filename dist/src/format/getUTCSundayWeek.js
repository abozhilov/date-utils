export const getUTCSundayWeek = `
    function getUTCSundayWeek(date) {
        return Math.floor((10 + getUTCDayOfYear(date) - date.getUTCDay()) / 7);
    }
`;
//# sourceMappingURL=getUTCSundayWeek.js.map