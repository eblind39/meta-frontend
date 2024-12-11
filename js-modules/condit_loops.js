let result = 50;

if (result > 40) {
    console.info('You passed the test');
} else {
    console.info('You did not pass the test')
}

// nested if
let place = 'first';

if (place == 'first') {
    console.log('Gold');
} else if (place == 'second') {
    console.log('Silver');
} else if (place == 'third') {
    console.log('Bronze');
} else {
    console.log('No medal');
}

// switch
place = 'second';

switch(place) {
    case 'first':
        console.log('Gold');
        break;
    case 'second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default:
        console.log('No medal');
}

// pattern matching
// let prize = 
var age = 10;
if (age >= 65) {
    console.log('You get your income from your pension');
} else if (age < 65 && age >= 18) {
    console.log('Each month you get a salary');
} else if (age < 18) {
    console.log('You get an allowance');
} else {
    console.log('The value of the age variable is not numerical');
}

var day = 'Sunday';
switch(day) {
    case 'Monday':
        console.log('Do work on ' + day);
        break;
    case 'Tuesday':
        console.log('Do work out on ' + day);
        break;
    case 'Wednesday':
        console.log('Do eat on ' + day);
        break;
    case 'Thursday':
        console.log('Do read on ' + day);
        break;
    case 'Friday':
        console.log('Do run on ' + day);
        break;
    case 'Saturday':
        console.log('Do code on ' + day);
        break;
    case 'Sunday':
        console.log('Do study on ' + day);
        break;
    default:
        console.log('There is no such day');
}

// loops
for (var i=0; i<3; i++) {
    console.log(i);
}
console.log('Go!');

for (var i=10; i>=1; i--) {
    console.log(i.toString(10));
}
console.log('Happy New Year!');

var counter=3;
while(counter > 0) {
    console.log(counter.toString(10));
    counter--;
}
console.log('End of while');

//exercise 01 - for
for (var i=1; i<=5; i++) {
    console.log(i.toString(10));
}
console.log('Counting completed!');

for (var i=5; i>=1; i--) {
    console.log(i.toString(10));
}
console.log('Countdown finished!');

var counter2 = 1;
while (counter2 <= 5) {
    console.log(counter2.toString(10));
    counter2++;
}
console.log('Counting completed!');

var counter3 = 5;
while(counter3 >= 1) {
    console.log(counter3.toString(10));
    counter3--;
}
console.log('Countdown finised!');

var anio = 2018;
while (anio <= 2022) {
    console.log(anio.toString(10));
    anio++;
}

// nested loops
var days = ['Friday', 'Monday', 'Saturday', 'Sunday', 'Thursday', 'Tuesday', 'Wednesday'];
for (var week = 1; week <= 2; week++) {
    for (var day = 1; day <= 7; day++) {
        console.log('Week ' + week.toString(10) + ' - Day ' + days[day - 1].toString(10));
    }
    console.log('--------------');
}

// nested loop - multiply table
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum.toString(10) + ' times ' + secondNum.toString(10) + ' equals ' + (firstNum * secondNum).toString(10));
    }
}

console.log('--------------');

for (var firstNum = 100; firstNum > 10; firstNum = firstNum - 10) {
    for (var secondNum = 10; secondNum > 4; secondNum = secondNum - 5) {
        console.log(firstNum.toString(10) + ' divided by ' + secondNum.toString(10) + ' equals ' + (firstNum / secondNum).toString(10));
    }
}

// run in the browser's js conso;e
var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

// exercise 02 - js
for (var i=1; i<=10; i++) {
    if (i === 1) {
        console.log('Gold medal');
    } else if (i === 2) {
        console.log('Silver medal');
    } else if (i === 3) {
        console.log('Bronze medal');
    } else {
        console.log(i.toString(10));
    }
}

console.log('--------------');

// exercise 03 - js
for (var i=1; i<=10; i++) {
    switch (i) {
        case 1:
            console.log('Gold medal');
            break;
        case 2:
            console.log('Silver medal');
            break;
        case 3:
            console.log('Bronze medal');
            break;
        default:
            console.log(i.toString(10));
    }
}