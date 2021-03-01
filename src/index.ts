console.log('Hello TS')

let num1 = 5
let num2 = 20

const addNumbers = (number1: number, number2: number) => {
    return number1 + number2
}

console.log(addNumbers(num1, num2))

interface iDog {
    name: string,
    age: number | undefined,   //can be a number or undefined
    good?: true                //made optional
    desc?: {
        breed: string,
        color: string,
}}

let dog: iDog = {
    name: 'Scully',
    desc: {
        breed: 'corgi',
        color: 'red'
    },
    age: 6,
    good: true
}

if (dog.desc){
dog.desc.breed = 'demon'
}

console.log(dog)