console.log('%cHello World!', "color: blue; font-size: 18px;");

console.log("Hello " + "there, " + "World")

// This is a comment

/*
This
is
a
multi-line
comment
*/

/* This is a multi-line comment in a single line */

let greeting = "Hello";
let person = "Jhon";
console.info(greeting, person);

greeting = 'Hi';
person = 'Jim';
console.log(greeting, person);

// JS module01 - lab01
var petDog = 'Rex';
var petCat = 'Pepper';
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is: ", petDog);
console.log("My pet cat's name is: ", petCat);
var catSound = 'purr';
var dogSound = 'woof';
console.log(petDog + ' says ' + dogSound);
console.log(petCat + ' says ' + catSound);
catSound = 'meow';
console.log(petCat + ' now says ' + catSound)

var score = 8;
console.log('Mid-level skills: ' + (score > 0 && score < 10));

var timeRemaining  = 0;
var energy = 10;
console.log("Game over: " + (timeRemaining == 0 || energy == 0));

let num1 = 2;
let num2 = 5;
let test1 = num1 % 2;
let test2 = num2 % 2;
let result1 = (test1 === 0);
let result2 = (test2 === 0);
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);
console.log(5 + 10);

let now = "Now in ";
let three = 3;
let d = "D!";
console.log(now + three + d);

let counter = 0;
counter += 5;
counter += 3;
console.log(counter);