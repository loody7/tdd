import { Franc } from "./franc";

describe("프랑크 배수 테스트", () => {
    it("", () => {
        const five = new Franc(5);
        expect(five.times(2)).toEqual(new Franc(10));
        expect(five.times(3)).toEqual(new Franc(15));
    })
})

describe("프랑크 동등성 테스트", () => {
    it("", () => {
        const five = new Franc(5);
        expect(five.equals(new Franc(5))).toBeTruthy();
        expect(five.equals(new Franc(6))).toBeFalsy();
    }) 
})