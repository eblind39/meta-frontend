let currencyOne = 100;
let currencyTwo = 0;
let exchangeRate = 1.2;
const convertCurrency = (amount, rate) => amount * rate;
currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);

console.log('---------------')

const doubleIt = num => num * 2;
const objectFactory = val => { return { prop: val } };
console.log(objectFactory(20));
console.log(doubleIt(10).toString(10));
console.log(objectFactory(doubleIt(100)));

// calling and recursion
let counter = 3;
const example = () => {
    console.log('line one');
    console.log('line two');
    console.log('line three');
    console.log(counter);
    counter--;
    if (counter === 0) return;
    example();
}
example();

// scope - two way mirror glass
let num1 = 10;
const myFn = () => {
    let num2 = 20;
    console.log(num1, num2);
}
myFn();

// First-class functions
let useRandom = true;
const addTwoNumbers = (a, b) => a + b;
const myRandomNum = () => Math.floor((Math.random() * 10) + 1);
const specificNum = () => 42;
let getNumber = (useRandom ? myRandomNum : specificNum);
console.log(getNumber.toString())
console.log(addTwoNumbers(getNumber(), getNumber()));

// Higher-order functions
const addTwoNumsHOF = (getNumber1, getNumber2) => console.log((getNumber1() + getNumber2()).toString(10));
addTwoNumsHOF(myRandomNum, specificNum);

// Pure functions and side-effects
const addTwoNumsPFSE = (a, b) => console.log(a + b);
addTwoNumsPFSE(5, 6);