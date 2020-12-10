//classes

import {Invoice} from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import {HasFormatter} from './interfaces/HasFormatter.js';


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




const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children);

//inputs

const type = document.querySelector('#type') as HTMLSelectElement;

const tofrom = document.querySelector('#tofrom') as HTMLInputElement;

const details = document.querySelector('#details') as HTMLInputElement;

const amount = document.querySelector('#amount') as HTMLInputElement;


//list template instance

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


form.onsubmit = (e:Event) => {
  e.preventDefault();

  let values:[string,string,number] = [tofrom.value,details.value,amount.valueAsNumber];

  let doc:HasFormatter;

  if(type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, 'end');


}

  //part 20 tuples

  //type for ts like array one major diffrent and one type data can't change or shift and its fixed when first initialized

  let arr = ['ryu',20,true];
  arr[0] = false;
  arr[1] = 'yoshi';
  arr = [30,false,'tesy'];

  let tup:[string,number,boolean] = ['test',20,false];

  let student: [string,number];
  student = ['test',22];
