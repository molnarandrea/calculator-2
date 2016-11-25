var readlineSync = require('readline-sync');
var colors = require('colors');
var calculator = require('./calculator');

var x = Number(readlineSync.question('Please enter a number '.green));
var y = Number(readlineSync.question('Please enter another number '.green));
var op = readlineSync.question('Please enter an operator (+, -, *, /) '.blue);

var opFunctions = {'+': calculator.add,
                   '-': calculator.subtract,
                   '*': calculator.multiply,
                   '/': calculator.divide };

if (opFunctions[op] !== undefined)
    console.log(colors.yellow('Your answer is: ' + opFunctions[op](x, y) + '!'));
else
    console.log('Invalid operator. Please try again.'.red);
