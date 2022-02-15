export const getMondayWeek = `
    function getMondayWeek(date) {
        const weekDay = date.getDay() || 7;

        return Math.floor((10 + getDayOfYear(date) - weekDay) / 7);
    }
`;
//# sourceMappingURL=getMondayWeek.js.map