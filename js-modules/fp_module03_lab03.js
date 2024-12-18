// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (let product of dairy) {
        console.log(product);
    }
}

logDairy();
// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (let key of Object.keys(bird)) {
        console.log(key + ': ', bird[key]);
    }
}

birdCan();

// Task 3
const animal2 = {
    canJump: true
};

const bird2 = Object.create(animal2);
bird2.canFly = true;
bird2.hasFeathers = true;

function animalCan() {
    for (let key in bird2) {
        console.log(key + ': ', bird2[key]);
    }
}

animalCan();