console.log('Data Structures:');
console.log('>>> with delegate fn:');
const fruits = ['kiwi', 'mango', 'apple', 'pear', 'banana'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

console.log('>>> with inner fn:');
fruits.forEach((fruit, index) => console.log(`${index}. ${fruit}`));

console.log('>>> filter');
const numbers = [0, 10, 20, 30, 40, 50];
const filtered = numbers.filter(number => number > 20);
console.log(filtered);

function *arrVals() {
    yield 0;
    yield 10;
    yield 20;
    yield 30;
    yield 40;
    yield 50;
}

const mappedVals = [...arrVals()].map(num => num / 10);
console.log(mappedVals);

// convert object to array
const result = [];
const drone = {
    speed: 100,
    color: 'yellow',
}
const droneKeys = Object.keys(drone);
droneKeys.forEach(key => result.push(`${key}: ${drone[key]}`));
console.log(result);

// maps - items can be repeated
const bestBoxes = new Map();
bestBoxes.set(1, 'The Champion');
bestBoxes.set(2, 'The Runner-Up');
bestBoxes.set(3, 'The Third Place');
console.log(bestBoxes);
console.log(bestBoxes.size, bestBoxes.get(1));

// set - collection of unique values
const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

// Other advanced data structures:
// Queues
// Linked lists (singly-linked and doubly-linked)
// Trees
// Graphs

console.log('>>> spread');
let myArr = [1, 2, 3, 4, 5];
console.log([...myArr]);

console.log('>>> rest');
const addTaxToPrices = (taxRate, ...itemsBought) => itemsBought.map(item => item * taxRate);
console.log(addTaxToPrices(1.2, 100, 200, 300, 46, 35, 89, 79));

console.log('>>> join arrays using rest');
const fruits1 = ['apple', 'pear', 'plum'];
const berries = ['strawberry', 'blueberry', 'blackberry'];
const fruitsAndBerries = [...fruits1, ...berries];
console.log(fruitsAndBerries);

console.log('>>> join objects');
const flying = { wings: 2};
const car = { wheels: 4 };
const flyingCar = {...car, ...flying};
console.log(flyingCar);

console.log('>>> new items to array');
let veggies = ['carrot', 'cucumber', 'tomato'];
veggies = [...veggies, 'lettuce', 'onion', 'pepper'];
console.log(veggies);

console.log('>>> string to array');
const greeting = 'Hello';
const arrayOfChars = [...greeting];
console.log(arrayOfChars);

console.log('>>> copy an object into a completely separate object');
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 201
console.log(car1.speed, car2.speed)

for (let [key, value] of Object.entries(car1)) {
    console.log(`${key}: ${value}`);
}

console.log('>>> copy an array into a completely separate array');
const fruits21 = ['apples', 'pears'];
const fruits22 = [...fruits1];
fruits1.pop();
console.log(fruits21, "not", fruits22);

const meal = ["soup", "steak", "ice cream"]
let [starter, hard] = meal;
console.log(starter, hard);


let food = "Chocolate";
console.log(`My favourite food is ${food}`);


let obj = {
    key: 1,
    value: 4
};
let output = { ...obj };
output.value -= obj.key;
console.log(output.value);