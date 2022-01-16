import {WeekCalculator} from "./WeekCalculator";

describe("Menu Factory", () => {
    const calculator = new WeekCalculator();

    it("returns 1 for one of january", () => {
       expect(calculator.execute(new Date("2022-01-01"))).toBe(1);
    });

    it("returns 1 for 7th jan", () => {
        expect(calculator.execute(new Date("2022-01-07"))).toBe(1);
    });

    it("returns 2 for 8th jan", () => {
        expect(calculator.execute(new Date("2022-01-08"))).toBe(2);
    });
});
