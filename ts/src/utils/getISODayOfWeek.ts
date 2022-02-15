// 1 - Monday ... 7 - Sunday
export function getISODayOfWeek(year: number, month: number, date: number): number {
    const lookupMap = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    const y = month < 2 ? year - 1 : year;
    const day = (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + lookupMap[month] + date) % 7;

    return day || 7;
}