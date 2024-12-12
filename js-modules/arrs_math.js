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

console.log('name:'.split('').pop());

let greet = 'Hello, ';
let place = 'World';
console.log(place.charAt(0), place[0]);
console.log("Wo".concat('rl'.concat('d')));
console.log('ho-ho-ho'.indexOf('h'));
console.log('ho-ho-ho'.indexOf('o'));
console.log('ho-ho-ho'.indexOf('-'));
console.log('ho-ho-ho'.lastIndexOf('-'));
console.log('ho-ho-ho'.lastIndexOf('o'));
console.log('ho-ho-ho'.lastIndexOf('h'));
console.log(...place.split(''));
console.log('ho-ho-ho'.split('-'));

// array literal syntax: []
let clothes = [];
clothes.push('shoes');
clothes.push('tie');
clothes.push('t-shirt');
clothes.push('pants');
clothes.push('bracelet');
console.log(clothes.pop());
clothes.push('socks');
console.log(clothes[2]);

// object literal syntax: {}
let favCar = {};
favCar.color = 'lightgray';
favCar.covertible = true;
favCar.mileage = 98765;
console.log(favCar);

Object.prototype.turnOff = function() {
    console.log('engine stops');
}

favCar.turnKey = function() {
    console.log('engine running', this);
}

delete favCar.mileage;
console.log('mileage deleted', favCar);

favCar.turnKey();
favCar.turnOff();

console.log(typeof []);
console.log(typeof 'what is this?');
console.log(typeof 3.14);
console.log(typeof 10);
console.log(typeof true);
console.log(typeof false);
console.log(typeof (1 < 2));
console.log(typeof [1, 2, 3]);
console.log(typeof {myProp: 'myVal'});
console.log(typeof function() { console.log('myFn') });