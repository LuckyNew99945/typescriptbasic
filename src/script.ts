//classes

import {Invoice} from './classes/Invoice.js';


//interfaces

interface IsPerson {
  name:string,
  age:number,
  speak(a:string):void;
  spend(a:number):number;
}

const me: IsPerson = {
  name: 'billy',
  age: 21,
  speak(text: string):void {
    console.log(text);
  },
  spend(amount:number):number {
    console.log(`I Spent ${amount}`);
    return amount;
  }
}

console.log(me);

const greetPerson = (person: IsPerson) => {
  console.log(`hello ${person.name}`);
}

greetPerson(me);


const invOne = new Invoice('mario', 'work on the mario website', 400);
const invTwo = new Invoice('luigi', 'work on luigi website', 350);

let invoices:Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

// console.log(invoices);

invoices.forEach(inv => {
  console.log(inv.client,inv.amount,inv.format());
})




const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children);

//inputs

const type = document.querySelector('#type') as HTMLSelectElement;

const tofrom = document.querySelector('#tofrom') as HTMLInputElement;

const details = document.querySelector('#details') as HTMLInputElement;

const amount = document.querySelector('#amount') as HTMLInputElement;

form.onsubmit = (e:Event) => {
  e.preventDefault();

  console.log(type.value,tofrom.value,details.value,amount.valueAsNumber);

}
