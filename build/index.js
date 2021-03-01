"use strict";
console.log('Hello TS');
var num1 = 5;
var num2 = 20;
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(num1, num2));
var dog = {
    name: 'Scully',
    desc: {
        breed: 'corgi',
        color: 'red'
    },
    age: 6,
    good: true
};
if (dog.desc) {
    dog.desc.breed = 'demon';
}
console.log(dog);
