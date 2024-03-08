import { Dollar } from "./dollar";

describe("달러 배수 테스트", () => {
    it("", () => {
        const five = new Dollar(5);
        let product = five.times(2);
        expect(product.amount).toBe(10);
        product = five.times(3);
        expect(product.amount).toBe(15);
    })
})

describe("달러 동등성 테스트", () => {
    it("", () => {
        const five = new Dollar(5);
        expect(five.equals(new Dollar(5))).toBeTruthy();
        expect(five.equals(new Dollar(6))).toBeFalsy();
    }) 
})