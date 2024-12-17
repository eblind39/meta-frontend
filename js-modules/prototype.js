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
}