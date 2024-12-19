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