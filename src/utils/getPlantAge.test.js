import { getPlantAge } from "./getPlantAge";

test('getPlantAge returns correct number of days', () => {
    const today = new Date;
    const fiveDaysAgo = new Date(today);
    fiveDaysAgo.setDate(today.getDate() - 5);

    const formatted = fiveDaysAgo.toISOString().split('T')[0];
    expect(getPlantAge(formatted)).toBe("5 дней");
});