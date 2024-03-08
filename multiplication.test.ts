import { Dollar } from "./dollar";

describe("달러 배수 테스트", () => {
    it("5달러에 2를 곱하면 10달러가 된다", () => {
        const five = new Dollar(5);
        five.times(2);
        expect(five.amount).toBe(10);
    })
})