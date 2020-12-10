"use strict";
// // console.log('hello world from typescript');
// // const inputs = document.querySelectorAll('input');
// // console.log(inputs);
// // inputs.forEach(input => {
// //   console.log(input);
// // })
// // let character = 'billy';
// // let age = 21;
// // let isMale = true;
// // const circ = (diameter:number) => {
// //   return diameter * Math.PI
// // }
// // console.log(circ(7));
// // part 4
// let names = ['luigi', 'mario', 'yoshi'];
// names.push('toad');
// // names.push(1);
// let numbers = [10,20,30,40];
// numbers.push(25);
// // numbers.push(false);
// // numbers[0] = 'test';
// // let mixed = ['ken', 4,'test', 8, 9];
// // mixed.push('test');
// // mixed.push(10);
// //objects
// let pirate = {
//   name : 'luffy',
//   color: 'white',
//   age: 21
// }
// pirate.age = 22;
// pirate.name = 'luffy2';
// // pirate.age = '30';
// // ninja.skills = ['punch', 'kick'];
// pirate = {
//   name: 'zoro',
//   color: 'black',
//   age: 23,
//   // skills : ['slash', 'cut']
// }
// // part 5 explicit types
// let nama:string;
// let umur:number;
// let isFemale:boolean;
// //arrays
// let pirates:string[] = [];
// pirates = ['luffy', 'zoro'];
// pirates.push('sanji');
// //union types
// let mixed:(string|number|boolean)[] = [];
// mixed.push('hello');
// mixed.push(20);
// mixed.push(23);
// mixed.push(false);
// console.log(mixed);
// let uid:string|number;
// uid = '123';
// uid = 123;
// //objects
// let pirateOne:object;
// pirateOne = {name: 'sanji', age:23};
// pirateOne = [1,2];
// let pirateTwo:{
//   name:string,
//   age:number,
// };
// pirateTwo = {name: 'usop', age:25};
// //part 6 dnyamic(any) types (think twice before use it)
// let test:any = 25;
// test = 'test';
// let mixed2:any[] = [];
// mixed2.push(6);
// mixed2.push('test');
// mixed2.push(true);
// let pirateThree:{name:any,age:any};
// pirateThree = {
//   name: 'nami',
//   age: 20,
// }
// console.log(pirateThree);
// pirateThree = {
//   name: 20,
//   age: 'nami'
// }
// console.log(pirateThree);
// part 7 better workflow and tsconfig
// console.log('test2');
//part 8 function basics
// let greet:Function;
// greet = (name:string) => {
//   console.log(`Hello ${name}`);
// }
// greet('billy');
// const add = (a:number,b:number,c?:number|string) => {
//   console.log(a+b);
//   console.log(c);
// } //data type function is void (undefined in js)
// //c is OPTIONAL parameter not MUST so we can call function without third parameter (default value is undefined)
// add(5,10,'20');
// const times = (a:number,b:number,c:number|string = 10) => {
//   console.log(a * b);
//   console.log(c);
//   return a * b;
// }
// times(5,10);
// let hasil = times(10,20);
// //hasil = 'test' cant do that because hasil already assign as number
// const minus = (a:number,b:number,c?:number|string): number => {
//   console.log(a * b);
//   console.log(c);
//   return a * b;
// } //make sure function return the data type as number 
// minus(20,30);
//c is OPTIONAL parameter not MUST so we can call function without third parameter and the default is 10 if we not assign it.
// part 9 type aliases 
// type StringOrNum = string | number;
// type objWN = {name:string,uid:StringOrNum};
// const plus = (uid:StringOrNum,b:number) => {
//   console.log(uid,b);
// }
// plus(10,20);
// const minus = (a:number,b:number,c?:StringOrNum):number => {
//   return a-b;
// }
// minus(20,10);
// const sapa = (user: {name:string, uid:StringOrNum}) => {
//   console.log(`${user.name} says hello `);
// }
// sapa({name:'billy', uid:20});
// const sapalagi = (user: objWN) => {
//   console.log(`${user.name} says hello again`);
// }
// sapalagi({name:'test', uid:"20"});
// part 10 function signature
// ex 1
// let greet: (a:string,b:string) => void;
// greet = (name:string, greeting:string) => {
//   console.log(`${name} says ${greeting}`);
// }
// //ex 2
// let calc: (a:number,b:number,c:string) => number;
// calc = (numOne:number,numTwo:number,action:string) => {
//   if(action === 'add') {
//     return numOne + numTwo;
//   } else {
//     return numOne - numTwo;
//   }
// }
// //ex 3
// let logDetails: (obj: {name:string, age:number}) => void;
// type person = {name:string,age:number};
// logDetails = (pirate: person) => {
//   console.log(`${pirate.name} is ${pirate.age} years old`);
// }
