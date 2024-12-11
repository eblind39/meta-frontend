const greeting = () => console.log('Hello World!');

greeting();
greeting();
greeting();

const addTwoNumbers = () => {
    let a = 10;
    let b = 20;
    let sum = a + b;
    console.log(sum.toString(10));
}

const addTwoNumbersParams = (a, b) => {
    let sum = a + b;
    console.log(sum.toString(10));
}

addTwoNumbers();
addTwoNumbersParams(10, 20);

let myArr = new Array('First', 'Second');
myArr.map(elem => console.log(elem));

let train1 = new Array('wheat', 'barley', 'potato', 'salt');
train1.forEach(element => console.log(element));

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
console.log(colors[2]);

const listArrayItems = arr => {
    console.log('-------------');
    if (!Array.isArray(arr)) {
        console.log('Please pass a valid array.');
        return;
    }

    for (let i=0; i<arr.length; i++) {
        console.log(i, arr[i]);
    }
}

listArrayItems(colors);
listArrayItems(5);

// exercise 01 - module 02
const letterFinder = (word, match) => {
    console.log('-------------');
    let myArr = word.split('');
    for (let i=0; i<word.length; i++) {
        if (word[i] == match && myArr[i] == match) {
            console.log('Found the ', match, ' at position ', i)
        } else {
            console.log('---No match found at position ', i)
        }
    }
}

letterFinder('test', 't');
letterFinder('amor a roma', 'a');