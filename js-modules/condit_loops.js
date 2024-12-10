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