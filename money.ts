export class Money {
    protected amount: number = 0;

    constructor(amount: number) {
        this.amount = amount;
    }

    public equals(object: Object): boolean {
        const money = object as Money;
        return this.amount === money.amount;
    }
}