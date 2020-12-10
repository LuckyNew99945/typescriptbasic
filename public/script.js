//classes
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
//interfaces in classes 
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('billy', 'web work', 250);
// docTwo = new Payment('billy2', 'plumbing', 200);
// let docs:HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
//interfaces
// interface IsPerson {
//   name:string,
//   age:number,
//   speak(a:string):void;
//   spend(a:number):number;
// }
// const me: IsPerson = {
//   name: 'billy',
//   age: 21,
//   speak(text: string):void {
//     console.log(text);
//   },
//   spend(amount:number):number {
//     console.log(`I Spent ${amount}`);
//     return amount;
//   }
// }
// console.log(me);
// const greetPerson = (person: IsPerson) => {
//   console.log(`hello ${person.name}`);
// }
// greetPerson(me);
// const invOne = new Invoice('mario', 'work on the mario website', 400);
// const invTwo = new Invoice('luigi', 'work on luigi website', 350);
// let invoices:Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// // console.log(invoices);
// invoices.forEach(inv => {
//   console.log(inv.client,inv.amount,inv.format());
// })
const form = document.querySelector('.new-item-form');
// console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.onsubmit = (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
};
