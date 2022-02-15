export const getUTCISOWeek = `
    function getUTCISOWeek(date) {
        const targetDate = new Date(+date);
        const day = targetDate.getUTCDay();
        const thursdayOffset = day === 0 ? -3 : 4;

        targetDate.setDate(targetDate.getUTCDate() - day + thursdayOffset);

        const baseDate = new Date(targetDate.getUTCFullYear(), 0, 4);
        baseDate.setDate(4 - baseDate.getUTCDay() - 3);

        return Math.floor((targetDate - baseDate) / 604800000);
    }
`;
//# sourceMappingURL=getUTCISOWeek.js.map