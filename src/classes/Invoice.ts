export class Invoice {
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor(readonly client:string, private details: string, public amount:number) {
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