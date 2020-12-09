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
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(1);
var numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push(false);
// numbers[0] = 'test';
// let mixed = ['ken', 4,'test', 8, 9];
// mixed.push('test');
// mixed.push(10);
//objects
var pirate = {
    name: 'luffy',
    color: 'white',
    age: 21
};
pirate.age = 22;
pirate.name = 'luffy2';
// pirate.age = '30';
// ninja.skills = ['punch', 'kick'];
pirate = {
    name: 'zoro',
    color: 'black',
    age: 23
};
// part 5 explicit types
var nama;
var umur;
var isFemale;
//arrays
var pirates = [];
pirates = ['luffy', 'zoro'];
pirates.push('sanji');
//union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(23);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
//objects
var pirateOne;
pirateOne = { name: 'sanji', age: 23 };
pirateOne = [1, 2];
var pirateTwo;
pirateTwo = { name: 'usop', age: 25 };
