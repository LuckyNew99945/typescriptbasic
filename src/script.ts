//classes

import {Invoice} from './classes/Invoice.js';

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
