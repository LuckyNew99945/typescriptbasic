//classes
import { Invoice } from './classes/Invoice.js';
const me = {
    name: 'billy',
    age: 21,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I Spent ${amount}`);
        return amount;
    }
};
console.log(me);
const greetPerson = (person) => {
    console.log(`hello ${person.name}`);
};
greetPerson(me);
const invOne = new Invoice('mario', 'work on the mario website', 400);
const invTwo = new Invoice('luigi', 'work on luigi website', 350);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.onsubmit = (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
};
