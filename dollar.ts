import { Money } from "./money";

export class Dollar extends Money {
    constructor(amount: number) {
        super(amount);
    }

    public times(multiplier: number) {
        return new Dollar(this.amount * multiplier);
    }
}