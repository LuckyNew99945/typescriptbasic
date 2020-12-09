"use strict";
// // console.log('hello world from typescript');
var plus = function (uid, b) {
    console.log(uid, b);
};
plus(10, 20);
var minus = function (a, b, c) {
    return a - b;
};
minus(20, 10);
var sapa = function (user) {
    console.log(user.name + " says hello ");
};
sapa({ name: 'billy', uid: 20 });
var sapalagi = function (user) {
    console.log(user.name + " says hello again");
};
sapalagi({ name: 'test', uid: "20" });
