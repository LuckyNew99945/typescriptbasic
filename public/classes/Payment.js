export class Payment {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    //OR
    // constructor(a:string,b:string,c:number) {
    //   this.recipient = a;
    //   this.amount = b;
    //   this.details = c;
    // } + access modifier
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
