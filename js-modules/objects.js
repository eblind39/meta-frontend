// object literal - json
var storeManager = {};
storeManager.Movement = 4;
storeManager.SocialSkills = 50;
storeManager.StreetSmarts = 50;
storeManager.Health = 30;

console.log(storeManager);

var person = {
    name: 'John',
    age: 25,
}

person.lastname = 'Nada';

console.log(person.name + ' - ' + person.age.toString(10) + ' - ' + person.lastname);

// brackets notation - key/value Map
var house2 = {};
house2['rooms'] = 4;
house2['color'] = 'blue';
house2['priceUSD'] = 12345;
console.log(house2);

for(const key in house2) {
    console.log(`${key}: ${house2[key]}`);
}

class StoreManager {
    constructor(movement, socialSkills, streetSmarts, health) {
        this.movement = movement;
        this.socialSkills = socialSkills;
        this.streetSmarts = streetSmarts;
        this.health = health;
    }

    printSkills() {
        console.log(this.socialSkills);
    }

    *getAttributes() {
        yield this.movement;
        yield this.socialSkills;
        yield this.streetSmarts;
        yield this.health;
    }
}

StoreManager.prototype.newAttribute = 'New Attribute';
const myStoreManager = new StoreManager(4, 50, 50, 30);
myStoreManager.printSkills();
console.log([...myStoreManager.getAttributes()]);
console.log(myStoreManager.newAttribute);

console.log('----------------');

Object.prototype.movement = 4;
Object.prototype.socialSkills = 50;
Object.prototype.streetSmarts = 50;
Object.prototype.health = 30;
let myObj = new Object();
console.log(myObj.movement);

let arrOfKeys = ['speed', 'altitude', 'color'];
let arrOfVals = new Array(100, 200, 'red');
var drone = {};
arrOfKeys.forEach((key, index) => drone[key] = arrOfVals[index]);
console.log(drone);