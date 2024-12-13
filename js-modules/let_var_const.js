// var
console.log('user', user);
console.log('fname', fname);

var fname = 'Mary';
var fname = 'Joanna';
var fname = 'Mark';

console.log('fname', fname);

var user; // hoisting

// let
try {
    console.log(letuser);
} catch(error) {
    console.log('variable `letuser` is not yet declared!')
}

let letuser;

try {
    let letuser = "Anna";
} catch(error) {
    console.log('`letuser` can`t be redeclared')
}

// const
try {
    console.log(lname);
    const lname = 'Stallone';
    lname = 'Swartzenegger';
} catch(error) {
    console.log('lname must be initialized or must be declared first or cant be reassigned!', error);
}