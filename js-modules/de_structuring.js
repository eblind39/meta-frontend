let { PI } = Math;
console.log(PI);

// swap var values
let var1 = 1;
let var2 = 2;
console.log(var1, var2);
[var1, var2] = [var2, var1];
console.log(var1, var2);

// swap object values
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
console.log(obj1, obj2);
[obj1, obj2] = [obj2, obj1];
console.log(obj1, obj2);

// iterate over key values in object
const car = {
    speed: 100,
    color: 'blue',
}

for(key in car) {
    console.log(key + ':', car[key]);
}

const colors = ['red', 'orange', 'yellow'];
for(let color of colors) {
    console.log(color);
}

const countries = new Array('USA', 'Canada', 'Mexico');

// Object.keys(), Object.values(), and Object.entries()
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));
console.log(Object.entries(colors));
console.log(Object.entries(countries));

// iterate object
const clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn',
}

console.log('>>> Iterating over object by using .entries:');
for (let [key, value] of Object.entries(clothingItem)) {
    console.log('🌀', key + ':', value);
}

console.log('>>> Iterating over object by using .keys:');
for (let key of Object.keys(clothingItem)) {
    console.log('😊', key, clothingItem[key]);
}

const testBracketsDynamicAccess = () => {
    let dinamicKey = (Math.random() > 0.5 ? 'speed' : 'color');
    let drone = {
        speed: 100,
        color: 'orange',
    }
    console.log(drone[dinamicKey]);
}

testBracketsDynamicAccess();

// template literals
let str1 = 'Hello';
let str2 = 'World';
console.log(`${str1} ${str2}!`);
console.log(`Multi,
    Line
With
    Backticks!
    `);
console.log(`${1 + 1 + 1 + 1 + 1} stars! 🌟`);