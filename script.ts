// console.log('hello world from typescript');

// const inputs = document.querySelectorAll('input');

// console.log(inputs);

// inputs.forEach(input => {
//   console.log(input);
// })

// let character = 'billy';
// let age = 21;
// let isMale = true;

// const circ = (diameter:number) => {
//   return diameter * Math.PI
// }

// console.log(circ(7));

// part 4

let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');
// names.push(1);

let numbers = [10,20,30,40];

numbers.push(25);
// numbers.push(false);
// numbers[0] = 'test';

// let mixed = ['ken', 4,'test', 8, 9];

// mixed.push('test');
// mixed.push(10);

//objects

let pirate = {
  name : 'luffy',
  color: 'white',
  age: 21
}

pirate.age = 22;
pirate.name = 'luffy2';
// pirate.age = '30';
// ninja.skills = ['punch', 'kick'];

pirate = {
  name: 'zoro',
  color: 'black',
  age: 23,
  // skills : ['slash', 'cut']
}

// part 5 explicit types

let nama:string;
let umur:number;
let isFemale:boolean;

//arrays

let pirates:string[] = [];

pirates = ['luffy', 'zoro'];

pirates.push('sanji');

//union types

let mixed:(string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(23);
mixed.push(false);
console.log(mixed);

let uid:string|number;
uid = '123';
uid = 123;

//objects

let pirateOne:object;
pirateOne = {name: 'sanji', age:23};
pirateOne = [1,2];
let pirateTwo:{
  name:string,
  age:number,
};

pirateTwo = {name: 'usop', age:25};

//part 6 dnyamic(any) types (think twice before use it)

let test:any = 25;
test = 'test';

let mixed2:any[] = [];

mixed2.push(6);
mixed2.push('test');
mixed2.push(true);

let pirateThree:{name:any,age:any};

pirateThree = {
  name: 'nami',
  age: 20,
}

console.log(pirateThree);

pirateThree = {
  name: 20,
  age: 'nami'
}

console.log(pirateThree);



