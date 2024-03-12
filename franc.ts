import { Money } from "./money";

export class Franc extends Money {
    constructor(amount: number) {
        super(amount);
    }

    public times(multiplier: number) {
        return new Franc(this.amount * multiplier);
    }
}