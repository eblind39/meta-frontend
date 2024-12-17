console.log('json:')

var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('Total price: ', calculation);
    }
}
purchase1.totalPrice();

// using _this_ keyword
var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total price: ', calculation);
    }
}
purchase2.totalPrice();

// functional programming
var shoes = 100;
var stateTax = 1.2;
const totalPrice = (shoes, tax) => shoes * tax;
var toPay = totalPrice(shoes, stateTax);
console.log('Purchase-Fns: ', toPay.toString(10));

// using prototype
function FnPurchase(itemPrice, tax) {
    this.itemPrice = itemPrice;
    this.tax = tax;
    if (typeof FnPurchase.__initialized === 'undefined') {
        FnPurchase.prototype.totalPrice = function() { 
            return this.itemPrice * this.tax;
        }
        FnPurchase.__initialized = true;
    }
}
let myFnPurchase = new FnPurchase(100, 1.2);
console.log('FnPurchase-proptotype: ', myFnPurchase.totalPrice().toString(10));

// classes
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    turboOn() {
        console.log('Turbo is on!');
    }

    *getAttributes() {
        yield this.color;
        yield this.speed;
    }
}

let myCar = new Car('blue', 120);
myCar.turboOn();

let myCarObj = Object.create(Car);
myCarObj.color = 'lightgray';
myCarObj.speed = 70;
console.log('Object.create: ', myCarObj);

class Purchase {
    constructor(itemPrice, tax) {
        this.itemPrice = itemPrice;
        this.tax = tax;
    }

    totalPrice() { 
        return this.itemPrice * this.tax;
    }
}

let myPurchase = new Purchase(100, 1.2);
console.log('Purchase-class: ', myPurchase.totalPrice());

// inheritance
class Animal {
    constructor(specie) {
        this.specie = specie;
    }
}

class Bird extends Animal {
    constructor(sound) {
        this.sound = sound;
    }
}

class Eagle extends Bird {
    constructor(type) {
        this.type = type;
    }
}

// polymorphism
const bicycle = {
    bell: function() {
        return 'Ring, ring! watch out, please!'
    }
}

const door = {
    bell: function() {
        return 'Ring, ring! come here, please!'
    }
}

console.log(bicycle.bell());
console.log(door.bell());

// truly polymorphism
function ringTheBell(thing) {
    console.log(thing.bell());
}

ringTheBell(bicycle);
ringTheBell(door);

console.log('abc'.concat('def'));
console.log('abc' + 'def');
console.log(['abc'].concat(['def']));
console.log(['abc'] + ['def']);

// polymorphism with classes
class Rodent {
    useTheet() {
        console.log('Biting!');
    }
}

class Mouse extends Rodent {
    useTheet() {
        super.useTheet();
        console.log('Fast moving!');
    }
}

class Rabbit extends Rodent {
    useTheet() {
        super.useTheet();
        console.log('Slow moving');
    }
}

let mickey = new Mouse();
let bugs = new Rabbit();
mickey.useTheet();
bugs.useTheet();

console.log((new Date()).toString());

// constructors
function IceCream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new IceCream('kiwi');
let appleIcecream = new IceCream('apple');
console.log(kiwiIcecream);
kiwiIcecream.meltIt();

console.log(appleIcecream);
appleIcecream.meltIt();

// pre-built
let apple = new String('apple');
let pear = 'pear';
console.log(apple, pear);

let myRegExpD = new RegExp(/d/);
console.log('abcd'.match(myRegExpD));
console.log('abcd'.match(/a/));

let myErr = new Error('My error msg');
console.log(myErr.message);

let myMap = new Map();
myMap.set('Key1', 'Val1');
myMap.set('Key2', 'Val2');
myMap.set('Key3', 'Val3');
myMap.forEach((key, value) => console.log(key, value));

// let myPromise = new Promise();

let mySet = new Set();
mySet.add('Value1');
mySet.add('Value2');
mySet.add('Value3');
mySet.forEach(value => console.log(value));

let myWeakSet = new WeakSet();
let myStrObj = new String('WSet1');
myWeakSet.add(myStrObj);
myWeakSet.add(new String('WSet2'));
myWeakSet.add(new String('WSet3'));
console.log('myWeakSet.has(myStrObj)', myWeakSet.has(myStrObj));

let myWeakMap = new WeakMap();
myWeakMap.set(myStrObj, 'Cad1');
console.log('myWeakMap.has(myStrObj)', myWeakMap.has(myStrObj));
myWeakMap.delete(myStrObj);
console.log('myWeakMap.has(myStrObj)', myWeakMap.has(myStrObj));