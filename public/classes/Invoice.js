export class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    //OR
    // constructor(a:string,b:string,c:number) {
    //   this.client = a;
    //   this.amount = b;
    //   this.details = c;
    // } + access modifier
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
