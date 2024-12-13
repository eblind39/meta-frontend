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