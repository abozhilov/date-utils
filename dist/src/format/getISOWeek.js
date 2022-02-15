export const getISOWeek = `
    function getISOWeek(date) {
        const targetDate = new Date(+date);
        const day = targetDate.getDay();
        const thursdayOffset = day === 0 ? -3 : 4;

        targetDate.setDate(targetDate.getDate() - day + thursdayOffset);

        const baseDate = new Date(targetDate.getFullYear(), 0, 4);
        baseDate.setDate(4 - baseDate.getDay() - 3);

        return Math.floor((targetDate - baseDate) / 604800000);
    }
`;
//# sourceMappingURL=getISOWeek.js.map