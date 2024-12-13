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
console.log(toPay.toString(10));

// using prototype
function FnPurchase() {

}

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
console.log(myPurchase.totalPrice());