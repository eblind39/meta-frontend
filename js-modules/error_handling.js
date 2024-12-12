const addNums = (a, b) => {
    return a + b;
}

console.log(addNums(5, 3));
console.log('Still running');

// console.log(c + d);
// console.log('This line never executes');

// throw new ReferenceError();

try {
    console.log(a + b);
} catch(err) {
    console.log('There was an error');
    console.log('The error was saved in the error log');
}

console.log('My program does not stop');

// type errors:
// ReferenceError SyntaxError TypeError RangeError 
// AggregateError Error InternalError URIError

console.log((10).toString(2));
console.log((10).toString(8));
console.log((10).toString(16));
// RangeError - (10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36
// TypeError - "hello".pop() // Uncaught TypeError: "hello".pop is not a function
// SyntaxError - var a "there's" // Uncaught SyntaxError: Unexpected string
// ReferenceError - console.log(username); // Uncaught ReferenceError: username is not defined

var letters = 'abc';
console.log(letters.match(/a/));
console.log(letters.match(/d/));

var noise;
if (typeof noise === 'undefined') {
    console.log(noise, 'is undefined');
}

console.log(noise);
var game = {
    score: 1000,
}

console.log(game.stage);

// exercise 01 - module 02
function addTwoNums(a, b) {
    try {
        if (typeof a != 'number') {
            throw new TypeError('the first argument is not a number')
        } else  if (typeof b != 'number') {
            throw new TypeError('the second argument is not a number')
        } else {
            console.log(a + b);
        }
    } catch (err) {
        console.log('Error!', err);
    }
}

addTwoNums(5, '5');
console.log('It still works');

// Defensive programming
function letterFinder(word, match) {
    var condition1 = typeof(word) === 'string' && word.length >= 2;
    var condition2 = typeof(match) === 'string' && match.length == 1;

    if (!(condition1 && condition2)) {
        console.warn('Please pass correct arguments to the function.');
        return;
    }

    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder(55, 2);
letterFinder('cat', 'a');
let result = null;
console.log(result)

var x;
if(x === null) {
  console.log("null");
} else if(x === undefined) {
  console.log("undefined");
} else {
  console.log("ok");
}


// throw new Error();
// console.log("Hello");


try {
    throw new Error();
    console.log('Hello');
} catch(err) {
    console.log('Goodbye');
}

try {
    Number(5).toPrecision(300)
} catch(e) {
    console.log("There was an error")
}