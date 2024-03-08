import { Dollar } from "./dollar";

describe("달러 배수 테스트", () => {
    it("", () => {
        const five = new Dollar(5);
        expect(five.times(2)).toEqual(new Dollar(10));
        expect(five.times(3)).toEqual(new Dollar(15));
    })
})

describe("달러 동등성 테스트", () => {
    it("", () => {
        const five = new Dollar(5);
        expect(five.equals(new Dollar(5))).toBeTruthy();
        expect(five.equals(new Dollar(6))).toBeFalsy();
    }) 
})