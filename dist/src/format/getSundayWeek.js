export const getSundayWeek = `
    function getSundayWeek(date) {
        return Math.floor((10 + getDayOfYear(date) - date.getDay()) / 7);
    }
`;
//# sourceMappingURL=getSundayWeek.js.map