var fruits = new Array; // or = []
fruits.push('apple');
fruits.push('pear');

Array.prototype.printElems = function() {
    console.log('----------------');
    this.forEach((elem, index) => console.log((index + 1).toString(10), elem));
}

let lastElem = fruits.pop();
console.log(lastElem, fruits);
fruits.printElems();

const arrayBuilder = (one, two, three) => {
    let arr = new Array();
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

let simpleArr = arrayBuilder('one', 'two', 'three');
simpleArr.printElems();

// Math
console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.ceil(5.51));
console.log(Math.floor(5.49));
console.log(Math.round(5.49));
console.log(Math.trunc(5.23));
console.log(Math.pow(4, 2), 4 ** 2);
console.log(Math.sqrt(16));
console.log(Math.cbrt(8));
console.log(Math.abs(-10));
console.log(Math.min(9, 8, 7));
console.log(Math.min(...[9, 8, 7]));
console.log(Math.max(9, 8, 7));

let zerotoone = Math.random();
//from 5 to 9
let randomFiveToNine = (5 + (9 - 5) * zerotoone);
console.log('randomFiveToNine: ', randomFiveToNine);

console.log(Math.ceil(2.49));