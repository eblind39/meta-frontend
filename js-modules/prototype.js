var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true,
}

var eagle1 = Object.create(bird);
console.log('eagle1:', eagle1);
console.log('eagle1 has Wings:', eagle1.hasWings);
console.log('eagle1 can Fly:', eagle1.canFly);
console.log('eagle1 has Feathers:', eagle1.hasFeathers);

var eagle2 = Object.create(bird);
console.log('eagle2 has Wings:', eagle2.hasWings);

var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log('penguin1:', penguin1);
console.log('penguin1 has Feathers:', penguin1.hasFeathers);
console.log('penguin1 can Fly:', penguin1.canFly);

console.log('eagle1 has Feathers:', eagle1.hasFeathers);

// classes instead of prototype
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }

    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }

    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }

    getSelf() {
        console.log('Self:', this);
    }

    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log('Train prototype:', proto);
    }
}

Train.prototype.printClassName = function() {
    console.log('Class name:', 'Train')
}

let myFirstTrain = new Train('red', false);
let mySecondTrain = new Train('blue', false);
let myThirdTrain = new Train('black', false);
console.log(myFirstTrain);
console.log(mySecondTrain);
console.log(myThirdTrain);
myFirstTrain.toggleLights();
myFirstTrain.lightsStatus();
myFirstTrain.getSelf();
myFirstTrain.getPrototype();
myFirstTrain.printClassName();

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }

    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }

    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

let train5 = new Train('blue', false);
let highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
train5.toggleLights();
train5.lightsStatus();
train5.getPrototype();
highSpeed1.getPrototype();
console.log(HighSpeedTrain.prototype.__proto__);

class StationaryBike {
    constructor(position, gears) {
        this.position = position;
        this.gears = gears;
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position;
        this.modes = modes;
    }
}

class Gym {
    constructor(openHrs, stationeryBikePos, treadmillPos) {
        this.openHrs = openHrs;
        this.stationeryBike = new StationaryBike(stationeryBikePos, 8);
        this.treadmill = new Treadmill(treadmillPos, 5);
    }
}

let boxingGym = new Gym('7-22', 'right corner', 'left corner');

console.log(boxingGym.openHrs);
console.log(boxingGym.stationeryBike);
console.log(boxingGym.treadmill);

// ES6 default parameters
function withDefaultParams(number = 10) {
    if (isNaN(number)) {
        console.log('Invalid input, a number is required.');
        return;
    }
    console.log('Result:', number * number);
}

withDefaultParams();
withDefaultParams(5);
withDefaultParams('NaN');

class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = 'Result:', bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }

    calculate() {
        if (this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return 'The value of bool1 is incorrect';
    }
}

let betterWDP = new WithDefaultParams();
betterWDP.calculate();