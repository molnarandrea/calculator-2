var readlineSync = require('readline-sync');

var op1 = Number(readlineSync.question('Please enter a number '));
var op2 = Number(readlineSync.question('Please enter another number '));
var operator = readlineSync.question('Please enter an operator (+, -, *, /) ');

var operators = {'+': function(x, y) { return x + y; },
                 '-': function(x, y) { return x - y; },
                 '*': function(x, y) { return x * y; },
                 '/': function(x, y) { return x / y; }};

if (operators[operator] !== undefined)
    console.log('Your answer is: ' + operators[operator](op1, op2) + '!');
else
    console.log('Invalid operator. Please try again.');
