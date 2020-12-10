import {HasFormatter} from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor(readonly recipient:string, private details: string, public amount:number) {
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